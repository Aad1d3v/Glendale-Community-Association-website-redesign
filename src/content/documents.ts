/* ==========================================================================
   The digital archive: The Thumper, meeting minutes, bylaws, and handbooks.

   Every entry resolves to /documents/<slug>.pdf. The repository ships
   placeholder PDFs at those paths so the download buttons work end to end;
   replace them with the scanned originals before launch (npm run docs:placeholders
   regenerates the placeholders if you add a row).
   ========================================================================== */

export type DocumentKind = "newsletter" | "minutes" | "bylaw" | "policy" | "finance" | "guide";

export type ArchiveDocument = {
  slug: string;
  title: string;
  kind: DocumentKind;
  /** Publication date, ISO. Drives sorting and the year filter. */
  date: string;
  pages: number;
  size: string;
  summary: string;
  /** Newsletter issue number, where the masthead gives one. */
  issue?: number;
};

export const kindLabels: Record<DocumentKind, string> = {
  newsletter: "The Thumper",
  minutes: "Minutes",
  bylaw: "Bylaws",
  policy: "Policies",
  finance: "Financial",
  guide: "Guides",
};

export const archive: ArchiveDocument[] = [
  /* ---------------------------------------------------------------- newsletters */
  {
    slug: "thumper-2026-10",
    title: "The Thumper — October 2026",
    kind: "newsletter",
    date: "2026-10-01",
    pages: 8,
    size: "1.6 MB",
    summary:
      "Halloween party details, the holiday market vendor list, and the rink crew's first call for volunteers.",
    issue: 10,
  },
  {
    slug: "thumper-2026-09",
    title: "The Thumper — September 2026",
    kind: "newsletter",
    date: "2026-09-01",
    pages: 8,
    size: "1.4 MB",
    summary: "Fall programming, the Seedlings waitlist, and a recap of the summer movie nights.",
    issue: 9,
  },
  {
    slug: "thumper-2026-06",
    title: "The Thumper — June & July 2026",
    kind: "newsletter",
    date: "2026-06-01",
    pages: 12,
    size: "2.1 MB",
    summary:
      "The combined summer issue: Stampede breakfast map, court hours, and the AGM financial summary.",
    issue: 6,
  },
  {
    slug: "thumper-2026-05",
    title: "The Thumper — May 2026",
    kind: "newsletter",
    date: "2026-05-01",
    pages: 8,
    size: "1.5 MB",
    summary: "Community cleanup wrap-up, court opening day, and the volunteer thank-you list.",
    issue: 5,
  },
  {
    slug: "thumper-2026-04",
    title: "The Thumper — April 2026",
    kind: "newsletter",
    date: "2026-04-01",
    pages: 8,
    size: "1.3 MB",
    summary: "Cleanup day logistics, spring hall maintenance, and the Seedlings garden project.",
    issue: 4,
  },
  {
    slug: "thumper-2026-03",
    title: "The Thumper — March 2026",
    kind: "newsletter",
    date: "2026-03-01",
    pages: 10,
    size: "1.8 MB",
    summary: "New board introductions, the year's budget in plain language, and spring classes.",
    issue: 3,
  },
  {
    slug: "thumper-2026-02",
    title: "The Thumper — February 2026",
    kind: "newsletter",
    date: "2026-02-01",
    pages: 12,
    size: "2.3 MB",
    summary: "AGM issue: agenda, board nominations, audited financial statements, and bylaws motions.",
    issue: 2,
  },
  {
    slug: "thumper-2026-01",
    title: "The Thumper — January 2026",
    kind: "newsletter",
    date: "2026-01-01",
    pages: 8,
    size: "1.5 MB",
    summary: "Rink season in full swing, membership renewal reminders, and winter programs.",
    issue: 1,
  },
  {
    slug: "thumper-2025-12",
    title: "The Thumper — December 2025",
    kind: "newsletter",
    date: "2025-12-01",
    pages: 10,
    size: "1.9 MB",
    summary: "Holiday market floor plan, Skate with Santa, and the year in photographs.",
    issue: 12,
  },
  {
    slug: "thumper-2025-11",
    title: "The Thumper — November 2025",
    kind: "newsletter",
    date: "2025-11-01",
    pages: 8,
    size: "1.4 MB",
    summary: "Rink liner replacement fundraising total and the holiday market vendor call.",
    issue: 11,
  },
  {
    slug: "thumper-2025-10",
    title: "The Thumper — October 2025",
    kind: "newsletter",
    date: "2025-10-01",
    pages: 8,
    size: "1.4 MB",
    summary: "Halloween party plans and a report from the courts resurfacing committee.",
    issue: 10,
  },
  {
    slug: "thumper-2025-05",
    title: "The Thumper — May 2025",
    kind: "newsletter",
    date: "2025-05-01",
    pages: 8,
    size: "1.6 MB",
    summary: "Cleanup day results, new pickleball lines, and the summer program calendar.",
    issue: 5,
  },
  {
    slug: "thumper-2025-02",
    title: "The Thumper — February 2025",
    kind: "newsletter",
    date: "2025-02-01",
    pages: 14,
    size: "2.6 MB",
    summary: "The 2025 AGM issue, including the hall accessibility retrofit proposal.",
    issue: 2,
  },

  /* -------------------------------------------------------------------- minutes */
  {
    slug: "agm-minutes-2026",
    title: "Annual general meeting minutes — 2026",
    kind: "minutes",
    date: "2026-02-10",
    pages: 6,
    size: "420 KB",
    summary:
      "Approved minutes: board election results, the 2026 budget, and the motion to replace the rink liner.",
  },
  {
    slug: "board-minutes-2026-09",
    title: "Board meeting minutes — September 2026",
    kind: "minutes",
    date: "2026-09-08",
    pages: 4,
    size: "280 KB",
    summary: "Holiday market planning, winter staffing, and the rink crew schedule.",
  },
  {
    slug: "board-minutes-2026-06",
    title: "Board meeting minutes — June 2026",
    kind: "minutes",
    date: "2026-06-09",
    pages: 4,
    size: "310 KB",
    summary: "Stampede breakfast budget, court repair quotes, and a membership report.",
  },
  {
    slug: "board-minutes-2026-05",
    title: "Board meeting minutes — May 2026",
    kind: "minutes",
    date: "2026-05-12",
    pages: 3,
    size: "240 KB",
    summary: "Cleanup day debrief, playground inspection, and the Seedlings fee review.",
  },
  {
    slug: "board-minutes-2026-04",
    title: "Board meeting minutes — April 2026",
    kind: "minutes",
    date: "2026-04-14",
    pages: 4,
    size: "290 KB",
    summary: "Hall rental rate review and the accessibility retrofit timeline.",
  },
  {
    slug: "board-minutes-2026-03",
    title: "Board meeting minutes — March 2026",
    kind: "minutes",
    date: "2026-03-10",
    pages: 3,
    size: "260 KB",
    summary: "Committee appointments, insurance renewal, and the summer program calendar.",
  },
  {
    slug: "board-minutes-2026-01",
    title: "Board meeting minutes — January 2026",
    kind: "minutes",
    date: "2026-01-13",
    pages: 3,
    size: "250 KB",
    summary: "AGM preparation, rink season update, and the newsletter delivery roster.",
  },
  {
    slug: "agm-minutes-2025",
    title: "Annual general meeting minutes — 2025",
    kind: "minutes",
    date: "2025-02-11",
    pages: 8,
    size: "560 KB",
    summary: "Approved minutes including the accessibility retrofit discussion and fee schedule.",
  },
  {
    slug: "agm-minutes-2024",
    title: "Annual general meeting minutes — 2024",
    kind: "minutes",
    date: "2024-02-13",
    pages: 7,
    size: "510 KB",
    summary: "Approved minutes covering the rink liner fundraising campaign and the new bylaws.",
  },

  /* -------------------------------------------------------------------- bylaws */
  {
    slug: "bylaws-2023",
    title: "Society bylaws (amended 2023)",
    kind: "bylaw",
    date: "2023-04-18",
    pages: 24,
    size: "980 KB",
    summary:
      "The governing document: membership classes, board composition, meeting procedure, and the financial controls the association operates under.",
  },
  {
    slug: "bylaws-amendment-2026",
    title: "Proposed bylaw amendment — rink liner special fund",
    kind: "bylaw",
    date: "2026-01-20",
    pages: 5,
    size: "220 KB",
    summary:
      "The amendment circulated before the 2026 AGM to create a dedicated reserve fund for the rink liner, tabled and passed by members in February.",
  },
  {
    slug: "board-policy-manual",
    title: "Board policy manual",
    kind: "policy",
    date: "2024-09-10",
    pages: 18,
    size: "760 KB",
    summary:
      "How the board runs itself: conflict of interest, expense reimbursement, delegation, and the reserve fund policy.",
  },
  {
    slug: "hall-rental-agreement",
    title: "Hall rental agreement and terms",
    kind: "policy",
    date: "2026-01-05",
    pages: 4,
    size: "260 KB",
    summary:
      "The contract every renter signs: deposits, cancellation windows, insurance requirements, liquor licensing, and clean-up obligations.",
  },
  {
    slug: "rink-safety-policy",
    title: "Rink use and safety policy",
    kind: "policy",
    date: "2025-11-12",
    pages: 3,
    size: "180 KB",
    summary: "Hours, supervision, temperature closure rules, and the flooding crew's procedures.",
  },
  {
    slug: "code-of-conduct",
    title: "Code of conduct",
    kind: "policy",
    date: "2024-06-11",
    pages: 5,
    size: "230 KB",
    summary:
      "Behaviour expected of members, renters, and volunteers in the hall, on the courts, and at events, plus how complaints are handled.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy policy",
    kind: "policy",
    date: "2023-04-18",
    pages: 3,
    size: "170 KB",
    summary:
      "What the association collects, why, how long it is kept, and who to contact to see or correct your record.",
  },
  {
    slug: "document-retention-schedule",
    title: "Records retention schedule",
    kind: "policy",
    date: "2023-04-18",
    pages: 6,
    size: "240 KB",
    summary: "How long minutes, financial records, rental agreements, and childcare files are kept.",
  },

  /* ------------------------------------------------------------------- finance */
  {
    slug: "financial-statements-2025",
    title: "Financial statements — 2025",
    kind: "finance",
    date: "2026-01-30",
    pages: 10,
    size: "640 KB",
    summary:
      "Review engagement report for the year ended December 31, 2025, with the schedule of hall and childcare revenue.",
  },
  {
    slug: "financial-statements-2024",
    title: "Financial statements — 2024",
    kind: "finance",
    date: "2025-01-28",
    pages: 10,
    size: "620 KB",
    summary: "Review engagement report for the year ended December 31, 2024.",
  },
  {
    slug: "budget-2026",
    title: "Approved operating budget — 2026",
    kind: "finance",
    date: "2026-02-10",
    pages: 4,
    size: "210 KB",
    summary:
      "The budget members approved at the 2026 AGM, including the reserve fund contribution.",
  },

  /* --------------------------------------------------------------------- guides */
  {
    slug: "seedlings-family-handbook",
    title: "Seedlings family handbook",
    kind: "guide",
    date: "2026-08-15",
    pages: 16,
    size: "820 KB",
    summary:
      "Everything a Seedlings family needs: daily routine, illness and closure policy, what to pack, and the fee schedule.",
  },
  {
    slug: "volunteer-handbook",
    title: "Volunteer handbook",
    kind: "guide",
    date: "2025-09-09",
    pages: 12,
    size: "540 KB",
    summary:
      "Roles, shift expectations, safety on the ice and in the kitchen, and how the board recognises volunteers.",
  },
  {
    slug: "court-rules",
    title: "Courts: rules and season key guide",
    kind: "guide",
    date: "2025-04-08",
    pages: 2,
    size: "150 KB",
    summary: "What a season key opens, how to reserve the pickleball nets, and the surface care rules.",
  },
  {
    slug: "strategic-plan-2026-2030",
    title: "Strategic plan 2026 – 2030",
    kind: "guide",
    date: "2026-03-01",
    pages: 14,
    size: "700 KB",
    summary:
      "Four priorities agreed with members: accessibility, childcare capacity, rink sustainability, and volunteer renewal.",
  },
  {
    slug: "hall-floor-plan",
    title: "Hall floor plan and room dimensions",
    kind: "guide",
    date: "2024-09-10",
    pages: 3,
    size: "320 KB",
    summary:
      "Scaled plans of the main floor, lower room, and kitchen, with door widths and ceiling heights for event planners.",
  },
];

/** Newest first — the order the library renders in. */
export const archiveByDate = [...archive].sort((a, b) => b.date.localeCompare(a.date));
