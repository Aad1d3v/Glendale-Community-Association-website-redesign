/**
 * The association's mark: a yellow sun coming up behind two purple ridges over
 * green ground.
 *
 * This is a clean redraw of the original artwork rather than the original file,
 * so it stays crisp at every size and can sit on a dark band as well as a light
 * one. To use the official raster logo instead, see `OFFICIAL_LOGO_SRC` in
 * src/components/brand/Brand.tsx.
 */
const PALETTE = {
  light: { sun: "#F3C623", back: "#7C4FD8", front: "#4C1D95", ground: "#2F8B47" },
  dark: { sun: "#F3C623", back: "#C1A9EF", front: "#9B79E4", ground: "#4FAE63" },
} as const;

export function SunriseMark({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const colour = PALETTE[variant];

  return (
    <svg viewBox="0 0 48 44" className={className} aria-hidden="true" focusable="false">
      <circle cx="24" cy="20.5" r="9.5" fill={colour.sun} />
      {/* Far ridge, its crest cutting the sun at y=19. */}
      <path d="M0 33C7.2 23.6 14.6 19 22 19s15 4.6 22.2 14z" fill={colour.back} />
      {/* Near ridge. */}
      <path d="M3.5 33C8.6 26.2 14.2 22.8 20.5 22.8s12 3.4 17 10.2z" fill={colour.front} />
      {/* Ground. */}
      <path d="M0 33h48v11H0z" fill={colour.ground} />
    </svg>
  );
}
