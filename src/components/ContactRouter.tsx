"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { LeadForm, type LeadType } from "@/components/LeadForm";

const OPTIONS: { key: Exclude<LeadType, "msm">; label: string }[] = [
  { key: "general", label: "General" },
  { key: "speaking", label: "Speaking" },
  { key: "media", label: "Media" },
];

export function ContactRouter() {
  const [type, setType] = useState<Exclude<LeadType, "msm">>("general");

  return (
    <div>
      <div
        className="mb-8 inline-flex rounded-full border border-paper-300/15 bg-ink-800 p-1"
        role="tablist"
        aria-label="Inquiry type"
      >
        {OPTIONS.map((opt) => (
          <button
            key={opt.key}
            role="tab"
            aria-selected={type === opt.key}
            onClick={() => setType(opt.key)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              type === opt.key ? "bg-accent-500 text-ink-900" : "text-paper-300 hover:text-paper-50",
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <LeadForm type={type} />
    </div>
  );
}
