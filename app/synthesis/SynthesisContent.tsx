"use client";

import { PageHeader, FocusBadge } from "@/components/ui";
import { SynthesisStripNav, SynthesisSidebar, type TocItem } from "@/components/SynthesisTOC";
import {
  BRAIN_BANDS,
  MECHANISMS,
  YOGA_TOOLS,
  PROTOCOLS,
  SAFETY,
  NADIS,
  NADI_INTRO,
  QUICK_SWITCH,
  QUICK_INSTANT,
  type YogaTool,
} from "@/lib/synthesis";

const TOC: TocItem[] = [
  { id: "bridge",      label: "Brainwave Bridge",  short: "Bridge"     },
  { id: "nadis",       label: "The Nāḍīs",          short: "Nāḍīs"      },
  { id: "quickswitch", label: "Quick Switch",       short: "Switch"     },
  { id: "mechanisms",  label: "Mechanisms",         short: "Mechanisms" },
  { id: "toolkit",     label: "Yoga Toolkit",       short: "Toolkit"    },
  { id: "stacks",      label: "Practice Stacks",    short: "Stacks"     },
  { id: "safety",      label: "Safety",             short: "Safety"     },
];

const TONE: Record<string, string> = {
  ida:      "border-sky-400/30 from-sky-400/[0.08]",
  pingala:  "border-orange-400/30 from-orange-400/[0.08]",
  sushumna: "border-gold-500/30 from-gold-500/[0.08]",
};
const DOT: Record<string, string> = {
  ida:      "bg-sky-300",
  pingala:  "bg-orange-300",
  sushumna: "bg-gold-300",
};

const CATEGORIES: YogaTool["category"][] = [
  "Prāṇāyāma",
  "Mantra & Sound",
  "Concentration",
  "Energy & Locks",
  "Deep Rest",
];

