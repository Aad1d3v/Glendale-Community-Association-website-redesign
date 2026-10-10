import { ContactPanel } from "@/sections/ContactPanel";
import { CtaBand } from "@/sections/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { IconBadge } from "@/components/ui/IconBadge";
import { PageHero } from "@/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { association } from "@/content/site";
import {
  contactFaq,
  contactDirectory,
  visiting,
} from "@/content/contact";
import { usePageMeta } from "@/hooks/usePageMeta";

export function ContactPage() {
  usePageMeta({
    title: "Contact",
    description:
      "Contact Glendale / Glendale Meadows Community Association, its hall Rental Coordinator, membership, garden, court and childcare contacts. Check the official directory for current information.",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact the right person at the hall"
        lede={
          <p>
            Here are the local preview’s general contacts and role inboxes for hall rentals and facility questions. Some individual roles may have changed since this information was gathered.
          </p>
        }
        facts={[
          { label: "Phone", value: association.phone },
          { label: "Office hours", value: "Mon–Thu 9–3, Fri 9–12 (confirm before visiting)" },
          { label: "Address", value: association.hall.street },
          { label: "General email", value: "Usually within two business days" },
        ]}
      />

      <ContactPanel reasonLimit={7} />

      <Section id="contact-directory" tone="paper">
        <SectionHeading
          eyebrow="Contact directory"
          title="Use the right inbox"
          lede="Role-based contacts transcribed from GGMCA public information. Board roles in this preview were last updated in October 2025 and may have changed."
        />
        <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "GGMCA Office", role: "General inquiries", email: association.email },
            ...contactDirectory,
          ].map((entry) => (
            <div key={`${entry.name}-${entry.role}`} className="border-t border-ink-200 pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{entry.role}</dt>
              <dd className="mt-1 font-semibold text-ink-800">{entry.name}</dd>
              {entry.email ? (
                <dd className="mt-1"><a href={`mailto:${entry.email}`} className="break-all font-semibold text-plum-700 underline underline-offset-4">{entry.email}</a></dd>
              ) : null}
              {entry.note ? <dd className="mt-2 text-xs leading-relaxed text-ink-500">{entry.note}</dd> : null}
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[72ch] text-sm leading-relaxed text-ink-600">
          Email spelling needs confirmation: the official Contact page lists Lindsay Sali&apos;s address as <strong>vice-president@mygendale.ca</strong>, while the official Board page lists <strong>vice-president@myglendale.ca</strong>. The Contact page also lists <strong>courts-coordinator@myglendale.ca</strong>; the newer court policy (April 2026) lists the address above. We have not published either disputed alias as verified.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a href="/contact#contact-directory" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Local contact directory</a>
          <a href="/facilities#courts" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Court access and policies</a>
        </div>
      </Section>

      <Section id="visiting" tone="paper">
        <SectionHeading
          eyebrow="Visiting the hall"
          title="Getting here, parking, and what to expect"
          lede="Use the hall's official rental information for directions and current parking notes. Check directly with GGMCA about accessibility and visitor arrangements."
        />

        <a href="/facilities#hall" className="mt-4 inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Directions and rental visitor information</a>

        <ul className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {visiting.map((item) => (
            <li key={item.title}>
              <IconBadge name={item.icon} tone="plum" />
              <h3 className="mt-4 font-display text-[1.0625rem] font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-600">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-ink-900">
            Before you write to us
          </h3>
          <div className="mt-6">
            <FaqList items={contactFaq} />
          </div>
        </div>
      </Section>

      <CtaBand
        tone="white"
        title="Renting the hall? Start with an inquiry"
        lede="A request is not a reservation. The Rental Coordinator checks availability and suitability, then sends a quote and next steps."
        primary={{ label: "Request a booking", to: "/facilities#booking" }}
        secondary={{ label: "See the rates", to: "/facilities#hall" }}
      />
    </>
  );
}
