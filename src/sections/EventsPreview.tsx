import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/content/events";
import { formatLongDate } from "@/lib/format";

export function EventsPreview() {
  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="What's on"
        title="Events and announcements"
        lede="A couple of upcoming dates from the community calendar. Check back for announcements as event details are confirmed."
        action={{ label: "Full calendar", to: "/community" }}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {events.slice(0, 2).map((event) => (
          <article key={event.id} className="rounded-card border border-ink-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-plum-700">{formatLongDate(event.date)} · {event.startTime}–{event.endTime}</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{event.title}</h3>
            <p className="mt-2 text-sm text-ink-600">{event.description}</p>
          </article>
        ))}
        <p className="text-xs text-ink-500 sm:col-span-2">Event times and details were transcribed from public GGMCA listings reviewed October 9, 2026. Confirm event changes before attending.</p>
      </div>
    </Section>
  );
}
