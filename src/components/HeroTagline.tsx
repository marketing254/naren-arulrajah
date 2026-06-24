"use client";

import { useReducedMotion } from "motion/react";

/**
 * Hero tagline with ONE subtle, professional touch: a slow polished-gold light
 * sweep across "authority". Kept deliberately understated (no particles/glow) so
 * the animation never competes with the content. Honors reduced-motion.
 */
export function HeroTagline() {
  const reduce = useReducedMotion();

  return (
    <h1
      className="text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.05] tracking-[-0.01em] text-paper-50"
      style={{ fontFamily: "var(--font-bricolage), var(--font-hanken), sans-serif" }}
    >
      The marketing{" "}
      <span className={reduce ? "text-accent-300" : "hero-sheen"}>authority</span>{" "}
      healthcare practices <span className="text-accent-300">trust.</span>
    </h1>
  );
}
