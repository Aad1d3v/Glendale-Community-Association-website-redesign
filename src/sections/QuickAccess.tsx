import type { ComponentType } from "react";

import { SeedlingScene } from "@/components/illustrations/SeedlingScene";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import type { PillTone } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilities } from "@/content/facilities";
import { seedlings } from "@/content/childcare";

const STATUS_TONES: Record<string, PillTone> = { open: "grass", pending: "sun", closed: "outline" };

const hall = facilities.find((facility) => facility.id === "hall");
const courts = facilities.find((facility) => facility.id === "courts");
const rink = facilities.find((facility) => facility.id === "rink");

function HallPhoto({ className }: { className?: string }) {
  return (
    <img
      src="/images/glendale-hall-main-room.jpg"
      alt="The bright, wood-floored main hall at Glendale Community Centre"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

function TennisPhoto({ className }: { className?: string }) {
  return (
    <img
      src="/images/glendale-tennis-action.jpg"
      alt="A tennis match in progress on a Glendale community court"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

function RinkPhoto({ className }: { className?: string }) {
  return (
    <img
      src="/images/glendale-rink-skating-wide.jpg"
      alt="Winter view of Glendale's outdoor skating rink"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

const cards: Array<{
  id: string;
  title: string;
  blurb: string;
  cta: { label: string; to: string };
  Scene: ComponentType<{ className?: string }>;
  status: { label: string; tone: PillTone };
}> = [
  {
    id: "hall",
    title: hall?.name ?? "Community hall",
    blurb:
      "Hall capacity and rental terms vary by space. Check the current rate card and ask the Rental Coordinator to confirm your event layout.",
    cta: { label: "Rates & booking", to: "/facilities#booking" },
    Scene: HallPhoto,
    status: { label: hall?.status.label ?? "", tone: STATUS_TONES[hall?.status.tone ?? "open"] },
  },
  {
    id: "courts",
    title: courts?.name ?? "Tennis & pickleball courts",
    blurb:
      "Two tennis courts and three pickleball courts. Current membership and a seasonal passkey are required.",
    cta: { label: "Court rules & keys", to: "/facilities#courts" },
    Scene: TennisPhoto,
    status: { label: courts?.status.label ?? "", tone: STATUS_TONES[courts?.status.tone ?? "closed"] },
  },
  {
    id: "rink",
    title: rink?.name ?? "Outdoor ice rink",
    blurb:
      "Volunteer-maintained outdoor ice in winter, with other seasonal recreation uses. Check current rink notices before visiting.",
    cta: { label: "Rink season & rules", to: "/facilities#rink" },
    Scene: RinkPhoto,
    status: { label: rink?.status.label ?? "", tone: STATUS_TONES[rink?.status.tone ?? "pending"] },
  },
  {
    id: "seedlings",
    title: "Seedlings early learning",
    blurb:
      "The 2023 GGMCA announcement described full-day care for ages 2–5. Confirm current eligibility, hours, and availability with Seedlings.",
    cta: { label: "Programme & tours", to: "/childcare" },
    Scene: SeedlingScene,
    status: { label: seedlings.ages, tone: "outline" },
  },
];

export function QuickAccess() {
  return (
    <Section id="quick-access" tone="white">
      <SectionHeading
        eyebrow="Start here"
        title="Four ways to connect with Glendale"
        lede="Explore hall rentals, seasonal courts and rink information, or contact Seedlings about current childcare."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Card as="li" interactive key={card.id} className="flex flex-col overflow-hidden p-0">
            <div className="border-b border-ink-200/70">
              <card.Scene className="h-36 w-full object-cover sm:h-40" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex min-h-7 items-start justify-end">
                {card.status.label ? (
                  <Pill tone={card.status.tone}>{card.status.label}</Pill>
                ) : null}
              </div>

              <h3 className="mt-3 font-display text-[1.0625rem] font-semibold text-ink-900">
                {card.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{card.blurb}</p>

              <div className="mt-6 flex-1" />
              <Button to={card.cta.to} variant="ghost" size="sm" icon="arrowRight" className="-ml-2 self-start">
                {card.cta.label}
              </Button>
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
