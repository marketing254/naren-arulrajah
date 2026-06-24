import { PillarIcons, CheckIcon } from "@/components/icons";
import type { Pillar } from "@/content/pillars";

export function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = PillarIcons[pillar.icon];
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-paper-300/10 bg-ink-800 p-7 transition-colors duration-300 hover:border-accent-500/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-2xl text-paper-50">{pillar.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent-300">{pillar.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-paper-300">{pillar.body}</p>
      <ul className="mt-5 space-y-2 border-t border-paper-300/10 pt-5">
        {pillar.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-sm text-paper-300">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}
