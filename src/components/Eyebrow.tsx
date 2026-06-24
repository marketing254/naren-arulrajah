import { cn } from "@/lib/cn";

/** Small uppercase accent label that sits above a headline. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-accent-500" />
      {children}
    </p>
  );
}
