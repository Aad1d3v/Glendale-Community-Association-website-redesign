import { CtaBand } from "@/sections/CtaBand";
import { DocumentLibrary } from "@/sections/DocumentLibrary";
import { PageHero } from "@/sections/PageHero";
import { archive } from "@/content/documents";
import { ResourceNotices } from "@/sections/ResourceNotices";
import { Button } from "@/components/ui/Button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { publicReferenceGroups } from "@/content/reference";

const newsletterCount = archive.filter((entry) => entry.kind === "newsletter").length;
const minutesCount = archive.filter((entry) => entry.kind === "minutes").length;

export function ResourcesPage() {
  usePageMeta({
    title: "Documents & newsletters",
    description:
      "Browse and download every issue of The Thumper, board and AGM meeting minutes, the society bylaws, financial statements, and family and volunteer handbooks.",
  });

  return (
    <>
      <PageHero
        eyebrow="Resource centre"
        title="Documents & newsletters"
        lede={
          <p>
            Browse the local test archive below; the sample documents are placeholders for this redesign preview.
            The included local PDFs are placeholders rather than approved records; replace them with
            originals before any public launch. The Thumper archive has no current-edition binary here, so use the official newsletter page for the latest issue.
          </p>
        }
        facts={[
          { label: "Local test files", value: `${archive.length} placeholder documents` },
          { label: "The Thumper", value: `${newsletterCount} placeholder PDFs` },
          { label: "Minutes", value: `${minutesCount} placeholder PDFs` },
          { label: "Official sources", value: "Linked below" },
        ]}
      />

      <DocumentLibrary />

      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="font-display text-lg font-semibold text-ink-900">Official public records</h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-ink-600">
            Local PDF downloads are placeholders for redesign testing, not approved minutes, policies, bylaws, financial statements, or newsletter editions. They are included only to preview the archive layout.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button to="/community" variant="outline" icon="arrowRight">Explore community programmes</Button>
          </div>
          <h3 className="mt-8 font-display text-base font-semibold text-ink-900">Related preview pages</h3>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
            {publicReferenceGroups.flatMap((group) => group.links)
              .filter((link) => link.href.startsWith("/resources#"))
              .map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a href={link.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-plum-700 underline underline-offset-4">{link.label}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <ResourceNotices />

      <CtaBand
        title="Looking for something older?"
        lede="For this redesign preview, the archive demonstrates local navigation and layout. Do not treat its placeholder files as official records."
        primary={{ label: "Contact the office", to: "/contact" }}
        secondary={{ label: "Read the minutes", to: "/resources#minutes" }}
      />
    </>
  );
}
