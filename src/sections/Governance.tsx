import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { boardRoles, committees, governance } from "@/content/about";

export function BoardRoles() {
  return (
    <Section id="board" tone="paper">
      <SectionHeading
        eyebrow="Board & governance"
        title="Your community board"
        lede="The board is made up of neighbours who put their names forward at the annual general meeting. Nobody is paid, and every seat is open to any member in good standing."
      />

      <div className="mt-8 overflow-hidden rounded-card border border-ink-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">GGMCA Board roles and positions; last updated October 28, 2025</caption>
            <thead className="bg-plum-50 text-ink-800">
              <tr>
                <th scope="col" className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">Name</th>
                <th scope="col" className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">Position / role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {[
                ["Myles Trawick", "President"],
                ["Amanda Saigeon", "Vice President"],
                ["Lindsay Sali", "Vice President"],
                ["Shane Duthie", "Treasurer"],
                ["Nigel Robertson", "Secretary"],
                ["Margaret Chandler", "Casino Coordinator, Member-at-Large"],
                ["Monika Smith", "Naturally, Glendale! – Member-at-Large"],
                ["Aaron Shannon", "Website, Courts Coordinator – Member-at-Large"],
                ["Jessica Pedlow", "Social Media Coordinator – Member-at-Large"],
                ["Laura Nixon", "Member-at-Large"],
                ["Veronika Duska", "Member-at-Large"],
              ].map(([name, role]) => (
                <tr key={name}>
                  <th scope="row" className="px-4 py-3 font-semibold text-ink-900 sm:px-6">{name}</th>
                  <td className="px-4 py-3 text-ink-700 sm:px-6">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-ink-200 bg-paper px-4 py-3 text-xs leading-relaxed text-ink-600 sm:px-6">
          Preview roster last updated October 28, 2025; current positions should be confirmed before use.
        </div>
      </div>

      <h3 className="mt-10 font-display text-lg font-semibold text-ink-900">Key volunteer roles reporting to the Board</h3>
      <div className="mt-4 overflow-hidden rounded-card border border-ink-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Key GGMCA volunteer positions reporting to the Board</caption>
            <thead className="bg-plum-50 text-ink-800">
              <tr>
                <th scope="col" className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">Name / status</th>
                <th scope="col" className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">Volunteer role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {[
                ["OPEN ROLE", "Rink Maintenance"],
                ["Michael Sander", "Community Garden Coordinator"],
                ["OPEN ROLE", "Event Coordinator"],
              ].map(([name, role]) => (
                <tr key={role}>
                  <th scope="row" className="px-4 py-3 font-semibold text-ink-900 sm:px-6">{name}</th>
                  <td className="px-4 py-3 text-ink-700 sm:px-6">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-ink-200 bg-paper px-4 py-3 text-xs leading-relaxed text-ink-600 sm:px-6">
          <a href="/facilities#hall" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Explore hall rental information</a>
        </div>
      </div>

      <ul className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {boardRoles.map((role) => (
          <li key={role.title} className="border-t border-ink-200 pt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-[1.0625rem] font-semibold text-ink-900">
                {role.title}
              </h3>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-plum-600">
                {role.term}
              </p>
            </div>
            <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-ink-600">{role.duties}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-[68ch] text-sm text-ink-500">
        Board-role responsibilities follow below. For current members and reported volunteer vacancies, use the dated roster and confirm changes with GGMCA.
      </p>
    </Section>
  );
}

export function Governance() {
  return (
    <Section id="governance" tone="white">
      <SectionHeading
        eyebrow="How decisions get made"
        title="Open meetings, published minutes, reviewed books"
        lede="Everything the board does is written down and available to members. If you cannot find something in the archive, ask for it."
      />

      <ul className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {governance.map((item) => (
          <li key={item.title}>
            <IconBadge name="shield" tone="plum" />
            <h3 className="mt-4 font-display text-[1.0625rem] font-semibold text-ink-900">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-ink-600">{item.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 rounded-panel border border-ink-200/80 bg-paper p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-9">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900">Committees you can join</h3>
          <p className="mt-2.5 max-w-[52ch] text-sm leading-relaxed text-ink-600">
            Committees do the actual work and report to the board. You do not have to be elected to
            sit on one, and you do not have to be an expert — most people start by showing up.
          </p>

          <ul className="mt-6 divide-y divide-ink-200">
            {committees.map((committee) => (
              <li key={committee.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                <span className="w-44 shrink-0 font-display text-sm font-semibold text-ink-900">
                  {committee.name}
                </span>
                <span className="text-sm text-ink-600">{committee.focus}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-3 lg:items-start">
          <Button to="/community#volunteer" size="lg" icon="arrowRight">
            Volunteer with a committee
          </Button>
          <Button to="/resources#minutes" variant="outline" size="lg" icon="file" iconPosition="leading">
            Read the minutes
          </Button>
        </div>
      </div>
    </Section>
  );
}
