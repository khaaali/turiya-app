"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { getTape } from "@/lib/tapes";
import { useStore } from "@/lib/store";
import { EXPERIENCE_OPTIONS } from "@/lib/types";
import { FocusBadge } from "@/components/ui";
import { toRoman } from "@/lib/format";

const RATINGS = [
  { key: "relaxation", label: "Body relaxation", hint: "How deeply did the body let go?" },
  { key: "focusReached", label: "Focus level reached", hint: "How well did you reach / hold the target state?" },
  { key: "vividness", label: "Vividness", hint: "How vivid were the images, sensations, impressions?" },
  { key: "mood", label: "Mood after", hint: "How did you feel afterward?" },
] as const;

export default function LogSession() {
  const { tapeId } = useParams<{ tapeId: string }>();
  const router = useRouter();
  const tape = getTape(tapeId);
  const { ready, activeProfile, addSession } = useStore();

  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 16);
  });
  const [ratings, setRatings] = useState({
    relaxation: 3,
    focusReached: 3,
    vividness: 3,
    mood: 3,
  });
  const [experiences, setExperiences] = useState<string[]>([]);
  const [journal, setJournal] = useState("");
  const [insights, setInsights] = useState("");
  const [duration, setDuration] = useState<string>(tape ? String(tape.duration) : "");

  if (!tape) {
    return (
      <div className="card p-10 text-center">
        <p className="text-slate-300">Tape not found.</p>
        <Link href="/waves" className="btn-ghost mt-4">Back to Library</Link>
      </div>
    );
  }

  if (ready && !activeProfile) {
    return (
      <div className="card p-10 text-center">
        <h2 className="font-serif text-xl text-white">Create a profile first</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
          You need a practitioner profile before logging sessions, so your
          journey can be tracked.
        </p>
        <Link href="/profile" className="btn-primary mt-4">Create profile</Link>
      </div>
    );
  }

  function toggleExp(e: string) {
    setExperiences((cur) =>
      cur.includes(e) ? cur.filter((x) => x !== e) : [...cur, e]
    );
  }

  function save() {
    const created = addSession({
      tapeId: tape!.id,
      date: new Date(date).toISOString(),
      relaxation: ratings.relaxation,
      focusReached: ratings.focusReached,
      vividness: ratings.vividness,
      mood: ratings.mood,
      experiences,
      journal: journal.trim(),
      insights: insights.trim(),
      durationMin: duration ? Number(duration) : undefined,
    });
    if (created) router.push(`/journal#${created.id}`);
    else router.push("/journal");
  }

  return (
    <div className="mx-auto max-w-2xl animate-fadeUp">
      <div className="mb-6">
        <Link href={`/tape/${tape.id}`} className="text-xs text-aura-300 hover:text-aura-200">
          ← Back to {tape.title}
        </Link>
        <h1 className="mt-2 font-serif text-3xl text-white">Log a session</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-400">
            Wave {toRoman(tape.wave)} · {tape.title}
          </span>
          <FocusBadge focus={tape.focus} />
        </div>
      </div>

      <div className="card space-y-6 p-6">
        {/* date + duration */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">When</label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label className="label">Duration (minutes)</label>
            <input
              type="number"
              min={0}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="input"
              placeholder="e.g. 35"
            />
          </div>
        </div>

        {/* ratings */}
        <div className="space-y-5">
          {RATINGS.map((r) => (
            <div key={r.key}>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-white">{r.label}</label>
                <span className="font-serif text-lg text-aura-300">
                  {ratings[r.key]}<span className="text-xs text-slate-500">/5</span>
                </span>
              </div>
              <p className="mb-2 text-xs text-slate-500">{r.hint}</p>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={ratings[r.key]}
                onChange={(e) =>
                  setRatings((cur) => ({ ...cur, [r.key]: Number(e.target.value) }))
                }
                className="w-full accent-aura-500"
              />
            </div>
          ))}
        </div>

        {/* experiences */}
        <div>
          <label className="label">What happened? (tap all that apply)</label>
          <div className="flex flex-wrap gap-2">
            {EXPERIENCE_OPTIONS.map((e) => {
              const on = experiences.includes(e);
              return (
                <button
                  key={e}
                  type="button"
                  onClick={() => toggleExp(e)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    on
                      ? "border-aura-400 bg-aura-600/30 text-white"
                      : "border-ink-line bg-ink-soft text-slate-400 hover:text-white"
                  }`}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </div>

        {/* journal */}
        <div>
          <label className="label">Session journal</label>
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            rows={5}
            className="input resize-y"
            placeholder="Describe what you experienced — sensations, images, encounters, anything that stood out…"
          />
        </div>

        {/* insights */}
        <div>
          <label className="label">Your takeaways</label>
          <textarea
            value={insights}
            onChange={(e) => setInsights(e.target.value)}
            rows={3}
            className="input resize-y"
            placeholder="What did you learn or want to remember from this sitting?"
          />
        </div>

        <div className="flex gap-3">
          <button onClick={save} className="btn-primary flex-1">
            Save session
          </button>
          <Link href={`/tape/${tape.id}`} className="btn-ghost">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
