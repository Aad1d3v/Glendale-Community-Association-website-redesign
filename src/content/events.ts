import type { IconName } from "@/components/ui/Icon";

/** Public GGMCA listings and programme information checked October 9, 2026. */
export type EventCategory = "Community" | "Class" | "Market" | "Meeting" | "Seasonal";

export type CommunityEvent = {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  category: EventCategory;
  cost: string;
  description: string;
  registration: "open" | "required" | "drop-in" | "closed";
  featured?: boolean;
};

/** Dates from public event listings; announcements may change. */
export const events: CommunityEvent[] = [
  {
    id: "halloween-party-2026",
    title: "Halloween Party 2026",
    date: "2026-10-30",
    startTime: "5:00 pm",
    endTime: "9:00 pm",
    location: "Glendale Hall · 4500 25 Avenue SW",
    category: "Community",
    cost: "Details to be announced",
    description: "A neighbourhood Halloween party hosted by the GGMCA Halloween Committee. More details are coming soon.",
    registration: "closed",
    featured: true,
  },
  {
    id: "holiday-market-2026",
    title: "HOLIDAY MARKET at The Hall",
    date: "2026-11-07",
    startTime: "10:00 am",
    endTime: "2:30 pm",
    location: "Glendale Hall · 4500 25 Avenue SW",
    category: "Market",
    cost: "Public admission details to be announced",
    description: "The association lists exhibitor-table applications for this holiday market. Public admission details have not yet been announced.",
    registration: "required",
  },
];

export type Program = {
  name: string;
  cadence: string;
  audience: string;
  cost: string;
  icon: IconName;
  body: string;
};

export const communityPrograms: Program[] = [
  {
    name: "Triwest community soccer",
    cadence: "Indoor in fall · Outdoor in spring",
    audience: "U6 and U8 house league; U8/U10 CMSA or SWL options vary by season",
    cost: "See current partner registration details",
    icon: "racket",
    body: "A grassroots club offering indoor soccer at Glendale School and outdoor soccer at Turtle Hill. Fall listings include U6 and U8 CMSA and house-league options plus U10 girls’ and boys’ CMSA; spring listings include U6/U8 house league and U10 girls’/boys’ SWL. Seasonal divisions, schedules, fees, and registration are set by Triwest.",
  },
  {
    name: "Tennis & pickleball",
    cadence: "Seasonal court access · daytime drop-in",
    audience: "GGMCA members and their guests",
    cost: "$70 seasonal passkey + $35 annual membership; $20 refundable key deposit",
    icon: "racket",
    body: "Two tennis courts and three pickleball courts, including two courts marked in the rink. One current member with a passkey must play; check the local Facilities page for court rules.",
  },
  {
    name: "Community garden",
    cadence: "Growing season · volunteer-run",
    audience: "Neighbourhood gardeners",
    cost: "Confirm this season’s plot fee with the Garden Coordinator",
    icon: "seedling",
    body: "Grow food, flowers, skills, and friendships in the garden between the hall and tennis courts. Gardeners share care for paths, planters, and compost; ask about current plot registration and availability.",
  },
];

export const volunteerInformation = [
  { title: "Event crew", commitment: "One day or a short shift", body: "Welcome neighbours, help direct traffic, support Neighbour Day, the Santa Toy Drive, Winter Sport Day, or flip pancakes at the Stampede Breakfast." },
  { title: "Sports & facilities", commitment: "Seasonal or ongoing", body: "Help keep community sports and shared facilities active, from rink and court activities to park recreation." },
  { title: "Community cleanup", commitment: "Event-day help", body: "Help greet residents, direct traffic, and keep the neighbourhood cleanup running smoothly." },
  { title: "Casino night", commitment: "Occasional shifts", body: "Support the association’s casino fundraiser in roles such as cash room or chip runner." },
  { title: "Board & committees", commitment: "Monthly meetings or project-based", body: "Contribute skills to the volunteer board or join a committee focused on a specific neighbourhood project. The posted board schedule may change; check with GGMCA before attending." },
];
