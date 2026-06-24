import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ArticleList } from "@/components/ArticleList";
import { CTASection } from "@/components/CTASection";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles written by and featuring Naren Arulrajah on healthcare marketing, SEO, the impact of AI on search, and growing a practice.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Writing</Eyebrow>
              <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.04] text-paper-50">
                Articles
              </h1>
              <p className="mt-6 max-w-xl text-lg text-paper-300">
                Writing by and about Naren, on healthcare marketing, the impact of AI,
                and helping the right patients find, like, and choose a practice. Each
                links to the original source.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section theme="darker">
        <Container>
          <Reveal>
            <p className="mb-6 max-w-2xl text-sm text-muted-500">
              A selection of Naren&apos;s bylined columns in Medical Economics, DentistryIQ,
              and Oral Health. Each opens the original source in a new tab.
            </p>
            <ArticleList articles={articles} />
          </Reveal>
        </Container>
      </Section>

      <CTASection location="articles-final" />
    </>
  );
}
