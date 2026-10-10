import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aDay,
  childcareFaq,
  environment,
  registrationSteps,
  rooms,
  seedlings,
  seedlingsFacts,
  staff,
} from "@/content/childcare";

export function SeedlingsProgramme() {
  return (
    <Section id="programme" tone="white">
      <SectionHeading
        eyebrow="Seedlings early learning"
        title="Childcare at Glendale Community Association"
        lede={seedlings.tagline}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {seedlingsFacts.map((fact) => (
          <li key={fact.label} className="rounded-card border border-ink-200/80 bg-paper p-5">
            <Icon name={fact.icon} className="h-5 w-5 text-plum-600" />
            <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
              {fact.label}
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-ink-900">{fact.value}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="overflow-hidden rounded-panel border border-ink-200/80">
          <img
            src="/images/glendale-community-workshop.jpg"
            alt="A close-up from a Glendale community workshop activity"
            className="h-56 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">Current programme details</h3>
          <p className="mt-5 text-sm leading-relaxed text-ink-600">The handoff confirms Seedlings is linked with the GGMCA membership system, but does not verify current room breakdowns or ratios. Contact the programme directly for licensed capacity and age groups.</p>
          <ul className="mt-6 space-y-6">
            {rooms.map((room) => (
              <li key={room.name} className="border-l-2 border-sun-400 pl-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="font-display text-[1.0625rem] font-semibold text-ink-900">
                    {room.name}
                  </h4>
                  <Pill tone="outline">{room.ages}</Pill>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-plum-700">
                  {room.ratio}
                </p>
                <p className="mt-2.5 max-w-[62ch] text-sm leading-relaxed text-ink-600">
                  {room.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {aDay.length > 0 ? (
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-ink-900">A day in the room</h3>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-ink-600">
            The routine holds steady because that is what makes a room full of small children calm.
            Times shift a little for weather and for whatever the children are in the middle of.
          </p>
          <ul className="mt-8 grid gap-x-10 border-t border-ink-200/70 sm:grid-cols-2">
            {aDay.map((entry) => (
              <li
                key={entry.time}
                className="flex gap-5 border-b border-ink-200/70 py-3.5 text-sm"
              >
                <span className="w-20 shrink-0 font-semibold tabular-nums text-plum-700">
                  {entry.time}
                </span>
                <span className="text-ink-700">{entry.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}

export function SeedlingsEnrolment() {
  return (
    <Section id="enrolment" tone="paper">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Enrolment"
            title="How to get a spot"
            lede="Contact Seedlings to confirm current availability, eligibility, tour times, and the application process. The GGMCA membership page has one profile instruction for registered families."
          />

          <ol className="mt-10 space-y-6">
            {registrationSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum-700 font-display text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-display text-[1.0625rem] font-semibold text-ink-900">
                    {step.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-sm leading-relaxed text-ink-600">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href={`mailto:${seedlings.contactEmail}?subject=${encodeURIComponent("Seedlings tour request")}`}
              size="lg"
              icon="mail"
              iconPosition="leading"
            >
              Email Seedlings
            </Button>
            <Button href="tel:4032422110" variant="outline" size="lg" icon="phone" iconPosition="leading">
              Call the association office
            </Button>
          </div>

          <p className="mt-4 text-sm text-ink-500">
            Contact Seedlings directly for current childcare information:{" "}
            <a
              href={`mailto:${seedlings.contactEmail}`}
              className="font-medium text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-2 hover:decoration-plum-600"
            >
              {seedlings.contactEmail}
            </a>
            .
          </p>
        </div>

        <div className="space-y-6">
          <Card tone="default" className="p-7">
            <h3 className="font-display text-[1.0625rem] font-semibold text-ink-900">
              The space itself
            </h3>
            <ul className="mt-5 space-y-3">
              {environment.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-grass-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card tone="default" className="p-7">
            <h3 className="font-display text-[1.0625rem] font-semibold text-ink-900">
              Staff and licensing details
            </h3>
            <ul className="mt-5 space-y-3">
              {staff.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-plum-600" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-xl font-semibold text-ink-900">
          What families usually ask
        </h3>
        <div className="mt-6">
          <FaqList items={childcareFaq} />
        </div>
      </div>
    </Section>
  );
}
