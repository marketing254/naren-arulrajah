import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/about/ekwa",
    "/book",
    "/msm",
    "/interviews",
    "/podcasts",
    "/articles",
    "/books",
    "/highlights",
    "/newsletter",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/book" ? 0.9 : 0.7,
  }));
}
