import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import type { PillTone } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/content/events";
import type { CommunityEvent, EventCategory } from "@/content/events";
import { cn } from "@/lib/cn";
import { countdownLabel, dayOfMonth, formatLongDate, formatShortDate, isUpcoming, monthAbbr } from "@/lib/format";

type Filter = "Everything" | EventCategory;

const CATEGORY_ORDER: EventCategory[] = ["Community", "Class", "Market", "Meeting", "Seasonal"];

const REGISTRATION: Record<CommunityEvent["registration"], { tone: PillTone; label: string }> = {
  open: { tone: "grass", label: "Registration open" },
  required: { tone: "sun", label: "Registration required" },
  "drop-in": { tone: "ink", label: "Drop in" },
  closed: { tone: "outline", label: "Details coming soon" },
};

/* ------------------------------------------------------------------ helpers */

const byDateAscending = (a: CommunityEvent, b: CommunityEvent): number => a.date.localeCompare(b.date);

function DateChip({ date }: { date: string }) {
  return (
    <time
      dateTime={date}
      className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-plum-100 text-plum-800"
    >
      <span aria-hidden="true" className="font-display text-xl font-semibold leading-none tabular-nums">
        {dayOfMonth(date)}
      </span>
      <span
        aria-hidden="true"
        className="mt-1 text-[0.6rem] font-semibold uppercase leading-none tracking-[0.12em]"
      >
        {monthAbbr(date)}
      </span>
      <span className="sr-only">{formatLongDate(date)}</span>
    </time>
  );
}

function MetaRow({ event }: { event: CommunityEvent }) {
  const rows = [
    { icon: "clock" as const, text: `${event.startTime} – ${event.endTime}` },
    { icon: "mapPin" as const, text: event.location },
    { icon: "dollar" as const, text: event.cost },
  ];

  return (
    <ul className="space-y-2 border-t border-ink-200/70 pt-4 text-sm text-ink-700">
      {rows.map((row) => (
        <li key={row.text} className="flex gap-2.5">
          <Icon name={row.icon} className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
          <span>{row.text}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ section */

export function EventsCalendar() {
  const [filter, setFilter] = useState<Filter>("Everything");

  const upcoming = events.filter((event) => isUpcoming(event.date)).sort(byDateAscending);
  /* Four most recent only: the point of this list is context, not an archive. */
  const past = events.filter((event) => !isUpcoming(event.date)).sort(byDateAscending).reverse().slice(0, 4);

  const matches = (event: CommunityEvent): boolean =>
    filter === "Everything" || event.category === filter;

  const visibleUpcoming = upcoming.filter(matches);
  const visiblePast = past.filter(matches);
  const nothingToShow = visibleUpcoming.length === 0 && visiblePast.length === 0;

  const counts = CATEGORY_ORDER.map((category) => ({
    category,
    count: events.filter((event) => event.category === category).length,
  })).filter((entry) => entry.count > 0);

  return (
    <Section id="events" tone="white">
      <SectionHeading
        eyebrow="What's on"
        title="Events, classes, and the neighbourhood calendar"
        lede="Here are upcoming neighbourhood events and ways to take part. Times and announcements can change, so confirm the latest details before heading over."
      />

      {events.length > 0 ? (
        <>
          <div role="group" aria-label="Filter events by category" className="mt-8 flex flex-wrap gap-2">
            <FilterChip label="Everything" count={events.length} active={filter === "Everything"} onClick={() => setFilter("Everything")} />
            {counts.map((entry) => (
              <FilterChip key={entry.category} label={entry.category} count={entry.count} active={filter === entry.category} onClick={() => setFilter(entry.category)} />
            ))}
          </div>
          <p aria-live="polite" className="mt-4 text-sm text-ink-500">
            {visibleUpcoming.length === 0 ? "No upcoming events match that filter." : `${visibleUpcoming.length} upcoming ${visibleUpcoming.length === 1 ? "event" : "events"}${filter === "Everything" ? "" : ` in ${filter}`}.`}
          </p>
          {nothingToShow ? (
            <div className="mt-6 rounded-card border border-dashed border-ink-300 bg-paper p-8 text-center">
              <p className="text-ink-600">Nothing in that category is on the calendar yet. Try another, or see everything.</p>
              <div className="mt-5 flex justify-center"><Button variant="outline" onClick={() => setFilter("Everything")}>Show everything</Button></div>
            </div>
          ) : (
            <>
              {visibleUpcoming.length > 0 ? (
                <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {visibleUpcoming.map((event) => {
                    const countdown = countdownLabel(event.date);
                    const registration = REGISTRATION[event.registration];
                    return (
                      <Card as="li" key={event.id} interactive className="flex flex-col gap-4">
                        {event.featured ? <><span aria-hidden="true" className="absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-sun-400" /><span className="sr-only">Featured event.</span></> : null}
                        <div className="flex items-start gap-4">
                          <DateChip date={event.date} />
                          <div className="min-w-0">
                            <h3 className="font-display text-base font-semibold leading-snug text-ink-900">{event.title}</h3>
                            <div className="mt-2 flex flex-wrap items-center gap-2"><Pill tone="plum">{event.category}</Pill>{countdown ? <Pill tone="grass">{countdown}</Pill> : null}</div>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-ink-600">{event.description}</p>
                        <div className="mt-auto space-y-4"><Pill tone={registration.tone}>{registration.label}</Pill><MetaRow event={event} /></div>
                      </Card>
                    );
                  })}
                </ul>
              ) : null}
              {visiblePast.length > 0 ? (
                <div className="mt-12">
                  <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-500">Already happened</h3>
                  <ul className="mt-4 divide-y divide-ink-200/70 border-y border-ink-200/70">
                    {visiblePast.map((event) => <li key={event.id} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3 text-sm"><time dateTime={event.date} className="w-28 shrink-0 tabular-nums text-ink-500">{formatShortDate(event.date)}</time><span className="font-medium text-ink-600">{event.title}</span><span className="text-ink-500">{event.category}</span></li>)}
                  </ul>
                </div>
              ) : null}
            </>
          )}
        </>
      ) : (
        <div className="mt-8 rounded-card border border-ink-200 bg-paper p-6 text-sm leading-relaxed text-ink-700">
          The association has not posted additional upcoming events yet. New gatherings will appear here once details are announced.
        </div>
      )}
    </Section>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors",
        active
          ? "border-plum-700 bg-plum-700 text-white"
          : "border-ink-300 bg-white text-ink-700 hover:border-plum-400 hover:text-plum-800",
      )}
    >
      {label}
      <span className={cn("tabular-nums", active ? "text-plum-200" : "text-ink-500")}>{count}</span>
    </button>
  );
}
