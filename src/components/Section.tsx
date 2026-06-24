import { cn } from "@/lib/cn";

type Theme = "dark" | "darker" | "light";

const themeClasses: Record<Theme, string> = {
  dark: "bg-ink-900 text-paper-50",
  darker: "bg-ink-800 text-paper-50",
  light: "bg-[var(--color-paper-bg)] text-[var(--color-paper-ink)]",
};

/**
 * Vertical section wrapper with theme + optional film grain.
 * Use sparingly-spaced, generous vertical rhythm.
 */
export function Section({
  theme = "dark",
  grain = false,
  className,
  id,
  children,
}: {
  theme?: Theme;
  grain?: boolean;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden py-20 sm:py-28",
        themeClasses[theme],
        grain && "grain",
        className,
      )}
    >
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}
