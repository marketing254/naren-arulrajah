/**
 * Lightweight analytics helper. No provider is wired yet — set
 * NEXT_PUBLIC_ANALYTICS (GA4 id or "plausible") to activate. Until then this
 * logs to the console in dev so the funnel events are visible. See
 * CONTENT-TODO.md → "Conversion plumbing".
 */
type EventName =
  | "book_naren_click" // primary CTA — speaking / events
  | "book_naren_submit"
  | "book_msm_click" // secondary CTA — Ekwa Marketing Strategy Meeting (tracked separately)
  | "book_msm_submit"
  | "newsletter_submit"
  | "lead_submit";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export function track(event: EventName, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // GA4
  if (window.gtag) {
    window.gtag("event", event, props ?? {});
  }
  // Plausible
  if (window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${event}`, props ?? {});
  }
}
