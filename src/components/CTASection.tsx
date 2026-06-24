import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PRIMARY_CTA, MSM_CTA } from "@/lib/site";

/**
 * Full-bleed conversion band. Defaults to the primary "Book Naren" CTA; pass
 * cta="msm" for the separate Marketing Strategy Meeting flow.
 */
export function CTASection({
  cta = "naren",
  heading,
  subcopy,
  location = "cta-band",
}: {
  cta?: "naren" | "msm";
  heading?: string;
  subcopy?: string;
  location?: string;
}) {
  const isMsm = cta === "msm";
  const target = isMsm ? MSM_CTA : PRIMARY_CTA;

  const defaultHeading = isMsm
    ? "Ready to grow your practice?"
    : "Bring Naren to your stage.";
  const defaultSub = isMsm
    ? "A free, high-value marketing session with Ekwa, Naren's agency. A working session focused on your practice and your numbers. Not a sales call."
    : "Keynotes, workshops, panels, webinars, and podcast interviews on marketing, AI, and the founder journey. Let's talk about your event.";

  return (
    <section className="relative isolate overflow-hidden bg-ink-800 py-24 grain">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80 glow-accent" />
      <Container className="relative z-[1]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[length:var(--text-display)] font-semibold leading-tight text-paper-50">
            {heading ?? defaultHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper-300">
            {subcopy ?? defaultSub}
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href={target.href}
              size="lg"
              analyticsEvent={isMsm ? "book_msm_click" : "book_naren_click"}
              analyticsProps={{ location }}
            >
              {target.longLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
