import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Page gutter. One width for the whole site so nothing drifts. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-[76rem] px-5 sm:px-8", className)}>{children}</div>;
}
