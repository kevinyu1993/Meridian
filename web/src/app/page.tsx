import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Problem />
        <HowItWorks />
        <ExerciseLibrary />
        <Outcomes />
        <ForClinicianAndClient />
        <Pricing />
        <FounderNote />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────  NAV  ───────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-rule/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logomark />
          <span className="font-serif text-xl tracking-tight">Meridian</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#how" className="hover:text-ink transition-colors">How it works</a>
          <a href="#library" className="hover:text-ink transition-colors">Exercise library</a>
          <a href="#outcomes" className="hover:text-ink transition-colors">Outcomes</a>
          <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden sm:inline-block text-sm text-ink-soft hover:text-ink transition-colors"
          >
            Sign in
          </a>
          <a
            href="#trial"
            className="inline-flex items-center text-sm font-medium px-4 h-10 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}

function Logomark() {
  return (
    <span className="relative inline-block w-7 h-7">
      <span className="absolute inset-0 rounded-full bg-teal-500" />
      <span className="absolute inset-[3px] rounded-full bg-cream" />
      <span className="absolute inset-[6px] rounded-full bg-teal-500" />
    </span>
  );
}

/* ─────────────────────────  HERO  ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Built by a licensed therapist
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.98] tracking-tight">
            Therapy homework
            <span className="block text-teal-600">clients actually finish.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-ink-soft leading-relaxed max-w-2xl">
            Meridian is a warm, mobile-first homework and outcomes platform that sits
            alongside your EHR — so what happens between sessions becomes visible,
            measurable, and meaningful.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#trial"
              className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors"
            >
              Start 14-day free trial
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center px-6 h-12 rounded-full border border-rule text-ink-soft hover:text-ink hover:border-ink-muted transition-colors"
            >
              See how it works →
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            No credit card required · HIPAA compliant · BAA included
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────  SOCIAL / TRUST BAR  ─────────────────── */

function SocialProof() {
  return (
    <section className="border-y border-rule/60 bg-cream-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center gap-x-12 gap-y-4 text-sm text-ink-muted">
        <span className="font-medium text-ink-soft">Designed for use with</span>
        <Pill>Healthie</Pill>
        <Pill>SimplePractice</Pill>
        <Pill>TherapyNotes</Pill>
        <Pill>Jane App</Pill>
        <Pill>+ stand-alone</Pill>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-cream border border-rule/60">
      {children}
    </span>
  );
}

/* ─────────────────────────  PROBLEM  ───────────────────────── */

