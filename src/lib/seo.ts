import { SITE } from "@/lib/site";

/**
 * JSON-LD builders. sameAs pulls from SITE.socials — replace those placeholder
 * URLs (see CONTENT-TODO.md) so the structured data points at real profiles.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    alternateName: "Naren",
    jobTitle: "Founder & CEO",
    description: SITE.description,
    // Helps search engines associate Naren with these topics/queries.
    knowsAbout: [
      "Healthcare marketing",
      "Dental marketing",
      "Practice growth",
      "Search engine optimization",
      "Patient acquisition",
      "Marketing strategy",
      "Online reputation management",
    ],
    worksFor: {
      "@type": "Organization",
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
    name: SITE.org.name,
    url: SITE.org.url,
    founder: { "@type": "Person", name: SITE.name },
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
    url: `${SITE.url}/insights/${opts.slug}`,
  };
}
