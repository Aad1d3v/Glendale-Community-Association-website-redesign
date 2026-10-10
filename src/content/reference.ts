export type PublicReference = { label: string; href: string; note?: string };
export type PublicReferenceGroup = { title: string; links: PublicReference[] };

/** Local preview routes; external sites are not used as navigation destinations. */

/** Information reviewed against the supplied GGMCA handoff (2026-10-09). */
export const publicReferenceGroups: PublicReferenceGroup[] = [
  {
    title: "Rentals & facilities",
    links: [
      { label: "Hall rentals, availability calendar & venue details", href: "/facilities#hall" },
      { label: "Rental rules & booking process", href: "/facilities#booking" },
      { label: "Hall and community photo gallery", href: "/photos" },
      { label: "Outdoor rink information", href: "/facilities#rink" },
      { label: "Tennis & pickleball access", href: "/facilities#courts" },
      { label: "Court rules and access policies", href: "/facilities#courts" },
    ],
  },
  {
    title: "Membership & programmes",
    links: [
      { label: "Membership information", href: "/membership" },
      { label: "Membership and sign-in preview", href: "/membership#join", note: "This redesign preview does not sign in, create accounts, or process payments." },
      { label: "Garden guidelines", href: "/membership#garden-guidelines" },
      { label: "Garden plot layout", href: "/membership#garden-sketch" },
      { label: "How to request a garden plot", href: "/membership#garden-registration" },
      { label: "Community garden overview", href: "/membership#garden" },
      { label: "Volunteer opportunities", href: "/community#volunteer" },
      { label: "Triwest Soccer", href: "/community#programmes" },
    ],
  },
  {
    title: "Association & records",
    links: [
      { label: "Board roster & roles", href: "/about#board" },
      { label: "Meetings & agenda requests", href: "/about#governance" },
      { label: "Association bylaws", href: "/resources#bylaws" },
      { label: "Board roles outline", href: "/about#board" },
      { label: "Association history", href: "/about#history" },
      { label: "The Thumper newsletter", href: "/resources#newsletters" },
      { label: "Contact directory", href: "/contact#contact-directory" },
      { label: "Events calendar", href: "/community#events", note: "Upcoming event listings are reproduced on the local community page." },
    ],
  },
  {
    title: "Neighbourhood & civic information",
    links: [
      { label: "Block Watch information", href: "/community#programmes", note: "The preview describes the local watch programme; ask the association office for current enrolment or block contacts." },
      { label: "Fire & Police Services", href: "/community-links#emergency-services" },
      { label: "Crime statistics", href: "/community-links#safety-resources", note: "The association points residents to a third-party neighbourhood crime activity update; figures can change." },
      { label: "Ward 6", href: "/community-links#ward6" },
      { label: "Local schools", href: "/community-links#schools" },
      { label: "Planning & Development", href: "/community-links#planning-development" },
      { label: "City of Calgary neighbourhood resources", href: "/community-links#city-resources" },
      { label: "Community association network", href: "/community-links#community-associations" },
    ],
  },
];

/** Facts intentionally left visible for staff review instead of silently guessed. */
export const contentVerificationNotes = [
  "Some official destination pages and service flows are summarized locally for redesign review. Account, payment, registration and booking actions remain disabled or informational in this test preview.",
  "The Crime Stats source points to an external third-party update; this preview does not copy live crime statistics or present undated counts as current.",
  "Meeting schedule conflict: the GGMCA Meetings page says second Wednesday at 7 pm; Volunteer page says second Tuesday, September–June. Confirm with GGMCA before publishing a date.",
  "Hall capacity conflict: rental overview says 210 standing / 150 seated; detailed information says 200 standing / 150 seated and describes up to 160 seated in the main hall. Confirm suitable occupancy for each event.",
  "Cleaning conflict: rental overview says rates exclude a cleaning fee; detailed page says special-event cleaning is included. Supplementary cleaning is listed at $50/hour. Obtain a written quote.",
  "Contact conflicts: the Contact page has a vice-president email typo and a court-coordinator alias that differs from the April 2026 court-policy page. Conflicting individual addresses are not reproduced as verified contacts.",
  "Rates are labeled 2025–2026 and dated February 20, 2026; garden fees mention 2024. Confirm before treating these seasonal figures as current.",
  "The Board roster was last updated October 28, 2025; verify roles and vacancies after each AGM.",
  "The event-calendar endpoint returned stale 2018–2019 page metadata; the homepage also featured 2026 items during review. Confirm event dates, prices, and registration status from a current announcement.",
  "Seedlings: the 2023 GGMCA announcement described care for ages 2–5. Earlier redesign content had unsupported detailed ages, hours, room names, ratios, and daily schedule. Confirm current childcare information directly with Seedlings.",
];

