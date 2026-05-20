import { NextResponse } from "next/server";
import { upsertBrevoContact } from "@/lib/brevo";
import { appendWaitlistRow } from "@/lib/google-sheet";
import { parseWaitlistBody, toWaitlistRecord } from "@/lib/waitlist-parse";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = parseWaitlistBody(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: parsed.error },
      { status: 400 },
    );
  }

  const record = toWaitlistRecord(parsed.data);

  try {
    await upsertBrevoContact(record);
  } catch (err) {
    console.error("[waitlist] Brevo failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not save your signup. Please try again in a moment.",
      },
      { status: 502 },
    );
  }

  try {
    await appendWaitlistRow(record);
  } catch (err) {
    console.error("[waitlist] Google Sheet failed (Brevo ok):", err);
  }

  return NextResponse.json({ ok: true });
}
