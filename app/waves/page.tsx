"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WAVES, tapesByWave } from "@/lib/tapes";
import { useStore, computeProgress } from "@/lib/store";
import { PageHeader, ProgressBar, FocusBadge } from "@/components/ui";
import { toRoman } from "@/lib/format";

function WaveNav({ activeWave }: { activeWave: number }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [activeWave]);

  const jump = (n: number) => {
    document.getElementById(`wave-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-14 z-20 -mx-4 mb-8 border-b border-ink-line bg-ink/90 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6">
      <div ref={stripRef} className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {WAVES.map((w) => {
          const active = activeWave === w.number;
          return (
            <button
              key={w.number}
              ref={active ? activeRef : null}
              onClick={() => jump(w.number)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                active
                  ? "bg-aura-600/40 text-aura-200 ring-1 ring-aura-500/50"
                  : "text-slate-400 hover:text-aura-300"
              }`}
            >
              {toRoman(w.number)} · {w.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Library() {
  const { ready, sessionsForActive } = useStore();
  const completed = ready ? computeProgress(sessionsForActive()).completedTapeIds : new Set<string>();
  const [activeWave, setActiveWave] = useState(1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    WAVES.forEach((w) => {
      const el = document.getElementById(`wave-${w.number}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveWave(w.number); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="The Library"
        title="The Eight Waves"
        subtitle="46 exercises that carry you from deep physical relaxation (Focus 10) all the way to union with the Absolute. Work them in order, and repeat any tape until it feels like home."
      />

      <WaveNav activeWave={activeWave} />

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
