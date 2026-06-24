import { mediaLogos } from "@/content/appearances";

/**
 * "As seen across" strip — a single line of logos that scrolls continuously
 * across the band (CSS-only marquee). The set is duplicated so the loop is
 * seamless; it pauses on hover and stops entirely under prefers-reduced-motion.
 */
export function LogoMarquee({ caption }: { caption?: string }) {
  // Duplicate the list so translateX(-50%) loops without a visible jump.
  const loop = [...mediaLogos, ...mediaLogos];

  return (
    <div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 sm:gap-5">
          {loop.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              aria-hidden={i >= mediaLogos.length}
              className="flex h-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-paper-50/95 px-6 shadow-sm"
              title={logo.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.logo}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                loading="lazy"
                className="h-7 w-auto max-w-[8rem] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      {caption && <p className="mt-8 text-center text-sm text-muted-500">{caption}</p>}
    </div>
  );
}
