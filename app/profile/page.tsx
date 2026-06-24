"use client";

import { useEffect, useRef, useState } from "react";
import { useStore, computeProgress } from "@/lib/store";
import { PageHeader } from "@/components/ui";
import {
  getSyncKey, setSyncKey, removeSyncKey, generateSyncKey,
  pushToCloud, pullFromCloud,
} from "@/lib/sync";
import type { AppData } from "@/lib/types";

export default function Profiles() {
  const {
    ready,
    data,
    activeProfile,
    addProfile,
    updateProfile,
    deleteProfile,
    setActiveProfile,
    sessionsForActive,
    exportJSON,
    importJSON,
  } = useStore();

  const [name, setName] = useState("");
  const [intention, setIntention] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  // Sync state
  const [syncKey, setSyncKeyState] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [syncInput, setSyncInput] = useState("");

  useEffect(() => { setSyncKeyState(getSyncKey()); }, []);

  if (!ready) return null;

  async function enableSync() {
    const key = generateSyncKey();
    setSyncKey(key);
    setSyncKeyState(key);
    const ok = await pushToCloud(key, data);
    setSyncStatus(ok ? "Sync enabled. Copy your key to use on other devices." : "Failed to connect. Try again.");
    setTimeout(() => setSyncStatus(null), 5000);
  }

  async function connectSync() {
    const key = syncInput.trim();
    if (!key) return;
    setSyncStatus("Connecting...");
    const remote = await pullFromCloud(key);
    if (!remote) { setSyncStatus("Key not found or no data yet."); return; }
    setSyncKey(key);
    setSyncKeyState(key);
    importJSON(JSON.stringify(remote));
    setSyncStatus("Connected! Data loaded from cloud.");
    setSyncInput("");
    setTimeout(() => setSyncStatus(null), 5000);
  }

  function disableSync() {
    removeSyncKey();
    setSyncKeyState(null);
    setSyncStatus("Sync disabled.");
    setTimeout(() => setSyncStatus(null), 3000);
  }

  async function pushNow() {
    if (!syncKey) return;
    const ok = await pushToCloud(syncKey, data);
    setSyncStatus(ok ? "Pushed to cloud." : "Push failed.");
    setTimeout(() => setSyncStatus(null), 3000);
  }

  function create(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const p = addProfile(name, intention);
    setActiveProfile(p.id);
    setName("");
    setIntention("");
  }

  function download() {
    const blob = new Blob([exportJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `turiya-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function onImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importJSON(String(reader.result));
      setMsg(ok ? "Data imported successfully." : "Import failed — invalid file.");
      setTimeout(() => setMsg(null), 4000);
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  return (
    <>
      <PageHeader
        eyebrow="Practitioners"
        title="Profiles"
        subtitle="Create a profile for each person practicing. Switch any time — each profile keeps its own sessions and progress."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* existing profiles */}
        <div>
          {data.profiles.length === 0 ? (
            <div className="card p-8 text-center text-sm text-slate-400">
              No profiles yet. Create one to begin →
            </div>
          ) : (
            <div className="space-y-4">
              {data.profiles.map((p) => {
                const isActive = p.id === activeProfile?.id;
                const count = data.sessions.filter((s) => s.profileId === p.id).length;
                const prog =
                  isActive && computeProgress(sessionsForActive());
                return (
                  <div
                    key={p.id}
                    className={`card p-5 ${isActive ? "border-aura-500/50 shadow-glow" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-aura-600/20 font-serif text-lg text-aura-200">
                          {p.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-white">{p.name}</p>
                          <p className="text-xs text-slate-500">
                            {count} session{count === 1 ? "" : "s"}
                            {prog ? ` · ${prog.uniqueTapes}/${prog.totalTapes} tapes` : ""}
                          </p>
                        </div>
                      </div>
                      {isActive ? (
                        <span className="chip border-aura-400/40 text-aura-200">
                          Active
                        </span>
                      ) : (
                        <button
                          onClick={() => setActiveProfile(p.id)}
                          className="btn-ghost px-3 py-1.5 text-xs"
                        >
                          Switch to
                        </button>
                      )}
                    </div>

                    {p.intention && (
                      <p className="mt-3 text-sm italic text-slate-400">
                        “{p.intention}”
                      </p>
                    )}

                    <div className="mt-4 flex gap-2">
                      <EditProfile
                        initialName={p.name}
                        initialIntention={p.intention}
                        onSave={(n, i) => updateProfile(p.id, { name: n, intention: i })}
                      />
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              `Delete "${p.name}" and all their sessions? This cannot be undone.`
                            )
                          )
                            deleteProfile(p.id);
                        }}
                        className="text-xs text-slate-500 hover:text-red-400"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* create + data tools */}
        <aside className="space-y-6">
          <form onSubmit={create} className="card space-y-4 p-5">
            <h3 className="font-serif text-lg text-white">New profile</h3>
            <div>
              <label className="label">Name</label>
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label">Intention (optional)</label>
              <textarea
                className="input resize-y"
                rows={3}
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                placeholder="Why are you doing this work? What do you hope to discover?"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Create profile
            </button>
          </form>

          <div className="card space-y-3 p-5">
            <h3 className="font-serif text-lg text-white">Your data</h3>
            <p className="text-xs text-slate-400">
              Back up or move data to another device with export / import.
            </p>
            <div className="flex gap-2">
              <button onClick={download} className="btn-ghost flex-1 text-xs">
                Export
              </button>
              <button
                onClick={() => fileRef.current?.click()}
                className="btn-ghost flex-1 text-xs"
              >
                Import
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="application/json"
                onChange={onImport}
                className="hidden"
              />
            </div>
            {msg && <p className="text-xs text-aura-300">{msg}</p>}
          </div>

          {/* Cloud Sync */}
          <div className="card space-y-4 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg text-white">Cloud sync</h3>
              {syncKey && (
                <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] text-green-300">
                  Active
                </span>
              )}
            </div>

            {syncKey ? (
              <>
                <p className="text-xs text-slate-400">
                  Your sync key — paste this on any other device to sync your data.
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-ink-soft px-3 py-2">
                  <code className="flex-1 break-all text-[10px] text-aura-300">{syncKey}</code>
                  <button
                    onClick={() => navigator.clipboard.writeText(syncKey)}
                    className="shrink-0 text-xs text-slate-400 hover:text-aura-300"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex gap-2">
                  <button onClick={pushNow} className="btn-ghost flex-1 text-xs">
                    Push now
                  </button>
                  <button onClick={disableSync} className="text-xs text-slate-500 hover:text-red-400">
                    Disable
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs text-slate-400">
                  Sync your profiles and sessions across all your devices via Cloudflare.
                </p>
                <button onClick={enableSync} className="btn-primary w-full text-xs">
                  Enable cloud sync
                </button>
                <div className="relative flex items-center gap-2">
                  <div className="h-px flex-1 bg-ink-line" />
                  <span className="text-xs text-slate-500">or join existing</span>
                  <div className="h-px flex-1 bg-ink-line" />
                </div>
                <div className="flex gap-2">
                  <input
                    className="input flex-1 text-xs"
                    placeholder="Paste sync key"
                    value={syncInput}
                    onChange={(e) => setSyncInput(e.target.value)}
                  />
                  <button onClick={connectSync} className="btn-ghost px-3 text-xs">
                    Connect
                  </button>
                </div>
              </>
            )}
            {syncStatus && <p className="text-xs text-aura-300">{syncStatus}</p>}
          </div>
        </aside>
      </div>
    </>
  );
}

function EditProfile({
  initialName,
  initialIntention,
  onSave,
}: {
  initialName: string;
  initialIntention: string;
  onSave: (name: string, intention: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [n, setN] = useState(initialName);
  const [i, setI] = useState(initialIntention);

  if (!open)
    return (
      <button onClick={() => setOpen(true)} className="text-xs text-aura-300 hover:text-aura-200">
        Edit
      </button>
    );

  return (
    <div className="mt-1 w-full space-y-2 rounded-xl border border-ink-line bg-ink/60 p-3">
      <input className="input" value={n} onChange={(e) => setN(e.target.value)} />
      <textarea
        className="input resize-y"
        rows={2}
        value={i}
        onChange={(e) => setI(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={() => {
            onSave(n.trim() || initialName, i.trim());
            setOpen(false);
          }}
          className="btn-primary px-3 py-1.5 text-xs"
        >
          Save
        </button>
        <button onClick={() => setOpen(false)} className="btn-ghost px-3 py-1.5 text-xs">
          Cancel
        </button>
      </div>
    </div>
  );
}
