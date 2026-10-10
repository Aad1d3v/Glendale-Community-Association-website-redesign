import type { IconName } from "@/components/ui/Icon";

/* ==========================================================================
   Seedlings Early Learning.

   The GGMCA page points to the membership checkbox for registered families.
   Its May 2023 announcement described full-day care for ages 2–5. Current
   hours, fees, spaces, rooms, ratios, programme details and tour process are not
   verified in the handoff; confirm them directly with Seedlings before adding.
   ========================================================================== */

export const seedlings = {
  name: "Seedlings Early Learning",
  tagline: "A childcare partnership at Glendale Community Association. The 2023 launch announcement describes full-day care for children ages 2–5; confirm current programme details directly with Seedlings.",
  ages: "2 to 5 years (confirm current eligibility)",
  hours: "Confirm current hours with Seedlings",
  contactEmail: "seedlings@myglendale.ca",
  licensing: "Licensed under Alberta's Child Care Licensing Act",
  curriculum: "Flight: Alberta's Early Learning and Care Framework",
};

export const seedlingsFacts: Array<{ icon: IconName; label: string; value: string }> = [
  { icon: "seedling", label: "Ages", value: "2–5 years in the 2023 announcement; confirm current age range" },
  { icon: "clock", label: "Hours", value: "Confirm current schedule with Seedlings" },
  { icon: "users", label: "Capacity", value: "Ask Seedlings about current licensed spaces" },
  { icon: "shield", label: "Registration", value: "Update your GGMCA profile and tick the Seedlings registrant checkbox" },
];

export const rooms: Array<{ name: string; ages: string; ratio: string; body: string }> = [];

export const aDay: Array<{ time: string; activity: string }> = [];

export const environment: string[] = [
  "The public GGMCA page describes a childcare partnership at the Glendale community centre. Confirm current room, outdoor-space, meal, and facility details with Seedlings before relying on them.",
];

export const staff: string[] = [
  "Ask Seedlings for current staff qualifications, licensing information, group sizes, and educator-to-child ratios.",
];

export const registrationSteps: Array<{ title: string; body: string }> = [
  {
    title: "Contact Seedlings about a tour",
    body: "Tour availability and appointment times are not confirmed in the current GGMCA handoff. Email seedlings@myglendale.ca to ask about visiting.",
  },
  {
    title: "Ask about current enrolment",
    body: "The GGMCA membership page asks registered Seedlings families to tick the childcare registration checkbox in their member profile. Confirm current application, waitlist, and priority practices directly with Seedlings.",
  },
  {
    title: "Complete the current registration process",
    body: "Request current forms, required records, fee information, and the family handbook from Seedlings.",
  },
  {
    title: "Confirm your start date and fees",
    body: "Confirm available care, schedule, fees, and any applicable affordability support directly with Seedlings before accepting a space.",
  },
];

export const childcareFaq: Array<{ q: string; a: string }> = [
  {
    q: "What age groups and hours are available?",
    a: "The GGMCA's May 2023 announcement described full-day care for children ages 2–5. Contact seedlings@myglendale.ca to confirm the current ages, schedule, and availability.",
  },
  {
    q: "Do registered Seedlings families need a GGMCA membership profile?",
    a: "The GGMCA membership page instructs registered families to create or update their profile and tick the checkbox confirming their child is registered with Seedlings Early Learning childcare.",
  },
  {
    q: "How do I ask about tours or enrolment?",
    a: "Contact seedlings@myglendale.ca for the current tour schedule, application steps, fees, licensing details, and availability.",
  },
];
