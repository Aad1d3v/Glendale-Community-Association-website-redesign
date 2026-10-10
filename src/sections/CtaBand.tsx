import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { association } from "@/content/site";

/**
 * The closing band, used at the foot of most pages. A deep plum panel inside
 * the normal page gutter rather than a full-bleed stripe: it keeps the site's
 * grid intact and lets the association's logo do the decorating.
 */
export function CtaBand({
  title,
  lede,
  primary,
  secondary,
  tone = "paper",
}: {
  title: string;
  lede: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  /** Match the band above it so two paper sections never sit together. */
  tone?: "paper" | "white";
}) {
  return (
    <Section tone={tone}>
      <div className="relative overflow-hidden rounded-panel bg-plum-800 px-7 py-12 sm:px-12 sm:py-14">
        <img
          src="/image_95bf45.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-auto opacity-25 sm:h-52"
        />

        <div className="relative max-w-[38rem]">
          <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-[1.9rem]">
            {title}
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-plum-100">{lede}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={primary?.to ?? "/membership"} variant="sun" size="lg" icon="arrowRight">
              {primary?.label ?? "Join or renew"}
            </Button>
            <Button to={secondary?.to ?? "/contact"} variant="outlineOnDark" size="lg">
              {secondary?.label ?? "Ask a question"}
            </Button>
          </div>

          <p className="mt-6 text-sm text-plum-200">
            Or call the hall office on{" "}
            <a
              href={association.phoneHref}
              className="font-semibold text-white underline decoration-sun-400 decoration-2 underline-offset-4"
            >
              {association.phone}
            </a>
            , Monday to Thursday, 9 am to 3 pm.
          </p>
        </div>
      </div>
    </Section>
  );
}
