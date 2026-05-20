export const WAITLIST_ROLES = [
  "builder",
  "buyer",
  "founder",
  "curious",
] as const;

export type WaitlistRole = (typeof WAITLIST_ROLES)[number];

export type WaitlistPayload = {
  name: string;
  email: string;
  role: WaitlistRole;
};

export type WaitlistRecord = WaitlistPayload & {
  submitted_at: string;
  first_name: string;
  source: string;
  status: string;
};
