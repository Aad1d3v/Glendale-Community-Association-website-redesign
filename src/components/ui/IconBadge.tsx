import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type BadgeTone = "plum" | "sun" | "grass" | "ink";

const TONES: Record<BadgeTone, string> = {
  plum: "bg-plum-100 text-plum-700",
  sun: "bg-sun-100 text-sun-700",
  grass: "bg-grass-100 text-grass-700",
  ink: "bg-ink-100 text-ink-700",
};

/** Square icon chip used at the head of a card. */
export function IconBadge({
  name,
  tone = "plum",
  className,
}: {
  name: IconName;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
        TONES[tone],
        className,
      )}
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
