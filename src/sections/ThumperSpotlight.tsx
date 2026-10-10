import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { archiveByDate } from "@/content/documents";
import { association } from "@/content/site";
import { formatMonthYear } from "@/lib/format";

const newsletters = archiveByDate.filter((entry) => entry.kind === "newsletter");
const latest = newsletters[0];

/**
 * The Thumper is a monthly community newsletter with an official banner and
 * current-edition link. Local archive PDFs are clearly identified as placeholders.
 */
export function ThumperSpotlight() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="The newsletter"
            title="A monthly neighbourhood newsletter"
            lede={
              <>
                The Thumper is described as a free monthly magazine delivered to households,
                apartments, and businesses in Glendale and Glendale Meadows. It carries board
                messages, local news, events, and community listings; read the local archive or
                ask the office when the newest edition is available.
              </>
            }
          />

          <div className="mt-5 overflow-hidden rounded-card border border-ink-200 bg-white">
            <img
              src="/images/thumper-march-2026-banner.png"
              alt="March 2026 Glendale Thumper newsletter banner"
              loading="lazy"
              decoding="async"
              className="w-full object-contain"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={`${association.mailtoHref}?subject=${encodeURIComponent("Add me to The Thumper mailing list")}`}
              variant="primary"
              icon="mail"
              iconPosition="leading"
            >
              Get it by email
            </Button>
            <Button to="/resources#newsletters" variant="outline" icon="newspaper" iconPosition="leading">
              Browse every issue
            </Button>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-ink-200/70 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Online archive
              </dt>
              <dd className="mt-1 font-display text-[1.0625rem] font-semibold text-ink-900">
                {newsletters.length} issues
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Delivered
              </dt>
              <dd className="mt-1 font-display text-[1.0625rem] font-semibold text-ink-900">
                Every household
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Submissions due
              </dt>
              <dd className="mt-1 font-display text-[1.0625rem] font-semibold text-ink-900">
                Check official page
              </dd>
            </div>
          </dl>
        </div>

        <div>
          {latest ? (
            <article className="overflow-hidden rounded-panel border border-ink-200 bg-plum-800 shadow-lift">
              <div className="px-7 pt-7">
                <p className="flex items-center gap-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sun-300">
                  <span aria-hidden="true" className="h-px w-5 bg-sun-400" />
                  The Thumper
                </p>
                <h3 className="mt-4 font-display text-[1.6rem] font-semibold leading-tight text-white">
                  {formatMonthYear(latest.date)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-plum-100">{latest.summary}</p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-plum-700 px-7 py-5 text-xs text-plum-200">
                <span>
                  {latest.issue ? `Issue ${latest.issue} · ` : ""}
                  {latest.pages} pages
                </span>
                <span>{latest.size}</span>
              </div>

              <div className="bg-plum-900 px-7 py-5">
                <p className="text-xs leading-relaxed text-plum-100">The local PDF is a placeholder, not the approved October issue.</p>
                <Button to="/resources#newsletters" variant="sun" size="md" icon="newspaper" className="mt-3">
                  Browse local newsletter archive
                </Button>
              </div>
            </article>
          ) : null}
          <p className="mt-3 text-xs leading-relaxed text-ink-500">
            The local archive PDFs are layout placeholders for this test redesign, not approved newsletter editions. Check with the office for the current issue; The Thumper is described as a monthly neighbourhood publication.
          </p>

          <div className="mt-6">
            <Button to="/resources#newsletters" variant="outline" icon="newspaper">
              Browse local back issues
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
