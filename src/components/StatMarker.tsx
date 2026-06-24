/**
 * Credibility marker. Numbers are intentionally placeholders — do NOT invent
 * stats. Supply real figures or omit the strip (CONTENT-TODO.md → Copy/Proof).
 */
export function StatMarker({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl font-semibold tabular-nums text-accent-300 sm:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-paper-300">{label}</p>
    </div>
  );
}
