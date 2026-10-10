import type { IconName } from "@/components/ui/Icon";

/* ==========================================================================
   Facilities and rentals.

   Hall rental information was checked against the official public pages on
   2026-10-09. Published capacity and cleaning claims conflict between those
   pages; make no booking or layout promise from this summary and ask the Rental
   Coordinator to confirm it in the quote. The published rate card is explicitly
   labelled 2025–2026 and dated 2026-02-20, so re-confirm before a new season.
   ========================================================================== */

export type SceneName = "hall" | "courts" | "rink";

export type Fact = { label: string; value: string };

export type Facility = {
  id: SceneName;
  eyebrow: string;
  name: string;
  icon: IconName;
  summary: string;
  /** Two or three sentences of plain description for the detail page. */
  body: string[];
  facts: Fact[];
  /** Bulleted inclusions or rules, whichever the venue needs. */
  includes: { title: string; items: string[] };
  status: { label: string; tone: "open" | "pending" | "closed" };
  cta: { label: string; to: string };
  /** Official source link for current availability/3D content and instructions. */
  walkthrough?: { href: string | null; label: string; note: string };
  rates?: Array<{ label: string; price: string }>;
  ratesNote?: string;
  photo?: { src: string; alt: string };
};

export const facilities: Facility[] = [
  {
    id: "hall",
    eyebrow: "Rentals",
    photo: {
      src: "/images/glendale-hall-main-room.jpg",
      alt: "The bright, wood-floored main hall at Glendale Community Centre",
    },
    name: "Community hall",
    icon: "hall",
    summary:
      "A community hall with a kitchen, projector, stereo, Wi-Fi, boardroom and flexible event spaces. Published capacities vary by room and page; ask the Rental Coordinator to confirm your layout.",
    body: [
      "The official rental overview (rate card dated February 20, 2026) lists 210 people standing or 150 seated. The detailed venue page lists 200 standing or 150 seated; the main hall fits about 100–120 seated at tables with a dance floor, or up to 160 when the whole main hall is used. These published figures conflict—get the suitable capacity confirmed for your event before proceeding.",
      "Rental requests are inquiries, not reservations. The Rental Coordinator reviews the request, checks availability and suitability, then replies with next steps; first-time renters must view the hall in person. A contract and the $500 security deposit are required to reserve a date. Fees are due two weeks before the rental.",
    ],
    facts: [
      { label: "Published overview capacity", value: "210 standing, 150 seated" },
      { label: "Detailed page capacity", value: "200 standing, 150 seated" },
      { label: "Main hall seated layout", value: "100–120 with dance floor; up to 160 using all main-hall space" },
      { label: "Boardroom", value: "17 ft × 15 ft 6 in; table, 10 chairs, whiteboard" },
      { label: "Main hall", value: "41 ft × 46 ft 6 in" },
      { label: "Access and equipment", value: "Projector (HDMI), stereo (no microphone), Wi-Fi" },
    ],
    includes: {
      title: "Venue notes from the detailed rental page",
      items: [
        "Kitchen has three sinks, a microwave, one oven, two coffee makers, fridge, chest freezer, and serving window",
        "Cookware, linens, serving supplies, cutlery, and dishes are not included; wine glasses are available",
        "Inventory: 20 round tables, 12 rectangular tables, 150 stacking chairs, 24 banquet chairs, and 10 boardroom chairs",
        "Renters wash, stack, and return tables and chairs during the rental period",
        "21 parking stalls west of the hall, including two accessible stalls; nearby street parking is available",
        "Surrounding greenspace is City-owned public space and cannot be reserved or blocked off",
        "Private special events only; the detailed page says public-invite and ticketed events are not currently accepted",
      ],
    },
    status: { label: "Inquiries open · check availability", tone: "open" },
    cta: { label: "Request a booking", to: "/facilities#booking" },
    rates: [
      { label: "Monday–Thursday · minimum 4 hours", price: "$95/hour" },
      { label: "Friday evening · 6 pm–2 am", price: "$750" },
      { label: "Saturday full day · 10 am–2 am", price: "$1,050" },
      { label: "Saturday afternoon · 10 am–4 pm", price: "$600" },
      { label: "Saturday evening · 6 pm–2 am", price: "$750" },
      { label: "Sunday full day · 10 am–10 pm", price: "$900" },
      { label: "Boardroom / flex · Monday–Friday, 8 am–5 pm, 4-hour minimum", price: "$50/hour" },
      { label: "Wedding weekend · entire hall", price: "$2,500 + GST" },
      { label: "Security deposit · due at contract signing", price: "$500" },
    ],
    ratesNote:
      "These are the official page's 2025–2026 rates (last updated February 20, 2026), not a guarantee of future pricing. Rates are subject to GST. The overview says cleaning is extra; the detailed page says special-event cleaning is included, while supplementary cleaning is $50/hour. Confirm the complete quote with rentals@myglendale.ca. Dates are not reserved until the contract and $500 deposit are received.",
  },
  {
    id: "courts",
    eyebrow: "Outdoor",
    photo: {
      src: "/images/glendale-tennis-action.jpg",
      alt: "A tennis match in progress on a Glendale community court",
    },
    name: "Tennis & pickleball courts",
    icon: "racket",
    summary:
      "Two tennis courts and three pickleball courts with seasonal member access. Check the association's current status and court-use policies before visiting.",
    body: [
      "The official court page describes two tennis courts and three pickleball courts: one in the tennis practice area and two marked in the rink. A paid seasonal access key and current $35 base membership are required; the key deposit is $20 and is returned when the key is returned.",
      "The current published policy says member courts are first-come, drop-in during daylight. One active member with the current key must be on court and may bring up to three guests. Players rotate after 30 minutes when others are waiting. Check the live policy before visiting; it was last updated April 2026.",
    ],
    facts: [
      { label: "Facilities", value: "2 tennis courts and 3 pickleball courts" },
      { label: "Access", value: "$70 seasonal key + current $35 base membership" },
      { label: "Key deposit", value: "$20, refundable when key is returned" },
      { label: "Play", value: "Daylight, first-come drop-in; 30-minute rotation if others wait" },
    ],
    includes: {
      title: "Current published court rules",
      items: [
        "At least one current GGMCA member with the current season key must be playing",
        "A current member may invite up to three guests and must stay on court",
        "One court per member; no block reservations except private rentals",
        "Pickleball is only on the marked pickleball courts, not inside the tennis courts",
        "Play in daylight; sweep or squeegee the surface if needed",
        "Read the latest policies before use; GGMCA may amend them",
      ],
    },
    status: { label: "Current status on official site", tone: "pending" },
    cta: { label: "Get a season key", to: "/membership#join" },
  },
  {
    id: "rink",
    eyebrow: "Winter",
    photo: {
      src: "/images/glendale-rink-skating-wide.jpg",
      alt: "Winter view of Glendale's outdoor skating rink",
    },
    name: "Outdoor ice rink",
    icon: "rink",
    summary:
      "Flooded and maintained by a volunteer crew every winter, with a heated shack, benches, and lights until 9 pm.",
    body: [
      "The GGMCA rink page describes winter skating and hockey, with warm-season uses including roller hockey, lacrosse, basketball and pickleball. The site describes this as year-round community recreation space; actual access depends on weather, seasonal notices and the activity.",
      "Check the association's rink updates before making a trip. The rink page includes seasonal alerts and ways to help the volunteer crew.",
    ],
    facts: [
      { label: "Winter use", value: "Outdoor skating and hockey, weather permitting" },
      { label: "Warm-season use", value: "Roller hockey, lacrosse, basketball, and pickleball" },
      { label: "Maintenance", value: "Volunteer rink crew" },
      { label: "Updates", value: "Check the association's current rink notices" },
    ],
    includes: {
      title: "Seasonal notices",
      items: [
        "Ice-making and opening depend on weather and rink crew updates",
        "The rink page also describes summer and fall recreational uses",
        "Check current notices for permitted use and seasonal activities",
        "Volunteer support helps maintain rink facilities throughout the year",
      ],
    },
    status: { label: "Waiting on a sustained freeze", tone: "pending" },
    cta: { label: "Volunteer with the flooding crew", to: "/community#volunteer" },
  },
];

export const hallBookingSteps: Array<{ title: string; body: string }> = [
  {
    title: "Check the calendar and choose a space",
    body: "Review the official hall availability calendar and venue information. The hall offers seasonal special-event windows; ongoing weekday renters have separate terms. Long-term rentals are not offered.",
  },
  {
    title: "Submit an inquiry",
    body: "Send a rental request with the space, event type, date, guest count, and the full time you need access—including deliveries, decorating, set-up, and take-down. A request is not a booking.",
  },
  {
    title: "The Rental Coordinator reviews it",
    body: "Allow about two days for an email reply. The coordinator checks schedule conflicts and event suitability, then explains the next steps and provides a quote. No date is held at this point.",
  },
  {
    title: "View the hall and sign the agreement",
    body: "First-time renters must attend an in-person viewing and show government-issued photo ID. If the space is a fit, the coordinator sends the rental agreement.",
  },
  {
    title: "Pay the deposit to reserve the date",
    body: "Return the signed agreement and pay the $500 security deposit by e-transfer or cheque. The date is not reserved or blocked from the calendar until the deposit is received. Rental fees are due in full two weeks before the event. A liquor licence is required when alcohol is served; renter liability insurance is strongly recommended.",
  },
];
