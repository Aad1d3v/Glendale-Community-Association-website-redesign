import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * The site's one heading pattern: a short sun-yellow rule, an uppercase
 * kicker, the heading itself, then a lede. Repeating it exactly is what makes
 * the pages feel like one publication instead of a stack of cards.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  level = 2,
  align = "left",
  action,
  invert = false,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  level?: 1 | 2 | 3;
  align?: "left" | "center";
  action?: { label: string; to: string };
  invert?: boolean;
  className?: string;
}) {
  const Heading = level === 1 ? "h1" : level === 2 ? "h2" : "h3";

  const headingSize =
    level === 1
      ? "text-[2rem] leading-[1.08] sm:text-[2.5rem] lg:text-[2.9rem]"
      : level === 2
        ? "text-2xl leading-tight sm:text-[1.85rem] lg:text-[2.1rem]"
        : "text-lg sm:text-xl";

  return (
    <div
      className={cn(
        "gap-6",
        action ? "sm:flex sm:items-end sm:justify-between" : undefined,
        align === "center" ? "text-center" : undefined,
        className,
      )}
    >
      <div className={cn(align === "center" ? "mx-auto max-w-[46rem]" : "max-w-[52rem]")}>
        {eyebrow ? (
          <p
            className={cn(
              "flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
              align === "center" ? "justify-center" : undefined,
              invert ? "text-sun-300" : "text-plum-600",
            )}
          >
            <span aria-hidden="true" className="h-px w-6 bg-sun-400" />
            {eyebrow}
          </p>
        ) : null}
        <Heading
          id={id}
          className={cn(
            "font-semibold",
            headingSize,
            eyebrow ? "mt-3" : undefined,
            invert ? "text-white" : undefined,
          )}
        >
          {title}
        </Heading>
        {lede ? (
          <div
            className={cn(
              "mt-4 text-[1.0625rem] leading-relaxed",
              invert ? "text-plum-100" : "text-ink-600",
            )}
          >
            {lede}
          </div>
        ) : null}
      </div>
      {action ? (
        <div className={cn("mt-6 shrink-0", align === "center" ? "flex justify-center" : "sm:mt-0")}>
          <Button to={action.to} variant={invert ? "sun" : "outline"} size="md" icon="arrowRight">
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
