/**
 * Video series data layer.
 *
 * `youtubeVideos` are REAL, publicly verifiable appearances of Naren
 * (auto-sourced via web search — please confirm each is correct before launch;
 * they embed without login). They appear under "Interviews, webinars & features"
 * on /media. Short-form video comes from Instagram reels (see src/lib/instagram.ts).
 */
export type VideoPlatform = "youtube" | "instagram" | "tiktok" | "facebook";

export type Video = {
  id: string;
  platform: VideoPlatform;
  /** YouTube 11-char video id (for embeds + thumbnails). */
  videoId?: string;
  /** Canonical watch / permalink URL. */
  url: string;
  title: string;
  source?: string;
  date?: string; // ISO
};

// VERIFY: real YouTube appearances found via web search. Confirm before launch.
export const youtubeVideos: Video[] = [
  {
    id: "yt-1",
    platform: "youtube",
    videoId: "lx5jybvZyqw",
    url: "https://www.youtube.com/watch?v=lx5jybvZyqw",
    title: "Mastering Google's Algorithms: A Deep Dive to SEO Success",
    source: "The Dental Brief #231",
    date: "2023-08-01",
  },
  {
    id: "yt-2",
    platform: "youtube",
    videoId: "oGwywH13hcE",
    url: "https://www.youtube.com/watch?v=oGwywH13hcE",
    title: "Everything You Need to Know about Google Reviews",
    source: "The Dental Brief #208",
    date: "2024-12-01",
  },
  {
    id: "yt-3",
    platform: "youtube",
    videoId: "BIA34jWz8LE",
    url: "https://www.youtube.com/watch?v=BIA34jWz8LE",
    title: "How to Keep Your New Patient Schedule Consistently Full?",
    source: "The Dental Brief #220",
    date: "2025-03-01",
  },
  {
    id: "yt-4",
    platform: "youtube",
    videoId: "2XpcV1qVrvM",
    url: "https://www.youtube.com/watch?v=2XpcV1qVrvM",
    title: "What is NAP and why is it important?",
    source: "The Dental Brief #200",
    date: "2024-10-01",
  },
  {
    id: "yt-5",
    platform: "youtube",
    videoId: "8fm4WLCh4WE",
    url: "https://www.youtube.com/watch?v=8fm4WLCh4WE",
    title: "Do you know if SEO is working for you?",
    source: "The Dental Brief #181",
    date: "2024-06-01",
  },
  {
    id: "yt-6",
    platform: "youtube",
    videoId: "c23gUqJWHYk",
    url: "https://www.youtube.com/watch?v=c23gUqJWHYk",
    title: "What is your marketing ROI?",
    source: "The Dental Brief #185",
    date: "2024-07-02",
  },
];

// Short-form video now comes from Instagram reels (see src/lib/instagram.ts +
// src/content/instagram-reels.ts), so YouTube Shorts were removed here.

/** Social channels for the "Follow / Subscribe" rail on the media page. */
export const videoChannels = [
  { label: "Instagram", handle: "@narenarulrajah", url: "https://www.instagram.com/narenarulrajah/" },
  { label: "YouTube", handle: "@NarenArulrajah", url: "https://www.youtube.com/@NarenArulrajah" },
  { label: "TikTok", handle: "@narenarulrajah", url: "https://www.tiktok.com/@narenarulrajah" },
  { label: "Facebook", handle: "narenarulrajah", url: "https://www.facebook.com/narenarulrajah2" },
] as const;

export function youtubeThumb(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
