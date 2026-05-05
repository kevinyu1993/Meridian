# Meridian — Tech Architecture Decision Doc

**Status:** Decided (v1, MVP)
**Date:** 2026-05-04
**Decision owner:** Founder
**Scope:** Stack and infra choices for MVP launch to solo private-practice clinicians

---

## Constraints driving every decision

1. **HIPAA compliance is non-negotiable.** Every vendor that touches Protected Health Information (PHI) must sign a Business Associate Agreement (BAA). No exceptions, no "we'll deal with it later." A single non-BAA vendor in the data path is a regulatory failure.
2. **Solo founder velocity.** No DevOps team. Boring, managed services beat clever self-hosted ones.
3. **Push notifications are core to the thesis.** The whole product depends on clients re-engaging between sessions. iOS web push is unreliable and high-friction; we need real native push.
4. **Real-time-ish dashboard.** Therapist sees client homework as it lands, not on a 5-minute refresh.
5. **EHR integration from day one.** Healthie has a real GraphQL API; SimplePractice does not. Architecture must accommodate both push-based (webhook) and pull-based (polling) sync patterns.
6. **Founder will market through her own audience.** Launch traffic will be lumpy (Instagram/YouTube spikes). Infra must scale-to-zero on cost but burst on demand.

---

## Stack decisions

### Frontend (clinician dashboard) — **Next.js 15 (App Router)**

**Why:** Next.js is the default for serious B2B SaaS in 2026. App Router gives us streaming SSR (fast first-paint on the dashboard, which matters because clinicians load it between sessions). React Server Components let us push DB queries to the edge and keep the client bundle small.

**Hosting decision: AWS Amplify Hosting at MVP, Vercel Enterprise at scale.**
- **AWS Amplify Hosting** runs under the master AWS BAA — no separate signing required, no per-seat hosting tax. We get global CDN, automatic SSL, preview environments, and ~$20–200/mo at MVP traffic.
- **Why not Vercel Pro:** Vercel signs BAAs only on the Enterprise tier (~$3,500+/mo committed). Using Pro for PHI is a violation. Skipping Vercel entirely at MVP saves the cost; revisit at $20k MRR when the DX gain pays for itself.
- **Why not raw ECS / EKS:** Operating Kubernetes for a solo founder is malpractice. Amplify gives us 90% of the platform without the 90% of the toil.

**Rejected:**
- **Remix** — smaller ecosystem, fewer hires, no clear advantage for this workload.
- **SvelteKit** — same reason, plus less mature server-component story.
- **Plain React SPA** — gives up SEO on the marketing site and SSR on the dashboard for nothing.

### Mobile (client app) — **React Native via Expo (EAS)**

**Why native, not PWA:** Push notification reliability is the #1 product risk. iOS PWA push exists (Safari 16.4+) but requires the user to "Add to Home Screen" first, which is a brutal install funnel. Native push via APNs is the only realistic path for an engagement-driven product.

**Why Expo specifically:**
- EAS Build + EAS Update cuts native release pain by ~80% vs. bare React Native.
- OTA updates let us ship JS-only fixes without an App Store review (huge for solo founder).
- Single codebase, iOS + Android.

**HIPAA caveat:** Expo / EAS does not currently sign BAAs for the build service itself. The mitigation is straightforward — **no PHI is ever sent to EAS Build or EAS Update.** Build artifacts contain code only; the running app talks to Supabase (BAA-covered) for all PHI. This pattern is standard and accepted. Document the data-flow diagram for the audit trail.

**Push notification service:** **Expo Push** (free, sits on top of APNs/FCM) for MVP. Push payloads will contain only generic copy (e.g., "Your daily check-in is ready") — never client names, never exercise content. Migrate to direct APNs/FCM if we ever need richer push.

**Rejected:**
- **Native iOS/Android (Swift/Kotlin)** — 2x build time, doubled maintenance, no defensible quality difference for this product.
- **Flutter** — fine framework, smaller talent pool, weaker code-share story with the React dashboard.
- **PWA-only** — fails the push-notification test.

