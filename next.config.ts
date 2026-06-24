import type { NextConfig } from "next";

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
};

export default nextConfig;
