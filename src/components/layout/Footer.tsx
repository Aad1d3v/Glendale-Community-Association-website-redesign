import { Brand } from "@/components/brand/Brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { association, footerNav, socialLinks } from "@/content/site";
import { rentalsEmail } from "@/content/contact";

const thumperRequest = `${association.mailtoHref}?subject=${encodeURIComponent(
  "Add me to The Thumper mailing list",
)}&body=${encodeURIComponent("Please add this address to the monthly Thumper mailing list.\n\n")}`;

export function Footer() {
  return (
    <footer className="bg-plum-900 text-plum-100">
      <Container className="pb-24 pt-14 lg:pb-16 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Brand variant="dark" />
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-plum-200">
              A volunteer-run association in southwest Calgary. The hall, the courts, the rink, and
              the Seedlings childcare room all belong to the neighbourhood.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={association.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-3 text-plum-100 hover:text-white"
                >
                  <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-plum-300" />
                  <span>
                    {association.hall.street}
                    <br />
                    {association.hall.city}, {association.hall.region} {association.hall.postal}
                    <span className="mt-0.5 block text-xs text-plum-300 group-hover:text-plum-200">
                      Open in maps
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={association.phoneHref}
                  className="flex items-center gap-3 font-semibold hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-plum-300" />
                  {association.phone}
                </a>
              </li>
              <li>
                <a
                  href={association.mailtoHref}
                  className="flex items-center gap-3 break-all hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-plum-300" />
                  {association.email}
                </a>
              </li>
              <li className="pl-7 text-xs text-plum-200">
                Hall rental inquiries: <a href={`mailto:${rentalsEmail}`} className="underline underline-offset-2">{rentalsEmail}</a>
              </li>
            </ul>

            <ul className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-plum-700 bg-plum-800 text-plum-100 transition-colors hover:border-sun-400 hover:text-white"
                  >
                    <Icon name={social.icon} className="h-4.5 w-4.5" title={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sun-300">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <a
                        href={link.to}
                        className="text-plum-200 transition-colors hover:text-white hover:underline hover:underline-offset-4"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-plum-800 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sun-300">
              Hall office hours
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
              {association.officeHours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-6 border-b border-plum-800/70 pb-2">
                  <dt className="text-plum-200">{entry.days}</dt>
                  <dd className="font-semibold text-white">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sun-300">
              The Thumper
            </h2>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-plum-200">
              The newsletter is written by volunteers and delivered to every household in Glendale
              and Glendale Meadows. Ask us to send it to you by email instead, or read the back
              issues in the archive.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={thumperRequest} variant="sun" icon="mail" iconPosition="leading">
                Get it by email
              </Button>
              <Button to="/resources#newsletters" variant="outlineOnDark">
                Read the archive
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-plum-800 pt-5 text-center text-[0.625rem] leading-relaxed text-plum-400">
          Test page for redesign review. No copyright or legal notice is intended.
        </p>
      </Container>
    </footer>
  );
}
