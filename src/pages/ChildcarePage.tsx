import { CtaBand } from "@/sections/CtaBand";
import { PageHero } from "@/sections/PageHero";
import { SeedlingsEnrolment, SeedlingsProgramme } from "@/sections/Seedlings";
import { seedlings } from "@/content/childcare";
import { usePageMeta } from "@/hooks/usePageMeta";

export function ChildcarePage() {
  usePageMeta({
    title: "Seedlings childcare",
    description:
      "Seedlings Early Learning at Glendale Community Association. Confirm current age eligibility, hours, enrollment, and fees directly with the programme.",
  });

  return (
    <>
      <PageHero
        eyebrow="Childcare · Seedlings"
        title="Seedlings Early Learning at Glendale"
        lede={
          <p>
            {seedlings.name} is linked with the GGMCA community centre and member portal. The GGMCA announcement describes full-day learning and care for children ages 2–5; ask Seedlings to confirm current ages, hours, spaces, fees, and registration steps.
          </p>
        }
        facts={[
          { label: "Age range", value: seedlings.ages },
          { label: "Hours & availability", value: seedlings.hours },
          { label: "Programme contact", value: seedlings.contactEmail },
          { label: "Member profile", value: "Registered families tick the Seedlings checkbox" },
        ]}
      />

      <SeedlingsProgramme />
      <SeedlingsEnrolment />

      <CtaBand
        tone="white"
        title="Ask Seedlings about enrolment"
        lede="The GGMCA membership page asks registered Seedlings families to mark their child's registration in the membership profile. Contact Seedlings directly for current tours, availability, eligibility, schedule, and fees."
        primary={{ label: "Email Seedlings", to: "mailto:seedlings@myglendale.ca" }}
        secondary={{ label: "See the waitlist steps", to: "/childcare#enrolment" }}
      />
    </>
  );
}
