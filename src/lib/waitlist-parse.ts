import { validateWaitlistFields } from "./waitlist-validate";
import type { WaitlistPayload, WaitlistRecord } from "./waitlist-types";

export function parseWaitlistBody(
  body: unknown,
): { ok: true; data: WaitlistPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name : "";
  const email = typeof raw.email === "string" ? raw.email : "";
  const role = typeof raw.role === "string" ? raw.role : "";

  const result = validateWaitlistFields({ name, email, role });
  if (!result.ok) {
    const first =
      result.errors.name ??
      result.errors.email ??
      result.errors.role ??
      "Please check the form and try again.";
    return { ok: false, error: first };
  }

  return result;
}

export function toWaitlistRecord(payload: WaitlistPayload): WaitlistRecord {
  const parts = payload.name.split(/\s+/).filter(Boolean);
  return {
    ...payload,
    first_name: parts[0] ?? payload.name,
    submitted_at: new Date().toISOString(),
    source: "shekel-landing",
    status: "new",
  };
}

export function splitName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const parts = fullName.split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? fullName;
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}
