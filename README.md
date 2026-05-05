# Meridian

> Find your meridian. Therapy homework and outcomes tracking, built by a therapist.

A clinical SaaS platform that sits alongside any EHR and solves the #1 problem in therapy: clients don't complete homework between sessions, and therapists have no visibility into what's happening between appointments.

## Repo layout

```
meridian/
  docs/                      # Decision docs (read these first)
    01-tech-architecture.md  # HIPAA stack, vendor choices, cost model
    02-pricing-strategy.md   # Tier structure, comp analysis, pricing math
  web/                       # Next.js marketing site + clinician dashboard
    src/app/                 # App Router pages
  mobile/                    # React Native (Expo) client app — TODO
  api/                       # Supabase migrations + edge functions — TODO
```

## What's built so far

- ✅ Tech architecture decision doc (`docs/01-tech-architecture.md`)
- ✅ Pricing strategy doc (`docs/02-pricing-strategy.md`)
- ✅ Marketing landing page (`web/`) — Next.js 16, DM Serif + DM Sans, brand palette wired up

## What's next

1. Deploy landing page (AWS Amplify or Vercel)
2. Waitlist email capture (Supabase + Postmark)
3. Clinician auth + onboarding flow
4. Exercise data model + first 3 exercise modules ported from designs
5. React Native client app shell

## Local dev

```bash
cd web
npm install
npm run dev
# → http://localhost:3000
```

## Branding quick reference

- **Name:** Meridian
- **Tagline:** Find your meridian
- **Type:** DM Serif Display (headings), DM Sans (body)
- **Colors:** Teal `#1D9E75` primary, amber `#E8A547` warmth, purple `#7C5BA6` (DBT), coral `#E8775F` (alerts), cream `#FAF6F0` background
- **Voice:** Premium, warm, clinically rigorous. Not clinical-feeling. Inspired by Apple, Headspace, Notion.

## Compliance

This project will handle PHI under HIPAA. **Do not commit any real client data, BAAs, signed contracts, or `.env` files containing live API keys to this repo.** All PHI must live behind BAA-covered infrastructure (Supabase Team + HIPAA add-on, etc.). See `docs/01-tech-architecture.md` for the full vendor list.
