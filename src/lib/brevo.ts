import { splitName } from "./waitlist-parse";
import type { WaitlistRecord } from "./waitlist-types";

function getBrevoConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;
  if (!apiKey || !listId) {
    throw new Error("Brevo is not configured.");
  }
  const parsedListId = Number(listId);
  if (!Number.isFinite(parsedListId)) {
    throw new Error("BREVO_LIST_ID must be a number.");
  }
  return { apiKey, listId: parsedListId };
}

export async function upsertBrevoContact(
  record: WaitlistRecord,
): Promise<void> {
  const { apiKey, listId } = getBrevoConfig();
  const { firstName, lastName } = splitName(record.name);

  const attributes: Record<string, string> = {
    FIRSTNAME: firstName,
    FULL_NAME: record.name,
    ROLE: record.role,
    SIGNUP_SOURCE: record.source,
  };
  if (lastName) attributes.LASTNAME = lastName;

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email: record.email,
      attributes,
      listIds: [listId],
      updateEnabled: true,
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
    detail ? `Brevo error: ${detail}` : `Brevo request failed (${res.status}).`,
  );
}
