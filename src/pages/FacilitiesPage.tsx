import { BookingForm } from "@/sections/BookingForm";
import { FacilitySection } from "@/sections/FacilitySection";
import { PageHero } from "@/sections/PageHero";
import {
  facilities,
} from "@/content/facilities";
import { usePageMeta } from "@/hooks/usePageMeta";

export function FacilitiesPage() {
  usePageMeta({
    title: "Facilities & rentals",
    description:
      "Request a Glendale hall rental, learn about seasonal tennis and pickleball access, and check current outdoor rink information from GGMCA.",
  });

  return (
    <>
      <PageHero
        eyebrow="Facilities & rentals"
        title="Your hall, your courts, your rink"
        lede={
          <p>
            Three things sit on the same property on 25 Avenue. Two of them are rented for a few
            hours at a time; one of them is free and belongs to everyone in the neighbourhood.
          </p>
        }
        facts={[
          { label: "Hall rentals", value: "Private events; inquire for current terms" },
          { label: "Court access", value: "$70 seasonal passkey + membership" },
          { label: "Rink", value: "Winter ice; seasonal use year-round" },
          { label: "Availability", value: "Request is not a reservation" },
        ]}
      />

      {facilities.map((facility, index) => (
        <FacilitySection
          key={facility.id}
          facility={facility}
          tone={index % 2 === 0 ? "white" : "paper"}
        />
      ))}

      <BookingForm />

      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="font-display text-xl font-semibold text-ink-900">A note about hall rentals</h2>
          <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-ink-600">
            This redesign includes hall information and an inquiry form for preview. Sending a request opens an email draft; it does not confirm availability or reserve a date. Verify the current quote and terms with the Rental Coordinator.
          </p>
          <a href="/photos" className="mt-4 inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4">
            See Glendale hall and community photos
          </a>
        </div>
      </section>
    </>
  );
}
