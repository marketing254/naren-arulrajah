import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, MicIcon } from "@/components/icons";
import { shows, originalPodcast } from "@/content/podcasts";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "The podcasts Naren Arulrajah hosts and is a regular presence on, across dental, veterinary, medical aesthetics, ophthalmology, and legal practices.",
  alternates: { canonical: "/podcasts" },
};

export default function PodcastsPage() {
  return (
    <>
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="max-w-2xl">
                <Eyebrow>Shows</Eyebrow>
                <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.04] text-paper-50">
                  Podcasts
                </h1>
                <p className="mt-6 max-w-xl text-lg text-paper-300">
                  The shows where Naren co-runs the conversation, teaching practice owners
                  how to help the right patients find, like, and choose them.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-3">
                {shows.map((show) => (
                  <a
                    key={show.id}
                    href={show.links[0]?.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${show.name}`}
                    className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-paper-50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {show.logo ? (
                      <img
                        src={show.logo}
                        alt={show.name}
                        loading="lazy"
                        className="max-h-9 w-auto max-w-full object-contain"
                      />
                    ) : (
                      <span className="font-display text-sm font-semibold text-ink-900">
                        {show.abbr}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section theme="darker">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {shows.map((show, i) => (
              <Reveal key={show.id} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-paper-300/10 bg-ink-800 p-6">
                  <a
                    href={show.links[0]?.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${show.name}`}
                    className="group flex items-center gap-4"
                  >
                    {show.logo ? (
                      <span className="flex h-12 shrink-0 items-center justify-center rounded-xl bg-paper-50/95 px-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={show.logo}
                          alt={show.name}
                          loading="lazy"
                          className="h-7 w-auto max-w-[7rem] object-contain"
                        />
                      </span>
                    ) : (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft font-display text-sm font-semibold text-accent-300">
                        {show.abbr}
                      </span>
                    )}
                    <div>
                      <h2 className="font-display text-xl text-paper-50 transition-colors group-hover:text-accent-300">
                        {show.name}
                      </h2>
                      <p className="text-xs uppercase tracking-wide text-muted-500">
                        {show.specialty} · {show.role}
                      </p>
                    </div>
                  </a>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-paper-300">
                    {show.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {show.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href === "#" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 hover:text-accent-500"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Original podcast — coming soon */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-accent-500/40 bg-ink-800 p-8 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-300">
                <MicIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                  Coming soon
                </p>
                <h2 className="mt-1 font-display text-xl text-paper-50">{originalPodcast.name}</h2>
                <p className="mt-2 max-w-2xl text-sm text-paper-300">{originalPodcast.description}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection location="podcasts-final" />
    </>
  );
}
