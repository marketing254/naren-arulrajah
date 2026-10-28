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
