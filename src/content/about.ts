/* ========================================================================
   Association history, board structure, and governance details for redesign
   preview. Some roster and schedule items are dated; verify before public use.
   ======================================================================== */

export const historyIntro: string[] = [
  "The Glendale / Glendale Meadows Community Association was incorporated in Alberta on August 8, 1955, according to the association's bylaws.",
  "The volunteer association stewards about five acres of greenspace with a community garden, tennis and pickleball courts, outdoor hockey and skating rinks, and a community hall of roughly 5,000 square feet.",
  "The official Board page says the hall underwent an extensive $1.2 million renovation in 2022–2023. For historical photos and resident stories, see the association's History page.",
];

export const historyTimeline: Array<{ era: string; title: string; body: string }> = [
  {
    era: "August 8, 1955",
    title: "The association is incorporated",
    body: "The incorporation date is recorded in the association's bylaws. For the full, documented history, see the official GGMCA History page and share any photographs or stories with the office.",
  },
  {
    era: "2022–2023",
    title: "The community hall is extensively renovated",
    body: "The association's Board page describes a $1.2 million renovation. The hall now hosts community groups, private rentals, and community-focused events.",
  },
];

export const communityStats: Array<{ value: string; label: string }> = [
  { value: "1955", label: "association incorporation year (bylaws)" },
  { value: "5 acres", label: "greenspace stewarded by GGMCA" },
  { value: "~5,000 sq ft", label: "community hall" },
  { value: "$1.2M", label: "hall renovation in 2022–2023" },
];

export type BoardRole = {
  title: string;
  term: string;
  duties: string;
};

export const boardRoles: BoardRole[] = [
  {
    title: "President",
    term: "One year, elected annually",
    duties:
      "Chairs board and general meetings, speaks for the association, and signs off on grants and contracts with the treasurer.",
  },
  {
    title: "Vice Presidents",
    term: "Roles shown on 2025–2026 roster",
    duties: "The Board page lists two Vice Presidents. Confirm current roles and terms against the official roster, which was last updated October 28, 2025.",
  },
  {
    title: "Treasurer",
    term: "Two years",
    duties:
      "Keeps the books, brings the monthly financial report, prepares the budget, and works with the reviewers on the annual statements.",
  },
  {
    title: "Secretary",
    term: "One year",
    duties:
      "Takes and circulates minutes, keeps the membership register, and maintains the association's records and filings.",
  },
  {
    title: "Facilities and programme roles",
    term: "Check current Board roster",
    duties: "The official roster names people in casino, membership, community garden, website/courts, social media, rink maintenance, and event coordinator roles. Titles and vacancies change; use the linked roster instead of this summary as a current directory.",
  },
  {
    title: "Programs Director",
    term: "One year",
    duties: "Plans the events calendar and the classes programme, and leads the volunteer crews.",
  },

];

export const governance: Array<{ title: string; body: string }> = [
  {
    title: "Elected by the members",
    body: "The bylaws distinguish Full (resident) members, who may receive meeting notices, vote, and serve as directors, from Associate members, who do not have those rights. Check the current bylaws for exact eligibility and processes.",
  },
  {
    title: "Monthly meetings, September through June",
    body: "The official Meetings page lists the second Wednesday of each month at 7:00 pm at the community hall, with no July or August meetings. The Volunteer page says second Tuesday instead; verify the date on the official Meetings page before attending. Send agenda topics to the President about a week ahead.",
  },
  {
    title: "Reports on its money",
    body: "Financial statements for the year are prepared by an independent reviewer and presented to members at the AGM. Monthly financial summaries are tabled at every board meeting.",
  },
  {
    title: "Works to the bylaws",
    body: "The association's public bylaws identify incorporation on August 8, 1955, establish Full, Associate, and Honorary membership classes, and set meeting, election, quorum, and board rules. Read the current bylaws before relying on a summary.",
  },
  {
    title: "Delegates to committees",
    body: "Rink, hall, childcare, and events are each run by a committee of volunteers that reports to the board. Committees can co-opt anyone who wants to help.",
  },
  {
    title: "Stays accountable",
    body: "Members can inspect the minutes, bylaws, and financial statements — all of them are in the digital archive. Complaints are handled under the code of conduct and answered in writing.",
  },
];

export const committees: Array<{ name: string; focus: string }> = [
  { name: "Rink committee", focus: "Flooding schedule, liner, shack, and skater safety" },
  { name: "Hall committee", focus: "Rental calendar, cleaning, repairs, and kitchen upkeep" },
  { name: "Courts committee", focus: "Surface care, nets, pickleball sessions, and season keys" },
  { name: "Events committee", focus: "Stampede breakfast, holiday market, Halloween, and movie nights" },
  { name: "Seedlings liaison", focus: "Communication between the board and the childcare programme" },
];
