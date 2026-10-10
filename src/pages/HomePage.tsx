import { ContactPanel } from "@/sections/ContactPanel";
import { CtaBand } from "@/sections/CtaBand";
import { EventsPreview } from "@/sections/EventsPreview";
import { Hero } from "@/sections/Hero";
import { MembershipStrip } from "@/sections/MembershipStrip";
import { QuickAccess } from "@/sections/QuickAccess";
import { ThumperSpotlight } from "@/sections/ThumperSpotlight";
import { association } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: association.name,
    description:
      "Community hall rentals, tennis and pickleball courts, the outdoor rink, neighbourhood programmes, and Seedlings Early Learning in Glendale, southwest Calgary.",
  });

  return (
    <>
      <Hero />
      <QuickAccess />
      <EventsPreview />
      <MembershipStrip />
      <ThumperSpotlight />
      <ContactPanel reasonLimit={3} />
      <CtaBand
        title="Take part in your neighbourhood"
        lede="Request information about the hall or join the association through the official member portal. Rental requests are inquiries, not confirmed reservations."
        primary={{ label: "Book the hall", to: "/facilities#booking" }}
        secondary={{ label: "Join or renew", to: "/membership" }}
      />
    </>
  );
}
