import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { CtaBand } from "@/sections/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { MembershipTiers } from "@/sections/Membership";
import { PageHero } from "@/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  gardenGuidelines,
  gardenRegistrationSteps,
  membershipFaq,
  memberOffers,
  seasonalAddOns,
} from "@/content/membership";
import { usePageMeta } from "@/hooks/usePageMeta";

export function MembershipPage() {
  usePageMeta({
    title: "Membership",
    description:
      "Join or renew a Glendale / Glendale Meadows community membership: $35 per year for residents or associates, with separate seasonal court and garden add-ons.",
  });

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Join the association, get the run of the place"
        lede={
          <p>
            Start with the annual base membership, then add seasonal access to the courts or garden
            when you need it. Membership checkout is represented here for redesign preview; no purchase is processed by this test page.
          </p>
        }
        facts={[
          { label: "Base membership", value: "$35 per year" },
          { label: "Membership types", value: "Resident or Associate" },
          { label: "Renewal", value: "Auto-renews annually" },
          { label: "Seasonal add-ons", value: "Courts and community garden" },
        ]}
      />

      <MembershipTiers />

      <Section id="seasonal-memberships" tone="paper">
        <SectionHeading
          eyebrow="Seasonal access"
          title="Add the season you want to spend outside"
          lede="Court and garden access are separate seasonal add-ons; they are not included in the annual base membership."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {seasonalAddOns.map((addOn) => (
            <Card key={addOn.id} id={addOn.id === "garden" ? "garden" : undefined} as="article" className="overflow-hidden p-0">
              <img
                src={addOn.id === "courts" ? "/images/glendale-tennis-action.jpg" : "/images/glendale-community-garden-official.jpg"}
                alt={addOn.id === "courts" ? "A tennis match in progress on a Glendale community court" : "The Glendale Community Garden sign and grounds"}
                className="aspect-[16/8] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 sm:p-7">
                <Pill tone="plum">{addOn.price}</Pill>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">{addOn.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{addOn.body}</p>
                {addOn.details.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {addOn.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-relaxed text-ink-600">
                        <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-grass-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={addOn.id === "courts" ? "/facilities#courts" : "/community#programmes"} className="inline-flex min-h-11 items-center rounded-full border border-ink-300 px-4 text-sm font-semibold text-ink-800 hover:border-plum-400 hover:text-plum-800">
                    {addOn.id === "courts" ? "Court details & rules" : "Garden programme information"}<Icon name="arrowRight" className="ml-2 h-4 w-4" />
                  </a>
                </div>
                {addOn.id === "garden" ? (
                  <div className="mt-6 space-y-5 border-t border-ink-200 pt-5">
                    <div id="garden-guidelines">
                      <h4 className="font-display text-sm font-semibold text-ink-900">Gardener guidelines</h4>
                      <ul className="mt-3 space-y-2">
                        {gardenGuidelines.map((guideline) => (
                          <li key={guideline} className="flex gap-2 text-sm leading-relaxed text-ink-600">
                            <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-grass-600" />
                            <span>{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div id="garden-registration">
                      <h4 className="font-display text-sm font-semibold text-ink-900">Requesting a plot</h4>
                      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-600">
                        {gardenRegistrationSteps.map((step) => <li key={step}>{step}</li>)}
                      </ol>
                    </div>
                  </div>
                ) : null}
                <a href={`mailto:${addOn.contact.email}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4">
                  <Icon name="mail" className="h-4 w-4" />
                  Ask the {addOn.contact.label}
                </a>
                {addOn.diagram ? (
                  <figure id="garden-sketch" className="mt-5 overflow-hidden rounded-xl border border-ink-200 bg-white">
                    <img src={addOn.diagram.src} alt={addOn.diagram.alt} loading="lazy" decoding="async" className="h-52 w-full object-contain p-3" />
                    <figcaption className="px-4 pb-3 text-xs text-ink-500">{addOn.diagram.caption}</figcaption>
                  </figure>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
        <figure className="mt-8 overflow-hidden rounded-panel border border-ink-200/80 bg-paper">
          <img src="/images/glendale-courts-map.png" alt="Map showing Glendale's outdoor pickleball court locations" width="1024" height="578" loading="lazy" decoding="async" className="max-h-[28rem] w-full object-contain" />
          <figcaption className="px-5 pb-4 text-xs text-ink-500">Court layout map from GGMCA. Pickleball courts are marked at the rink and tennis practice area.</figcaption>
        </figure>
      </Section>

      <Section id="member-offers" tone="white">
        <SectionHeading
          eyebrow="Member benefits"
          title="A couple of local member offers"
          lede="Show your current GGMCA membership proof and check the linked business page for the latest conditions."
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {memberOffers.map((offer) => (
            <Card key={offer.name} as="article" tone="muted" className="flex flex-col p-6">
              <Pill tone="plum">{offer.offer}</Pill>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{offer.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{offer.note}</p>
              <p className="mt-auto pt-4 text-xs text-ink-500">Member offer details shown for redesign preview; participating businesses and terms may change.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" tone="paper">
        <SectionHeading
          eyebrow="Questions"
          title="The things people ask before joining"
          lede="If your question is not here, the hall office answers email within two business days."
        />
        <div className="mt-10">
          <FaqList items={membershipFaq} />
        </div>
      </Section>

      <Section id="seedlings-membership" tone="paper" size="tight">
        <h2 className="font-display text-lg font-semibold text-ink-900">Seedlings Early Learning families</h2>
        <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink-600">
          When creating your GGMCA membership—or updating your existing profile—select the checkbox saying your child is registered with Seedlings Early Learning childcare.
        </p>
        <a href="/childcare" className="mt-3 inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4">Learn about Seedlings</a>
      </Section>

      <Section id="volunteer" tone="white" size="tight">
        <h2 className="font-display text-lg font-semibold text-ink-900">Membership is the beginning, not the whole story</h2>
        <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink-600">
          GGMCA is volunteer-run. Help with a single event, support a seasonal programme, or bring your experience to a board or committee role.
        </p>
        <a href="/community#volunteer" className="mt-3 inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4">Volunteer opportunities</a>
      </Section>

      <CtaBand
        tone="white"
        title="Join the neighbourhood"
        lede="Join or renew in the GGMCA member portal. The $35 annual base membership auto-renews each year until cancelled; seasonal add-ons renew separately."
        primary={{ label: "Join or renew online", to: "/membership#join" }}
        secondary={{ label: "Contact the office", to: "/contact" }}
      />
    </>
  );
}
