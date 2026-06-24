/**
 * Short-form clips gallery.
 *
 * Live short-form content comes from Instagram reels (rendered via ReelGrid on
 * the /clips page). As the video team (Zainul) produces categorized clips, add
 * them here with a category so the filter works. Categories are below.
 */
export const clipCategories = [
  "Marketing Insights",
  "AI & The Future of Search",
  "Founder Lessons",
  "Patient / Client Acquisition",
  "Leadership & Culture",
  "Motivational / Mindset",
] as const;

export type ClipCategory = (typeof clipCategories)[number];

export type Clip = {
  id: string;
  title: string;
  source: string;
  url: string;
  videoId?: string; // YouTube id when applicable
  category: ClipCategory;
  duration?: string;
};

// TODO: Zainul's categorized clips go here as they're produced. Until then the
// /clips page shows the live Instagram reels.
export const clips: Clip[] = [];
