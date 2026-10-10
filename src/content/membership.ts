import type { IconName } from "@/components/ui/Icon";

/*
 * Membership details checked against the current GGMCA membership, court,
 * community garden, and volunteer pages (October 2026).
 */

export type Tier = {
  id: string;
  name: string;
  price: string;
  per: string;
  /** Shown as the short line under the name. */
  blurb: string;
  best?: boolean;
  includes: string[];
};

export const tiers: Tier[] = [
  {
    id: "resident",
    name: "Resident membership",
    price: "$35",
    per: "per year · auto-renewing",
    blurb: "The annual base membership for residents of Glendale and Glendale Meadows.",
    best: true,
    includes: [
      "Annual community association membership",
      "Supports the hall, park, rink, courts and local programs",
      "Access to seasonal add-ons through the member portal",
    ],
  },
  {
    id: "associate",
    name: "Associate membership",
    price: "$35",
    per: "per year · auto-renewing",
    blurb: "A base membership for neighbours and supporters who live outside the community.",
    includes: [
      "Annual community association membership",
      "Non-residents are welcome to join",
      "Access to seasonal add-ons through the member portal",
    ],
  },
];

/** Practical examples of the work the association says memberships support. */
export const benefits: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "users",
    title: "A say in neighbourhood life",
    body: "The association holds monthly meetings, plans community issues, and represents Glendale with the City on planning and traffic matters.",
  },
  {
    icon: "hall",
    title: "Places to gather and play",
    body: "Members help maintain and improve the community hall, surrounding park, outdoor rink, and seasonal tennis and pickleball facilities.",
  },
  {
    icon: "heart",
    title: "Neighbourhood events",
    body: "The association organises Family Fun Day, Neighbour Day, the Stampede Breakfast, a Halloween party, and a Christmas party.",
  },
  {
    icon: "newspaper",
    title: "Local news and programmes",
    body: "GGMCA publishes The Thumper and supports sports, arts, youth, Guides, Scouts, and other community programmes.",
  },
];

export const membershipPortal = {
  coordinatorEmail: "membership@myglendale.ca",
  courtCoordinatorEmail: "court-coordinator@myglendale.ca",
  gardenEmail: "garden@myglendale.ca",
};

export const membershipResources = {
  volunteerUrl: "/community#volunteer",
};

export const gardenGuidelines = [
  "Maintain your plot and nearby shared paths; tell the Garden Committee if you are giving up your space.",
  "Help care for shared flower pots, pathway beds, compost bins, and stairs.",
  "Stay on site while using the water; turn it off and hang up the hose when finished. Respect the marked water-line edging.",
  "Remove dead plants and non-plant materials, and leave the plot tidy by October 15. Put healthy plant waste in the black compost bins; bag diseased plants and invasive or seedy weeds for trash.",
  "Ask before touching another gardener’s plot or harvest. Keep tall plants and vines from interfering with neighbouring plots.",
  "Keep the garden family-friendly, supervise children and pets, and report concerns respectfully to the Garden Coordinator.",
];

export const gardenRegistrationSteps = [
  "Review the guidelines and approximate plot sketch.",
  "Complete the plot-registration form and email it as an attachment to garden@myglendale.ca; contact the Garden Coordinator with questions.",
  "The historic page says seasonal plot payment opened May 1 through the membership portal. This preview does not accept registrations or payments; confirm the current season's process and fee.",
  "The coordinator confirms the plot assignment or offers an alternate after receiving payment; a requested location is not guaranteed.",
];

export const memberOffers = [
  {
    name: "Cloverdale Paint",
    offer: "25% off paint and 15% off paint accessories",
    note: "Offer information transcribed for redesign preview; confirm directly with the participating business before relying on it.",
  },
  {
    name: "Cabin Brewing Company",
    offer: "10% off your tab when you show your GGMCA membership card",
    note: "Offer information transcribed for redesign preview; confirm directly with the participating business before relying on it.",
  },
];

export type SeasonalMembership = {
  id: string;
  title: string;
  price: string;
  body: string;
  details: string[];
  image: string;
  imageAlt: string;
  contact: { label: string; email: string };
  diagram?: { src: string; fullSize: string; alt: string; caption: string };
};

