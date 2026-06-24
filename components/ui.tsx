"use client";

import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-aura-300">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-3xl text-white sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="card p-5">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1.5 font-serif text-3xl text-white">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-soft">
      <div
        className="h-full rounded-full bg-gradient-to-r from-aura-500 to-gold-400 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function EmptyState({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="card flex flex-col items-center gap-3 p-12 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-aura-600/15">
        <span className="h-5 w-5 rounded-full bg-aura-300 shadow-glow" />
      </div>
      <h3 className="font-serif text-xl text-white">{title}</h3>
      <p className="max-w-sm text-sm text-slate-400">{body}</p>
      <Link href={href} className="btn-primary mt-2">
        {cta}
      </Link>
    </div>
  );
}

export function FocusBadge({ focus }: { focus: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-aura-500/30 bg-aura-600/10 px-2.5 py-1 text-xs font-medium text-aura-200">
      {focus}
    </span>
  );
}
