"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components/icons";
import { youtubeThumb } from "@/content/videos";

/**
 * Lite YouTube facade: shows the thumbnail + play button, and only mounts the
 * iframe on click. Keeps the page fast (no YouTube JS until the user wants it).
 */
export function YouTubeEmbed({
  videoId,
  title,
  vertical = false,
}: {
  videoId: string;
  title: string;
  /** 9:16 framing for YouTube Shorts. */
  vertical?: boolean;
}) {
  const [active, setActive] = useState(false);
  const aspect = vertical ? "aspect-[9/16]" : "aspect-video";

  if (active) {
    return (
      <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-ink-900`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block ${aspect} w-full overflow-hidden rounded-2xl bg-ink-900`}
    >
      <Image
        src={youtubeThumb(videoId)}
        alt={title}
        fill
        sizes={vertical ? "(max-width: 768px) 50vw, 240px" : "(max-width: 768px) 100vw, 640px"}
        className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-ink-900 shadow-lg transition-transform group-hover:scale-110">
          <PlayIcon className="h-6 w-6" />
        </span>
      </span>
    </button>
  );
}
