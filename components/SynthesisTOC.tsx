"use client";

import { useEffect, useRef, useState } from "react";

export type TocItem = { id: string; label: string; short: string };

// Shared TOC logic used by both the mobile strip and the desktop sidebar.
function useTOC(items: TocItem[]) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost entry that is intersecting.
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  function jump(e: React.MouseEvent, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return { active, jump };
}

// ── Mobile: sticky horizontal pill strip ──────────────────────────────
export function SynthesisStripNav({ items }: { items: TocItem[] }) {
  const { active, jump } = useTOC(items);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Auto-scroll the strip to keep the active pill visible.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <nav
      aria-label="Synthesis sections"
      className="sticky top-16 z-20 -mx-4 flex items-center gap-2 overflow-x-auto border-b border-ink-line bg-ink/90 px-4 py-2.5 backdrop-blur-md sm:-mx-6 sm:px-6 lg:hidden"
    >
      {items.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            ref={isActive ? activeRef : undefined}
            href={`#${s.id}`}
            onClick={(e) => jump(e, s.id)}
            className={`shrink-0 rounded-full border px-3 py-1 text-xs transition ${
              isActive
                ? "border-aura-400 bg-aura-600/30 text-white"
                : "border-ink-line bg-ink-soft/60 text-slate-400 hover:text-white"
            }`}
          >
            {s.short}
          </a>
        );
      })}
    </nav>
  );
}

// ── Desktop: sticky sidebar TOC ───────────────────────────────────────
export function SynthesisSidebar({ items }: { items: TocItem[] }) {
  const { active, jump } = useTOC(items);

  return (
    <nav
      aria-label="Synthesis sections"
      className="hidden lg:flex lg:flex-col lg:gap-0.5"
    >
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        On this page
      </p>
      {items.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => jump(e, s.id)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
              isActive
                ? "bg-ink-soft text-white"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                isActive ? "bg-aura-300" : "bg-transparent"
              }`}
            />
            {s.label}
          </a>
        );
      })}
    </nav>
  );
}
