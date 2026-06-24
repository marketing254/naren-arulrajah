import type { Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/cn";

export function TestimonialCard({
  testimonial,
  theme = "dark",
}: {
  testimonial: Testimonial;
  theme?: "dark" | "light";
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border p-7",
        theme === "dark"
          ? "border-paper-300/10 bg-ink-800"
          : "border-black/10 bg-white",
      )}
    >
      <span aria-hidden className="font-display text-5xl leading-none text-accent-500">
        &ldquo;
      </span>
      <blockquote
        className={cn(
          "mt-2 flex-1 text-base leading-relaxed",
          theme === "dark" ? "text-paper-300" : "text-[var(--color-paper-ink)]",
        )}
      >
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-300"
        >
          {/* TODO: headshot */}
          {(testimonial.name?.[0] ?? "•").toUpperCase()}
        </span>
        <span className="text-sm">
          <span
            className={cn(
              "block font-semibold",
              theme === "dark" ? "text-paper-50" : "text-[var(--color-paper-ink)]",
            )}
          >
            {testimonial.name}
          </span>
          <span className="block text-muted-500">
            {testimonial.practice} · {testimonial.location}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
