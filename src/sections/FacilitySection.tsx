import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import type { PillTone } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Facility } from "@/content/facilities";
import { cn } from "@/lib/cn";

const STATUS_TONES: Record<Facility["status"]["tone"], PillTone> = {
  open: "grass",
  pending: "sun",
  closed: "outline",
};

export function FacilitySection({
  facility,
  tone = "white",
  flipped = false,
}: {
  facility: Facility;
  tone?: "white" | "paper";
  flipped?: boolean;
}) {
  return (
    <Section id={facility.id} tone={tone}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className={cn(flipped && "lg:order-2")}>
          <div className="overflow-hidden rounded-panel border border-ink-200/80 bg-white">
            {facility.photo ? (
              <img
                src={facility.photo.src}
                alt={facility.photo.alt}
                className="h-60 w-full object-cover sm:h-72"
                loading="lazy"
                decoding="async"
              />
            ) : null}
          </div>

          {facility.rates ? (
            <div className="mt-6 overflow-hidden rounded-card border border-ink-200/80 bg-white">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">{facility.name} rates</caption>
                <thead>
                  <tr className="bg-paper">
                    <th
                      scope="col"
                      className="px-4 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-500"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-500"
                    >
                      Published amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {facility.rates.map((row) => (
                    <tr key={row.label} className="border-t border-ink-200/70">
                      <th scope="row" className="px-4 py-3 font-medium text-ink-700">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 font-semibold tabular-nums text-plum-700">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {facility.ratesNote ? (
                <p className="border-t border-ink-200/70 bg-paper px-4 py-3 text-xs leading-relaxed text-ink-500">
                  {facility.ratesNote}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={cn(flipped && "lg:order-1")}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
              {facility.eyebrow}
            </p>
            <Pill tone={STATUS_TONES[facility.status.tone]}>{facility.status.label}</Pill>
          </div>

          <SectionHeading title={facility.name} lede={facility.summary} className="mt-3" />

          <div className="mt-5 space-y-4">
            {facility.body.map((paragraph) => (
              <p key={paragraph} className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-600">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-ink-200/70 pt-6 sm:grid-cols-2">
            {facility.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-ink-900">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 font-display text-[1.0625rem] font-semibold text-ink-900">
            {facility.includes.title}
          </h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {facility.includes.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-ink-700">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-grass-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to={facility.cta.to} size="lg" icon="arrowRight">
              {facility.cta.label}
            </Button>

          </div>
        </div>
      </div>
    </Section>
  );
}
