import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "sun" | "outline" | "outlineOnDark" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

/* Contrast, verified against the palette:
   primary        white on plum-700   10.9:1
   sun            ink-900 on sun-400   8.9:1
   outline        ink-800 on white    14.6:1
   outlineOnDark  plum-100 on plum-800 10.6:1
   ghost          plum-700 on paper   10.4:1

   Each variant is a complete look, including its own background. Callers must
   not patch a variant from the outside with another `bg-*` or `text-*` class:
   Tailwind resolves conflicting utilities by stylesheet order, not by the order
   the classes appear in the attribute, so the override may silently lose and
   leave unreadable text. `outlineOnDark` exists for exactly that reason. */
const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-plum-700 text-white hover:bg-plum-800 active:bg-plum-900",
  sun: "bg-sun-400 text-ink-900 hover:bg-sun-300 active:bg-sun-500",
  outline: "border border-ink-300 bg-white text-ink-800 hover:border-plum-400 hover:text-plum-800",
  outlineOnDark:
    "border border-plum-500 bg-plum-800 text-plum-100 hover:border-sun-400 hover:bg-plum-700 hover:text-white",
  ghost: "text-plum-700 hover:bg-plum-50",
};

/* Every size clears a 44px touch target except `sm`, which is only used for
   inline links inside body copy. */
const SIZES: Record<ButtonSize, string> = {
  sm: "min-h-9 gap-1.5 px-3.5 text-sm",
  md: "min-h-11 gap-2 px-5 text-sm",
  lg: "min-h-12 gap-2 px-6 text-base",
};

const BASE =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-55";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconPosition?: "leading" | "trailing";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "trailing",
  fullWidth = false,
  className,
  children,
  to,
  href,
  type,
  onClick,
  disabled,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && "w-full", className);

  const glyph = icon ? (
    <Icon name={icon} className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
  ) : null;

  const body = (
    <>
      {iconPosition === "leading" ? glyph : null}
      <span>{children}</span>
      {iconPosition === "trailing" ? glyph : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {body}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
        aria-label={ariaLabel}
      >
        {body}
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {body}
    </button>
  );
}
