"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import { ArrowRight } from "@/components/icons";
import { type Article } from "@/content/articles";

const isoDate = (d?: string) => (d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? formatDate(d) : d);

export function ArticleList({ articles }: { articles: Article[] }) {
  const sorted = useMemo(
    () => [...articles].sort((a, b) => ((a.date ?? "") < (b.date ?? "") ? 1 : -1)),
    [articles],
  );
  const publications = useMemo(
    () => Array.from(new Set(sorted.map((a) => a.publication))),
    [sorted],
  );
  const [pub, setPub] = useState<string>("all");
  const shown = pub === "all" ? sorted : sorted.filter((a) => a.publication === pub);

  return (
    <div>
      {/* Publication filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterPill active={pub === "all"} onClick={() => setPub("all")}>
          All <span className="opacity-60">({sorted.length})</span>
        </FilterPill>
        {publications.map((p) => {
          const count = sorted.filter((a) => a.publication === p).length;
          return (
            <FilterPill key={p} active={pub === p} onClick={() => setPub(p)}>
              {p} <span className="opacity-60">({count})</span>
            </FilterPill>
          );
        })}
      </div>

      {/* Card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((a) => (
          <a
            key={a.id}
            href={a.url}
            target={a.url === "#" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-paper-300/10 bg-ink-800 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-300">
                {a.publication}
              </span>
              {a.date && <span className="text-xs text-muted-500">{isoDate(a.date)}</span>}
            </div>
            <h3 className="mt-3 flex-1 font-display text-lg leading-snug text-paper-50 group-hover:text-accent-300">
              {a.title}
            </h3>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-accent-500 bg-accent-500 text-ink-900"
          : "border-paper-300/20 text-paper-300 hover:border-accent-300 hover:text-accent-300",
      )}
    >
      {children}
    </button>
  );
}
