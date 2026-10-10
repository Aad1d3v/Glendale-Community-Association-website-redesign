import { contentVerificationNotes, publicReferenceGroups } from "@/content/reference";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const localPages = publicReferenceGroups
  .flatMap((group) => group.links)
  .filter((link) => link.href.startsWith("/"));

export function ResourceNotices() {
  return (
    <Section id="source-notes" tone="paper">
      <SectionHeading
        eyebrow="Source & freshness notes"
        title="What still needs checking"
        lede="The GGMCA handoff identified conflicting or seasonal information. These items are kept visible instead of silently choosing one version. Reviewed October 9, 2026; the live pages may change."
      />
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {contentVerificationNotes.map((note) => (
          <li key={note} className="rounded-card border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-700">
            {note}
          </li>
        ))}
      </ul>
      <h3 className="mt-10 font-display text-lg font-semibold text-ink-900">Explore related pages in this preview</h3>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {localPages.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <a href={link.href} className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
