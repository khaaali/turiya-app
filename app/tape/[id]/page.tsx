"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getTape, tapesByWave } from "@/lib/tapes";
import { useStore } from "@/lib/store";
import { FocusBadge } from "@/components/ui";
import { toRoman } from "@/lib/format";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function TapeDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const tape = getTape(id);
  const { ready, sessionsForActive } = useStore();

  if (!tape) {
    return (
      <div className="card p-10 text-center">
        <p className="text-slate-300">Tape not found.</p>
        <Link href="/waves" className="btn-ghost mt-4">
          Back to Library
        </Link>
      </div>
    );
  }

  const siblings = tapesByWave(tape.wave);
  const idx = siblings.findIndex((t) => t.id === tape.id);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];

  const tapeSessions = ready
    ? sessionsForActive().filter((s) => s.tapeId === tape.id)
    : [];

  return (
    <div className="animate-fadeUp">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
        <Link href="/waves" className="hover:text-aura-300">
          Library
        </Link>
        <span>/</span>
        <Link href={`/waves#wave-${tape.wave}`} className="hover:text-aura-300">
          Wave {toRoman(tape.wave)} · {tape.waveTitle}
        </Link>
        <span>/</span>
        <span className="text-slate-400">Tape {tape.number}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aura-300">
            Wave {toRoman(tape.wave)} · Exercise {tape.number}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-white">{tape.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <FocusBadge focus={tape.focus} />
            <span className="chip">~{tape.duration} min</span>
            {tapeSessions.length > 0 && (
              <span className="chip">
                Logged {tapeSessions.length}×
              </span>
            )}
          </div>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            {tape.summary}
          </p>

          <Section title="The Technique" accent="aura">
            <ol className="space-y-3">
              {tape.technique.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aura-600/20 text-xs font-semibold text-aura-200">
                    {i + 1}
                  </span>
                  <span className="text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="Tips for this exercise" accent="aura">
            <ul className="space-y-2.5">
              {tape.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aura-400" />
                  {tip}
                </li>
              ))}
            </ul>
          </Section>

          {/* Takeaways — the marquee feature */}
          <div className="mt-8 rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/[0.07] to-transparent p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-500/20 text-gold-300">
                ✦
              </span>
              <h2 className="font-serif text-xl text-gold-300">
                Takeaway readings — what to remember
              </h2>
            </div>
            <ul className="space-y-3">
              {tape.takeaways.map((tk, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 text-gold-400">—</span>
                  <span className="font-serif text-lg leading-relaxed text-slate-200">
                    {tk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* prev / next */}
          <div className="mt-8 flex items-center justify-between gap-3">
            {prev ? (
              <Link href={`/tape/${prev.id}`} className="btn-ghost">
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/tape/${next.id}`} className="btn-ghost">
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          <div className="card sticky top-20 p-5">
            <h3 className="font-serif text-lg text-white">Practice this tape</h3>
            <p className="mt-1 text-sm text-slate-400">
              Settle in with headphones, then record how it went.
            </p>
            <button
              onClick={() => router.push(`/log/${tape.id}`)}
              className="btn-primary mt-4 w-full"
            >
              Log a session
            </button>

            <AudioPlayer tape={tape} />

            {tapeSessions.length > 0 && (
              <div className="mt-5 border-t border-ink-line pt-4">
                <h4 className="mb-2 text-xs uppercase tracking-wide text-slate-400">
                  Your sessions
                </h4>
                <ul className="space-y-2">
                  {tapeSessions.slice(0, 5).map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/journal#${s.id}`}
                        className="flex items-center justify-between text-sm text-slate-300 hover:text-aura-200"
                      >
                        <span>{new Date(s.date).toLocaleDateString()}</span>
                        <span className="text-xs text-slate-500">
                          F{s.focusReached}/5
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 font-serif text-xl text-white">{title}</h2>
      {children}
    </section>
  );
}
