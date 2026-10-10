/**
 * Environment-backed settings.
 *
 * Every value falls back to the association's published details, so the site
 * builds and runs with no .env file at all. An empty string counts as unset —
 * Docker passes unset build args through as "", and that must not blank out the
 * page. See .env.example for the full list.
 */
const read = (value: string | undefined, fallback: string): string => {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
};

/** Turns a human phone number into a dialable href. */
const toTelHref = (phone: string): string => {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return `tel:${digits}`;
};

export const env = {
  siteUrl: read(import.meta.env.VITE_SITE_URL, "https://myglendale.ca"),
  siteName: read(
    import.meta.env.VITE_SITE_NAME,
    "Glendale / Glendale Meadows Community Association",
  ),
  contactEmail: read(import.meta.env.VITE_CONTACT_EMAIL, "info@myglendale.ca"),
  contactPhone: read(import.meta.env.VITE_CONTACT_PHONE, "403-242-2110"),
  address: read(import.meta.env.VITE_ADDRESS, "4500 25 Avenue SW, Calgary, AB T3E 0M1"),
  social: {
    facebook: read(import.meta.env.VITE_SOCIAL_FACEBOOK, "https://www.facebook.com/myglendale"),
    instagram: read(import.meta.env.VITE_SOCIAL_INSTAGRAM, "https://www.instagram.com/myglendale"),
    x: read(import.meta.env.VITE_SOCIAL_X, "https://x.com/myglendale"),
  },
  phoneHref: toTelHref(read(import.meta.env.VITE_CONTACT_PHONE, "403-242-2110")),
};