export const seasonalAddOns: SeasonalMembership[] = [
  {
    id: "courts",
    title: "Tennis & pickleball",
    price: "$70 per season · $20 refundable key deposit",
    body: "Add-on access requires a current $35 annual base membership. Glendale offers two tennis courts and three pickleball courts; key pickup is arranged after your payment.",
    details: [
      "First-come, drop-in play during daylight hours. One current member with their season key must be on court; the member may invite up to three guests.",
      "Members share courts in 30-minute sessions when others are waiting. Private bookings are available separately.",
    ],
    image: "/images/glendale-tennis-courts.jpg",
    imageAlt: "Glendale's outdoor tennis courts",
    contact: { label: "Court Coordinator", email: membershipPortal.courtCoordinatorEmail },
  },
  {
    id: "garden",
    title: "Community garden plot",
    price: "Seasonal plot rental · current rate to confirm",
    body: "A volunteer-run space between the Community Hall and tennis courts for growing food, flowers, skills, and friendships. The public page still describes a 2024 $35 plot add-on, so confirm this season’s price and availability with the Garden Coordinator.",
    details: [
      "Review the gardener guidelines and approximate plot sketch before requesting a space.",
      "Complete the registration form and email it as an attachment to the Garden Coordinator; list plot preferences to help with assignment.",
      "After payment, the coordinator confirms availability or offers an alternate plot. Registration does not guarantee a specific plot.",
    ],
    image: "/images/glendale-community-garden.jpg",
    imageAlt: "Sign for the Glendale Community Garden",
    contact: { label: "Garden Coordinator", email: membershipPortal.gardenEmail },
    diagram: {
      src: "/images/glendale-garden-sketch.png",
      fullSize: "/images/glendale-garden-sketch.png",
      alt: "Garden layout sketch showing approximate plot locations",
      caption: "Approximate garden layout; not to scale. The sketch indicates the plots, planters, shrubs, and water tap.",
    },
  },
];

export const joinSteps: Array<{ title: string; body: string }> = [
  {
    title: "Create an account or sign in",
    body: "Use the GGMCA member portal to start a new account or access an existing membership.",
  },
  {
    title: "Choose and pay for membership",
    body: "Select Resident or Associate. The $35 annual base membership auto-renews on its purchase anniversary until cancelled. Seasonal add-ons renew separately.",
  },
  {
    title: "Check your email",
    body: "The portal emails a payment receipt and a welcome note from the volunteers who manage any facilities you joined.",
  },
];

export const membershipFaq: Array<{ q: string; a: string }> = [
  {
    q: "Do I have to live in Glendale to join?",
    a: "No. The association offers Resident and Associate base memberships, and non-residents are welcome to join. Ask the Membership Coordinator if you are unsure which type applies to you.",
  },
  {
    q: "Does the annual membership renew automatically?",
    a: "Yes. The $35 base community membership is charged to the payment card on its purchase anniversary until you cancel it. Tennis/pickleball and garden add-ons are seasonal and are not automatically rebilled by default. They can be renewed at the start of the season, and the portal may allow you to enable auto-renewal for an add-on.",
  },
  {
    q: "I already have a membership but cannot sign in. What should I do?",
    a: "On the portal sign-in page, choose Forgot Password and enter the email address used for your membership. Check your spam or other mail folders for the reset email. Contact membership@myglendale.ca if you still need help.",
  },
  {
    q: "How much does court access cost?",
    a: "Tennis and pickleball access is a separate $70 seasonal passkey, in addition to the $35 annual base membership. There is also a $20 key deposit, returned when you give the key back. See the court policies for current access rules.",
  },
  {
    q: "What should a Seedlings family do?",
    a: "When creating a membership or updating your profile, select the checkbox that says your child is registered with Seedlings Early Learning childcare.",
  },
  {
    q: "Can I cancel the annual renewal?",
    a: "The base membership continues to renew on its anniversary until cancelled. Sign in to the member portal to review your membership and renewal status or ask the Membership Coordinator for help.",
  },
];
