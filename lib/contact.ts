export const CONTACT_FIELD_LIMITS = {
  name: 100,
  email: 254,
  businessName: 120,
  currentWebsite: 500,
  message: 3_000,
  company: 200,
} as const;

export type ContactField =
  | "name"
  | "email"
  | "businessName"
  | "currentWebsite"
  | "message";

export function isContactField(value: unknown): value is ContactField {
  return (
    value === "name" ||
    value === "email" ||
    value === "businessName" ||
    value === "currentWebsite" ||
    value === "message"
  );
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
