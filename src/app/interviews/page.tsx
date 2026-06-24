import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { AppearanceFilter } from "@/components/AppearanceFilter";
import { CTASection } from "@/components/CTASection";
import { youtubeVideos } from "@/content/videos";
import { appearances } from "@/content/appearances";
import { getLiveEpisodes } from "@/lib/podcast-feeds";

export const metadata: Metadata = {
  title: "Interviews",
  description:
    "Every time Naren Arulrajah was a guest: podcast interviews, video conversations, webinars, and media features on marketing, AI, and practice growth.",
  alternates: { canonical: "/interviews" },
};

export default async function InterviewsPage() {
  // "More appearances" = live LID episodes that actually feature Naren (filtered
  // by name), auto-updating hourly. Distinct from the Featured videos above, so
  // nothing repeats.
  const liveEpisodes = await getLiveEpisodes();
  // More appearances = non-featured Thriving Dentist videos + live LID episodes.
  const moreAppearances = [...appearances.filter((a) => !a.featured), ...liveEpisodes];

  // Featured = a MIX of shows where Naren appears on video talking digital
  // marketing — The Dental Brief (Naren is the named guest) + The Thriving
  // Dentist Show. #231 is pinned first; the rest sort newest-first.
  // Every item is a confirmed Naren video; we do NOT auto-pull whole feeds.
  const PINNED_FIRST = "lx5jybvZyqw"; // Dental Brief #231 — Mastering Google's Algorithms
  const featuredVideos = [
    ...youtubeVideos
      .filter((v) => v.videoId)
      .map((v) => ({ key: v.id, videoId: v.videoId!, title: v.title, source: v.source ?? "", date: v.date ?? "" })),
    ...appearances
      .filter((a) => a.videoId && a.featured)
      .map((a) => ({ key: a.id, videoId: a.videoId!, title: a.title, source: a.outlet, date: a.date })),
  ].sort((a, b) => {
    if (a.videoId === PINNED_FIRST) return -1;
    if (b.videoId === PINNED_FIRST) return 1;
    return b.date.localeCompare(a.date);
  });

  return (
    <>
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>On stage &amp; on screen</Eyebrow>
              <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.04] text-paper-50">
                Interviews
              </h1>
              <p className="mt-6 max-w-xl text-lg text-paper-300">
                Naren as a guest and co-host, talking marketing, AI, and practice growth
                across podcasts and on screen. A mix of shows, newest first.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section theme="darker">
        <Container>
          <Reveal>
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted-500">
              Featured interviews
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((v, i) => (
              <Reveal key={v.key} delay={(i % 3) * 0.06}>
                <div>
                  <YouTubeEmbed videoId={v.videoId} title={v.title} />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-300">
                    {v.source}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-snug text-paper-50">
                    {v.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* More appearances — curated, filterable list with episode links */}
      <Section theme="dark" grain>
        <Container>
          <Reveal>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted-500">
              More appearances
            </h2>
            <AppearanceFilter appearances={moreAppearances} />
          </Reveal>
        </Container>
      </Section>

      <CTASection location="interviews-final" />
    </>
  );
}
