const LOCALE = "en-CA";

const parse = (iso: string): Date => new Date(`${iso}T00:00:00`);

/** "Saturday, October 24, 2026" */
export const formatLongDate = (iso: string): string =>
  new Intl.DateTimeFormat(LOCALE, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parse(iso));

/** "Sat, Oct 24" */
export const formatShortDate = (iso: string): string =>
  new Intl.DateTimeFormat(LOCALE, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(parse(iso));

/** "October 2026" — used for newsletter issues and archive grouping. */
export const formatMonthYear = (iso: string): string =>
  new Intl.DateTimeFormat(LOCALE, { month: "long", year: "numeric" }).format(parse(iso));

/** Day of month as a zero-padded string, for calendar-style date chips. */
export const dayOfMonth = (iso: string): string =>
  String(parse(iso).getDate()).padStart(2, "0");

/** Three-letter month, uppercase, for calendar-style date chips. */
export const monthAbbr = (iso: string): string =>
  new Intl.DateTimeFormat(LOCALE, { month: "short" })
    .format(parse(iso))
    .toUpperCase();

/** Days between now and an ISO date — negative once the date has passed. */
export const daysUntil = (iso: string): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = parse(iso);
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
};

export const isUpcoming = (iso: string): boolean => daysUntil(iso) >= 0;

/** "in 3 days", "tomorrow", "today" — only used for genuinely near events. */
export const countdownLabel = (iso: string): string | null => {
  const days = daysUntil(iso);
  if (days < 0) return null;
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days <= 14) return `In ${days} days`;
  return null;
};
