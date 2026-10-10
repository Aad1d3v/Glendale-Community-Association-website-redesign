import { cn } from "@/lib/cn";

/** Big number with a caption, used for the association's own figures. */
export function Stat({
  value,
  label,
  invert = false,
  className,
}: {
  value: string;
  label: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className={cn(
          "font-display text-3xl font-semibold tabular-nums sm:text-4xl",
          invert ? "text-sun-400" : "text-plum-700",
        )}
      >
        {value}
      </p>
      <p className={cn("mt-1.5 text-sm leading-snug", invert ? "text-plum-100" : "text-ink-600")}>
        {label}
      </p>
    </div>
  );
}
