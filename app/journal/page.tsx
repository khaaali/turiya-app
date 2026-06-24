"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { getTape, WAVES } from "@/lib/tapes";
import { PageHeader, EmptyState, FocusBadge } from "@/components/ui";
import { toRoman } from "@/lib/format";

export default function Journal() {
  const { ready, activeProfile, sessionsForActive, deleteSession } = useStore();
  const [waveFilter, setWaveFilter] = useState<number | "all">("all");

  const sessions = ready ? sessionsForActive() : [];
  const filtered = useMemo(() => {
    if (waveFilter === "all") return sessions;
    return sessions.filter((s) => getTape(s.tapeId)?.wave === waveFilter);
  }, [sessions, waveFilter]);

  if (!ready) return null;

  if (!activeProfile) {
    return (
      <EmptyState
        title="No profile yet"
        body="Create a profile to start keeping a session journal."
        href="/profile"
        cta="Create profile"
      />
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={`${activeProfile.name}'s journal`}
        title="Session Journal"
        subtitle="Every sitting you've logged, newest first. Patterns emerge over time — revisit them often."
      />

      {sessions.length === 0 ? (
        <EmptyState
          title="Your journal is empty"
          body="Choose a tape from the Library and log your first session to begin your record."
          href="/waves"
          cta="Browse the Library"
        />
      ) : (
        <>
          <div className="mb-6 flex flex-wrap gap-2">
            <FilterChip active={waveFilter === "all"} onClick={() => setWaveFilter("all")}>
              All Waves
            </FilterChip>
            {WAVES.map((w) => (
              <FilterChip
                key={w.number}
                active={waveFilter === w.number}
                onClick={() => setWaveFilter(w.number)}
              >
                {toRoman(w.number)}
              </FilterChip>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((s) => {
              const t = getTape(s.tapeId);
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="card scroll-mt-20 p-5 transition target:border-aura-500/60"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={t ? `/tape/${t.id}` : "#"}
                          className="font-serif text-xl text-white hover:text-aura-200"
                        >
                          {t ? t.title : "Unknown tape"}
                        </Link>
                        {t && <FocusBadge focus={t.focus} />}
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {t && `Wave ${toRoman(t.wave)} · `}
                        {new Date(s.date).toLocaleString(undefined, {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                        {s.durationMin ? ` · ${s.durationMin} min` : ""}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm("Delete this session? This cannot be undone."))
                          deleteSession(s.id);
                      }}
                      className="text-xs text-slate-500 hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>

                  {/* ratings */}
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <Metric label="Relaxation" value={s.relaxation} />
                    <Metric label="Focus" value={s.focusReached} />
                    <Metric label="Vividness" value={s.vividness} />
                    <Metric label="Mood" value={s.mood} />
                  </div>

                  {s.experiences.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.experiences.map((e) => (
                        <span key={e} className="chip">
                          {e}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.journal && (
                    <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-300">
                      {s.journal}
                    </p>
                  )}

                  {s.insights && (
                    <div className="mt-4 rounded-xl border border-gold-500/25 bg-gold-500/[0.06] p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-300">
                        Takeaway
                      </p>
                      <p className="mt-1 text-sm text-slate-200">{s.insights}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-ink-soft/60 p-3 text-center">
      <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-1.5 flex justify-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`h-1.5 w-1.5 rounded-full ${
              n <= value ? "bg-aura-400" : "bg-ink-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
        active
          ? "border-aura-400 bg-aura-600/30 text-white"
          : "border-ink-line bg-ink-soft text-slate-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
