import { CtaBand } from "@/sections/CtaBand";
import { BoardRoles, Governance } from "@/sections/Governance";
import { History } from "@/sections/History";
import { PageHero } from "@/sections/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export function AboutPage() {
  usePageMeta({
    title: "About the association",
    description:
      "The history of the Glendale / Glendale Meadows Community Association, how the volunteer board is elected each February, and the bylaws, minutes, and financial statements members can read.",
  });

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A community association built around shared places"
        lede={
          <p>
            The association is volunteer-run. The neighbourhood includes shared greenspace, a garden, tennis and pickleball courts, outdoor rinks, and a community hall. This redesign summarizes public information for preview; board details and meeting schedules can change.
          </p>
        }
        facts={[
          { label: "Registered", value: "Alberta Societies Act · incorporated 1955" },
          { label: "Board", value: "Volunteer-run association" },
          { label: "Meetings", value: "Second Wednesday, 7 pm (official Meetings page)" },
          { label: "Board roster", value: "Official page last updated October 28, 2025" },
          { label: "Mission", value: "Connect residents; steward community assets" },
        ]}
      />

      <History />
      <BoardRoles />
      <Governance />

      <CtaBand
        title="Stand for the board, or come to a meeting"
        lede="The official Meetings page lists the second Wednesday of the month at 7 pm, September through June, with no July or August meetings. The Volunteer page currently conflicts and says second Tuesday; confirm the next date on the association site before attending."
        primary={{ label: "See how to volunteer", to: "/community#volunteer" }}
        secondary={{ label: "Read the bylaws", to: "/resources#bylaws" }}
      />
      <div className="bg-paper py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 sm:px-8 lg:px-10">
          <a href="/community#volunteer" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Volunteer with the community</a>
          <a href="/resources#minutes" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Browse local meeting records</a>
        </div>
      </div>
    </>
  );
}
