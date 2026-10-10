import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/* Kept in the component rather than at the call site: Tailwind does not resolve
   two conflicting utilities by class order, so a caller cannot reliably override
   `bg-white` from the outside. Variants belong here. */
const TONES = {
  default: "border-ink-200/80 bg-white",
  /** For the recommended option in a comparison. */
  highlight: "border-plum-600 bg-white ring-1 ring-plum-600/15",
  /** For supporting panels that should sit behind the main content. */
  muted: "border-ink-200/70 bg-paper",
} as const;

/**
 * A card is a hairline-bordered white panel. It lifts very slightly on hover
 * when the whole card leads somewhere; otherwise it stays flat, which keeps a
 * page of twelve cards from shimmering.
 */
export function Card({
  as: Tag = "div",
  id,
  tone = "default",
  interactive = false,
  className,
  children,
}: {
  as?: "div" | "article" | "li" | "section";
  id?: string;
  tone?: keyof typeof TONES;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative rounded-card border p-6 shadow-card",
        TONES[tone],
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-plum-300 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
