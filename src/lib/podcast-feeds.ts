import type { Appearance } from "@/content/appearances";

/**
 * Live podcast episodes for the Interviews page — auto-updating.
 *
 * Pulls each show's public RSS feed (revalidated hourly) and keeps ONLY the
 * episodes that actually feature Naren. The reliable signal: his name appears
 * in the episode title/description. On Less Insurance Dependence (which he
 * co-hosts with Gary Takacs) ~55 of 100 episodes name him; the guest-interview
 * episodes hosted by Lester/Adeesha do not, and are correctly excluded.
 *
 * NOTE: Thriving Dentist's own episode pages return intermittent 403s behind
 * Cloudflare, so we don't link to them here — Thriving Dentist is represented
 * by the curated video appearances in the Featured section instead.
 */
type Feed = { outlet: string; url: string; max: number; requireNaren?: boolean };

const FEEDS: Feed[] = [
  {
    outlet: "Less Insurance Dependence",
    url: "https://rss.libsyn.com/shows/137870/destinations/857705.xml",
    max: 18,
    requireNaren: true,
  },
];

function decodeEntities(input: string): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tagValue(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decodeEntities(m[1]) : "";
}

function toIsoDate(pubDate: string): string {
  const d = new Date(pubDate);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

function parseFeed(xml: string, feed: Feed): Appearance[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const out: Appearance[] = [];
  for (const block of items) {
    if (out.length >= feed.max) break;
    // Only keep episodes that actually feature Naren.
    if (feed.requireNaren && !/naren/i.test(block)) continue;
    const title = tagValue(block, "title");
    const url = tagValue(block, "link") || tagValue(block, "guid");
    const date = toIsoDate(tagValue(block, "pubDate"));
    if (!title || !url || !date) continue;
    const slug = (url.split("/").filter(Boolean).pop() ?? title).slice(0, 48);
    out.push({
      id: `live-${feed.outlet.toLowerCase().replace(/[^a-z]+/g, "-")}-${slug}`,
      type: "interview",
      title,
      outlet: feed.outlet,
      url,
      date,
    });
  }
  return out;
}

/** Recent episodes (Naren-only) across configured feeds. Never throws. */
export async function getLiveEpisodes(): Promise<Appearance[]> {
  const lists = await Promise.all(
    FEEDS.map(async (feed) => {
      try {
        const res = await fetch(feed.url, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; NarenArulrajahSite/1.0)" },
          next: { revalidate: 3600 },
        });
        if (!res.ok) return [];
        return parseFeed(await res.text(), feed);
      } catch {
        return [];
      }
    }),
  );
  return lists.flat();
}
