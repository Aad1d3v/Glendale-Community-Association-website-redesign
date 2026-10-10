/**
 * Flat vector portrait of the community hall, drawn to the set skeleton shared
 * by every scene in src/components/illustrations (480x320, horizon at y=236,
 * sun at cx=412). Decoration only: no text, no people, flat fills.
 */
export function HallScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* sky and ground, the band colour shared by all four scenes */}
      <rect width="480" height="236" fill="#FDFBF7" />
      <rect x="0" y="236" width="480" height="84" fill="#EDE7FB" />

      {/* sun, behind the roofline */}
      <circle cx="412" cy="58" r="24" fill="#F3C623" />

      {/* path to the door */}
      <path d="M208 236h56l26 84h-108z" fill="#FFFFFF" />

      {/* hall body */}
      <rect x="88" y="172" width="304" height="64" fill="#5B21B6" />

      {/* roof, low-pitched gable, overhanging the walls */}
      <path d="M72 172 240 96l168 76z" fill="#4C1D95" />
      <rect x="72" y="164" width="336" height="8" fill="#2A0F57" />

      {/* roof vent */}
      <path d="M232 108h16l6 10h-28z" fill="#2A0F57" />

      {/* window band, right half */}
      <g fill="#EDE7FB">
        <rect x="264" y="192" width="40" height="44" />
        <rect x="312" y="192" width="40" height="44" />
      </g>

      {/* window band, left of the door */}
      <rect x="112" y="192" width="72" height="44" fill="#C1A9EF" />

      {/* glazed double door */}
      <rect x="208" y="184" width="56" height="52" fill="#F3C623" />
      <path d="M236 184v52" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <path d="M232 210h-8M240 210h8" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

      {/* eave shadow line along the wall head */}
      <path d="M88 180h304" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

      {/* steps at the door */}
      <path d="M204 236h64v6h-64z" fill="#C1A9EF" />
      <path d="M200 242h72v6h-72z" fill="#7C4FD8" />

      {/* hedge, left of the path */}
      <path d="M112 236v-28a14 14 0 0 1 14-14h36a14 14 0 0 1 14 14v28z" fill="#4FAE63" />

      {/* hedge, right of the path, clear of the window band */}
      <path d="M352 236v-22a11 11 0 0 1 11-11h18a11 11 0 0 1 11 11v22z" fill="#4FAE63" />

      {/* tree, far left */}
      <path d="M64 236v-40" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <circle cx="64" cy="172" r="24" fill="#4FAE63" />
    </svg>
  );
}
