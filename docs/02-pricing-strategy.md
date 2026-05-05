# Meridian — Pricing Strategy

**Status:** Decided (v1, MVP)
**Date:** 2026-05-04
**Decision owner:** Founder
**Scope:** Tier structure, list pricing, billing model, and rollout plan for MVP launch

---

## Pricing philosophy

Three rules drive every choice below:

1. **Price like a clinical tool, not a wellness app.** Therapists pay $69–$99/mo for SimplePractice and TherapyNotes, then complain about how clunky those tools are. They will pay a premium for something that visibly works better. Underpricing signals "consumer wellness" and makes private-practice owners suspicious of clinical rigor.
2. **Per-clinician seat, flat rate. Not per-client.** Per-client pricing punishes therapists for having a full caseload, which is exactly the wrong incentive. Flat seats are how SimplePractice, TherapyNotes, and Healthie all price; clinicians know how to budget for them.
3. **Anchor on the value, not the cost.** Meridian replaces no-shows, between-session disengagement, and outcome-tracking spreadsheets. A clinician who keeps one client in care an extra month because of better engagement just paid for the year.

---

## Comparable landscape (2025–2026)

| Product | Audience | Price (per clinician/mo) | What you get |
|---|---|---|---|
| **SimplePractice** | Solo + group practice EHR | $69 / $99 / $129 | EHR, scheduling, billing, telehealth, basic client portal |
| **TherapyNotes** | Solo + group practice EHR | $59 / $79 / $99 | EHR, scheduling, billing, telehealth |
| **Healthie** | Wellness-focused EHR | $99 / $189 / custom | EHR, scheduling, telehealth, more programmable |
| **Jane App** | Multi-discipline private practice | $79–$109 | EHR, scheduling, payments |
| **Mentaya** | Out-of-network billing add-on | $30/mo per clinician | Insurance superbill automation only |
| **Headway** | Insurance-network add-on | Free, takes % of insurance reimbursement | Credentialing + billing, not software |
| **Quenza** | Therapy homework app (closest competitor) | $69 / $89 / $149 | Exercise library, client app, basic outcomes |
| **Mindyra / TheraNest outcomes** | Outcomes module add-on | $20–40/mo | PHQ-9 / GAD-7 tracking |
| **Lyra Health (clinical-side)** | Employer-provided benefit | Not direct comparable | Mentioned because clinicians complain about Lyra's UX |

**The gap Meridian fills:** Quenza is the closest comp. It exists, has the exercise-library category right, but the UX is dated, the gamification is weak, and clinicians describe it as "clunky" and "feels like a 2015 product." We can charge a 15–25% premium for an Apple-grade rebuild *with* better outcomes tracking and EHR integration baked in.

---

## Tier structure

Three tiers. Not four. Decision fatigue kills SaaS conversions.

### **Solo — $89/clinician/month** (or $79/mo billed annually)

For solo private-practice clinicians. The default landing.

**Includes:**
- 1 clinician seat, **unlimited clients**
- Full exercise library (all 17 modules at MVP)
- Client mobile app (iOS + Android)
- Mood / outcomes dashboards (PHQ-9, GAD-7, custom sliders)
- Auto-generated session prep summaries
- Alert system (mood drops, missed homework streaks)
- Healthie integration (when on Healthie)
- SimplePractice via Zapier
- Email + chat support

**Not included:** group/multi-clinician admin, custom branding, custom assessments, API access.

### **Group — $69/clinician/month** (or $59/mo annually), **3 seat minimum**

For group practices, agencies, training programs. Discounted per-seat to reflect volume + admin overhead amortizing.

