import { cn } from "@/lib/cn";

/**
 * Visible placeholder for not-yet-supplied photography. Per the brief: never
 * invent imagery — show a labelled TODO box instead. Swap these for <Image>
 * once real assets land (CONTENT-TODO.md → Photography).
 */
export function PlaceholderImage({
  label,
  className,
  ratio = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-accent-500/40 bg-ink-800",
        ratio,
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 glow-accent"
      />
      <div className="relative z-[1] px-4 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-300">
          TODO · Photo
        </p>
        <p className="mt-1 text-xs text-muted-500">{label}</p>
      </div>
    </div>
  );
}
