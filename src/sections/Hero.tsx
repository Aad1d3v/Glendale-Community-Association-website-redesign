import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HillsDivider } from "@/components/ui/HillsDivider";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { association } from "@/content/site";
import { events } from "@/content/events";
import { formatLongDate } from "@/lib/format";

const nextEvent = [...events].sort((a, b) => a.date.localeCompare(b.date))[0];

const highlights: Array<{ icon: IconName; text: string }> = [
  { icon: "hall", text: "A community hall with flexible rental spaces" },
  { icon: "rink", text: "Outdoor rink and seasonal recreation" },
  { icon: "seedling", text: "Seedlings Early Learning — ask about current care" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* The sun, oversized and allowed to run off the corner. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-44 h-[24rem] w-[24rem] rounded-full bg-sun-200/45 sm:-right-20 lg:h-[32rem] lg:w-[32rem]"
      />

      <Container className="relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
              <span aria-hidden="true" className="h-px w-6 bg-sun-400" />
              Glendale · Glendale Meadows · SW Calgary
            </p>

            <h1 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.03] text-ink-900 sm:text-[3.2rem] lg:text-[3.55rem]">
              Welcome to Glendale Community Association
            </h1>              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-600">
              {association.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/facilities" size="lg" icon="arrowRight">
                Explore facilities &amp; rentals
              </Button>
              <Button to="/membership" size="lg" variant="outline" icon="users" iconPosition="leading">
                Become a member
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-ink-200/70 pt-6 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li key={highlight.text} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Icon name={highlight.icon} className="mt-0.5 h-5 w-5 shrink-0 text-plum-600" />
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative min-h-[23rem] overflow-hidden rounded-panel bg-ink-900 sm:min-h-[25rem]">
              <img
                src="/images/glendale-rink-skating-wide.jpg"
                alt="Neighbours skating and playing hockey together on Glendale's outdoor rink"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-ink-950/10" />
              <div className="relative flex min-h-[23rem] flex-col items-start justify-end px-7 pb-8 pt-10 sm:min-h-[25rem] sm:px-9">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sun-300">
                  {association.hall.street}
                </p>
                <p className="mt-3 max-w-[22ch] font-display text-[1.6rem] font-semibold leading-tight text-white">
                  Where neighbours gather, play, and skate.
                </p>
                <img src="/image_95bf45.png" alt="" className="mt-4 h-16 w-auto object-contain sm:h-20" />
              </div>
            </div>

            <div className="relative -mt-5 rounded-card border border-ink-200 bg-white p-5 shadow-lift sm:mx-6 lg:-mt-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
                Coming up in Glendale
              </p>
              {nextEvent ? (
                <>
                  <p className="mt-3 font-display text-base font-semibold text-ink-900">{nextEvent.title}</p>
                  <p className="mt-1 text-sm text-ink-600">{formatLongDate(nextEvent.date)} · {nextEvent.startTime}</p>
                  <Button to="/community#events" variant="ghost" size="sm" icon="arrowRight" className="mt-3 -ml-2">
                    See community events
                  </Button>
                </>
              ) : (
                <p className="mt-3 text-sm text-ink-600">Community events will appear here when announced.</p>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Ridge line, drawn in the colour of the band that follows. */}
      <HillsDivider className="text-white" />
    </section>
  );
}
