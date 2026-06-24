"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Tape } from "@/lib/tapes";
import { useAudioConfig, resolveAudioUrl, isConfigured } from "@/lib/audio";

// Plays a tape from its resolved source.
// - Configured sources (override / base / env) render the player immediately —
//   no HEAD pre-flight, so cross-origin streaming links work without CORS pain.
// - The unconfigured local fallback (/audio/...) is HEAD-checked so we only show
//   a player when the file is actually present; otherwise we nudge to settings.

export function AudioPlayer({ tape }: { tape: Tape }) {
  const { config, ready } = useAudioConfig();
  const [localExists, setLocalExists] = useState<boolean | null>(null);
  const [errored, setErrored] = useState(false);

  const resolved = ready ? resolveAudioUrl(tape, config) : null;
  const configured = resolved ? isConfigured(resolved) : false;

  // reset error state whenever the source changes
  useEffect(() => {
    setErrored(false);
  }, [resolved?.url]);

  // only probe the local fallback (same-origin, HEAD is safe here)
  useEffect(() => {
    if (!resolved || configured) {
      setLocalExists(null);
      return;
    }
    let cancelled = false;
    fetch(resolved.url, { method: "HEAD" })
      .then((r) => !cancelled && setLocalExists(r.ok))
      .catch(() => !cancelled && setLocalExists(false));
    return () => {
      cancelled = true;
    };
  }, [resolved, configured]);

  if (!ready || !resolved) return null;

  const showPlayer = configured ? !errored : localExists === true;

  return (
    <div className="mt-4 border-t border-ink-line pt-4">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xs uppercase tracking-wide text-slate-400">Audio</h4>
        <Link href="/audio" className="text-xs text-aura-300 hover:text-aura-200">
          Configure
        </Link>
      </div>

      {showPlayer ? (
        <audio
          key={resolved.url}
          controls
          preload="none"
          className="w-full"
          src={resolved.url}
          onError={() => setErrored(true)}
        >
          Your browser does not support audio playback.
        </audio>
      ) : configured && errored ? (
        <p className="text-xs leading-relaxed text-slate-500">
          Couldn&apos;t load this track. Check the streaming link in{" "}
          <Link href="/audio" className="text-aura-300">
            Audio settings
          </Link>
          .
        </p>
      ) : (
        <p className="text-xs leading-relaxed text-slate-500">
          No source set. Add a streaming link in{" "}
          <Link href="/audio" className="text-aura-300">
            Audio settings
          </Link>
          , or drop files into <code className="text-aura-300">public/audio/</code>.
        </p>
      )}
    </div>
  );
}
