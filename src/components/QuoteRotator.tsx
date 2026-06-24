"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import type { Quote } from "@/content/quotes";

export function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduce || paused || quotes.length <= 1) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduce, paused, quotes.length]);

  const active = quotes[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-ink-900 py-24 grain"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Quotes"
    >
      <Container className="relative z-[1]">
        <div className="mx-auto flex min-h-[220px] max-w-4xl flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[length:var(--text-h2)] leading-tight text-paper-50"
            >
              &ldquo;{active.text}&rdquo;
              {active.attribution && (
                <footer className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
                  {active.attribution}
                </footer>
              )}
            </motion.blockquote>
          </AnimatePresence>

          {quotes.length > 1 && (
            <div className="mt-10 flex gap-2" role="tablist" aria-label="Choose quote">
              {quotes.map((q, i) => (
                <button
                  key={q.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Quote ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-accent-500" : "w-2 bg-paper-300/30 hover:bg-paper-300/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
