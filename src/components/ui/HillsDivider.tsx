import { cn } from "@/lib/cn";

/**
 * The ridge line from the logo, used as a transition between two page bands.
 * The colour follows the parent's text colour, so a divider placed at the foot
 * of a section should be given the *next* band's background colour.
 */
export function HillsDivider({
  flip = false,
  className,
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none w-full leading-none", className)}
    >
      <svg
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        className={cn("block h-12 w-full sm:h-16 lg:h-20", flip && "rotate-180")}
      >
        <path
          fill="currentColor"
          d="M0 88V50c92-27 180-41 276-41 112 0 196 20 288 39 90 19 176 26 264 12 92-15 172-40 268-57 82-15 172-9 268 8V88z"
        />
      </svg>
    </div>
  );
}
