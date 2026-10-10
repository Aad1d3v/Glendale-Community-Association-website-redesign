/**
 * Seedlings: a raised timber bed planted with seedlings, standing in the yard
 * against the wall of the hall. Green carries the planting, purple the timber,
 * yellow the sun.
 *
 * Shared skeleton with the other scenes in this set: 480x320, horizon at y=236
 * with the ground band below it, sun disc at (412, 58) r=24 behind the subject.
 */
export function SeedlingScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} aria-hidden="true" focusable="false">
      {/* sky and ground, the band colour shared by all four scenes */}
      <rect width="480" height="236" fill="#FDFBF7" />
      <rect x="0" y="236" width="480" height="84" fill="#EDE7FB" />

      {/* Sun, behind everything. */}
      <circle cx="412" cy="58" r="24" fill="#F3C623" />

      {/* Hall wall: the return panel first, then the face, so the corner reads. */}
      <rect x="344" y="168" width="56" height="68" fill="#C1A9EF" />
      <rect x="88" y="168" width="256" height="68" fill="#EDE7FB" />
      <path
        d="M104 184h232"
        stroke="#1F2937"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="88" y="224" width="312" height="16" fill="#4C1D95" />

      {/* Seedlings. Drawn before the bed so the stems rise from behind the rim. */}

      {/* Left planting: a short stem with two leaves. */}
      <path d="M186 216v-26a4 4 0 0 1 8 0v26z" fill="#2F8B47" />
      <path d="M186 190Q166 172 154 186Q168 194 186 190Z" fill="#4FAE63" />
      <path d="M194 190Q214 172 226 186Q212 194 194 190Z" fill="#4FAE63" />

      {/* Right planting: the same shape, mirrored about the centre of the bed. */}
      <path d="M286 216v-26a4 4 0 0 1 8 0v26z" fill="#2F8B47" />
      <path d="M286 190Q266 172 254 186Q268 194 286 190Z" fill="#4FAE63" />
      <path d="M294 190Q314 172 326 186Q312 194 294 190Z" fill="#4FAE63" />

      {/* Centre planting: the tall sprout the scene is built around. */}
      <path d="M236 216V144a4 4 0 0 1 8 0v72z" fill="#2F8B47" />
      <path d="M236 146Q208 114 186 136Q206 156 236 146Z" fill="#4FAE63" />
      <path d="M244 146Q272 114 294 136Q274 156 244 146Z" fill="#4FAE63" />

      {/* Raised bed: rim, front board, plank groove, then the corner posts. */}
      <rect x="148" y="196" width="184" height="16" fill="#7C4FD8" />
      <rect x="154" y="212" width="172" height="38" fill="#5B21B6" />
      <rect x="168" y="228" width="152" height="3" fill="#4C1D95" />
      <rect x="148" y="196" width="14" height="54" fill="#4C1D95" />
      <rect x="318" y="196" width="14" height="54" fill="#4C1D95" />

      {/* Watering can resting in the yard, spout turned toward the bed. */}
      <path d="M368 202 340 190v12l28 14z" fill="#5B21B6" />
      <rect x="358" y="196" width="56" height="8" fill="#7C4FD8" />
      <rect x="362" y="202" width="48" height="44" fill="#4C1D95" />
      <path
        d="M412 210c16 0 16 26 0 26"
        fill="none"
        stroke="#1F2937"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
