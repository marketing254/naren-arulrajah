import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import type { Book } from "@/content/books";
import type { Show } from "@/content/podcasts";

/**
 * SEO helpers: per-page Metadata builder + JSON-LD builders.
 * sameAs pulls from SITE.socials — replace those placeholder URLs
 * (see CONTENT-TODO.md) so the structured data points at real profiles.
 */

/**
 * Per-page metadata. Next.js does NOT deep-merge `openGraph` from the root
 * layout — a page that omits it inherits the HOMEPAGE og:title/og:url, so
 * every page must set its own. This builder keeps title/description/canonical
 * and the OG/Twitter cards in sync from one call.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: `${title} — ${SITE.name}`,
      description,
      url: path,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE.name}`,
      description,
    },
  };
}

const PERSON_ID = `${SITE.url}/#person`;
const ORG_ID = `${SITE.org.url}#organization`;

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.name,
    alternateName: "Naren",
    jobTitle: "Founder & CEO",
    description: SITE.description,
    image: `${SITE.url}/naren-portrait.png`,
    // Helps search engines associate Naren with these topics/queries.
    knowsAbout: [
      "Healthcare marketing",
      "Dental marketing",
      "Practice growth",
      "Search engine optimization",
      "Patient acquisition",
      "Marketing strategy",
      "Online reputation management",
      "AI and search",
    ],
    worksFor: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.org.name,
      url: SITE.org.url,
    },
    url: SITE.url,
    sameAs: SITE.socials.map((s) => s.href),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.org.name,
    url: SITE.org.url,
    founder: { "@type": "Person", "@id": PERSON_ID, name: SITE.name },
  };
}

/** Site-level entity — helps engines tie all pages to one named site. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-US",
    publisher: { "@type": "Person", "@id": PERSON_ID, name: SITE.name },
  };
}

/** /about — tells engines this page is the canonical profile of the Person. */
export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about#profilepage`,
    url: `${SITE.url}/about`,
    name: `About ${SITE.name}`,
    mainEntity: personJsonLd(),
  };
}

/** /books — every published book, attributed to Naren as author. */
export function booksJsonLd(books: readonly Book[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/books#books`,
    name: `Books by ${SITE.name}`,
    itemListElement: books.map((book, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Book",
        name: book.title,
        description: book.description,
        datePublished: book.year,
        author: { "@type": "Person", "@id": PERSON_ID, name: SITE.name },
        ...(book.cover ? { image: `${SITE.url}${book.cover}` } : {}),
        ...(book.links[0] ? { url: book.links[0].href } : {}),
      },
    })),
  };
}

/** /podcasts — the shows Naren hosts, as PodcastSeries entities. */
export function podcastsJsonLd(shows: readonly Show[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/podcasts#shows`,
    name: `Podcasts hosted by ${SITE.name}`,
    itemListElement: shows.map((show, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "PodcastSeries",
        name: show.name,
        description: show.description,
        actor: { "@type": "Person", "@id": PERSON_ID, name: SITE.name },
        ...(show.links[0] ? { url: show.links[0].href } : {}),
      },
    })),
  };
}

/** Breadcrumb trail for nested/content pages. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE.url}${item.path}`,
      })),
    ],
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    author: { "@type": "Person", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: SITE.org.name,
    },
    url: `${SITE.url}/articles/${opts.slug}`,
  };
}
