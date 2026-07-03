import { NextResponse } from "next/server";

/**
 * Lead + newsletter endpoint. Every form on the site POSTs its JSON here, and
 * this route forwards it (server-to-server, so no browser CORS issues) to the
 * Google Apps Script Web App, which appends a row to the "Naren Site — Leads"
 * Google Sheet.
 *
 * The Web App URL can be overridden with the SHEET_WEBHOOK_URL env var in
 * Vercel; otherwise it falls back to the deployed Apps Script below.
 */
const SHEET_WEBHOOK_URL =
  process.env.SHEET_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbzZjJ9VmwVh3TI-qj-zxi2bTS1Z7uXDpGcDiVfnKr1CSjvYo_etIpYvdAHvC3BBohIe/exec";

export async function POST(request: Request) {
  let payload: Record<string, unknown> = {};
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  try {
    await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
      redirect: "follow",
    });
  } catch {
    // Don't fail the visitor's submission if the sheet is briefly unreachable;
    // log for debugging in the Vercel function logs.
    // eslint-disable-next-line no-console
    console.error("[lead] failed to forward to sheet", payload);
  }

  return NextResponse.json({ ok: true });
}
