import { usePageMeta } from "@/hooks/usePageMeta";

import { Card } from "@/components/ui/Card";
import { PageHero } from "@/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publicReferenceGroups } from "@/content/reference";
import { contentVerificationNotes } from "@/content/reference";

const localResources = [
  {
    id: "emergency-services",
    title: "Nearby fire and police services",
    entries: [
      { label: "Calgary Police Service · District 2 (Rosscarrock)", value: "4506 17 Avenue SW · daily, 7 am–9 pm · closed statutory holidays · 403-428-6200" },
      { label: "Calgary Fire Department · Rosscarrock Fire Station", value: "1720 45 Street SW" },
    ],
  },
  {
    id: "safety-resources",
    title: "Neighbourhood safety",
    entries: [
      { label: "Crime activity updates", value: "The association's Crime Stats page points to a third-party Glendale crime activity update. No live figures were displayed in the source page, so this preview does not invent or freeze a crime count." },
      { label: "Block Watch", value: "Block Watch is listed as a neighbourhood programme. Ask the GGMCA office for current block contacts and participation details." },
    ],
  },
  {
    id: "ward6",
    title: "Ward 6",
    entries: [
      { label: "City ward", value: "Glendale and Glendale Meadows are in Ward 6 under the City of Calgary's current ward map. Ward boundaries and councillor details can change." },
    ],
  },
  {
    id: "schools",
    title: "Nearby schools",
    entries: [
      { label: "Glendale School", value: "2415 Kelwood Drive SW" },
      { label: "Glenmeadows School", value: "4931 Grove Hill Road SW" },
      { label: "St. Gregory School", value: "5340 26 Avenue SW" },
      { label: "St. Thomas Aquinas School", value: "4540 26 Avenue SW" },
    ],
  },
  {
    id: "planning-development",
    title: "Planning and development",
    entries: [
      { label: "Neighbourhood context", value: "The association's page discusses redevelopment and the Westbrook Local Area Plan, and encourages residents to take part in decisions affecting Glendale and Glendale Meadows. Its known-project list was marked as forthcoming when reviewed." },
      { label: "Useful City processes", value: "Residents can look up proposed development on the City development map, report local issues through 311, check property assessments, and confirm whether planned work needs a building permit." },
    ],
  },
  {
    id: "city-resources",
    title: "City of Calgary neighbourhood resources",
    entries: [
      { label: "Residential parking permits", value: "Some Glendale blocks use residential parking permits. Check current City rules for your block before parking." },
      { label: "On-street parking", value: "The City provides an on-street parking map for checking local restrictions." },
      { label: "Responsible pet ownership", value: "The association notes that dogs must be leashed when off their owner's property; confirm current City bylaws for full requirements." },
      { label: "311 and property information", value: "Use Calgary 311 to report a City issue, and verify assessments, development applications, and permit requirements with the City." },
    ],
  },
  {
    id: "community-associations",
    title: "Community association network",
    entries: [
      { label: "Calgary Communities", value: "The Glendale/Glendale Meadows association is listed in the city-wide community association directory." },
    ],
  },
];

export function CommunityLinksPage() {
  usePageMeta({
    title: "Community links",
    description:
      "Neighbourhood resources and local routes for recreation, safety, schools, city services, and community programmes.",
  });

  return (
    <>
      <PageHero
        eyebrow="Neighbourhood directory"
        title="Useful links for Glendale & Glendale Meadows"
        lede={
          <p>
            Browse civic, safety, school, and community-association information summarized for this local redesign preview. Confirm current details with the relevant office.
          </p>
        }
        facts={[
          { label: "Facilities", value: "Hall, courts, rink & garden" },
          { label: "Community", value: "Soccer, Block Watch & volunteers" },
          { label: "Civic info", value: "Ward, schools & City resources" },
          { label: "Sources", value: "Local pages & civic resources" },
        ]}
      />
      <Section tone="paper">
        <SectionHeading
          eyebrow="Please verify before relying on it"
          title="Freshness notes"
          lede="These source pages are useful starting points, not guarantees that seasonal information is still current."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {contentVerificationNotes.map((note) => (
            <Card as="li" key={note} className="p-5 text-sm leading-relaxed text-ink-700">{note}</Card>
          ))}
        </ul>
      </Section>
      {localResources.map((group) => (
        <Section key={group.id} id={group.id} tone="white">
          <SectionHeading title={group.title} />
          <dl className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.entries.map((entry) => (
              <div key={entry.label} className="rounded-card border border-ink-200 bg-white p-5">
                <dt className="font-display text-base font-semibold text-ink-900">{entry.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-600">{entry.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      ))}
      {publicReferenceGroups.map((group) => (
        <Section key={group.title} tone="white">
          <SectionHeading title={group.title} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.links.map((link) => (
              <Card as="li" key={link.href} className="flex flex-col p-5">
                <a
                  href={link.href}
                  className="font-display text-base font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4 hover:decoration-plum-700"
                >
                  {link.label}
                </a>
                {link.note ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{link.note}</p>
                ) : null}
              </Card>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
