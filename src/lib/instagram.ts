import { instagramReelUrls } from "@/content/instagram-reels";

/**
 * Instagram reels: auto-pull the latest N from a live feed when configured,
 * otherwise fall back to the hand-maintained list in content/instagram-reels.ts.
 *
 * ── Auto-pull setup (one-time, for Reshani) ───────────────────────────────────
 * Instagram has no free public endpoint to read a profile's latest posts, so use
 * a feed provider that returns JSON. Easiest: Behold.so (free) — connect the
 * @narenarulrajah account, copy the JSON feed URL, and set it as an env var:
 *
 *     INSTAGRAM_FEED_URL=https://feeds.behold.so/XXXXXXXX
 *
 * (Instagram Graph API works too — point INSTAGRAM_FEED_URL at a `/me/media`
 * response that includes permalink, media_url/thumbnail_url, caption, timestamp.)
 *
 * The feed is re-fetched at most hourly (ISR), so the latest reels appear
 * automatically with no code changes. If the var is unset or the fetch fails,
 * the manual list is used — the site never breaks.
 */
export type Reel = {
  id: string;
  permalink: string;
  shortcode: string;
  /** Poster/cover image (from the feed). Enables a visible thumbnail. */
  thumbnailUrl?: string;
  /** Direct video (mp4) from the feed — enables native inline playback on-site. */
  mediaUrl?: string;
  isVideo?: boolean;
  caption?: string;
  timestamp?: string;
};

const SHORTCODE_RE = /instagram\.com\/(?:p|reel|tv)\/([^/?#]+)/i;

export function shortcodeFromUrl(url: string): string {
  return SHORTCODE_RE.exec(url)?.[1] ?? "";
}

/** Map either a Behold.so array or an Instagram Graph `{data:[...]}` payload. */
function normalizeFeed(json: unknown): Reel[] {
  const arr: unknown[] = Array.isArray(json)
    ? json
    : ((json as { data?: unknown[]; posts?: unknown[] })?.data ??
       (json as { posts?: unknown[] })?.posts ??
       []);

  return arr
    .map((raw): Reel | null => {
      const it = raw as Record<string, unknown>;
      const permalink = (it.permalink ?? it.url ?? it.link) as string | undefined;
      if (!permalink) return null;
      const shortcode = shortcodeFromUrl(permalink);

      const mediaType = String(it.mediaType ?? it.media_type ?? "").toLowerCase();
      const isVideo = /video|reel/.test(mediaType);

      // Behold.so exposes sizes.{full,large,medium,small}.mediaUrl (poster), and
      // a top-level videoUrl/mediaUrl for video. Graph API uses media_url +
      // thumbnail_url. Cover both shapes.
      const sizes = it.sizes as
        | Record<string, { mediaUrl?: string } | undefined>
        | undefined;
      const posterFromSizes =
        sizes?.large?.mediaUrl ?? sizes?.medium?.mediaUrl ?? sizes?.full?.mediaUrl ?? sizes?.small?.mediaUrl;

      const thumbnailUrl = (it.thumbnail_url ??
        it.thumbnailUrl ??
        posterFromSizes ??
        (!isVideo ? (it.media_url ?? it.mediaUrl) : undefined)) as string | undefined;

      const mediaUrl = isVideo
        ? ((it.videoUrl ?? it.video_url ?? it.media_url ?? it.mediaUrl) as string | undefined)
        : undefined;

      return {
        id: (it.id as string) ?? shortcode ?? permalink,
        permalink,
        shortcode,
        thumbnailUrl,
        mediaUrl,
        isVideo,
        caption: (it.caption ?? it.text) as string | undefined,
        timestamp: (it.timestamp ?? it.createdAt) as string | undefined,
      };
    })
    .filter((r): r is Reel => !!r && (!!r.shortcode || !!r.thumbnailUrl));
}

export async function getReels(limit = 10): Promise<Reel[]> {
  const feedUrl = process.env.INSTAGRAM_FEED_URL;

  if (feedUrl) {
    try {
      // Revalidate at most hourly so new reels appear automatically.
      const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
      if (res.ok) {
        const reels = normalizeFeed(await res.json()).slice(0, limit);
        if (reels.length) return reels;
      }
    } catch {
      // fall through to the manual list
    }
  }

  return instagramReelUrls.slice(0, limit).map((url) => {
    const shortcode = shortcodeFromUrl(url);
    return { id: shortcode || url, permalink: url, shortcode };
  });
}
