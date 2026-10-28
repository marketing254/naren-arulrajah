import type { NextConfig } from "next";

// Security headers sent on every response. These don't change how the site
// behaves for visitors, but reputation scanners (Bitdefender, Google, Mozilla
// Observatory, etc.) weigh them, and they close off clickjacking / MIME-sniffing.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    // Allow-list of everything the site loads. 'unsafe-inline' on scripts is
    // required by Next.js's own inline bootstrap and the GA4 init snippet.
    // Add a host here if a new embed/analytics provider is introduced.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://plausible.io",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "media-src 'self' https:",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://plausible.io https://feeds.behold.so",
      "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com https://www.instagram.com https://*.youcanbook.me",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Lets a preview dev server use an isolated build dir (NEXT_DIST=.next-dev)
  // so it never clobbers the production .next that `next start` is serving.
  distDir: process.env.NEXT_DIST || ".next",
  images: {
    remotePatterns: [
      // YouTube video thumbnails (public, no auth) for the video series facades.
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
