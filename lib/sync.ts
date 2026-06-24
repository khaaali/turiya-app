"use client";

const WORKER_URL = "https://turiya-sync.vnvnsairam.workers.dev";
const SYNC_KEY_STORAGE = "turiya-sync-key";

export function getSyncKey(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SYNC_KEY_STORAGE);
}

export function setSyncKey(key: string) {
  localStorage.setItem(SYNC_KEY_STORAGE, key);
}

export function removeSyncKey() {
  localStorage.removeItem(SYNC_KEY_STORAGE);
}

export function generateSyncKey(): string {
  return crypto.randomUUID();
}

export async function pushToCloud(key: string, data: unknown): Promise<boolean> {
  try {
    const res = await fetch(`${WORKER_URL}/sync/${key}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function pullFromCloud(key: string): Promise<unknown | null> {
  try {
    const res = await fetch(`${WORKER_URL}/sync/${key}`);
    if (!res.ok) return null;
    const { data } = await res.json();
    return data;
  } catch {
    return null;
  }
}
