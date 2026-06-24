"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { AppData, Profile, Session } from "./types";
import { TAPES, TOTAL_TAPES } from "./tapes";

const STORAGE_KEY = "turiya-v1";

const EMPTY: AppData = { profiles: [], activeProfileId: null, sessions: [] };

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

type Store = {
  ready: boolean;
  data: AppData;
  activeProfile: Profile | null;
  // profiles
  addProfile: (name: string, intention: string) => Profile;
  updateProfile: (id: string, patch: Partial<Omit<Profile, "id">>) => void;
  deleteProfile: (id: string) => void;
  setActiveProfile: (id: string) => void;
  // sessions
  addSession: (s: Omit<Session, "id" | "profileId">) => Session | null;
  updateSession: (id: string, patch: Partial<Session>) => void;
  deleteSession: (id: string) => void;
  sessionsForActive: () => Session[];
  // data mgmt
  exportJSON: () => string;
  importJSON: (json: string) => boolean;
};

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<AppData>(EMPTY);
  const [ready, setReady] = useState(false);

  // Load once on mount (client only).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AppData;
        setData({
          profiles: parsed.profiles ?? [],
          activeProfileId: parsed.activeProfileId ?? null,
          sessions: parsed.sessions ?? [],
        });
      }
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  // Persist on change (after initial load).
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* storage full / unavailable */
    }
  }, [data, ready]);

  const addProfile = useCallback((name: string, intention: string) => {
    const p: Profile = {
      id: uid(),
      name: name.trim() || "Seeker",
      intention: intention.trim(),
      createdAt: new Date().toISOString(),
    };
    setData((d) => ({
      ...d,
      profiles: [...d.profiles, p],
      activeProfileId: d.activeProfileId ?? p.id,
    }));
    return p;
  }, []);

  const updateProfile = useCallback(
    (id: string, patch: Partial<Omit<Profile, "id">>) => {
      setData((d) => ({
        ...d,
        profiles: d.profiles.map((p) => (p.id === id ? { ...p, ...patch } : p)),
      }));
    },
    []
  );

  const deleteProfile = useCallback((id: string) => {
    setData((d) => {
      const profiles = d.profiles.filter((p) => p.id !== id);
      return {
        profiles,
        sessions: d.sessions.filter((s) => s.profileId !== id),
        activeProfileId:
          d.activeProfileId === id ? profiles[0]?.id ?? null : d.activeProfileId,
      };
    });
  }, []);

  const setActiveProfile = useCallback((id: string) => {
    setData((d) => ({ ...d, activeProfileId: id }));
  }, []);

  const addSession = useCallback(
    (s: Omit<Session, "id" | "profileId">) => {
      let created: Session | null = null;
      setData((d) => {
        if (!d.activeProfileId) return d;
        created = { ...s, id: uid(), profileId: d.activeProfileId };
        return { ...d, sessions: [created, ...d.sessions] };
      });
      return created;
    },
    []
  );

  const updateSession = useCallback((id: string, patch: Partial<Session>) => {
    setData((d) => ({
      ...d,
      sessions: d.sessions.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    }));
  }, []);

  const deleteSession = useCallback((id: string) => {
    setData((d) => ({ ...d, sessions: d.sessions.filter((s) => s.id !== id) }));
  }, []);

  const sessionsForActive = useCallback(() => {
    if (!data.activeProfileId) return [];
    return data.sessions
      .filter((s) => s.profileId === data.activeProfileId)
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [data]);

  const exportJSON = useCallback(() => JSON.stringify(data, null, 2), [data]);

  const importJSON = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json) as AppData;
      if (!Array.isArray(parsed.profiles) || !Array.isArray(parsed.sessions))
        return false;
      setData({
        profiles: parsed.profiles,
        sessions: parsed.sessions,
        activeProfileId: parsed.activeProfileId ?? parsed.profiles[0]?.id ?? null,
      });
      return true;
    } catch {
      return false;
    }
  }, []);

  const activeProfile = useMemo(
    () => data.profiles.find((p) => p.id === data.activeProfileId) ?? null,
    [data]
  );

  const value: Store = {
    ready,
    data,
    activeProfile,
    addProfile,
    updateProfile,
    deleteProfile,
    setActiveProfile,
    addSession,
    updateSession,
    deleteSession,
    sessionsForActive,
    exportJSON,
    importJSON,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

// ── Derived progress helpers ─────────────────────────────────────────
export type Progress = {
  totalSessions: number;
  uniqueTapes: number;
  totalTapes: number;
  hoursPracticed: number;
  currentStreak: number; // consecutive days up to today
  lastSession: Session | null;
  completedTapeIds: Set<string>;
  waveCompletion: Record<number, { done: number; total: number }>;
};

export function computeProgress(sessions: Session[]): Progress {
  const completedTapeIds = new Set(sessions.map((s) => s.tapeId));

  // minutes -> hours
  const minutes = sessions.reduce(
    (sum, s) => sum + (s.durationMin ?? 0),
    0
  );

  // streak: count back from today over distinct practice days
  const days = new Set(
    sessions.map((s) => new Date(s.date).toISOString().slice(0, 10))
  );
  let streak = 0;
  const cursor = new Date();
  // allow today or yesterday to start the streak
  const todayKey = cursor.toISOString().slice(0, 10);
  const yesterday = new Date(cursor);
  yesterday.setDate(yesterday.getDate() - 1);
  const yKey = yesterday.toISOString().slice(0, 10);
  if (days.has(todayKey) || days.has(yKey)) {
    if (!days.has(todayKey)) cursor.setDate(cursor.getDate() - 1);
    while (days.has(cursor.toISOString().slice(0, 10))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
  }

  const waveCompletion: Record<number, { done: number; total: number }> = {};
  for (const t of TAPES) {
    if (!waveCompletion[t.wave]) waveCompletion[t.wave] = { done: 0, total: 0 };
    waveCompletion[t.wave].total++;
    if (completedTapeIds.has(t.id)) waveCompletion[t.wave].done++;
  }

  const sorted = [...sessions].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return {
    totalSessions: sessions.length,
    uniqueTapes: completedTapeIds.size,
    totalTapes: TOTAL_TAPES,
    hoursPracticed: Math.round((minutes / 60) * 10) / 10,
    currentStreak: streak,
    lastSession: sorted[0] ?? null,
    completedTapeIds,
    waveCompletion,
  };
}
