import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

type PathEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/** Priorities reflect the two conversion flows (/book, /msm) and the content hubs. */
const PATHS: PathEntry[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  { path: "/msm", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/ekwa", priority: 0.7, changeFrequency: "monthly" },
  { path: "/interviews", priority: 0.8, changeFrequency: "weekly" },
  { path: "/podcasts", priority: 0.8, changeFrequency: "weekly" },
  { path: "/articles", priority: 0.8, changeFrequency: "weekly" },
  { path: "/books", priority: 0.7, changeFrequency: "monthly" },
  { path: "/highlights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/newsletter", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
