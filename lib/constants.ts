export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://navarickstudio.com";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@navarick.com";

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;
