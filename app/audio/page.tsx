"use client";

import { useRef, useState } from "react";
import { WAVES, tapesByWave } from "@/lib/tapes";
import { useAudioConfig, resolveAudioUrl } from "@/lib/audio";
import { PageHeader } from "@/components/ui";
import { toRoman } from "@/lib/format";

export default function AudioSettings() {
  const { config, ready, envBase, setBaseUrl, setOverride, replaceConfig, reset } =
    useAudioConfig();
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  if (!ready) return null;

  const overrideCount = Object.keys(config.overrides).length;

  function flash(m: string) {
    setMsg(m);
    setTimeout(() => setMsg(null), 3500);
  }

  function exportCfg() {
    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "turiya-audio-links.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importCfg(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (typeof parsed !== "object" || parsed === null) throw new Error();
        replaceConfig({
          baseUrl: typeof parsed.baseUrl === "string" ? parsed.baseUrl : "",
          overrides:
            parsed.overrides && typeof parsed.overrides === "object"
              ? parsed.overrides
              : {},
        });
        flash("Links imported.");
      } catch {
        flash("Import failed — invalid file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  return (
    <div className="animate-fadeUp">
      <PageHeader
        eyebrow="Settings"
        title="Audio & Streaming Links"
        subtitle="Point each tape at a playable source. Set one base URL for everything, or paste a unique streaming link per tape. Links are saved in this browser — export them to back up or move devices."
      />

      {/* Base URL + how it works */}
      <div className="card mb-6 p-6">
        <label className="label">Base URL (optional)</label>
        <input
          className="input"
          placeholder="https://your-cdn.example.com/gateway"
          value={config.baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
        />
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          Joined with each tape&apos;s file path. For example, a base of{" "}
          <code className="text-aura-300">https://cdn.example.com/gateway</code>{" "}
          turns <em>Orientation</em> into{" "}
          <code className="break-all text-aura-300">
            https://cdn.example.com/gateway/Wave%20I%20-%20Discovery/CD1%20-%201%20-%20Orientation.flac
          </code>
          . Use this when your host mirrors the original folder layout. For
          one-off or signed links, set a per-tape link below instead (it always
          wins).
        </p>
        {envBase && (
          <p className="mt-2 text-xs text-slate-500">
            A build-time base is also set via{" "}
            <code className="text-aura-300">NEXT_PUBLIC_AUDIO_BASE</code> ({envBase}).
            A base URL or per-tape link here overrides it.
          </p>
        )}
      </div>

      {/* tools */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="chip">{overrideCount} per-tape link{overrideCount === 1 ? "" : "s"} set</span>
        <span className="chip">
          {config.baseUrl ? "Base URL set" : envBase ? "Env base in use" : "No base URL"}
        </span>
        <div className="flex-1" />
        <button onClick={exportCfg} className="btn-ghost text-xs">
          Export links
        </button>
        <button onClick={() => fileRef.current?.click()} className="btn-ghost text-xs">
          Import links
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          onChange={importCfg}
          className="hidden"
        />
        <button
          onClick={() => {
            if (confirm("Clear the base URL and all per-tape links?")) {
              reset();
              flash("All links cleared.");
            }
          }}
          className="btn-ghost text-xs text-slate-400 hover:text-red-400"
        >
          Reset
        </button>
      </div>
      {msg && <p className="mb-4 text-sm text-aura-300">{msg}</p>}

      {/* per-tape overrides */}
      <div className="space-y-3">
        {WAVES.map((w) => {
          const tapes = tapesByWave(w.number);
          const set = tapes.filter((t) => config.overrides[t.id]).length;
          return (
            <details
              key={w.number}
              className="card overflow-hidden p-0"
              open={w.number === 1}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 hover:bg-ink-soft/40">
                <span className="font-serif text-lg text-white">
                  Wave {toRoman(w.number)} · {w.title}
                </span>
                <span className="text-xs text-slate-500">
                  {set}/{tapes.length} linked
                </span>
              </summary>
              <div className="space-y-4 border-t border-ink-line px-5 py-4">
                {tapes.map((t) => {
                  const resolved = resolveAudioUrl(t, config);
                  return (
                    <div key={t.id}>
                      <div className="flex items-baseline justify-between gap-3">
                        <label className="text-sm font-medium text-white">
                          {t.number}. {t.title}
                        </label>
                        <span className="text-[10px] uppercase tracking-wide text-slate-500">
                          {resolved.source}
                        </span>
                      </div>
                      <p className="mb-1.5 truncate text-xs text-slate-500">
                        {t.audioFile.split("/").pop()}
                      </p>
                      <input
                        className="input"
                        placeholder="Paste a streaming link for this tape (optional)…"
                        value={config.overrides[t.id] ?? ""}
                        onChange={(e) => setOverride(t.id, e.target.value)}
                      />
                      {!config.overrides[t.id] && (
                        <p className="mt-1 break-all text-[11px] text-slate-600">
                          Resolves to: {resolved.url}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-slate-500">
        Format note: <code className="text-aura-300">.flac</code> plays in
        Chrome, Firefox and Edge but not Safari — convert tapes to{" "}
        <code className="text-aura-300">.mp3</code> for the broadest support. Your
        host must allow cross-origin playback (CORS) and HTTPS range requests for
        smooth seeking.
      </p>
    </div>
  );
}
