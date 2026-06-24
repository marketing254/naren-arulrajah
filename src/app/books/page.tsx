import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { BookIcon } from "@/components/icons";
import { books } from "@/content/books";

export const metadata: Metadata = {
  title: "Books",
  description: "Books published by Naren Arulrajah on marketing and growing a healthcare practice.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <>
      <Section theme="dark" grain className="!pt-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Published work</Eyebrow>
              <h1 className="text-[length:var(--text-hero)] font-semibold leading-[1.04] text-paper-50">
                Books
              </h1>
              <p className="mt-6 max-w-xl text-lg text-paper-300">
                Books and guides from Naren on marketing and growing a healthcare practice.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section theme="darker">
        <Container>
          {books.length === 0 ? (
            <Reveal>
              <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-dashed border-accent-500/40 bg-ink-800 p-12 text-center">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent-300">
                  <BookIcon className="h-7 w-7" />
                </span>
                <h2 className="font-display text-2xl text-paper-50">Coming soon</h2>
                <p className="mt-3 text-sm text-paper-300">
                  {/* TODO: add Naren's books in src/content/books.ts (cover, title,
                  description, year, buy links). */}
                  Naren&apos;s published books will live here. Want to be notified when
                  they drop?
                </p>
                <div className="mt-6">
                  <Button href="/newsletter" variant="ghost">
                    Join the newsletter
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book, i) => (
                <Reveal key={book.id} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-paper-300/10 bg-ink-800 p-5">
                    <a
                      href={book.links[0]?.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get "${book.title}"`}
                      className="group mb-4 block"
                    >
                      {book.cover ? (
                        <div className="overflow-hidden rounded-lg bg-ink-900 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={book.cover}
                            alt={`Cover of ${book.title}`}
                            loading="lazy"
                            className="aspect-[3/4] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <PlaceholderImage label={`Cover — ${book.title}`} ratio="aspect-[3/4]" />
                      )}
                    </a>
                    <h2 className="font-display text-xl text-paper-50">{book.title}</h2>
                    {book.subtitle && <p className="mt-1 text-sm text-accent-300">{book.subtitle}</p>}
                    <p className="mt-3 flex-1 text-sm text-paper-300">{book.description}</p>
                    <p className="mt-3 text-xs text-muted-500">{book.year}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {book.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-accent-300 hover:text-accent-500"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection location="books-final" />
    </>
  );
}
