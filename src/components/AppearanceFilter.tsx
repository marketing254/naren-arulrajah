"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import { ArrowRight } from "@/components/icons";
import type { Appearance, AppearanceType } from "@/content/appearances";

const TAB_LABELS: { key: AppearanceType; label: string }[] = [
  { key: "interview", label: "Interviews" },
  { key: "webinar", label: "Webinars" },
  { key: "feature", label: "Features" },
];

export function AppearanceFilter({ appearances }: { appearances: Appearance[] }) {
  const [active, setActive] = useState<AppearanceType | "all">("all");
  const filtered = (
    active === "all" ? appearances : appearances.filter((a) => a.type === active)
  )
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first

  // Only show tabs for types that actually have entries.
  const present = new Set(appearances.map((a) => a.type));
  const tabs: { key: AppearanceType | "all"; label: string }[] = [
    { key: "all", label: "All" },
    ...TAB_LABELS.filter((t) => present.has(t.key)),
  ];

  return (
    <div>
      <div
        className={cn("mb-8 flex flex-wrap gap-2", tabs.length <= 2 && "hidden")}
        role="tablist"
        aria-label="Filter appearances"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === tab.key
                ? "bg-accent-500 text-ink-900"
                : "border border-paper-300/20 text-paper-300 hover:border-accent-300 hover:text-accent-300",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-paper-300/10 border-y border-paper-300/10">
        {filtered.map((a) => (
          <li key={a.id}>
            <a
              href={a.url}
              target={a.url === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                {a.videoId && (
                  <div className="relative hidden aspect-video w-28 shrink-0 overflow-hidden rounded-lg bg-ink-900 sm:block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${a.videoId}/mqdefault.jpg`}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">
                    {a.type} · {a.outlet}
                  </p>
                  <p className="mt-1 font-display text-lg text-paper-50 group-hover:text-accent-300">
                    {a.title}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-4 text-sm text-muted-500">
                <span className="hidden sm:inline">{formatDate(a.date)}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
