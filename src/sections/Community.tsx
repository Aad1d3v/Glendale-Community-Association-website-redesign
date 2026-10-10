import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { association } from "@/content/site";
import { communityPrograms, volunteerInformation } from "@/content/events";

export function Programmes() {
  return (
    <Section id="programmes" tone="paper">
      <SectionHeading
        eyebrow="Week in, week out"
        title="Things that happen on a schedule"
        lede="A few of the ways Glendale neighbours learn, play, grow, and help out together. Seasonal schedules and fees can change."
      />

      {communityPrograms.length > 0 ? <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {communityPrograms.map((program) => (
          <Card as="li" key={program.name} className="p-6">
            <IconBadge name={program.icon} tone="plum" />
            <h3 className="mt-4 font-display text-[1.0625rem] font-semibold text-ink-900">
              {program.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-plum-700">{program.cadence}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{program.body}</p>
            <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-200/70 pt-4 text-xs">
              <div>
                <dt className="text-ink-500">Who it is for</dt>
                <dd className="mt-0.5 font-semibold text-ink-800">{program.audience}</dd>
              </div>
              <div>
                <dt className="text-ink-500">Cost</dt>
                <dd className="mt-0.5 font-semibold text-ink-800">{program.cost}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </ul> : null}
    </Section>
  );
}

export function Volunteering() {
  return (
    <Section id="volunteer" tone="white">
      <SectionHeading
        eyebrow="Volunteering"
        title="Neighbourhood life runs on volunteers"
        lede="From a single event shift to ongoing projects, there are plenty of ways to lend a hand. Choose something that fits your time and interests."
      />

      {volunteerInformation.length > 0 ? <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {volunteerInformation.map((role) => (
          <li key={role.title} className="border-t border-ink-200 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <h3 className="font-display text-[1.0625rem] font-semibold text-ink-900">
                {role.title}
              </h3>
              <Pill tone="outline">{role.commitment}</Pill>
            </div>
            <p className="mt-2.5 max-w-[56ch] text-sm leading-relaxed text-ink-600">{role.body}</p>
          </li>
        ))}
      </ul> : null}

      <div className="mt-12 flex flex-col gap-6 rounded-panel border border-ink-200/80 bg-paper p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900">
            Ask about current volunteer roles
          </h3>
          <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-600">
            Whether you have one afternoon or want to help shape a longer project, your time makes neighbourhood life happen.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <Button
            href={`${association.mailtoHref}?subject=${encodeURIComponent("I would like to volunteer")}`}
            size="lg"
            icon="mail"
            iconPosition="leading"
          >
            Email the office
          </Button>
          <Button href={association.phoneHref} variant="outline" size="lg" icon="phone" iconPosition="leading">
            {association.phone}
          </Button>
        </div>
      </div>

      <p className="mt-5 text-xs text-ink-500">General volunteer areas are shown for this preview; current openings are not confirmed. Email or call the office for the latest.</p>
    </Section>
  );
}
