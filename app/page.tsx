"use client";

import Link from "next/link";
import { useStore, computeProgress } from "@/lib/store";
import { WAVES, TAPES, getTape, tapesByWave } from "@/lib/tapes";
import { PageHeader, Stat, ProgressBar, EmptyState, FocusBadge } from "@/components/ui";
import { toRoman } from "@/lib/format";

export default function Dashboard() {
  const { ready, activeProfile, sessionsForActive } = useStore();

  if (!ready) return <Loading />;

  if (!activeProfile) {
    return (
      <>
        <Hero />
        <EmptyState
          title="Create your first profile"
          body="Set up a practitioner profile to begin logging sessions and tracking your journey through the eight Waves."
          href="/profile"
          cta="Get started"
        />
      </>
    );
  }

  const sessions = sessionsForActive();
  const p = computeProgress(sessions);

  // find the next uncompleted tape in order
  const next = TAPES.find((t) => !p.completedTapeIds.has(t.id));
  const recent = sessions.slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={`Welcome back, ${activeProfile.name}`}
        title="Your Gateway Journey"
        subtitle={activeProfile.intention || "Mind awake, body asleep — one Wave at a time."}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Sessions" value={p.totalSessions} sub="total sittings" />
        <Stat
          label="Tapes explored"
          value={`${p.uniqueTapes}/${p.totalTapes}`}
          sub="exercises touched"
        />
        <Stat
          label="Current streak"
          value={p.currentStreak}
          sub={p.currentStreak === 1 ? "day" : "days"}
        />
        <Stat label="Hours practiced" value={p.hoursPracticed} sub="logged time" />
      </div>

      {/* Continue / next up */}
      {next && (
        <div className="card mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-aura-300">
              Continue your journey · Wave {toRoman(next.wave)}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-white">{next.title}</h2>
            <div className="mt-2">
              <FocusBadge focus={next.focus} />
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={`/tape/${next.id}`} className="btn-ghost">
              View tape
            </Link>
            <Link href={`/log/${next.id}`} className="btn-primary">
              Log a session
            </Link>
          </div>
        </div>
      )}

      {/* Synthesis callout */}
      <Link
        href="/synthesis"
        className="group card mt-6 flex items-center justify-between gap-4 border-gold-500/25 bg-gradient-to-r from-gold-500/[0.08] to-aura-600/[0.06] p-5 transition hover:border-gold-500/50"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Neuroscience × Yoga
          </p>
          <h3 className="mt-1 font-serif text-xl text-white">
            Make every tape more potent
          </h3>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Pair the Gateway brain states with classical prāṇāyāma, mantra, and
            concentration practices — with ready-made stacks for each Wave.
          </p>
        </div>
        <span className="hidden shrink-0 text-gold-300 transition group-hover:translate-x-1 sm:block">
          →
        </span>
      </Link>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Wave progress */}
        <section>
          <h3 className="mb-3 font-serif text-xl text-white">Progress by Wave</h3>
          <div className="space-y-3">
            {WAVES.map((w) => {
              const wc = p.waveCompletion[w.number] ?? { done: 0, total: tapesByWave(w.number).length };
              return (
                <Link
                  key={w.number}
                  href={`/waves#wave-${w.number}`}
                  className="card block p-4 transition hover:border-aura-500/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Wave {toRoman(w.number)} · {w.title}
                      </p>
                      <p className="text-xs text-slate-500">{w.subtitle}</p>
                    </div>
                    <span className="text-xs text-slate-400">
                      {wc.done}/{wc.total}
                    </span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar done={wc.done} total={wc.total} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Recent sessions */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-serif text-xl text-white">Recent sessions</h3>
            <Link href="/journal" className="text-xs text-aura-300 hover:text-aura-200">
              View all →
            </Link>
          </div>
          {recent.length === 0 ? (
            <div className="card p-6 text-sm text-slate-400">
              No sessions yet. Pick a tape from the{" "}
              <Link href="/waves" className="text-aura-300">
                Library
              </Link>{" "}
              and log your first sitting.
            </div>
          ) : (
            <div className="space-y-3">
              {recent.map((s) => {
                const t = getTape(s.tapeId);
                return (
                  <Link
                    key={s.id}
                    href={`/journal#${s.id}`}
                    className="card block p-4 transition hover:border-aura-500/40"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-white">
                        {t ? t.title : "Unknown tape"}
                      </p>
                      <span className="text-xs text-slate-500">
                        {new Date(s.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-400">
                      {s.journal || s.insights || "No notes recorded."}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.experiences.slice(0, 3).map((e) => (
                        <span key={e} className="chip">
                          {e}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="card relative mb-8 overflow-hidden p-8 sm:p-12">
      <div className="absolute -right-16 -top-16 h-64 w-64 animate-breathe rounded-full bg-aura-600/20 blur-3xl" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aura-300">
          Binaural-beat audio · Waves I–VIII
        </p>
        <h1 className="mt-2 max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
          Turīya — the fourth state.
        </h1>
        <p className="mt-4 max-w-xl text-slate-300">
          A quiet place to track your Gateway practice. Log every sitting,
          watch your progress through the Focus levels, and carry the key
          takeaways from each exercise forward.
        </p>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="grid place-items-center py-32">
      <div className="h-10 w-10 animate-breathe rounded-full bg-aura-500/40" />
    </div>
  );
}
