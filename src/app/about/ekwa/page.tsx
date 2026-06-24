import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ArrowRight } from "@/components/icons";
import { testimonials } from "@/content/testimonials";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ekwa Marketing",
  description:
    "Ekwa Marketing is the healthcare marketing agency Naren Arulrajah founded and leads. It helps practices get found, get liked, and get chosen, with a system built around real results.",
  alternates: { canonical: "/about/ekwa" },
};

const produces = [
  {
    title: "Get found",
    body: "SEO and local search so the right patients find the practice first, not the competition down the road.",
  },
  {
    title: "Get liked",
    body: "Websites, video, and a steady flow of reviews that build trust the moment someone lands.",
  },
  {
    title: "Get chosen",
    body: "Clear calls to action and an easy path to book, so visitors turn into booked patients.",
  },
  {
    title: "Stay consistent",
    body: "The same proven moves every month, measured against the numbers that actually predict growth.",
  },
];

export default function EkwaPage() {
  return (
    <>
      {/* Hero */}
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div>
                <Eyebrow>About Ekwa Marketing</Eyebrow>
                <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.03] text-paper-50">
                  The agency Naren built.
                </h1>
                <p className="mt-6 max-w-xl text-lg text-paper-300">
                  Ekwa Marketing is the marketing agency Naren Arulrajah founded and still
                  leads. Its whole job is to help a practice get found, get liked, and get
                  chosen by the right patients.
                </p>
                <p className="mt-5 max-w-xl text-lg text-paper-300">
                  Powered by a large in-house team of specialists, Ekwa works predominantly
                  with healthcare practices. Every part of what it does ladders up to one outcome:
                  more of the right patients walking through the door, month after month.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-paper-300/10 bg-ink-900 p-10">
                {/* Colored logo sits in a small white rectangle sized to the logo;
                    the rest of the panel is black. */}
                <span className="inline-flex rounded-lg bg-white px-6 py-5 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/ekwa.png"
                    alt="Ekwa Marketing logo"
                    width={233}
                    height={82}
                    className="h-auto w-[200px] object-contain"
                  />
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What Ekwa does */}
      <Section theme="darker">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>What Ekwa does</Eyebrow>
              <h2 className="text-[length:var(--text-h2)] font-semibold text-paper-50">
                One system, run every month.
              </h2>
              <p className="mt-4 text-lg text-paper-300">
                Ekwa runs the same growth system Naren teaches in public, for healthcare
                practices across the country.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {produces.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-paper-300/10 bg-ink-800 p-6">
                  <h3 className="font-display text-xl text-paper-50">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-300">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social proof — featured clients */}
      <Section theme="light">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                <span aria-hidden className="h-px w-6 bg-accent-600" />
                Featured clients
              </p>
              <h2 className="text-[length:var(--text-h2)] font-semibold text-[var(--color-paper-ink)]">
                Practices that grew with Ekwa
              </h2>
              <p className="mt-3 text-sm text-black/55">
                {/* TODO: add featured-client logos in one place when supplied. */}
                Real reviews from healthcare practices that work with the Ekwa team.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <TestimonialCard testimonial={t} theme="light" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <Button href={SITE.org.url} variant="ghost" external>
                Visit ekwa.com
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection cta="msm" location="ekwa-final" />
    </>
  );
}
