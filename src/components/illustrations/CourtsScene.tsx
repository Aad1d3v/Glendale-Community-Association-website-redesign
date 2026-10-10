/**
 * Tennis and pickleball courts in a flat, poster-like three-quarter view.
 * Shares the set's skeleton with the other three scenes: ground line at y=236,
 * sun disc at (412, 58), purple carrying the structure, one green accent.
 */
export function CourtsScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} aria-hidden="true" focusable="false">
      {/* sky and ground, the band colour shared by all four scenes */}
      <rect width="480" height="236" fill="#FDFBF7" />
      <rect x="0" y="236" width="480" height="84" fill="#EDE7FB" />

      <circle cx="412" cy="58" r="24" fill="#F3C623" />

      {/* Court surface: near edge on the ground line, far edge receding to the fence. */}
      <path
        d="M104 236H376L320 160H160Z"
        fill="#5B21B6"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g stroke="#FFFFFF" strokeWidth="3">
        <path d="M147 178H333" />
        <path d="M117 218H363" />
        <path d="M240 178V218" />
      </g>

      {/* Net: a clean white band held by a post at each end. */}
      <rect x="132" y="194" width="216" height="8" fill="#FFFFFF" />
      <g stroke="#1F2937" strokeWidth="3" strokeLinecap="round">
        <path d="M132 188v26" />
        <path d="M348 188v26" />
      </g>

      {/* Chain-link fence reduced to one rail and five posts. */}
      <g stroke="#1F2937" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M104 104H376" />
        <path d="M104 104v48M172 104v48M240 104v48M308 104v48M376 104v48" />
      </g>

      {/* One hedge for balance. */}
      <path d="M48 236v-20a20 20 0 0 1 40 0v20z" fill="#4FAE63" />

      {/* A paddle and a ball left on the near half of the court. */}
      <g transform="rotate(14 170 221)">
        <rect
          x="178"
          y="217"
          width="16"
          height="8"
          rx="4"
          fill="#FFFFFF"
          stroke="#1F2937"
          strokeWidth="3"
        />
        <rect
          x="158"
          y="210"
          width="24"
          height="22"
          rx="8"
          fill="#FFFFFF"
          stroke="#1F2937"
          strokeWidth="3"
        />
      </g>
      <circle cx="208" cy="230" r="5" fill="#F3C623" />
    </svg>
  );
}
