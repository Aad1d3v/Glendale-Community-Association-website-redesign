/**
 * RinkScene — the neighbourhood outdoor ice rink in winter.
 *
 * One of four facility illustrations sharing a single skeleton (480 × 320,
 * horizon at y=236, sun at 412/58, subjects kept inside x 40–440) so the cards
 * read as a set. Fills use the literal palette from src/index.css; the artwork
 * is fixed, so it carries its own ink rather than following the theme.
 */
export function RinkScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} aria-hidden="true" focusable="false">
      {/* Winter sky, paler than the page so the card still reads as a picture. */}
      <rect width="480" height="236" fill="#FDFBF7" />

      {/* Low sun, sitting behind the shack's roofline. */}
      <circle cx="412" cy="58" r="24" fill="#F3C623" />

      {/* Far ridge, drawn down past the boards so no sky leaks through the seam. */}
      <path
        d="M0 200c58-26 106-36 164-28 54 10 92 24 148 18 46-6 92-18 168-22v46H0z"
        fill="#EDE7FB"
      />

      {/* Two firs on the ridge — bases sit inside the ridge fill, so no seam. */}
      <path d="M68 152l14 48H54z" fill="#4C1D95" />
      <path d="M110 168l11 32H99z" fill="#4C1D95" />

      {/* Warming shack: snow on the flat roof, deep purple body, one lit window. */}
      <rect x="308" y="116" width="112" height="8" fill="#FFFFFF" />
      <rect x="312" y="124" width="104" height="12" fill="#2A0F57" />
      <rect x="320" y="136" width="88" height="100" fill="#5B21B6" />
      <rect x="332" y="96" width="14" height="28" fill="#4C1D95" />
      <rect x="328" y="88" width="22" height="8" fill="#2A0F57" />
      <rect x="350" y="148" width="28" height="26" fill="#F3C623" />
      <path d="M364 150v22" fill="none" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

      {/* Boards across the full frame, with a crisp top edge. */}
      <rect y="204" width="480" height="32" fill="#4C1D95" />
      <path d="M0 205.5H480" fill="none" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

      {/* Gate in the boards, lighter than the boards so it reads as an opening. */}
      <rect x="200" y="204" width="48" height="32" fill="#7C4FD8" />
      <rect
        x="201.5"
        y="205.5"
        width="45"
        height="29"
        fill="none"
        stroke="#1F2937"
        strokeWidth="3"
      />
      <path d="M232 222h9" fill="none" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

      {/* Snow heaved onto the boards, drifting over the firs' bases. */}
      <path
        d="M48 206c6-13 20-19 34-13 9 4 19 4 28-1 12-7 24-4 30 8 2 3 3 5 4 6z"
        fill="#FFFFFF"
      />

      {/* Shovelled sheet: pale lavender ice with a crisp edge against the boards. */}
      <rect y="236" width="480" height="84" fill="#EDE7FB" />

      {/* Snow banked into both corners, as it gets after a shovel out. */}
      <path d="M0 236h60c-2 12-12 20-26 24-10 3-22 8-34 16z" fill="#FFFFFF" />
      <path d="M480 236h-56c2 12 12 20 26 24 10 3 20 8 30 16z" fill="#FFFFFF" />

      {/* Skate tracks — the oldest cue there is that the ice is skated on. */}
      <g fill="none" stroke="#C1A9EF" strokeWidth="3" strokeLinecap="round">
        <path d="M96 292c30-4 56-16 74-34" />
        <path d="M124 300c28-6 50-18 66-36" />
        <path d="M292 302c18-2 32-10 44-22" />
      </g>
    </svg>
  );
}
