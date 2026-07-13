import type { WaitlistRecord } from "./waitlist-types";

const ROLE_LABELS: Record<WaitlistRecord["role"], string> = {
  builder: "Builder",
  buyer: "Buyer",
  founder: "Founder",
  curious: "Curious",
};

function getNotifyConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  const from = process.env.WAITLIST_NOTIFY_FROM?.trim();
  const toRaw = process.env.WAITLIST_NOTIFY_TO?.trim();
  if (!apiKey || !from || !toRaw) {
    return null;
  }

  const to = toRaw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  if (to.length === 0) {
    return null;
  }

  return { apiKey, from, to };
}

function buildEmailContent(record: WaitlistRecord) {
  const roleLabel = ROLE_LABELS[record.role] ?? record.role;
  const subject = `New Shekel waitlist signup: ${record.name}`;

  const lines = [
    "New waitlist signup",
    "",
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Role: ${roleLabel}`,
    `Submitted: ${record.submitted_at}`,
    `Source: ${record.source}`,
    `Status: ${record.status}`,
  ];

  const textContent = lines.join("\n");
  const htmlContent = `
    <h2>New waitlist signup</h2>
    <table cellpadding="4" cellspacing="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(record.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(record.email)}</td></tr>
      <tr><td><strong>Role</strong></td><td>${escapeHtml(roleLabel)}</td></tr>
      <tr><td><strong>Submitted</strong></td><td>${escapeHtml(record.submitted_at)}</td></tr>
      <tr><td><strong>Source</strong></td><td>${escapeHtml(record.source)}</td></tr>
      <tr><td><strong>Status</strong></td><td>${escapeHtml(record.status)}</td></tr>
    </table>
  `.trim();

  return { subject, textContent, htmlContent };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendWaitlistNotifyEmail(
  record: WaitlistRecord,
): Promise<void> {
  const config = getNotifyConfig();
  if (!config) {
    return;
  }

  const { subject, textContent, htmlContent } = buildEmailContent(record);

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": config.apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Shekel Waitlist", email: config.from },
      to: config.to.map((email) => ({ email })),
      replyTo: { email: record.email, name: record.name },
      subject,
      textContent,
      htmlContent,
    }),
  });

  if (res.ok) return;

  let detail = "";
  try {
    const json = (await res.json()) as { message?: string };
    detail = json.message ?? "";
  } catch {
    /* ignore */
  }

  throw new Error(
    detail
      ? `Brevo notify error: ${detail}`
      : `Brevo notify request failed (${res.status}).`,
  );
}
