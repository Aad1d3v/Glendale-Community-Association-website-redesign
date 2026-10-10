import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type PillTone = "plum" | "sun" | "grass" | "ink" | "outline";

const TONES: Record<PillTone, string> = {
  plum: "bg-plum-100 text-plum-800",
  sun: "bg-sun-100 text-sun-700",
  grass: "bg-grass-100 text-grass-700",
  ink: "bg-ink-100 text-ink-700",
  outline: "border border-ink-200 bg-white text-ink-600",
};

/** Small status label. Never the only way a state is communicated. */
export function Pill({
  tone = "plum",
  icon,
  className,
  children,
}: {
  tone?: PillTone;
  icon?: IconName;
  className?: string;
  children: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        TONES[tone],
        className,
      )}
    >
      {icon ? <Icon name={icon} className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}
