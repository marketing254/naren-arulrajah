"use client";

import { useEffect, useState } from "react";
import { PlayIcon, CloseIcon } from "@/components/icons";
import { InstagramIcon } from "@/components/brand-icons";
import type { Reel } from "@/lib/instagram";

/**
 * Reels rendering.
 *
 * - When the feed (INSTAGRAM_FEED_URL) provides media, each tile shows the real
 *   poster thumbnail and plays the video NATIVELY INLINE on click (no new tab).
 * - Without a feed (plain links), Instagram blocks access to the video/thumbnail,
 *   so we render Instagram's own on-site embed per tile — the real cover is
 *   visible and it stays on the page. Connect a feed for native inline playback.
 */
export function ReelGrid({ reels }: { reels: Reel[] }) {
  const hasMedia = reels.some((r) => r.thumbnailUrl || r.mediaUrl);
  return hasMedia ? <MediaGrid reels={reels} /> : <EmbedGrid reels={reels} />;
}

/* ---- Feed mode: real thumbnails + native inline <video> playback ---- */
function MediaGrid({ reels }: { reels: Reel[] }) {
  const [open, setOpen] = useState<Reel | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {reels.map((reel) => (
          <li key={reel.id}>
            <button
              type="button"
              onClick={() => setOpen(reel)}
              aria-label={`Play reel${reel.caption ? `: ${reel.caption.slice(0, 60)}` : ""}`}
              className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl border border-paper-300/10 bg-ink-800"
            >
              {reel.thumbnailUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={reel.thumbnailUrl}
                  alt={reel.caption?.slice(0, 80) ?? "Instagram reel"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
              )}
              <span className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              <span className="absolute left-2.5 top-2.5 text-paper-50/90">
                <InstagramIcon className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-ink-900 transition-transform group-hover:scale-110">
                  <PlayIcon className="h-5 w-5" />
                </span>
              </span>
              {reel.caption && (
                <span className="absolute inset-x-2.5 bottom-2.5 line-clamp-2 text-left text-[11px] leading-snug text-paper-50/90">
                  {reel.caption}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Instagram reel"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-ink-800 p-2.5 text-paper-50 hover:text-accent-300"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <div className="w-full max-w-[400px]" onClick={(e) => e.stopPropagation()}>
            {open.mediaUrl ? (
              // Native inline playback — stays on the site.
              <video
                src={open.mediaUrl}
                poster={open.thumbnailUrl}
                controls
                autoPlay
                playsInline
                className="aspect-[9/16] w-full rounded-2xl bg-black"
              />
            ) : (
              <iframe
                title="Instagram reel"
                src={`https://www.instagram.com/p/${open.shortcode}/embed/captioned/`}
                className="h-[70vh] max-h-[720px] w-full rounded-2xl border border-paper-300/10 bg-white"
                allow="autoplay; encrypted-media; picture-in-picture"
              />
            )}
            <a
              href={open.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-sm font-medium text-accent-300 hover:text-accent-500"
            >
              View on Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* ---- Fallback mode: Instagram's on-site embed (real cover visible) ----
   Uniform, compact cards (non-captioned embed) in a tidy 4-up grid so the
   vertical reels sit cleanly side by side instead of as tall white blocks. */
function EmbedGrid({ reels }: { reels: Reel[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {reels.map((reel) => (
        <li
          key={reel.id}
          className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-paper-300/10 bg-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1"
        >
          <iframe
            title="Instagram reel"
            src={`https://www.instagram.com/p/${reel.shortcode}/embed/`}
            loading="lazy"
            scrolling="no"
            className="h-[500px] w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        </li>
      ))}
    </ul>
  );
}
