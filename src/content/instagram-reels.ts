/**
 * Manual fallback list of Instagram reels (most recent first).
 *
 * This is used when no live feed is configured (INSTAGRAM_FEED_URL unset), or as
 * a backup if the feed is unreachable. To auto-pull the latest 10 going forward,
 * see `src/lib/instagram.ts` + CONTENT-TODO.md → "Instagram auto-pull".
 *
 * To update by hand: paste reel/post permalinks below (newest first).
 */
export const instagramReelUrls: string[] = [
  "https://www.instagram.com/p/DZS-TurCAyt/",
  "https://www.instagram.com/p/DZLdp-dkokh/",
  "https://www.instagram.com/p/DZI428nkpwG/",
  "https://www.instagram.com/p/DZGUD14naze/",
  "https://www.instagram.com/p/DZDvU0njPV2/",
  "https://www.instagram.com/p/DVrBmq_iS91/",
  "https://www.instagram.com/p/DVpJJBYDuDQ/",
  "https://www.instagram.com/p/DVlu1RSFEtJ/",
  "https://www.instagram.com/p/DVjqs-JEsgV/",
];
