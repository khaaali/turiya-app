"use client";

import Link from "next/link";
import { WAVES, tapesByWave } from "@/lib/tapes";
import { useStore, computeProgress } from "@/lib/store";
import { PageHeader, ProgressBar, FocusBadge } from "@/components/ui";
import { toRoman } from "@/lib/format";

export default function Library() {
  const { ready, sessionsForActive } = useStore();
  const completed = ready ? computeProgress(sessionsForActive()).completedTapeIds : new Set<string>();

  return (
    <>
      <PageHeader
        eyebrow="The Library"
        title="The Eight Waves"
        subtitle="46 exercises that carry you from deep physical relaxation (Focus 10) all the way to union with the Absolute. Work them in order, and repeat any tape until it feels like home."
      />

      <div className="space-y-10">
        {WAVES.map((w) => {
          const tapes = tapesByWave(w.number);
          const done = tapes.filter((t) => completed.has(t.id)).length;
          return (
            <section key={w.number} id={`wave-${w.number}`} className="scroll-mt-20">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-serif text-2xl text-white">
                    Wave {toRoman(w.number)} · {w.title}
                  </h2>
                  <p className="text-sm text-aura-300">{w.subtitle}</p>
                  <p className="mt-1 max-w-2xl text-sm text-slate-400">{w.blurb}</p>
                </div>
                <span className="text-xs text-slate-400">{done}/{tapes.length} done</span>
              </div>

              <div className="mb-4">
                <ProgressBar done={done} total={tapes.length} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tapes.map((t) => {
                  const isDone = completed.has(t.id);
                  return (
                    <Link
                      key={t.id}
                      href={`/tape/${t.id}`}
                      className="card group relative flex flex-col gap-3 p-5 transition hover:border-aura-500/50 hover:shadow-glow"
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-serif text-sm text-slate-500">
                          {t.number}
                        </span>
                        {isDone && (
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-500/20 text-[10px] text-gold-300">
                            ✓
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg leading-snug text-white group-hover:text-aura-200">
                        {t.title}
                      </h3>
                      <FocusBadge focus={t.focus} />
                      <p className="line-clamp-3 text-xs leading-relaxed text-slate-400">
                        {t.summary}
                      </p>
                      <span className="mt-auto text-xs text-aura-300 opacity-0 transition group-hover:opacity-100">
                        Open tape →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
