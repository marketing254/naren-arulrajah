import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PortraitImage } from "@/components/PortraitImage";
import { HeroTagline } from "@/components/HeroTagline";
import { ChevronDown } from "@/components/icons";
import { PRIMARY_CTA } from "@/lib/site";

const FOCUS = ["Dental", "Veterinary", "Medical Aesthetics", "Ophthalmology"];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pt-24 pb-16 grain">
      {/* Radial accent glow behind portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 z-0 h-[80vh] w-[80vh] -translate-y-1/2 opacity-70 glow-accent"
      />
      {/* Top hairline gradient for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"
      />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text stack — offset for intentional asymmetry */}
          <div className="max-w-2xl lg:pr-6">
            <Reveal delay={0.05}>
              <p className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                <span aria-hidden className="h-px w-8 bg-accent-500" />
                Healthcare Marketing Expert
                <span aria-hidden className="text-accent-500/50">·</span>
                Speaker
                <span aria-hidden className="text-accent-500/50">·</span>
                Author
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <HeroTagline />
            </Reveal>

            <Reveal delay={0.28}>
              {/* Name in prominent body copy near the H1 — SEO + a personal read. */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-300 sm:text-xl">
                <span className="text-paper-50">Naren Arulrajah</span> is a healthcare
                marketing expert and the founder of Ekwa Marketing. He helps healthcare
                practices turn marketing into a predictable system for growth.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-300">
                Book him to speak at your event or on your podcast, and your audience walks
                away with clear, practical moves they can put to work right away.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={PRIMARY_CTA.href}
                  size="lg"
                  analyticsEvent="book_naren_click"
                  analyticsProps={{ location: "hero" }}
                >
                  {PRIMARY_CTA.longLabel}
                </Button>
                <Button href="/podcasts" variant="ghost" size="lg">
                  Explore his work
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-500">
                <span className="text-paper-300">Trusted across</span>
                {FOCUS.map((f) => (
                  <span key={f} className="inline-flex items-center gap-3">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent-500/60" />
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Portrait — refined gold-edged frame, overlaps slightly for depth */}
          <Reveal delay={0.2} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none lg:translate-y-4">
              <div
                aria-hidden
                className="absolute -inset-px rounded-[1.6rem] bg-gradient-to-b from-accent-500/50 via-accent-500/5 to-transparent"
              />
              <PortraitImage
                alt="Naren Arulrajah, healthcare marketing authority and founder of Ekwa Marketing"
                ratio="aspect-[4/5]"
                priority
                className="!rounded-[1.55rem] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]"
              />
              <div className="absolute -bottom-4 left-4 rounded-xl border border-paper-300/10 bg-ink-800/90 px-4 py-2.5 backdrop-blur-sm sm:left-6">
                <p className="font-display text-base text-paper-50">Naren Arulrajah</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent-300">
                  Founder of Ekwa Marketing
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[1] flex justify-center">
        <span className="flex flex-col items-center gap-1 text-muted-500">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </span>
      </div>
    </section>
  );
}
