import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { CalendarIcon, VideoIcon, MicIcon, GlobeIcon, CheckIcon } from "@/components/icons";
import { SPEAKING_TOPICS, MSM_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Naren to Speak",
  description:
    "Book Naren Arulrajah for keynotes, workshops, panels, webinars, and podcast interviews. Topics include SEO, the impact of AI on search and marketing, healthcare practice marketing, and the founder journey.",
  alternates: { canonical: "/book" },
};

const bookingOptions = [
  {
    icon: CalendarIcon,
    title: "Live / In-Person Speaking",
    body: "Keynotes, workshops, and panels for conferences, associations, and study clubs.",
  },
  {
    icon: GlobeIcon,
    title: "Virtual / Online Events",
    body: "Webinar speaker, virtual keynote, or featured voice on an online summit.",
  },
  {
    icon: MicIcon,
    title: "Podcast Interviews",
    body: "Naren as a guest on your show: marketing, AI, leadership, and the founder journey.",
  },
  {
    icon: VideoIcon,
    title: "Media & Press",
    body: "Journalist interviews, expert commentary, and publication contributions.",
  },
];

export default function BookNarenPage() {
  return (
    <>
      {/* Hero — copy + booking form side by side for instant access */}
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <Reveal>
              <div>
                <Eyebrow>Book Naren</Eyebrow>
                <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.04] text-paper-50">
                  Bring Naren to your stage.
                </h1>
                <p className="mt-6 max-w-xl text-lg text-paper-300">
                  Naren speaks on marketing, the impact of AI, and the founder journey,
                  with the energy and substance that makes an event memorable. Tell us
                  about your audience and let&apos;s make it happen.
                </p>
                <ul className="mt-7 space-y-2.5">
                  {["Keynotes, panels, and workshops", "Webinars and virtual events", "Podcast guest interviews"].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-paper-300">
                      <CheckIcon className="h-5 w-5 shrink-0 text-accent-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-paper-300/10 bg-ink-800 p-6 sm:p-8">
                <h2 className="font-display text-2xl text-paper-50">Tell us about your event</h2>
                <p className="mb-6 mt-2 text-sm text-muted-500">
                  Send a quick note and Naren&apos;s team will get back to you to confirm.
                </p>
                <LeadForm type="booking" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Booking options */}
      <Section theme="darker">
        <Container>
          <Reveal>
            <h2 className="mb-10 font-display text-2xl text-paper-50 sm:text-3xl">
              Ways to work together
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {bookingOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <Reveal key={opt.title} delay={i * 0.06}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-paper-300/10 bg-ink-800 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-paper-50">{opt.title}</h3>
                      <p className="mt-2 text-sm text-paper-300">{opt.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Speaking topics */}
      <Section theme="dark" grain>
        <Container>
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <Eyebrow>Speaking topics</Eyebrow>
              <h2 className="text-[length:var(--text-h2)] font-semibold text-paper-50">
                What Naren speaks about
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {SPEAKING_TOPICS.map((topic, i) => (
              <Reveal key={topic} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border border-paper-300/10 bg-ink-800 p-5">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                  <span className="text-paper-50">{topic}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Separate, secondary MSM CTA — Ekwa discovery call */}
      <Section theme="dark" grain className="!py-16">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 rounded-3xl border border-paper-300/10 bg-ink-800 p-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-500">
                  Looking for marketing help?
                </p>
                <h3 className="mt-2 font-display text-xl text-paper-50">
                  Book a Marketing Strategy Meeting with Ekwa
                </h3>
                <p className="mt-2 text-sm text-paper-300">
                  A separate, no-obligation working session for your practice&apos;s growth.
                </p>
              </div>
              <Button
                href={MSM_CTA.href}
                variant="ghost"
                size="lg"
                className="shrink-0"
                analyticsEvent="book_msm_click"
                analyticsProps={{ location: "book-naren-secondary" }}
              >
                {MSM_CTA.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