function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <p className="text-teal-600 text-sm font-medium tracking-wide uppercase mb-4">
            The gap we close
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            The most important part of therapy
            <span className="text-teal-600"> happens between sessions.</span>
          </h2>
        </div>
        <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
          <p>
            Therapists know it. Research confirms it: between-session work is one of
            the strongest predictors of clinical outcomes. And yet most clients don&apos;t
            do it — and most therapists fly blind on what&apos;s happening between
            appointments.
          </p>
          <p>
            Existing tools feel extractive. Forms feel clinical. Apps feel cold. So
            clients drop off, therapists guess, and outcome measurement turns into a
            scramble before the next session.
          </p>
          <p className="text-ink font-medium">
            Meridian fixes this — without replacing your EHR, your style, or your
            clinical judgement.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────  HOW IT WORKS  ─────────────────────── */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Assign in 10 seconds",
      body:
        "At the end of session, pick from a curated CBT or DBT exercise library. Three taps, done. No PDFs. No emails. No second logins.",
      tone: "teal" as const,
    },
    {
      n: "02",
      title: "Client gets a gentle nudge",
      body:
        "A push notification — not an alarm. Your client opens the exercise on their phone and walks through it like a guided journal, not a form.",
      tone: "amber" as const,
    },
    {
      n: "03",
      title: "You see what mattered",
      body:
        "Before the next session, your dashboard shows their responses, mood trends, and any clinical alerts. Walk in prepared without skimming notes.",
      tone: "purple" as const,
    },
  ];
  return (
    <section id="how" className="bg-cream-warm/50 border-y border-rule/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-teal-600 text-sm font-medium tracking-wide uppercase mb-4">
            How it works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            A loop that finally closes.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <Step key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  tone,
}: {
  n: string;
  title: string;
  body: string;
  tone: "teal" | "amber" | "purple";
}) {
  const toneMap = {
    teal: "text-teal-600 bg-teal-100",
    amber: "text-amber bg-amber-soft/40",
    purple: "text-purple bg-purple-soft/40",
  };
  return (
    <div className="relative rounded-2xl bg-cream border border-rule p-8 hover:border-ink-muted/50 transition-colors">
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${toneMap[tone]} font-serif text-lg mb-6`}
      >
        {n}
      </div>
      <h3 className="font-serif text-2xl mb-3 tracking-tight">{title}</h3>
      <p className="text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}

/* ─────────────────────  EXERCISE LIBRARY  ───────────────────── */

function ExerciseLibrary() {
  const cbt = [
    "CBT Thought Record",
    "Behavioral Activation Log",
    "Cognitive Distortion Spotter",
    "Anxiety Exposure Ladder",
    "Safety Behaviors Audit",
    "Worry Postponement",
  ];
  const dbt = [
    "DBT Diary Card",
    "TIPP Skills Log",
    "PLEASE Skills Tracker",
    "Emotion Regulation Check-in",
    "DEAR MAN Script Builder",
    "Distress Tolerance Menu",
  ];
  const universal = [
    "Daily Mood Tracker",
    "Values Clarification",
    "Safety Plan Builder",
    "Radical Acceptance Journal",
    "Mindfulness Check-in",
  ];
  return (
    <section id="library" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="text-teal-600 text-sm font-medium tracking-wide uppercase mb-4">
            Exercise library
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            Clinically grounded, beautifully crafted.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Every exercise was designed by a licensed therapist and rebuilt for the
            phone — interactive, conversational, never a form. New modules ship every
            month.
          </p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
          <LibraryColumn title="CBT" tone="teal" items={cbt} />
          <LibraryColumn title="DBT" tone="purple" items={dbt} />
          <LibraryColumn title="Universal" tone="amber" items={universal} />
        </div>
      </div>
    </section>
  );
}

function LibraryColumn({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "teal" | "purple" | "amber";
  items: string[];
}) {
  const toneMap = {
    teal: "text-teal-600 border-teal-200 bg-teal-50",
    purple: "text-purple border-purple-soft bg-purple-soft/20",
    amber: "text-amber border-amber-soft bg-amber-soft/20",
  };
  return (
    <div className="rounded-2xl bg-cream-warm/40 border border-rule p-6">
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${toneMap[tone]} mb-4`}
      >
        {title}
      </span>
      <ul className="space-y-2.5 text-sm text-ink-soft">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-ink-muted shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────  OUTCOMES  ───────────────────────── */

function Outcomes() {
  return (
    <section id="outcomes" className="bg-cream-warm/50 border-y border-rule/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-sm font-medium tracking-wide uppercase mb-4">
              Outcomes that surface themselves
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              PHQ-9, GAD-7, and the trends you actually need.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Standardized assessments and daily mood data, charted automatically.
              Get an alert when scores worsen. Walk into every session with a one-page
              prep summary written for you.
            </p>
            <ul className="mt-8 space-y-4 text-ink-soft">
              <Bullet>Validated PHQ-9 and GAD-7 collection on cadence</Bullet>
              <Bullet>Mood, anxiety, sleep, energy daily sliders</Bullet>
              <Bullet>Pattern detection: &ldquo;anxiety 8+ four times this week after work&rdquo;</Bullet>
              <Bullet>Auto-generated session prep, ready 1 hour before appointment</Bullet>
            </ul>
          </div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 12 12" className="w-3 h-3 text-teal-600" fill="none">
          <path
            d="M2.5 6.5L5 9L9.5 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-teal-500/5 rounded-3xl blur-2xl -z-10" />
      <div className="rounded-2xl bg-cream border border-rule shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-rule flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-coral-soft" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-soft" />
          <span className="w-2.5 h-2.5 rounded-full bg-teal-300" />
          <span className="ml-3 text-xs text-ink-muted">Maria&apos;s progress</span>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs text-ink-muted uppercase tracking-wide">
                GAD-7 (last 8 weeks)
              </span>
              <span className="text-xs text-teal-600 font-medium">↓ 32%</span>
            </div>
            <TrendLine />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <StatCard label="Streak" value="14" suffix="days" tone="teal" />
            <StatCard label="Completion" value="92%" tone="amber" />
            <StatCard label="Mood avg" value="6.4" suffix="/10" tone="purple" />
          </div>
          <div className="rounded-xl bg-teal-50 border border-teal-200 p-4">
            <p className="text-xs text-teal-700 font-medium mb-1">Session prep</p>
            <p className="text-sm text-teal-900 leading-snug">
              Anxiety dropped meaningfully this week. Two thought records flagged
              work boundaries — worth exploring Thursday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendLine() {
  return (
    <svg viewBox="0 0 300 80" className="w-full h-16">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-teal-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--color-teal-500)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,20 C40,10 70,40 110,30 C150,20 180,55 220,50 C250,46 280,65 300,68 L300,80 L0,80 Z"
        fill="url(#g)"
      />
      <path
        d="M0,20 C40,10 70,40 110,30 C150,20 180,55 220,50 C250,46 280,65 300,68"
        fill="none"
        stroke="var(--color-teal-500)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatCard({
  label,
  value,
  suffix,
  tone,
}: {
  label: string;
  value: string;
  suffix?: string;
  tone: "teal" | "amber" | "purple";
}) {
  const toneMap = {
    teal: "bg-teal-50 text-teal-700",
    amber: "bg-amber-soft/30 text-amber",
    purple: "bg-purple-soft/30 text-purple",
  };
  return (
    <div className={`rounded-xl px-3 py-3 ${toneMap[tone]}`}>
      <div className="text-[10px] uppercase tracking-wide opacity-70 mb-0.5">
        {label}
      </div>
      <div className="font-serif text-2xl leading-none">
        {value}
        {suffix && (
          <span className="font-sans text-xs opacity-70 ml-1">{suffix}</span>
        )}
      </div>
    </div>
  );
}

/* ───────────────  TWO AUDIENCES  ─────────────── */

function ForClinicianAndClient() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-8">
        <AudienceCard
          accent="teal"
          eyebrow="For clinicians"
          title="Walk into every session prepared."
          bullets={[
            "Assignment in 3 taps",
            "Real-time completion visibility",
            "Auto-generated session prep",
            "Outcome alerts before they become a crisis",
          ]}
        />
        <AudienceCard
          accent="amber"
          eyebrow="For clients"
          title="Their growth, in their hands."
          bullets={[
            "A warm app that feels like journaling",
            "Streaks, milestones, and visible progress",
            "Their data, owned by them — first",
            "A weekly insight summary they look forward to",
          ]}
        />
      </div>
    </section>
  );
}

