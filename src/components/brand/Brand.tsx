import { cn } from "@/lib/cn";

/** Official GGMCA sun-and-hills logo supplied with the project. */
const OFFICIAL_LOGO_SRC = "/image_95bf45.png";

/** Mark plus the association's name, set as a two-line lockup. */
export function Brand({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <img
        src={OFFICIAL_LOGO_SRC}
        alt=""
        width={100}
        height={75}
        className="h-8 w-auto shrink-0 object-contain sm:h-10"
      />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[0.82rem] font-semibold leading-tight tracking-[-0.01em] sm:text-[0.95rem]",
            variant === "dark" ? "text-white" : "text-ink-900",
          )}
        >
          Glendale <span aria-hidden="true" className="text-ink-500">/</span> Glendale Meadows
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-semibold uppercase leading-none tracking-[0.14em] sm:text-[0.62rem]",
            variant === "dark" ? "text-sun-300" : "text-plum-700",
          )}
        >
          Community Association
        </span>
      </span>
    </span>
  );
}