**Adds on top of Solo:**
- Practice-level admin dashboard (who's seeing whom, supervisor views)
- Caseload reassignment when a clinician leaves
- Aggregated outcomes reporting across the practice
- Co-treatment views (when two clinicians share a client)
- Onboarding session for the practice owner
- Priority support (4-hour response SLA business hours)

### **Scale — Custom** (annual contract only, $X,000+)

For practices >25 seats, integrated behavioral health programs, training institutes.

**Adds on top of Group:**
- White-label option (custom domain, logo, color palette in client app)
- Custom assessment library (build your own forms beyond PHQ-9/GAD-7)
- API access (for clinicians who want to pipe data to their own warehouse)
- SSO (SAML, Okta)
- Dedicated CSM
- Custom DPA terms, BAA negotiation
- 99.9% uptime SLA in writing

---

## Pricing rationale per tier

### Why $89 for Solo?

- **Above SimplePractice** ($69 base, $99 mid) signals "premium add-on, not commodity software."
- **Below Healthie's mid-tier** ($189) — we're not competing with full EHRs, we're complementing them.
- **Roughly tied with Quenza Pro** ($89) — but a clinician evaluating both will pick Meridian on UX in under 10 seconds. Pricing parity removes the "but it's cheaper" objection while letting design and outcomes integration win the deal.
- **Clinicians sell two extra sessions a year because of the tool, it pays for itself.** A typical private-practice session is $150–$250. $89/mo × 12 = $1,068/yr ≈ 5 sessions of revenue. Reduce no-shows by 1 per month and the math is overwhelming.

### Why $69 for Group (with 3-seat minimum)?

- 3-seat minimum = $207/mo floor. Below that, the support and onboarding burden isn't worth it.
- 22% discount vs. Solo rewards multi-seat commitment without giving away the store.
- Group practice owners benchmark against per-seat EHR pricing, not consumer SaaS — $69 is comfortably within that frame.

### Why annual discount of ~10–15%?

- Cuts churn in half (industry standard).
- Improves cash flow at MVP stage when every dollar matters.
- 11% off Solo annual = $79/mo, looks meaningfully cheaper without giving away too much.
- Don't go deeper than 15% — we leave money on the table and signal weakness.

---

## What's NOT in any tier

- **Per-client charges.** Ever. (See philosophy rule 2.)
- **A free tier.** Not for B2B clinical software. Free tiers attract tire-kickers, expose us to BAA-without-revenue exposure, and dilute the brand. **Free trial yes, free tier no.**
- **Pay-as-you-go SMS.** Bundled into the seat price up to 100 SMS/clinician/month, then $0.05 each. Most clinicians will never hit the cap.

---

## Free trial

**14-day free trial, no credit card required.** Full Solo features.

- 14 days because the product is "homework between sessions" — clinicians need at least one full session cycle to evaluate it. 7 days is too short, 30 days is too long (tire-kicking, no urgency).
- No credit card lowers signup friction massively. We trade some lower conversion-from-trial for much higher trial-start rate. Conversion math: 30% of 1,000 trials beats 60% of 200 trials.
- BAA is signed at trial start (so any actual client data they enter is covered). Credit card collected only when converting to paid.

---

## Onboarding incentive

**First 3 months at 50% off for any clinician who joins from the founder's audience** (Instagram / YouTube / Soulstice referrals). Use a discount code; track conversion separately.

This is the early-adopter bait. It pays for itself: every Soulstice-audience clinician who converts becomes a case study, a referral source, and an "early days, not perfect, but I love it" advocate.

**Stop the discount cohort at 100 clinicians or 6 months, whichever comes first.** Beyond that we're discounting the brand.

---

## Billing model

- **Stripe Billing** for all subscriptions.
- **Monthly OR annual.** No quarterly (administrative complexity isn't worth it).
- **Pause subscription** (not cancel) is one-click in the customer portal — therapists go on parental leave, sabbatical, etc. Pausing keeps client data live but read-only; resuming reactivates everything in <1 minute.
- **Cancel anytime, prorated refund within 14 days of renewal.** Above board, no dark patterns. Clinicians talk to each other; one screwed customer is ten lost prospects.

---

## Pricing math: break-even and growth

From `01-tech-architecture.md`, all-in monthly run rate at MVP scale: **~$3,750/mo**.

| Active clinicians | MRR @ $89 | MRR @ $69 (group) | Notes |
|---|---|---|---|
| 25 | $2,225 | — | Below break-even |
| **42** | **$3,738** | — | **Break-even on Solo plan only** |
| 100 | $8,900 | — | Comfortable margin |
| 250 | $22,250 | — | First hire (CSM or eng) |
| 500 | $44,500 | — | Sustainable solo founder + 1 hire |

Realistic Year 1 mix: 70 Solo + 20 Group seats (across 5–6 group practices) ≈ **$7,610 MRR** ≈ **$91k ARR**. Achievable from founder's audience alone if conversion math holds.

---

## What the price test looks like (post-launch)

Don't change list price for 12 months after launch. Instead test:

1. **Annual upfront discount depth** (10% vs. 15% vs. 20%) → optimize for revenue retention, not headline conversion.
2. **Onboarding incentive depth** (50% off 3 months vs. free month vs. extended trial) → optimize for trial-to-paid.
3. **Group seat minimum** (3 vs. 5) → optimize for ACV per group practice without locking out smaller groups.

Raise prices only after we have real data — typically year 2 — and grandfather every existing customer at their original rate, forever. This is a goodwill engine, not a revenue ceiling.

---

## What we are deliberately NOT doing

- **No usage-based pricing** (per-exercise-completed, per-assessment-submitted). It punishes the behavior we want to encourage.
- **No "lite" tier** (limited exercise library, capped clients). Clinicians will pick the limit they don't hit, then get burned. Negative referrals. Don't do it.
- **No add-on store at MVP.** One price, everything included, no nickel-and-diming. Clinicians have been trained by EHRs to expect upsells; not having them is a positioning advantage.
- **No insurance-billing layer.** Headway and Mentaya own that lane. We integrate, we don't compete.

---

## Open questions

1. **State sales tax on SaaS.** Several states (Texas, Washington, Pennsylvania, NY for some products) tax SaaS. Use Stripe Tax — it handles this automatically, ~0.5% cost.
2. **Group practice owner discount for buying multi-year?** Defer; not worth the complexity at MVP.
3. **Student / training-program rate?** Defer to Phase 2; no infrastructure built yet to verify status.

---

## TL;DR

| Tier | Price (monthly) | Price (annual) | Min seats |
|---|---|---|---|
| **Solo** | $89/seat | $79/seat | 1 |
| **Group** | $69/seat | $59/seat | 3 |
| **Scale** | Custom | Custom | 25+ |

- 14-day free trial, no card.
- Annual = ~11% discount.
- 50% off first 3 months for founder-audience early adopters (capped at 100).
- Break-even ~42 paying Solo clinicians.
- Year-1 target: 90 paying clinicians, ~$91k ARR.
