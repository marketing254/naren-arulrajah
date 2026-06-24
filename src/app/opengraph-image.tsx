import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/**
 * Generated default OG/Twitter image (1200x630), branded in the dark+gold
 * palette. Applies site-wide via the file convention. TODO: replace with a
 * supplied photographic OG image if preferred (CONTENT-TODO.md).
 */
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "72px",
          color: "#F6F4F0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: "#C9A24B" }} />
          <div style={{ fontSize: 28, letterSpacing: 4, color: "#C8C6C0", textTransform: "uppercase" }}>
            {SITE.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.02 }}>{SITE.name}</div>
          <div style={{ marginTop: 22, fontSize: 34, color: "#C9A24B", maxWidth: 920 }}>
            {SITE.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
          <div style={{ color: "#C8C6C0" }}>Find you. Like you. Choose you.</div>
        </div>
      </div>
    ),
    size,
  );
}
