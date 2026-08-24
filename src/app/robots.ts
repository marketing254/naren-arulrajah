import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * All crawlers allowed, and the AI search/answer bots are called out
 * explicitly so they can never be caught by a future blanket disallow.
 * Being crawlable by these bots is what lets ChatGPT, Perplexity, Claude,
 * and Google AI Overviews cite Naren as a source (GEO).
 */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
