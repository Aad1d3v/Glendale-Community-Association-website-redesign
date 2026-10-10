import type { IconName } from "@/components/ui/Icon";

export const rentalsEmail = "rentals@myglendale.ca";
export const presidentEmail = "president@myglendale.ca";
export const courtsEmail = "court-coordinator@myglendale.ca";

export type ContactDirectoryEntry = {
  name: string;
  role: string;
  email?: string;
  note?: string;
};

/** Public role roster transcribed from the supplied October 2026 handoff.
 * The linked pages remain authoritative because the board listing is dated. */
export const contactDirectory: ContactDirectoryEntry[] = [
  { name: "Myles Trawick", role: "President", email: "president@myglendale.ca" },
  { name: "Amanda Saigeon", role: "Vice President", email: "vice-president1@myglendale.ca" },
  { name: "Lindsay Sali", role: "Vice President", note: "Conflicting email spellings on the Contact and Board pages; confirm with GGMCA before use." },
  { name: "Shane Duthie", role: "Treasurer", email: "treasurer@myglendale.ca" },
  { name: "Nigel Robertson", role: "Secretary", email: "secretary@myglendale.ca" },
  { name: "Margaret Chandler", role: "Casino Coordinator / Member-at-Large", email: "casino@myglendale.ca" },
  { name: "Monika Smith", role: "Membership Coordinator", email: "membership@myglendale.ca", note: "The Board page also lists naturallyglendale@myglendale.ca for the Naturally, Glendale! role." },
  { name: "Michael Sander", role: "Community Garden Coordinator", email: "garden@myglendale.ca" },
  { name: "Aaron Shannon", role: "Website Coordinator", email: "website@myglendale.ca", note: "Court-coordinator aliases conflict across public pages; use the official Contact page to confirm." },
  { name: "James Durant", role: "Hall Rentals", email: "rentals@myglendale.ca" },
  { name: "Jessica Pedlow", role: "Social Media", email: "social@myglendale.ca" },
  { name: "Laura Nixon", role: "Member-at-Large", note: "No email was shown on the Board page reviewed." },
  { name: "Veronika Duska", role: "Member-at-Large", note: "No email was shown on the Board page reviewed." },
  { name: "Rink Crew", role: "Seasonal rink updates and volunteering", email: "rink@myglendale.ca" },
];

export type ContactReason = {
  id: string;
  title: string;
  body: string;
  icon: IconName;
  /** Where the visitor should go instead of the office inbox, when there is a better door. */
  action: { label: string; to: string };
  /** Shown as a small note, e.g. expected turnaround. */
  note?: string;
};

export const contactReasons: ContactReason[] = [
  {
    id: "hall",
    title: "Rent the hall",
    body: "Send the date, times, space, guest count, and event details to the Rental Coordinator. A request is an inquiry only—not a reservation. Availability, suitability, and the quote are confirmed in a reply.",
    icon: "hall",
    action: { label: "Use the inquiry form", to: "/facilities#booking" },
    note: "Official rental inbox: rentals@myglendale.ca",
  },
  {
    id: "membership",
    title: "Join, renew, or change your details",
    body: "Join or renew through the GGMCA member portal. The membership page explains forgotten-password recovery, auto-renewal, and seasonal access.",
    icon: "users",
    action: { label: "See membership options", to: "/membership" },
  },
  {
    id: "community",
    title: "Community concerns and volunteering",
    body: "Volunteer for a single event or an ongoing programme, or contact the President about a community issue or agenda topic.",
    icon: "users",
    action: { label: "See volunteer opportunities", to: "/community#volunteer" },
    note: "President: president@myglendale.ca",
  },
  {
    id: "seedlings",
    title: "Seedlings childcare",
    body: "Contact Seedlings directly about current enrolment, tours, age eligibility, hours, and fees. Registered families should tick the Seedlings checkbox in their GGMCA membership profile.",
    icon: "seedling",
    action: { label: "Read about Seedlings", to: "/childcare" },
    note: "Seedlings: seedlings@myglendale.ca", 
  },
  {
    id: "volunteer",
    title: "Volunteer with us",
    body: "Rink crew, event crew, hall maintenance, or a committee seat. Tell us what you would like to do and how much time you have.",
    icon: "heart",
    action: { label: "See volunteer roles", to: "/community#volunteer" },
  },
  {
    id: "facility-issue",
    title: "Report a problem at the hall, courts, or rink",
    body: "Broken boards, a light out in the shack, a hole in the court surface, damage after a rental. For urgent hazards call the community voicemail; for community issues, contact the President.",
    icon: "shield",
    action: { label: "Call the community voicemail", to: "tel:4032422110" },
    note: "Urgent rink hazards: call the office line and leave a message",
  },
  {
    id: "records",
    title: "Records, minutes, or a document request",
    body: "Anything in the archive, plus anything not yet online — older minutes, financial statements, or plans of the building.",
    icon: "file",
    action: { label: "Browse the archive first", to: "/resources" },
  },
];

export const visiting: Array<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Parking",
    body: "The hall rental information page lists 21 at-grade stalls west of the hall, including two accessible stalls. Additional street parking is available on 25 Avenue SW or Glenmount Drive SW; nearby alleys are no-parking zones. Confirm current parking rules before an event.",
    icon: "mapPin",
  },
  {
    title: "Getting here",
    body: "The hall is at 4500 25 Avenue SW. The rental information page gives access directions from nearby lanes and places it about 850 metres from the 45 Street CTrain station. Consult current Calgary Transit information for routes.",
    icon: "users",
  },
  {
    title: "Accessibility",
    body: "Ask the association about access needs and the current accessible route, stalls, and facilities when planning your visit.",
    icon: "wheelchair",
  },
  {
    title: "Lost something?",
    body: "Lost and found lives in the coat room and is emptied at the end of every month. Call the office and describe the item.",
    icon: "search",
  },
];

export const contactFaq: Array<{ q: string; a: string }> = [
  {
    q: "How quickly will someone reply?",
    a: "The office answers email within two business days. Hall bookings and childcare tours get a reply the same week, and anything urgent about the rink is best handled by phone.",
  },
  {
    q: "Can I just drop in?",
    a: "Yes, during office hours. Monday to Thursday 9:00 am to 3:00 pm and Friday morning until noon. If you want to see the hall, call ahead so we can walk you through it instead of leaving you at the door.",
  },
  {
    q: "Where do I send a rental payment?",
    a: "E-transfer to the office email is the easiest. Cheques and cards are taken at the office during office hours. Never send cash through the mail.",
  },
  {
    q: "Who do I talk to about the newsletter?",
    a: "The Thumper is written and assembled by volunteers. Submissions are due on the 20th of the month before publication, and the address is in every issue.",
  },
];
