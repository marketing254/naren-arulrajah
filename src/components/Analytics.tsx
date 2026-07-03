import Script from "next/script";

/**
 * Loads the analytics provider chosen via NEXT_PUBLIC_ANALYTICS.
 *   - A GA4 measurement id ("G-XXXXXXX") loads gtag.js and defines window.gtag.
 *   - The literal "plausible" loads the Plausible script.
 * Unset → renders nothing (events fall back to console logging in dev; see
 * src/lib/analytics.ts). NEXT_PUBLIC_* is inlined at build time, so changing
 * this value in Vercel requires a redeploy to take effect.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS;
  if (!id) return null;

  if (id === "plausible") {
    return (
      <Script
        src="https://plausible.io/js/script.js"
        data-domain="narenarulrajah.com"
        strategy="afterInteractive"
      />
    );
  }

  // GA4
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
