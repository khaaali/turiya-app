"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import type { Tape } from "@/lib/tapes";
import { useAudioConfig, resolveAudioUrl, isConfigured } from "@/lib/audio";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

function formatTime(seconds: number) {
  if (isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ tape }: { tape: Tape }) {
  const { config, ready } = useAudioConfig();
  const [localExists, setLocalExists] = useState<boolean | null>(null);
  const [errored, setErrored] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const resolved = ready ? resolveAudioUrl(tape, config) : null;
  const configured = resolved ? isConfigured(resolved) : false;

  // reset error state whenever the source changes
  useEffect(() => {
    setErrored(false);
    setIsPlaying(false);
    setCurrentTime(0);
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

  const showPlayer = configured ? !errored : localExists === true;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onError = () => setErrored(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [resolved?.url, showPlayer]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!ready || !resolved) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mt-4 border-t border-ink-line pt-4">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-xs uppercase tracking-wide text-slate-400">Audio</h4>
        <Link href="/audio" className="text-xs text-aura-300 hover:text-aura-200">
          Configure
        </Link>
      </div>

      {showPlayer ? (
        <div className="rounded-2xl border border-ink-line bg-ink p-5 shadow-glow">
          <audio ref={audioRef} preload="none" src={resolved.url} />

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-aura-600/20 text-aura-300 transition-all hover:bg-aura-600/30 hover:text-aura-200"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" fill="currentColor" />
                ) : (
                  <Play className="ml-1 h-5 w-5" fill="currentColor" />
                )}
              </button>

              <div className="flex flex-col items-end">
                <span className="font-serif text-lg text-slate-200 leading-none">
                  {formatTime(currentTime)}
                </span>
                <span className="text-xs text-slate-500 mt-1">
                  / {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Scrub Bar */}
            <div className="relative flex h-3 w-full items-center">
              {/* Track Background */}
              <div className="absolute left-0 top-1 h-1.5 w-full rounded-full bg-ink-line" />
              {/* Track Fill */}
              <div
                className="absolute left-0 top-1 h-1.5 rounded-full bg-gradient-to-r from-aura-500 to-gold-400"
                style={{ width: `${progressPercent}%` }}
              />
              {/* Invisible Native Input */}
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="absolute left-0 top-0 h-3 w-full cursor-pointer opacity-0"
              />
            </div>
            
            {/* Volume Control */}
            <div className="flex items-center gap-2">
               <button onClick={toggleMute} className="text-slate-400 transition-colors hover:text-aura-300">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
               </button>
            </div>
          </div>
        </div>
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
