"use client";

import { useCallback, useEffect, useState } from "react";
import type { Tape } from "./tapes";
import { APP_CONFIG } from "./config";

// Audio source configuration.
// Resolution order for a tape's playable URL:
//   1. A per-tape override URL (set in the Audio settings page) — for unique
//      streaming links / signed URLs.
//   2. A global base URL (set in settings) joined with the tape's file path.
//   3. Static APP_CONFIG.audioBaseUrl (checked into git).
//   4. The local /audio/<path> fallback (files dropped into public/audio).
// Per-tape overrides and user base URL are stored in localStorage.

const KEY = "turiya-audio-v1";
const EVT = "turiya-audio-change";

const CONFIG_BASE = (APP_CONFIG.audioBaseUrl || "").replace(/\/+$/, "");

export type AudioConfig = {
  baseUrl: string; // optional; joined with tape.audioFile
  overrides: Record<string, string>; // tapeId -> full URL
};

const DEFAULT: AudioConfig = { baseUrl: "", overrides: {} };

export function loadConfig(): AudioConfig {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT;
    const p = JSON.parse(raw) as Partial<AudioConfig>;
    return { baseUrl: p.baseUrl ?? "", overrides: p.overrides ?? {} };
  } catch {
    return DEFAULT;
  }
}

function saveConfig(c: AudioConfig) {
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
    window.dispatchEvent(new Event(EVT));
  } catch {
    /* storage unavailable */
  }
}

// Encode each path segment but keep the slashes intact.
function encodePath(p: string) {
  return p
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

function isAbsolute(url: string) {
  return /^https?:\/\//i.test(url);
}

export type Resolved = {
  url: string;
  source: "override" | "base" | "env" | "local";
};

export function resolveAudioUrl(tape: Tape, c: AudioConfig): Resolved {
  const ov = c.overrides[tape.id]?.trim();
  if (ov) return { url: ov, source: "override" };

  const userBase = (c.baseUrl || "").trim().replace(/\/+$/, "");
  if (userBase) {
    return { url: `${userBase}/${encodePath(tape.audioFile)}`, source: "base" };
  }
  if (CONFIG_BASE) {
    return { url: `${CONFIG_BASE}/${encodePath(tape.audioFile)}`, source: "env" };
  }
  return { url: `/audio/${encodePath(tape.audioFile)}`, source: "local" };
}

// A configured source means the user (or env) has pointed us somewhere on
// purpose; "local" is just the default fallback to public/audio.
export function isConfigured(r: Resolved) {
  return r.source !== "local";
}

export function useAudioConfig() {
  const [config, setConfig] = useState<AudioConfig>(DEFAULT);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConfig(loadConfig());
    setReady(true);
    const handler = () => setConfig(loadConfig());
    window.addEventListener(EVT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const update = useCallback((fn: (c: AudioConfig) => AudioConfig) => {
    setConfig((prev) => {
      const next = fn(prev);
      saveConfig(next);
      return next;
    });
  }, []);

  const setBaseUrl = useCallback(
    (url: string) => update((c) => ({ ...c, baseUrl: url })),
    [update]
  );

  const setOverride = useCallback(
    (id: string, url: string) =>
      update((c) => {
        const overrides = { ...c.overrides };
        const v = url.trim();
        if (v) overrides[id] = v;
        else delete overrides[id];
        return { ...c, overrides };
      }),
    [update]
  );

  const replaceConfig = useCallback(
    (c: AudioConfig) => update(() => ({ baseUrl: c.baseUrl ?? "", overrides: c.overrides ?? {} })),
    [update]
  );

  const reset = useCallback(() => update(() => DEFAULT), [update]);

  return {
    config,
    ready,
    envBase: CONFIG_BASE,
    setBaseUrl,
    setOverride,
    replaceConfig,
    reset,
  };
}

// Exposed so other UI (player) can flag obviously-wrong links.
export { isAbsolute };
