import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { LogoMarquee } from "@/components/LogoMarquee";
import { PillarCard } from "@/components/PillarCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { QuoteRotator } from "@/components/QuoteRotator";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, MicIcon, VideoIcon, PenIcon, BookIcon, PlayIcon, CheckIcon } from "@/components/icons";

import { pillars } from "@/content/pillars";
import { quotes } from "@/content/quotes";
import { testimonials } from "@/content/testimonials";
import { youtubeVideos } from "@/content/videos";
import { shows } from "@/content/podcasts";
import { stats } from "@/content/stats";

const NAV_CARDS = [
  { label: "Interviews", href: "/interviews", icon: VideoIcon, blurb: "Naren as a guest, on podcasts and on screen." },
  { label: "Podcasts", href: "/podcasts", icon: MicIcon, blurb: "The shows he hosts across healthcare." },
  { label: "Articles", href: "/articles", icon: PenIcon, blurb: "Writing by and about Naren." },
  { label: "Books", href: "/books", icon: BookIcon, blurb: "Published books and guides." },
  { label: "Highlights", href: "/highlights", icon: PlayIcon, blurb: "Short, sharp video insights." },
];

export default function Home() {
  const latestVideo = youtubeVideos[0];
  const featuredShow = shows[0];

  return (
    <>
      <Hero />

      {/* Trust strip */}
      <Section theme="darker" className="!py-14">
        <Container>
          <Reveal>
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-500">
              As seen across
            </p>
            <LogoMarquee caption="Trusted by healthcare practices and the shows that serve them." />
          </Reveal>
        </Container>
      </Section>

      {/* The big idea + the three pillars (merged into one section) */}
      <Section theme="darker">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Eyebrow>The big idea</Eyebrow>
              <h2 className="text-[length:var(--text-display)] font-semibold leading-[1.06] text-paper-50">
                Marketing is helping the right patients{" "}
                <span className="text-accent-300">find you, like you,</span> and{" "}
                <span className="text-accent-300">choose you.</span>
              </h2>
              <p className="mt-5 text-lg text-paper-300">
                That&apos;s the whole job. Naren turns it into a predictable system for
                healthcare practices, built on three things.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 0.08}>
                <PillarCard pillar={pillar} />
              </Reveal>
            ))}
          </div>

          {/* Keys to success — the throughline beneath find / like / choose */}
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-accent-500/30 bg-accent-soft/50 p-7 sm:flex-row sm:items-center sm:gap-10">
              <div className="sm:max-w-[15rem]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  And the keys to success
                </p>
                <h3 className="mt-2 font-display text-xl leading-snug text-paper-50">
                  Do it consistently. Measure what matters.
                </h3>
              </div>
              <ul className="grid flex-1 gap-3 sm:grid-cols-2">
                <li className="flex items-start gap-2 text-sm text-paper-300">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  Show up consistently, every week.
                </li>
                <li className="flex items-start gap-2 text-sm text-paper-300">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  Measure what predicts real growth.
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Story teaser + credibility band */}
      <Section theme="dark" grain>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>The story</Eyebrow>
                <h2 className="text-[length:var(--text-display)] font-semibold leading-[1.06] text-paper-50">
                  Built a system. Not a guessing game.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-paper-300">
                  Naren founded Ekwa Marketing to give healthcare practices a partner that
                  actually moves the needle. Today he teaches the same system in public, on
                  stage, on podcasts, and in print.
                </p>
                <div className="mt-7">
                  <Button href="/about" variant="ghost">
                    Read Naren&apos;s story
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Credibility band — first two values are placeholders (see content/stats.ts) */}
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper-300/10 bg-paper-300/10">
                {stats.map((s) => (
                  <div key={s.label} className="bg-ink-800 p-6 sm:p-8">
                    <p className="font-display text-3xl font-semibold tabular-nums text-accent-300 sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm text-paper-300">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Featured content */}
      <Section theme="darker">
        <Container>
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow>Latest from Naren</Eyebrow>
                <h2 className="text-[length:var(--text-h2)] font-semibold text-paper-50">
                  Always something new.
                </h2>
              </div>
              <Button href="/highlights" variant="link">
                See all highlights
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div>
                {latestVideo && (
                  <YouTubeEmbed videoId={latestVideo.videoId!} title={latestVideo.title} />
                )}
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-300">
                  {latestVideo?.source ?? "Featured"}
                </p>
                <h3 className="mt-1 font-display text-2xl text-paper-50">{latestVideo?.title}</h3>
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={0.06}>
                <Link
                  href="/podcasts"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-paper-300/10 bg-ink-800 p-6 transition-colors hover:border-accent-500/40"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-300">
                      Latest podcast
                    </span>
                    <h3 className="mt-2 font-display text-xl text-paper-50">{featuredShow.name}</h3>
                    <p className="mt-2 text-sm text-paper-300">{featuredShow.description}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300">
                    All podcasts
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
              <Reveal delay={0.12}>
                <Link
                  href="/articles"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-paper-300/10 bg-ink-800 p-6 transition-colors hover:border-accent-500/40"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-300">
                      Latest writing
                    </span>
                    <h3 className="mt-2 font-display text-xl text-paper-50">
                      Articles by and about Naren
                    </h3>
                    <p className="mt-2 text-sm text-paper-300">
                      Practical thinking on marketing, AI, and growing a healthcare practice.
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300">
                    Read articles
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy quotes */}
      <QuoteRotator quotes={quotes} />

      {/* Social proof */}
      <Section theme="light">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                <span aria-hidden className="h-px w-6 bg-accent-600" />
                In their words
              </p>
              <h2 className="text-[length:var(--text-h2)] font-semibold text-[var(--color-paper-ink)]">
                What people say about Naren
              </h2>
              <p className="mt-3 text-sm text-black/55">
                Real reviews from practices that work with Naren and the Ekwa team.
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
        </Container>
      </Section>

      {/* Navigation call-outs */}
      <Section theme="dark" grain>
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>Explore everything</Eyebrow>
              <h2 className="text-[length:var(--text-h2)] font-semibold text-paper-50">
                Everything, in one place.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NAV_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.href} delay={i * 0.06}>
                  <Link
                    href={card.href}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-paper-300/10 bg-ink-800 p-6 transition-colors hover:border-accent-500/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 font-display text-xl text-paper-50 group-hover:text-accent-300">
                        {card.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="mt-1 block text-sm text-paper-300">{card.blurb}</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Book Naren */}
      <CTASection location="home-final" />
    </>
  );
}
