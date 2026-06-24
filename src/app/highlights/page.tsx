import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ReelGrid } from "@/components/ReelGrid";
import { ChannelRail } from "@/components/ChannelRail";
import { CTASection } from "@/components/CTASection";
import { getReels } from "@/lib/instagram";
import { clipCategories } from "@/content/clips";

export const metadata: Metadata = {
  title: "Highlights",
  description:
    "Short-form video highlights from Naren Arulrajah on marketing, AI and the future of search, founder lessons, patient acquisition, leadership, and mindset.",
  alternates: { canonical: "/highlights" },
};

export default async function HighlightsPage() {
  const reels = await getReels(12);

  return (
    <>
      {/* Sleek centered hero with glow */}
      <section className="relative isolate overflow-hidden bg-ink-900 pt-36 pb-20 grain">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-10%] z-0 h-[55vh] w-[80vh] -translate-x-1/2 opacity-60 glow-accent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"
        />
        <Container className="relative z-[1]">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow className="justify-center">Watch</Eyebrow>
              <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.02] tracking-tight text-paper-50">
                Highlights
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg text-paper-300">
                Short, sharp video on marketing, AI, founder lessons, and growth, pulled
                from longer episodes and reels. New highlights drop regularly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap justify-center gap-2.5">
              {clipCategories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-paper-300/15 bg-ink-800/60 px-4 py-2 text-sm text-paper-300 backdrop-blur transition-colors hover:border-accent-300/50 hover:text-accent-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reels — the highlight content, laid out cleanly */}
      <Section theme="darker" className="!pt-12">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl text-paper-50 sm:text-3xl">Latest reels</h2>
              <a
                href="https://www.instagram.com/narenarulrajah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-300 hover:text-accent-500"
              >
                @narenarulrajah
              </a>
            </div>
          </Reveal>
          <ReelGrid reels={reels} />

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-3xl border border-paper-300/10 bg-ink-800/50 p-8">
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-500">
                Follow along
              </h2>
              <ChannelRail />
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection location="highlights-final" />
    </>
  );
}
