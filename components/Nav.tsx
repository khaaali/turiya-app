"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/waves", label: "Library" },
  { href: "/synthesis", label: "Synthesis" },
  { href: "/journal", label: "Journal" },
  { href: "/audio", label: "Audio" },
  { href: "/profile", label: "Profiles" },
];

export function Nav() {
  const pathname = usePathname();
  const { ready, profiles, activeProfile, setActiveProfile } = useStoreSafe();

  return (
    <header className="sticky top-0 z-30 -mx-4 border-b border-ink-line bg-ink/80 px-4 backdrop-blur-md sm:-mx-6 sm:px-6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-aura-600/20">
            <span className="absolute inset-0 animate-breathe rounded-full bg-aura-500/30" />
            <span className="relative h-3.5 w-3.5 rounded-full bg-aura-300 shadow-glow" />
          </span>
          <span className="hidden font-serif text-lg tracking-wide text-white sm:block">
            Tur<span className="text-aura-300">īya</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`shrink-0 rounded-lg px-2.5 py-2 text-sm transition sm:px-3 ${
                  active
                    ? "bg-ink-soft text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block">
          {ready && profiles.length > 0 ? (
            <select
              value={activeProfile?.id ?? ""}
              onChange={(e) => setActiveProfile(e.target.value)}
              className="rounded-lg border border-ink-line bg-ink-soft px-2.5 py-1.5 text-sm text-aura-200 outline-none focus:border-aura-400"
              aria-label="Active profile"
            >
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          ) : (
            <Link href="/profile" className="btn-ghost px-3 py-1.5 text-xs">
              Create profile
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

// Avoid hard crash if Nav renders before provider hydration edge-cases.
function useStoreSafe() {
  const s = useStore();
  return {
    ready: s.ready,
    profiles: s.data.profiles,
    activeProfile: s.activeProfile,
    setActiveProfile: s.setActiveProfile,
  };
}
