import { CtaBand } from "@/sections/CtaBand";
import { Programmes, Volunteering } from "@/sections/Community";
import { EventsCalendar } from "@/sections/EventsCalendar";
import { PageHero } from "@/sections/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export function CommunityPage() {
  usePageMeta({
    title: "Community events",
    description:
      "Find upcoming Glendale community events, volunteering, seasonal sports and neighbourhood programmes.",
  });

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Community events and ways to get involved"
        lede={
          <p>
            Meet neighbours, see what&apos;s coming up, and find a way to take part. Event notices below reflect current public listings; seasonal details can change.
          </p>
        }
        facts={[
          { label: "Events", value: "Community hall & seasonal gatherings" },
          { label: "Programmes", value: "Soccer, courts & community garden" },
          { label: "Ways to help", value: "Events, programmes, facilities" },
          { label: "Announcements", value: "Calendar and The Thumper" },
        ]}
      />

      <EventsCalendar />
      <section className="bg-paper py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="font-display text-xl font-semibold text-ink-900">Explore neighbourhood programmes</h2>
          <p className="mt-2 max-w-[66ch] text-sm leading-relaxed text-ink-600">Browse soccer, court sports, and the community garden without leaving this neighbourhood redesign.</p>
        </div>
      </section>
      <Programmes />
      <Volunteering />

      <CtaBand
        title="Find a way to take part"
        lede="From a single event shift to a board or committee role, neighbours keep local events, programmes, recreation, and shared spaces going. Ask the office about current openings."
        primary={{ label: "Volunteer roles", to: "/community#volunteer" }}
        secondary={{ label: "Read The Thumper", to: "/resources#newsletters" }}
      />
    </>
  );
}
