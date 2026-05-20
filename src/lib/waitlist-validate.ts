import {
  WAITLIST_ROLES,
  type WaitlistPayload,
  type WaitlistRole,
} from "./waitlist-types";

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const NAME_RE = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' -]{1,}$/;

export type WaitlistFieldErrors = {
  name?: string;
  email?: string;
  role?: string;
};

export function validateWaitlistFields(input: {
  name: string;
  email: string;
  role: string;
}):
  | { ok: true; data: WaitlistPayload }
  | { ok: false; errors: WaitlistFieldErrors } {
  const errors: WaitlistFieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const role = input.role.trim().toLowerCase();

  if (!name) {
    errors.name = "Enter your full name.";
  } else if (name.length < 2 || !NAME_RE.test(name)) {
    errors.name = "Enter your full name (at least 2 characters).";
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_RE.test(email) || email.includes("..")) {
    errors.email = "Enter a valid email address.";
  }

  if (!WAITLIST_ROLES.includes(role as WaitlistRole)) {
    errors.role = "Choose the option that best describes you.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, role: role as WaitlistRole },
  };
}