export const officialPhotoAssets = [
  {
    src: "/images/glendale-tennis-action.jpg",
    alt: "A tennis match in progress on a Glendale community court",
    label: "Tennis on the Glendale courts",
    source: "GGMCA community photo",
  },
  {
    src: "/images/glendale-pickleball-action.jpg",
    alt: "Community members playing pickleball outdoors",
    label: "Pickleball at Glendale",
    source: "GGMCA community photo",
  },
  {
    src: "/images/glendale-rink-skating-wide.jpg",
    alt: "Winter view of Glendale's outdoor skating rink",
    label: "Outdoor rink in winter",
    source: "GGMCA community photo",
  },
  {
    src: "/images/glendale-rink-alternate.jpg",
    alt: "Another winter view of the Glendale outdoor rink",
    label: "Rink alternate view",
    source: "GGMCA community photo",
  },
  {
    src: "/images/glendale-rink-park-winter.jpg",
    alt: "Snow-covered Glendale park and rink grounds",
    label: "Rink and park grounds",
    source: "GGMCA community photo",
  },
  {
    src: "/images/glendale-community-garden-official.jpg",
    alt: "The Glendale Community Garden sign and grounds",
    label: "Community garden",
    source: "GGMCA community photo",
  },
  {
    src: "/images/glendale-community-workshop.jpg",
    alt: "A close-up from a Glendale community workshop activity",
    label: "Community workshop",
    source: "GGMCA community photo",
  },
  {
    src: "/images/community-courts-summer.jpg",
    alt: "Glendale's outdoor rink and surrounding park during the green season",
    label: "Glendale courts and green space",
    source: "Provided in the GGMCA Glendale files folder (2026-10-09)",
  },
  {
    src: "/images/community-rink-winter.jpg",
    alt: "Neighbours skating at Glendale's outdoor rink on a sunny winter day",
    label: "Skating at the Glendale rink",
    source: "Provided in the GGMCA Glendale files folder (2026-10-09)",
  },
  {
    src: "/images/community-rink-evening.jpg",
    alt: "Glendale's outdoor rink lit for winter recreation in the evening",
    label: "Evening rink",
    source: "Provided in the GGMCA Glendale files folder (2026-10-09)",
  },
  {
    src: "/images/community-rink-summer.jpg",
    alt: "Neighbours playing hockey on the Glendale rink in bright winter sunshine",
    label: "A winter game together",
    source: "Provided in the GGMCA Glendale files folder (2026-10-09)",
  },
  {
    src: "/images/glendale-hall-main-room.jpg",
    alt: "The bright, wood-floored main hall at Glendale Community Centre",
    label: "Glendale Community Centre hall",
    source: "Provided in Screenshot 2026-10-09 180012 from the GGMCA asset folder",
  },
  {
    src: "/images/glendale-neighbourhood-map.png",
    alt: "Historical map highlighting Glendale and Glendale Meadows in southwest Calgary",
    label: "Glendale neighbourhood map",
    source: "Provided in the GGMCA Glendale files folder (2026-10-09)",
  },
  {
    src: "/images/glendale-early-days.jpg",
    alt: "A child standing beside a creek in the Glendale Meadows landscape in the 1960s",
    label: "A Glendale Meadows memory from the 1960s",
    source: "Glenbow Archives, NA 5600-6843c (as marked on the supplied scan)",
  },
  {
    src: "/images/thumper-banner-april-2026.png",
    alt: "The Glendale Thumper newsletter banner, April 2026",
    label: "The Thumper banner · April 2026",
    source: "GGMCA newsletter banner image",
  },
] as const;