function AudienceCard({
  accent,
  eyebrow,
  title,
  bullets,
}: {
  accent: "teal" | "amber";
  eyebrow: string;
  title: string;
  bullets: string[];
}) {
  const toneMap = {
    teal: "bg-teal-500 text-cream",
    amber: "bg-amber/95 text-cream",
  };
  return (
    <div className={`rounded-3xl p-10 md:p-12 ${toneMap[accent]}`}>
      <p className="text-sm font-medium opacity-80 tracking-wide uppercase mb-4">
        {eyebrow}
      </p>
      <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight mb-8">
        {title}
      </h3>
      <ul className="space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-cream/95">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cream/80 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────  PRICING  ───────────────────────── */

function Pricing() {
  return (
    <section id="pricing" className="bg-cream-warm/50 border-y border-rule/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-teal-600 text-sm font-medium tracking-wide uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            One price. Everything included.
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            No per-client charges, ever. The client app is always free for your
            clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            name="Solo"
            price="$89"
            cadence="per clinician / month"
            note="$79/mo billed annually"
            cta="Start free trial"
            features={[
              "1 clinician seat, unlimited clients",
              "Full exercise library (17+ modules)",
              "Client mobile app (iOS + Android)",
              "PHQ-9, GAD-7, and mood tracking",
              "Auto-generated session prep",
              "Healthie + SimplePractice sync",
              "Email + chat support",
            ]}
          />
          <PricingCard
            name="Group"
            price="$69"
            cadence="per clinician / month"
            note="3-seat min · $59/mo annually"
            cta="Talk to us"
            featured
            features={[
              "Everything in Solo",
              "Practice-level admin dashboard",
              "Caseload reassignment + supervision",
              "Aggregated outcomes reporting",
              "Co-treatment views",
              "Onboarding session for owner",
              "Priority support (4-hour SLA)",
            ]}
          />
          <PricingCard
            name="Scale"
            price="Custom"
            cadence="annual contract"
            note="25+ clinicians"
            cta="Contact sales"
            features={[
              "Everything in Group",
              "White-label client app",
              "Custom assessment library",
              "API access for data warehouse",
              "SSO (SAML, Okta)",
              "Dedicated CSM",
              "99.9% uptime SLA",
            ]}
          />
        </div>
        <p className="mt-10 text-sm text-ink-muted text-center">
          14-day free trial · No credit card · BAA included · Cancel anytime
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  cadence,
  note,
  cta,
  features,
  featured,
}: {
  name: string;
  price: string;
  cadence: string;
  note: string;
  cta: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col ${
        featured
          ? "bg-ink text-cream border-ink shadow-lg"
          : "bg-cream border border-rule"
      }`}
    >
      <div className="mb-6">
        <h3 className="font-serif text-2xl tracking-tight">{name}</h3>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-serif text-5xl tracking-tight">{price}</span>
        </div>
        <p
          className={`mt-1 text-sm ${
            featured ? "text-cream/70" : "text-ink-muted"
          }`}
        >
          {cadence}
        </p>
        <p
          className={`mt-2 text-xs ${
            featured ? "text-cream/60" : "text-ink-muted"
          }`}
        >
          {note}
        </p>
      </div>
      <ul
        className={`flex-1 space-y-3 text-sm ${
          featured ? "text-cream/90" : "text-ink-soft"
        }`}
      >
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <svg
              viewBox="0 0 12 12"
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                featured ? "text-teal-300" : "text-teal-600"
              }`}
              fill="none"
            >
              <path
                d="M2.5 6.5L5 9L9.5 3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#trial"
        className={`mt-8 inline-flex items-center justify-center h-11 rounded-full font-medium transition-colors ${
          featured
            ? "bg-teal-500 text-white hover:bg-teal-600"
            : "border border-ink/20 text-ink hover:bg-ink hover:text-cream"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

/* ─────────────────────  FOUNDER NOTE  ───────────────────── */

function FounderNote() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
      <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-cream-warm border border-rule flex items-center justify-center">
        <span className="font-serif text-2xl text-teal-600">M</span>
      </div>
      <p className="font-serif text-2xl md:text-3xl leading-snug text-ink mb-8 tracking-tight">
        &ldquo;I built Meridian because the tools my colleagues and I use every day
        are clinical on the inside and clunky on the outside. My clients deserve
        something warmer. My practice deserves something sharper. So do yours.&rdquo;
      </p>
      <p className="text-sm text-ink-muted">
        — Founder, licensed therapist & owner of Soulstice Therapy
      </p>
    </section>
  );
}

/* ─────────────────────────  FINAL CTA  ───────────────────────── */

function FinalCTA() {
  return (
    <section id="trial" className="px-6 pb-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-teal-500 text-cream p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="relative">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight max-w-2xl">
            Find your meridian.
          </h2>
          <p className="mt-6 text-lg text-cream/90 max-w-2xl">
            Start a 14-day trial. No card, no setup call required, BAA signed at
            signup. Bring your first client into the warmer side of therapy
            homework today.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="email"
              required
              placeholder="Your work email"
              className="flex-1 h-12 px-5 rounded-full bg-cream/10 border border-cream/30 text-cream placeholder:text-cream/60 focus:outline-none focus:border-cream/60"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-full bg-cream text-teal-700 font-medium hover:bg-white transition-colors"
            >
              Start free trial
            </button>
          </form>
          <p className="mt-4 text-xs text-cream/70">
            By starting a trial you agree to our Terms and Privacy Policy. We&apos;ll
            send a BAA for e-signature on signup.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FOOTER  ───────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-rule bg-cream-warm/30">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Logomark />
            <span className="font-serif text-xl tracking-tight">Meridian</span>
          </Link>
          <p className="mt-4 text-ink-muted max-w-sm">
            Find your meridian. Therapy homework and outcomes tracking, built by a
            therapist.
          </p>
        </div>
        <FooterCol
          heading="Product"
          links={[
            ["How it works", "#how"],
            ["Exercise library", "#library"],
            ["Outcomes", "#outcomes"],
            ["Pricing", "#pricing"],
          ]}
        />
        <FooterCol
          heading="Company"
          links={[
            ["About", "#"],
            ["Privacy", "#"],
            ["Terms", "#"],
            ["HIPAA / BAA", "#"],
            ["Contact", "mailto:hello@meridian.health"],
          ]}
        />
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} Meridian Health, Inc.</span>
          <span>HIPAA-compliant · SOC 2 in progress · BAA on signup</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="font-medium text-ink mb-3">{heading}</h4>
      <ul className="space-y-2 text-ink-muted">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:text-ink transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
