import type { IconName } from "@/components/ui/Icon";
import { env } from "@/config";

/* ==========================================================================
   Association details, navigation, and footer.
   Content edits live here and in the sibling files in src/content/.
   ========================================================================== */

export const association = {
  name: "Glendale / Glendale Meadows Community Association",
  /** Used in prose where the full legal name would be clunky. */
  shortName: "Glendale Community Association",
  initials: "GGMCA",
  tagline: "Connecting, supporting, and building a vibrant community in SW Calgary.",
  hall: {
    street: "4500 25 Avenue SW",
    city: "Calgary",
    region: "AB",
    postal: "T3E 0M1",
  },
  phone: env.contactPhone,
  phoneHref: env.phoneHref,
  email: env.contactEmail,
  /** Rendered as a single line for footers and the contact card. */
  addressLine: "4500 25 Avenue SW, Calgary, AB T3E 0M1",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=4500+25+Avenue+SW%2C+Calgary%2C+AB+T3E+0M1",
  mailtoHref: `mailto:${env.contactEmail}`,
  officeHours: [
    { days: "Monday – Thursday", hours: "9:00 am – 3:00 pm" },
    { days: "Friday", hours: "9:00 am – 12:00 pm" },
    { days: "Weekends & holidays", hours: "Closed, unless an event is booked" },
  ],
} as const;

export type NavItem = {
  label: string;
  to: string;
  /** Shown in the mobile drawer, where there is room to explain the link. */
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/", description: "News, announcements, events, and community information" },
  {
    label: "Rentals",
    to: "/facilities",
    description: "Hall rentals, availability, venue details, and official photos",
    children: [
      { label: "Hall rentals & availability", to: "/facilities#hall", description: "Spaces, published rates, calendar and 3D walk-through" },
      { label: "Rental inquiry", to: "/facilities#booking", description: "Ask the Rental Coordinator; an inquiry is not a reservation" },
      { label: "Hall rental photos", to: "/photos", description: "GGMCA originals and official gallery links" },
    ],
  },
  {
    label: "Facilities",
    to: "/facilities#courts",
    description: "Tennis, pickleball, outdoor rink, and seasonal access",
    children: [
      { label: "Tennis & pickleball", to: "/facilities#courts", description: "Seasonal membership, key, deposit and policies" },
      { label: "Outdoor skating rink", to: "/facilities#rink", description: "Seasonal status and volunteer updates" },
      { label: "Community garden", to: "/membership#seasonal-memberships", description: "Guidelines, plot map and seasonal registration" },
    ],
  },
  { label: "Membership", to: "/membership", description: "Join, renew, and what it funds" },
  { label: "Childcare", to: "/childcare", description: "Seedlings early learning; confirm current age range with the programme" },
  {
    label: "Community",
    to: "/community",
    description: "Events, volunteering, The Thumper, and neighbourhood programmes",
    children: [
      { label: "Events & calendar", to: "/community#events", description: "Upcoming gatherings and local programmes" },
      { label: "Volunteer", to: "/community#volunteer", description: "One-time and ongoing opportunities" },
      { label: "The Thumper", to: "/resources#newsletters", description: "Newsletter archive and latest official edition" },
      { label: "Community links", to: "/community-links", description: "Garden, Block Watch, soccer, schools and civic links" },
    ],
  },
  {
    label: "About",
    to: "/about",
    description: "Who we are and how we are governed",
    children: [
      { label: "Our history", to: "/about#history", description: "How the hall came to be" },
      { label: "Board & governance", to: "/about#board", description: "Your elected volunteers" },
      { label: "Bylaws & policies", to: "/resources#bylaws", description: "The rules we operate under" },
    ],
  },
  { label: "Contact", to: "/contact", description: "Office hours, directions, and questions" },
];

export const quickActions: Array<{ label: string; to: string; variant: "sun" | "plum" }> = [
  { label: "Book the hall", to: "/facilities#booking", variant: "sun" },
  { label: "Join or renew", to: "/membership#join", variant: "plum" },
];

export type SocialLink = { label: string; href: string; icon: IconName };

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: env.social.facebook, icon: "facebook" },
  { label: "Instagram", href: env.social.instagram, icon: "instagram" },
  { label: "X", href: env.social.x, icon: "x" },
];

export const footerNav: Array<{ title: string; links: Array<{ label: string; to: string }> }> = [
  {
    title: "Visit",
    links: [
      { label: "Facilities & rentals", to: "/facilities" },
      { label: "Tennis & pickleball", to: "/facilities#courts" },
      { label: "Outdoor ice rink", to: "/facilities#rink" },
      { label: "Hall rental photos", to: "/photos" },
      { label: "Seedlings childcare", to: "/childcare" },
    ],
  },
  {
    title: "Take part",
    links: [
      { label: "Membership", to: "/membership" },
      { label: "Events & classes", to: "/community" },
      { label: "Volunteer", to: "/community#volunteer" },
      { label: "Community links", to: "/community-links" },
      { label: "The Thumper archive", to: "/resources#newsletters" },
    ],
  },
  {
    title: "The association",
    links: [
      { label: "Our history", to: "/about#history" },
      { label: "Board & governance", to: "/about#board" },
      { label: "Bylaws & policies", to: "/resources#bylaws" },
      { label: "Community links", to: "/community-links" },
      { label: "Contact the office", to: "/contact" },
    ],
  },
];
