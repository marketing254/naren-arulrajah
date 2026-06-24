import { NextResponse } from "next/server";

/**
 * STUB lead endpoint. Logs the payload and returns 200 so every form on the
 * site works end-to-end during build review.
 *
 * TODO (handoff to Reshani / backend): replace this with the real destination —
 * forward to the MSM/CRM, the ESP (newsletter), or an email service per
 * payload.type ("msm" | "speaking" | "media" | "general" | "newsletter").
 * Keep the source/type fields so leads from this site stay attributable.
 */
export async function POST(request: Request) {
  let payload: unknown = null;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.info("[lead] received", payload);

  return NextResponse.json({ ok: true });
}
