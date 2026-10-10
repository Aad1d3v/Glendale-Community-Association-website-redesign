import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tiers } from "@/content/membership";

export function MembershipStrip() {
  return (
    <Section tone="white">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Membership"
            title="$35 a year to be part of Glendale"
            lede="Choose Resident or Associate in the GGMCA member portal. The annual base membership renews automatically; seasonal court and garden access are separate."
          />

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {tiers.map((tier) => (
              <li key={tier.id}>
                <p className="font-display text-2xl font-semibold tabular-nums text-plum-700">
                  {tier.price}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-ink-800">{tier.name}</p>
                <p className="text-xs text-ink-500">{tier.per}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/membership" size="lg" icon="arrowRight">
              Join or renew
            </Button>
            <Button to="/membership#seasonal-memberships" variant="outline" size="lg">
              Seasonal memberships
            </Button>
          </div>
        </div>

        <div className="rounded-panel border border-ink-200/80 bg-paper p-7">
          <h3 className="font-display text-[1.0625rem] font-semibold text-ink-900">
            It takes neighbours
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            The association is volunteer-run. Members keep local spaces and programmes going, from the community hall and rink to seasonal events, sports, arts, and The Thumper.
          </p>
          <a
            href="/membership#volunteer"
            className="mt-5 inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4"
          >
            Find a way to volunteer
          </a>
        </div>
      </div>
    </Section>
  );
}
