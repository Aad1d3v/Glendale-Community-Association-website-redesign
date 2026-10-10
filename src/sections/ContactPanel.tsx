import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactReasons } from "@/content/contact";
import { association, socialLinks } from "@/content/site";
import { rentalsEmail } from "@/content/contact";
import { seedlings } from "@/content/childcare";

export function ContactPanel({ reasonLimit = 3 }: { reasonLimit?: number }) {
  return (
    <Section id="contact-panel" tone="white">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Start with what you actually need"
            lede="Choose the service or contact you need and go directly to the right place."
          />

          <ul className="mt-10 divide-y divide-ink-200/70 border-y border-ink-200/70">
            {contactReasons.slice(0, reasonLimit).map((reason) => (
              <li key={reason.id} className="flex gap-5 py-5">
                <IconBadge name={reason.icon} tone="plum" />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.0625rem] font-semibold text-ink-900">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 max-w-[58ch] text-sm leading-relaxed text-ink-600">
                    {reason.body}
                  </p>
                  <Link
                    to={reason.action.to}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4 hover:decoration-plum-600"
                  >
                    {reason.action.label}
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                  {reason.note ? (
                    <p className="mt-1.5 text-xs text-ink-500">{reason.note}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-panel border border-ink-200/80 bg-paper p-7">
          <h2 className="font-display text-lg font-semibold text-ink-900">The hall office</h2>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-plum-600" />
              <span className="text-ink-700">
                {association.hall.street}
                <br />
                {association.hall.city}, {association.hall.region} {association.hall.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-plum-600" />
              <a href={association.phoneHref} className="font-semibold text-ink-800 hover:text-plum-800">
                {association.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-plum-600" />
              <a
                href={association.mailtoHref}
                className="break-all font-semibold text-ink-800 hover:text-plum-800"
              >
                {association.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="hall" className="mt-0.5 h-4 w-4 shrink-0 text-plum-600" />
              <a href={`mailto:${rentalsEmail}`} className="break-all font-semibold text-ink-800 hover:text-plum-800">
                Hall rentals: {rentalsEmail}
              </a>
            </li>
          </ul>

          <dl className="mt-6 space-y-2 border-t border-ink-200 pt-6 text-sm">
            {association.officeHours.map((entry) => (
              <div key={entry.days} className="flex justify-between gap-4">
                <dt className="text-ink-600">{entry.days}</dt>
                <dd className="font-semibold text-ink-900">{entry.hours}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 border-t border-ink-200 pt-6 text-sm text-ink-600">
            Seedlings childcare enquiries go to{" "}
            <a
              href={`mailto:${seedlings.contactEmail}`}
              className="font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-2"
            >
              {seedlings.contactEmail}
            </a>{" "}
            rather than the hall inbox.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={association.mapUrl}
              target="_blank"
              variant="outline"
              size="md"
              icon="external"
            >
              Open in maps
            </Button>
          </div>

          <a href="/contact#contact-directory" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-plum-700 underline underline-offset-4">See the local contact directory</a>

          <ul className="mt-6 flex items-center gap-2 border-t border-ink-200 pt-6">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-300 bg-white text-ink-700 transition-colors hover:border-plum-400 hover:text-plum-800"
                >
                  <Icon name={social.icon} className="h-4.5 w-4.5" title={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
