import type { WaitlistRecord } from "./waitlist-types";

function getSheetConfig() {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.WAITLIST_WEBHOOK_SECRET;
  if (!url || !secret) {
    throw new Error("Google Sheets webhook is not configured.");
  }
  return { url, secret };
}

export async function appendWaitlistRow(record: WaitlistRecord): Promise<void> {
  const { url, secret } = getSheetConfig();

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      secret,
      submitted_at: record.submitted_at,
      name: record.name,
      email: record.email,
      role: record.role,
      first_name: record.first_name,
      source: record.source,
      status: record.status,
    }),
  });

  const text = await res.text();
  let json: { ok?: boolean; error?: string } = {};
  try {
    json = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    /* Apps Script may return non-JSON on misconfiguration */
  }

  if (res.ok && json.ok === true) return;

  throw new Error(
    json.error ?? `Google Sheets request failed (${res.status}).`,
  );
}
