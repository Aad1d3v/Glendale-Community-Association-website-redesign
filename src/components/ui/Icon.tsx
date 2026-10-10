export type IconName =
  | "sun"
  | "hall"
  | "racket"
  | "rink"
  | "seedling"
  | "leaf"
  | "calendar"
  | "clock"
  | "download"
  | "file"
  | "search"
  | "menu"
  | "close"
  | "chevronRight"
  | "chevronDown"
  | "arrowRight"
  | "arrowUpRight"
  | "external"
  | "phone"
  | "mail"
  | "mapPin"
  | "users"
  | "check"
  | "dollar"
  | "shield"
  | "newspaper"
  | "wheelchair"
  | "heart"
  | "facebook"
  | "instagram"
  | "x";

export type IconProps = {
  name: IconName;
  /** Sizing classes, e.g. "h-5 w-5". Defaults to 1em so it tracks font-size. */
  className?: string;
  /** Provide only when the icon is the sole label of a control. */
  title?: string;
};

/** Reuse the association's official mark wherever the interface requests an icon. */
export function Icon({ name, className, title }: IconProps) {
  return (
    <img
      src="/image_95bf45.png"
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      data-icon={name}
      draggable={false}
      className={`${className ?? "h-[1em] w-[1em]"} object-contain`}
    />
  );
}
