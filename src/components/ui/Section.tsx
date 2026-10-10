import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type SectionTone = "paper" | "white" | "ink";

const TONES: Record<SectionTone, string> = {
  paper: "bg-paper",
  white: "bg-paper-light",
  ink: "bg-ink-900",
};

/**
 * Vertical rhythm for a page band. Pass `bleed` when the section draws its own
 * full-width artwork and should not be wrapped in the page gutter.
 */
export function Section({
  id,
  tone = "paper",
  size = "default",
  bleed = false,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  size?: "default" | "tight";
  bleed?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        TONES[tone],
        size === "tight" ? "py-12 sm:py-16" : "py-16 sm:py-20 lg:py-24",
        className,
      )}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