export function SynthesisContent() {
  return (
    <div className="animate-fadeUp">
      <PageHeader
        eyebrow="The Synthesis"
        title="Neuroscience × Yoga"
        subtitle="The eight Waves engineer specific brain states. Indian yoga has cultivated those same states for millennia — by hand, without headphones. Bring the two together and each makes the other more potent."
      />

      {/* Mobile horizontal sticky pill strip */}
      <SynthesisStripNav items={TOC} />

      {/* Desktop two-column layout */}
      <div className="mt-6 lg:grid lg:grid-cols-[200px_1fr] lg:gap-10 lg:items-start">

        {/* Sidebar TOC — desktop only, sticky */}
        <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
          <SynthesisSidebar items={TOC} />
        </div>

        {/* Main content */}
        <div>
          {/* Intro */}
          <div className="card mb-10 p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-slate-300">
              Binaural-beat audio nudges the two hemispheres toward a shared
              frequency from the{" "}
              <span className="text-aura-200">outside in</span> — through sound.
              Yoga reaches the same coherence from the{" "}
              <span className="text-gold-300">inside out</span> — through breath,
              sound, attention, and energy. Used together, the breath primes the
              nervous system, the mantra quiets the mind, and the tape carries you
              the rest of the way. You arrive at each Focus level sooner, and rest
              in it more deeply.
            </p>
          </div>

          {/* ── Brainwave Bridge ───────────────────────────── */}
          <Section
            id="bridge"
            eyebrow="The map"
            title="The Brainwave Bridge"
            blurb="Every Focus level corresponds to a band of brain activity — and to a stage on the classical yogic path. Read across each row to see the same doorway named three ways."
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                    <th className="px-4 py-2">Brainwave</th>
                    <th className="px-4 py-2">Frequency</th>
                    <th className="px-4 py-2">Focus state</th>
                    <th className="px-4 py-2">Yogic stage</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Quality</th>
                  </tr>
                </thead>
                <tbody>
                  {BRAIN_BANDS.map((b) => (
                    <tr key={b.band} className="bg-ink-card/70">
                      <td className="rounded-l-xl px-4 py-3 font-serif text-lg text-white">
                        {b.band}
                      </td>
                      <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{b.hz}</td>
                      <td className="px-4 py-3">
                        <FocusBadge focus={b.gateway} />
                      </td>
                      <td className="px-4 py-3 text-gold-300">{b.yogic}</td>
                      <td className="rounded-r-xl px-4 py-3 text-slate-400 hidden sm:table-cell">
                        {b.quality}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── The Nāḍīs ──────────────────────────────────── */}
          <Section
            id="nadis"
            eyebrow="The channels"
            title="Iḍā, Piṅgalā & Suṣumnā — the Nāḍīs"
            blurb="The left and right channels end at the two nostrils — and link to the two brain hemispheres. Read your breath to know which is active, then choose a practice to shift it. Balancing both opens the central channel: the same hemispheric coherence the binaural-beat audio is built to create."
          >
            <div className="mb-6 space-y-3 text-sm leading-relaxed text-slate-300">
              <p>{NADI_INTRO.lead}</p>
              <p className="rounded-xl border border-aura-500/20 bg-aura-600/[0.07] p-4">
                <span className="font-semibold text-aura-200">The science · </span>
                {NADI_INTRO.nasalCycle}
              </p>
              <p className="rounded-xl border border-gold-500/25 bg-gold-500/[0.06] p-4">
                <span className="font-semibold text-gold-300">Try it now · </span>
                {NADI_INTRO.check}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {NADIS.map((n) => {
                const central = n.id === "sushumna";
                return (
                  <article
                    key={n.id}
                    className={`card flex flex-col p-5 ${
                      central
                        ? "border-gold-500/30 bg-gradient-to-b from-gold-500/[0.07] to-transparent"
                        : ""
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-2xl text-white">{n.sanskrit}</h3>
                      <span className="text-xs text-slate-500">{n.side}</span>
                    </div>
                    <p className="text-sm text-aura-200">{n.english}</p>
                    <p className="mt-1 text-xs text-gold-300">{n.element}</p>

                    <dl className="mt-4 space-y-2 text-xs">
                      <Row label="Breath sign" value={n.nostril} />
                      <Row label="Autonomic"   value={n.autonomic} />
                      <Row label="Hemisphere"  value={n.hemisphere} />
                    </dl>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {n.qualities.map((q) => (
                        <span key={q} className="chip">{q}</span>
                      ))}
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-slate-400">
                      <span className="font-semibold text-aura-300">Neuroscience · </span>
                      {n.neuro}
                    </p>

                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                        How to activate
                      </p>
                      <ol className="space-y-2">
                        {n.activate.map((step, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-semibold ${
                              central ? "bg-gold-500/20 text-gold-300" : "bg-aura-600/20 text-aura-200"
                            }`}>
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <p className="mt-4 border-t border-ink-line pt-3 text-xs leading-relaxed text-slate-300">
                      <span className="font-semibold text-gold-300">Use it for · </span>
                      {n.useFor}
                    </p>
                  </article>
                );
              })}
            </div>
          </Section>

          {/* ── Quick Switch ────────────────────────────────── */}
          <Section
            id="quickswitch"
            eyebrow="On demand"
            title="Quick Switch — Activate a Nāḍī Anywhere"
            blurb="Discreet ways to shift your state at a desk, on a plane, or mid-meeting — no props, nobody notices. Onset times are realistic; they shorten with practice."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              {QUICK_SWITCH.map((q) => (
                <div
                  key={q.goal}
                  className={`card bg-gradient-to-b to-transparent p-5 ${TONE[q.tone]}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${DOT[q.tone]}`} />
                    <h3 className="font-serif text-lg text-white">{q.goal}</h3>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{q.channel}</p>
                  <ul className="mt-4 space-y-2.5">
                    {q.moves.map((m, i) => (
                      <li key={i} className="flex items-start justify-between gap-3 text-sm">
                        <span className="text-slate-300">{m.method}</span>
                        <span className="shrink-0 whitespace-nowrap text-xs font-medium text-aura-300">
                          {m.onset}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="card p-5">
                <h3 className="font-serif text-lg text-white">{QUICK_INSTANT.title}</h3>
                <ul className="mt-3 divide-y divide-ink-line">
                  {QUICK_INSTANT.rows.map((r) => (
                    <li key={r.goal} className="flex items-start justify-between gap-3 py-2.5">
                      <div>
                        <p className="text-sm font-medium text-white">{r.goal}</p>
                        <p className="text-xs text-slate-400">{r.move}</p>
                      </div>
                      <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-gold-300">
                        {r.onset}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="card border-aura-500/20 bg-aura-600/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-aura-200">
                    Check it worked
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {QUICK_INSTANT.verify}
                  </p>
                </div>
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    What to expect
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {QUICK_INSTANT.timeline}
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* ── Five Mechanisms ─────────────────────────────── */}
          <Section
            id="mechanisms"
            eyebrow="Why it works"
            title="Five Shared Mechanisms"
            blurb="The Waves and yoga reach for the same physiology. Here is what each lever does — and how pairing them amplifies the effect."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {MECHANISMS.map((m) => (
                <div key={m.title} className="card p-6">
                  <h3 className="font-serif text-xl text-white">{m.title}</h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed">
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wide text-aura-300">
                        Neuroscience ·{" "}
                      </span>
                      <span className="text-slate-300">{m.neuro}</span>
                    </p>
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-300">
                        Yoga ·{" "}
                      </span>
                      <span className="text-slate-300">{m.yoga}</span>
                    </p>
                    <p className="rounded-xl border border-aura-500/20 bg-aura-600/[0.07] p-3 text-slate-200">
                      <span className="text-xs font-semibold uppercase tracking-wide text-aura-200">
                        Together ·{" "}
                      </span>
                      {m.payoff}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Yoga Toolkit ────────────────────────────────── */}
          <Section
            id="toolkit"
            eyebrow="The toolkit"
            title="Yoga Toolkit"
            blurb="Eleven classical practices grouped by type. Each shows what it does to the brain and body, how to do it, and which Wave it amplifies."
          >
            <div className="space-y-8">
              {CATEGORIES.map((cat) => {
                const tools = YOGA_TOOLS.filter((t) => t.category === cat);
                return (
                  <div key={cat}>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-aura-300">
                      {cat}
                    </h3>
                    <div className="grid gap-4 lg:grid-cols-2">
                      {tools.map((t) => (
                        <article key={t.id} className="card p-5">
                          <div className="flex items-baseline justify-between gap-3">
                            <h4 className="font-serif text-lg text-white">{t.sanskrit}</h4>
                            <span className="text-xs text-slate-500">{t.english}</span>
                          </div>
                          <p className="mt-1 text-sm text-slate-400">{t.what}</p>
                          <ol className="mt-4 space-y-2">
                            {t.how.map((step, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aura-600/20 text-[10px] font-semibold text-aura-200">
                                  {i + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                          <div className="mt-4 space-y-2 border-t border-ink-line pt-3 text-xs leading-relaxed">
                            <p className="text-slate-400">
                              <span className="font-semibold text-aura-300">Mechanism · </span>
                              {t.neuro}
                            </p>
                            <p className="text-slate-300">
                              <span className="font-semibold text-gold-300">Pair with · </span>
                              {t.pairWith}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* ── Practice Stacks ─────────────────────────────── */}
          <Section
            id="stacks"
            eyebrow="Put it together"
            title="Practice Stacks"
            blurb="Ready-made combinations. Run the short yogic sequence first, then play the matching tape — the state is already half-built."
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PROTOCOLS.map((p) => (
                <div
                  key={p.name}
                  className="card flex flex-col gap-3 border-gold-500/25 bg-gradient-to-br from-gold-500/[0.06] to-transparent p-5"
                >
                  <div>
                    <h3 className="font-serif text-lg text-white">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gold-300">
                      {p.forWaves}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{p.goal}</p>
                  <ol className="mt-1 space-y-2">
                    {p.steps.map((s, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/20 text-[10px] font-semibold text-gold-300">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Safety ──────────────────────────────────────── */}
          <section id="safety" className="mt-12 scroll-mt-32 rounded-2xl border border-ink-line bg-ink-soft/40 p-6">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-lg text-white">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-500/20 text-xs">
                !
              </span>
              Practise responsibly
            </h3>
            <ul className="space-y-2">
              {SAFETY.map((s, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

// ── Local helpers ─────────────────────────────────────────────────────

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-24 shrink-0 text-slate-500">{label}</dt>
      <dd className="text-slate-300">{value}</dd>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  blurb,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aura-300">
        {eyebrow}
      </p>
      <h2 className="mt-1 font-serif text-2xl text-white sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-400">{blurb}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}
