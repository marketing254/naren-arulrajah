import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PRIMARY_CTA } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-ink-900 grain">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 glow-accent" />
      <Container className="relative z-[1] text-center">
        <p className="font-display text-[clamp(5rem,18vw,12rem)] font-semibold leading-none text-accent-500">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl text-paper-50">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-paper-300">
          The link is broken, but there&apos;s plenty more to explore. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button
            href={PRIMARY_CTA.href}
            variant="ghost"
            analyticsEvent="book_naren_click"
            analyticsProps={{ location: "404" }}
          >
            {PRIMARY_CTA.label}
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-500">
          Or browse the{" "}
          <Link href="/podcasts" className="text-accent-300 link-underline">
            podcasts
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