### Backend / Database — **Supabase (Team plan + HIPAA add-on)**

**Why:** Supabase gives us Postgres, auth, storage, realtime, and row-level security in one BAA-covered bundle. For a solo founder, this collapses ~5 vendor relationships into one and eliminates an entire chunk of "wire auth to DB to storage" plumbing.

**HIPAA specifics:** Supabase requires the **Team plan + HIPAA add-on**. Verify current pricing at signup; budget ~$1,200/mo combined as the baseline.

**Postgres-first means:**
- Real foreign keys, real transactions, real reporting queries (PHQ-9 trends across cohorts work natively).
- Row-Level Security (RLS) policies enforce client/clinician data isolation at the database layer — defense in depth beyond app-layer auth.
- Easy migration path off Supabase if we ever outgrow it (it's just Postgres).

**Rejected:**
- **Firebase / Firestore** — Google signs a BAA, but document-store data model is a poor fit for clinical reporting. We'd fight the DB on every dashboard query.
- **AWS RDS + Cognito + Lambda hand-rolled** — more flexible, more powerful, ~3 months of solo-founder time we don't have. Revisit at $1M ARR.
- **PlanetScale / Neon** — neither offers a BAA on standard tiers as of writing. Disqualified.
- **MongoDB Atlas** — has a BAA, but same data-model objection as Firebase.

### Authentication — **Supabase Auth**

Built into the above. Enforce:
- **2FA mandatory for clinician accounts** (TOTP via authenticator app; SMS as fallback only — SMS 2FA is HIPAA-acceptable but weaker).
- **Magic-link login for clients** by default (lower friction; no password-reset flows to build) with optional password.
- **Session timeout: 30 min idle for clinicians, 7 days for clients.**
- **Audit log** every authentication event into a separate `auth_audit` table.
- **No SSO at MVP.** Group practices can wait; private-practice solos don't need SAML.

### Realtime — **Supabase Realtime (Postgres logical replication)**

When a client submits an exercise, the clinician dashboard updates without a refresh. Supabase Realtime handles this natively. No Socket.io, no Pusher, no separate infra.

### Notifications

| Channel | Vendor | BAA? | Notes |
|---|---|---|---|
| Push (mobile) | Expo Push | Generic-copy-only pattern; no PHI in payload | Migrate to direct APNs/FCM only if needed |
| Email (transactional) | **Postmark** | Yes (free, request via support) | Best-in-class deliverability |
| Email (marketing) | **Customer.io** | Yes (Premium tier) | For onboarding sequences; defer to Phase 2 |
| SMS | **Twilio** | Yes (HIPAA-eligible products only) | For appointment reminders, optional |

**Rejected for transactional email:** Resend (no BAA as of 2026), SendGrid (BAA exists but quality has slipped), Mailgun (BAA available, but Postmark wins on deliverability).

### File storage — **Supabase Storage**

Covered under the Supabase BAA. Used for: optional photo attachments to journal entries, exported PDFs of client progress reports.

### Analytics — **PostHog Cloud (HIPAA add-on)**

PostHog is the only mature product-analytics tool with a real BAA at sane pricing. We get session replay, funnels, feature flags, and experiments in one place.

**Critical rule:** No PHI in event properties. Events track *behavior* (`exercise_completed`, `streak_extended`), never content. Exercise responses themselves never leave the database. Session replay is **disabled on screens that show PHI** — only the marketing site and onboarding screens.

**Rejected:**
- **Mixpanel** — BAA exists but pricing is brutal at scale.
- **Amplitude** — same.
- **Google Analytics** — does not sign BAAs for products handling PHI. Use only on the marketing site (`meridian.com` root, pre-auth pages), never in the app.

### Error monitoring — **Sentry (Business plan)**

BAA available on Business tier. Configure data scrubbing rules to strip any field that could carry PHI before events leave the app (URL paths with client IDs, request bodies, etc.). Sentry has built-in sensitive-data filtering — turn it on aggressively.

### Logging — **Axiom** (preferred) or **Better Stack (Logtail)**

Both sign BAAs. Axiom is cheaper at scale; Better Stack has nicer UX. Pick one at MVP, don't agonize. **Never log PHI.** Use opaque IDs (UUIDs) in logs and join to PHI only at query time inside the DB.

### Payments — **Stripe**

No BAA needed — payment data is not PHI under HIPAA. Use Stripe Billing for subscriptions, Stripe Customer Portal for self-serve plan changes, Stripe Tax for sales-tax compliance (it exists in some states for SaaS).

### Customer support — **Plain** (preferred) or **Intercom**

Plain signs a BAA, has a clean Slack-native workflow, and is priced for early-stage. Intercom is the safer/more-featured choice if budget allows. **Support agents see only opaque client IDs by default**; PHI is revealed only via an explicit "view PHI" action that's logged for audit.

### Compliance tooling — **Vanta**

Continuous SOC 2 + HIPAA monitoring. Roughly $7-15k/yr depending on tier. Non-negotiable once we have any group-practice prospect — they will ask for SOC 2 in the first sales call. Start the audit process at MVP, not after.

### CI/CD — **GitHub Actions**

No PHI ever touches CI. Standard test + build + deploy pipeline. No BAA needed (no PHI exposure). All secrets in GitHub Secrets, rotated quarterly.

### DNS / CDN / WAF — **Cloudflare**

Cloudflare signs BAAs only on Enterprise. For MVP, use Cloudflare's free DNS (gray cloud, DNS-only) and let Amplify/CloudFront terminate TLS. Upgrade to Cloudflare Enterprise + WAF (orange cloud, proxied) only when traffic justifies it. Until then, no PHI flows through Cloudflare's proxy layer, so no BAA is needed.

---

## What syncs with EHRs (and how)

### Healthie (priority integration)
- **Method:** GraphQL API, OAuth 2.0
- **Direction:** Bidirectional
- **Synced fields (read from Healthie):** client name, DOB, contact info, appointment schedule, treatment modality
- **Synced fields (write to Healthie):** homework completion summary as a progress-note attachment, outcome score trends (PHQ-9, GAD-7) as structured data
- **Cadence:** Webhook-driven for appointments; nightly batch for outcome scores.
- **Architecture:** Build an `ehr_sync` worker (Supabase Edge Function or AWS Lambda) that handles webhook ingest and outbound writes. Idempotent by design — re-running a sync should never duplicate data.

### SimplePractice (no public API)
- **Method:** Zapier integration as MVP workaround
- **Direction:** One-way pull (SimplePractice → Meridian) for client roster + appointments
- **No write-back at MVP.** Clinician copy-pastes summary if they want it in the EHR.
- **Track:** SimplePractice has been "evaluating an API" for years. Stay on their waitlist; ship Zapier in the meantime.

### Others (TherapyNotes, TheraNest, Jane App, Kareo)
- **Phase 2.** Don't build until at least 5 clinicians on each platform have asked.

---

## Data model (sketch — full schema in `03-data-model.md` later)

Core entities:
- **Practice** — owns clinicians and clients (multi-tenant boundary; group-practice support comes free)
- **Clinician** — belongs to a Practice, has many Clients
- **Client** — belongs to a Practice and has a primary Clinician, has many Assignments and AssessmentResponses
- **Exercise** — template definitions, versioned (so changing a template doesn't mutate historical responses)
- **Assignment** — instance of an Exercise assigned to a Client by a Clinician, with due date and status
- **Response** — Client's filled-in data for an Assignment, immutable once submitted (clinical record requirement)
- **AssessmentResponse** — PHQ-9, GAD-7 scores; separate from Exercise responses for outcome reporting
- **AuthAudit** — every login/logout/2FA event for the audit trail

**Row-Level Security policies (sketch):**
- Clinicians can read/write only Clients within their Practice that they're assigned to (or co-assigned).
- Clients can read/write only their own data, plus read Exercise templates (public catalog).
- No cross-Practice data access at the DB layer, ever — enforced by RLS policy on Practice ID.

---

## Compliance posture (HIPAA → SOC 2 path)

**Day 1 (MVP launch):**
- BAAs signed with: Supabase, AWS, Postmark, Twilio, PostHog, Sentry, Plain, Axiom.
- Encryption at rest (Supabase default: AES-256) and in transit (TLS 1.2+).
- Access logging on all PHI tables (Postgres triggers → audit table).
- Data retention policy documented (default: retain client data 7 years post-discharge, per most state requirements; configurable per state).
- Breach response runbook drafted and tested.
- Privacy Policy + Terms + BAA template (for clinicians to sign as covered entities) drafted by a healthcare-specialized attorney. **Budget $5–10k for legal at launch.** This is not optional. Templates from clerky.com or similar are insufficient.

**Month 3–6:**
- Vanta onboarded.
- SOC 2 Type I audit kicked off.
- Annual penetration test scheduled (small healthcare-specialist firms run ~$10–20k).

**Month 12:**
- SOC 2 Type II report available for group-practice sales.

---

## Cost model (MVP, monthly)

| Line item | Estimate |
|---|---|
| Supabase Team + HIPAA add-on | ~$1,200 |
| AWS Amplify (hosting + bandwidth) | ~$50–200 |
| AWS Lambda + supporting services | ~$20 |
| Expo EAS (Production tier) | ~$100 |
| Postmark | ~$15 |
| Twilio (per-message budget) | ~$50 |
| PostHog HIPAA | ~$450 |
| Sentry Business | ~$80 |
| Axiom | ~$25 |
| Plain | ~$50 |
| Domain + Cloudflare DNS | ~$5 |
| **Subtotal infra** | **~$2,050/mo** |
| Vanta (annualized monthly) | ~$1,000 |
| Legal (one-time, amortized year 1) | ~$700 |
| **All-in run-rate** | **~$3,750/mo** |

**Translation to pricing:** at $99/clinician/month, break-even is ~38 clinicians. At $149/month, ~25 clinicians. See `02-pricing-strategy.md`.

---

## Open questions (resolve before week 2)

1. **Confirm Supabase HIPAA add-on current pricing** at signup — they update tiers frequently.
2. **Confirm Postmark BAA process** — it's free but has to be requested via support, not self-serve.
3. **Customer.io vs. building drip emails on Postmark** — defer Customer.io to Phase 2; Postmark + a few cron jobs covers MVP onboarding emails.
4. **Where do PHQ-9 / GAD-7 score thresholds for alerts live?** In a config table in Postgres, editable per-clinician (some want stricter thresholds), with sensible clinical defaults.
5. **State licensure boundary for clients.** A client in California whose therapist moves to Texas: does Meridian gate access by therapist licensure state? **Decision: yes, surface a warning to the clinician but don't block** — licensure compliance is the clinician's responsibility, not the platform's. Document this in Terms.

---

## Decisions explicitly deferred

- Multi-tenant admin UI for group practices (Phase 2; the data model already supports it via Practice entity).
- White-label theming for group practices (Phase 2).
- Native iPad app for clinicians (PWA on iPad is fine for now; Next.js dashboard is touch-friendly).
- ML-driven pattern detection ("anxiety scores 8+ four times this week after work"). MVP uses rule-based thresholds; ML waits for ≥1,000 active clients of usage data to train against.
- Spanish-language client app. Phase 2 once we have demand signal.

---

## TL;DR stack

| Layer | Choice |
|---|---|
| Web app | Next.js 15 on AWS Amplify |
| Mobile | React Native + Expo EAS |
| DB / Auth / Storage / Realtime | Supabase Team + HIPAA |
| Email | Postmark |
| SMS | Twilio |
| Push | Expo Push (no PHI in payload) |
| Analytics | PostHog HIPAA |
| Errors | Sentry Business |
| Logs | Axiom |
| Payments | Stripe |
| Support | Plain |
| Compliance | Vanta + healthcare attorney |
| CDN | Cloudflare DNS-only at MVP |
