import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PortraitImage } from "@/components/PortraitImage";
import { ArrowRight } from "@/components/icons";
import { articles } from "@/content/articles";

// Three on-brand, high-confidence highlights (Find / Like / Choose flavored).
const FEATURED_IDS = ["me-1", "diq-1", "me-11"];
const featuredArticles = FEATURED_IDS
  .map((id) => articles.find((a) => a.id === id))
  .filter((a): a is (typeof articles)[number] => Boolean(a));

export const metadata: Metadata = {
  title: "About",
  description:
    "Naren Arulrajah is the founder of Ekwa Marketing. He helps healthcare practices grow by helping the right patients find, like, and choose them.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    title: "Find you. Like you. Choose you.",
    body: "Naren reduces marketing to something practices can actually act on. Help the right patients find you through search, like you through video, reviews, and a clear experience, then choose you with trust and an easy path to book.",
  },
  {
    title: "AI is changing search, not the fundamentals.",
    body: "AI is reshaping how people find and judge a practice, and Naren spends a lot of time helping owners adapt. But the goal hasn't changed: be visible, be trusted, and make it easy to say yes.",
  },
  {
    title: "Healthcare practices deserve honest growth.",
    body: "No hype, no lock-in, no vanity metrics. Naren believes a healthy practice grows on a repeatable system the owner understands, not on luck or pressure.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div>
                <Eyebrow>About Naren</Eyebrow>
                <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.03] text-paper-50">
                  He built the system he teaches.
                </h1>
                <p className="mt-6 max-w-xl text-lg text-paper-300">
                  Naren Arulrajah is the founder of Ekwa Marketing. For more than twenty
                  years, he&apos;s helped healthcare practices grow, and he teaches the
                  same system in public, on stage and on air.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              {/* TODO: real professional photography of Naren (a session is planned). */}
              <PortraitImage alt="Naren Arulrajah, founder of Ekwa Marketing" ratio="aspect-[4/5]" priority />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Bio */}
      <Section theme="darker">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            <Reveal>
              <h2 className="font-display text-2xl text-paper-50 sm:text-3xl">Who he is</h2>
              {/* TODO: expand and verify this bio against ekwa.com (rewrite, don't copy).
              Do not add specific figures (years, client counts, revenue) unless supplied. */}
              <p className="mt-5 text-lg leading-[1.75] text-paper-300">
                Naren founded Ekwa Marketing to give healthcare practices a marketing
                partner that actually moves the needle. Under his leadership, Ekwa has
                grown into a team that helps practices across dental, veterinary, medical
                aesthetics, and more get found, get liked, and get chosen.
              </p>
              <p className="mt-5 text-lg leading-[1.75] text-paper-300">
                Ekwa is the best known of what Naren has built, but it isn&apos;t the whole
                story. He is also a speaker, an author, and a host or regular voice on a
                range of healthcare podcasts, where he teaches the same system in public.
                What ties it all together is a simple belief: good practices deserve to
                grow, and growth shouldn&apos;t be a mystery.
              </p>
              <p className="mt-5 text-lg leading-[1.75] text-paper-300">
                He is just as comfortable talking about the founder journey and giving
                back as he is about SEO and AI, because to Naren, building a company and
                building a brand are the same work: earn trust, deliver value, and keep
                showing up.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What he believes */}
      <Section theme="dark" grain>
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <Eyebrow>What he believes</Eyebrow>
              <h2 className="text-[length:var(--text-h2)] font-semibold text-paper-50">
                The ideas behind the work
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-paper-300/10 bg-ink-800 p-7">
                  <h3 className="font-display text-xl text-paper-50">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper-300">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* In the media */}
      <Section theme="darker">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow>In the media</Eyebrow>
                <h2 className="text-[length:var(--text-h2)] font-semibold text-paper-50">
                  Featured and published
                </h2>
                <p className="mt-3 text-paper-300">
                  A few highlights from Naren&apos;s bylined columns in Medical Economics
                  and DentistryIQ.
                </p>
              </div>
              <Button href="/articles" variant="ghost">
                See all articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredArticles.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-paper-300/10 bg-ink-800 p-6 transition-colors hover:border-accent-500/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-300">
                    {a.publication}
                  </span>
                  <h3 className="mt-2 flex-1 font-display text-lg leading-snug text-paper-50 group-hover:text-accent-300">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection location="about-final" />
    </>
  );
}
