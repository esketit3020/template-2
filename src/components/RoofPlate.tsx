/**
 * Generated architectural line-art plate.
 *
 * ── WHY THIS EXISTS ──────────────────────────────────────────────────────────
 * Design SOP §5: "Real photography only — no generic stock trade photos."
 * The client's marketing shoot is booked but not delivered (onboarding §3 note),
 * so rather than break that rule with stock imagery we render a deliberately
 * illustrative plate. It never pretends to be a photograph.
 *
 * Each project passes a `hue` and roof `profile` so plates read as distinct.
 *
 * ── HOW TO REPLACE ───────────────────────────────────────────────────────────
 * Set `photo` on the project in src/lib/projects.ts. Consumers already branch on
 * it, so no component change is needed here.
 */

type Profile = "gable" | "hip" | "skillion" | "dutch";

const roofPaths: Record<Profile, string> = {
  // Simple pitched gable
  gable: "M20 118 L160 34 L300 118 Z",
  // Hip roof — clipped ends
  hip: "M20 118 L88 34 L232 34 L300 118 Z",
  // Single-pitch skillion
  skillion: "M20 118 L20 76 L300 30 L300 118 Z",
  // Dutch gable — hip with a small gable at the ridge
  dutch: "M20 118 L74 52 L246 52 L300 118 Z M96 52 L160 26 L224 52 Z",
};

/** Batten/seam lines that follow each profile, for a bit of construction detail. */
const seamLines: Record<Profile, Array<[number, number, number, number]>> = {
  gable: [
    [48, 118, 160, 51],
    [76, 118, 160, 68],
    [104, 118, 160, 85],
    [272, 118, 160, 51],
    [244, 118, 160, 68],
    [216, 118, 160, 85],
  ],
  hip: [
    [52, 118, 106, 52],
    [84, 118, 124, 52],
    [268, 118, 214, 52],
    [236, 118, 196, 52],
    [130, 118, 130, 40],
    [190, 118, 190, 40],
  ],
  skillion: [
    [62, 111, 62, 69],
    [104, 104, 104, 62],
    [146, 97, 146, 55],
    [188, 90, 188, 48],
    [230, 83, 230, 41],
    [272, 76, 272, 34],
  ],
  dutch: [
    [56, 118, 92, 56],
    [88, 118, 116, 56],
    [272, 118, 236, 56],
    [240, 118, 212, 56],
    [160, 118, 160, 30],
  ],
};

export function RoofPlate({
  hue,
  profile,
  label,
  className = "",
  showTag = true,
}: {
  hue: number;
  profile: Profile;
  /** Short caption baked into the plate, e.g. the suburb + service. */
  label?: string;
  className?: string;
  /** The honest "illustration, not a photo" tag. */
  showTag?: boolean;
}) {
  const id = `plate-${profile}-${hue}`;

  return (
    <svg
      viewBox="0 0 320 180"
      className={className}
      role="img"
      aria-label={
        label
          ? `Illustration of a ${profile} roof representing ${label}. Job photography pending.`
          : `Illustration of a ${profile} roof profile.`
      }
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 34% 92%)`} />
          <stop offset="100%" stopColor={`hsl(${hue} 26% 82%)`} />
        </linearGradient>
        <linearGradient id={`${id}-roof`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 40% 46%)`} />
          <stop offset="100%" stopColor={`hsl(${hue} 44% 31%)`} />
        </linearGradient>
        <pattern id={`${id}-hatch`} width="7" height="7" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="hsl(0 0% 100% / 0.16)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Sky */}
      <rect width="320" height="180" fill={`url(#${id}-sky)`} />

      {/* Distant roofline, for depth */}
      <path
        d="M0 132 L44 104 L88 132 L132 100 L188 132 L236 106 L284 132 L320 112 L320 180 L0 180 Z"
        fill={`hsl(${hue} 20% 74%)`}
        opacity="0.55"
      />

      {/* Wall */}
      <rect x="42" y="115" width="236" height="52" fill={`hsl(${hue} 16% 88%)`} />
      <rect x="42" y="115" width="236" height="52" fill="none" stroke={`hsl(${hue} 24% 62%)`} strokeWidth="1.5" />

      {/* Windows */}
      <rect x="74" y="128" width="34" height="26" fill={`hsl(${hue} 30% 66%)`} />
      <rect x="143" y="128" width="34" height="26" fill={`hsl(${hue} 30% 66%)`} />
      <rect x="212" y="128" width="34" height="26" fill={`hsl(${hue} 30% 66%)`} />

      {/* Roof */}
      <path d={roofPaths[profile]} fill={`url(#${id}-roof)`} />
      <path d={roofPaths[profile]} fill={`url(#${id}-hatch)`} />
      <path
        d={roofPaths[profile]}
        fill="none"
        stroke="#14202b"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Seams / battens */}
      <g stroke="hsl(0 0% 100% / 0.3)" strokeWidth="1.1">
        {seamLines[profile].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* Gutter line */}
      <rect x="16" y="116" width="288" height="6" rx="3" fill="#14202b" opacity="0.82" />
      {/* Downpipe */}
      <rect x="46" y="122" width="5" height="45" fill="#14202b" opacity="0.7" />

      {/* Ember accent — ridge cap highlight, ties the plate to the brand */}
      <path
        d={
          profile === "skillion"
            ? "M20 76 L300 30"
            : profile === "gable"
              ? "M20 118 L160 34 L300 118"
              : profile === "hip"
                ? "M88 34 L232 34"
                : "M96 52 L160 26 L224 52"
        }
        fill="none"
        stroke="#c9552b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {showTag && (
        <g>
          <rect x="10" y="10" width="150" height="19" rx="3" fill="#14202b" opacity="0.86" />
          <text
            x="19"
            y="23.5"
            fill="#faf6f0"
            fontSize="9.5"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.09em"
          >
            ILLUSTRATION — PHOTO PENDING
          </text>
        </g>
      )}
    </svg>
  );
}

/**
 * Wider plate used in the hero. Same honesty caveat, more atmosphere: a crew
 * silhouette on the roof line so the hero reads as a job site rather than a diagram.
 */
export function HeroPlate({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 540"
      className={className}
      role="img"
      aria-label="Illustration of a roofing crew re-bedding ridge capping on a Brisbane tile roof. Client job photography pending."
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1d2f3d" />
          <stop offset="55%" stopColor="#2a4152" />
          <stop offset="100%" stopColor="#3b566a" />
        </linearGradient>
        <linearGradient id="hero-roof" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#8f3a1c" />
          <stop offset="100%" stopColor="#5c2413" />
        </linearGradient>
        <linearGradient id="hero-roof2" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#a8431f" />
          <stop offset="100%" stopColor="#7d3218" />
        </linearGradient>
        <pattern id="hero-tiles" width="26" height="15" patternUnits="userSpaceOnUse">
          <path d="M0 15 h26 M13 0 v15" stroke="#14202b" strokeOpacity="0.28" strokeWidth="1.2" />
        </pattern>
      </defs>

      <rect width="720" height="540" fill="url(#hero-sky)" />

      {/* Sun glow, low and warm — late afternoon on site */}
      <circle cx="600" cy="120" r="150" fill="#c9552b" opacity="0.16" />
      <circle cx="600" cy="120" r="80" fill="#e0764c" opacity="0.18" />

      {/* Distant suburb roofline */}
      <path
        d="M0 300 L70 258 L140 300 L210 250 L300 300 L380 254 L470 300 L560 262 L650 300 L720 268 L720 340 L0 340 Z"
        fill="#14202b"
        opacity="0.45"
      />

      {/* Foreground roof plane — the main subject */}
      <path d="M-20 470 L300 240 L760 400 L760 560 L-20 560 Z" fill="url(#hero-roof)" />
      <path d="M-20 470 L300 240 L760 400 L760 560 L-20 560 Z" fill="url(#hero-tiles)" />

      {/* Second plane, catching the light */}
      <path d="M300 240 L560 176 L760 400 Z" fill="url(#hero-roof2)" />
      <path d="M300 240 L560 176 L760 400 Z" fill="url(#hero-tiles)" />

      {/* Ridge line — ember, the brand accent */}
      <path d="M300 240 L560 176" stroke="#efa483" strokeWidth="7" strokeLinecap="round" />
      <path d="M-20 470 L300 240" stroke="#14202b" strokeWidth="4" strokeOpacity="0.5" />

      {/* Ridge caps mid-re-bed: a run of them lifted off, mortar bed exposed */}
      <g fill="#faf6f0" opacity="0.9">
        <rect x="330" y="215" width="26" height="12" rx="2" transform="rotate(-14 330 215)" />
        <rect x="372" y="205" width="26" height="12" rx="2" transform="rotate(-14 372 205)" />
        <rect x="414" y="195" width="26" height="12" rx="2" transform="rotate(-14 414 195)" />
      </g>

      {/* Crew silhouette — kneeling, working the ridge */}
      <g fill="#0a1119">
        <circle cx="470" cy="188" r="13" />
        <path d="M456 202 q14 -8 28 0 l8 30 q-22 8 -44 0 z" />
        <path d="M492 232 l16 14 -8 8 -18 -12 z" />
        <path d="M456 232 l-6 22 12 2 6 -22 z" />
        {/* Trowel */}
        <path d="M506 244 l22 8 -4 8 -22 -8 z" />
      </g>
      {/* Hi-vis band, so the figure reads as a tradesperson not a shadow */}
      <path d="M458 210 q12 -5 24 0 l2 8 q-14 5 -28 0 z" fill="#efa483" />
      {/* Hard hat */}
      <path d="M456 182 q14 -14 28 0 z" fill="#c9552b" />

      {/* Second crew member further down the plane */}
      <g fill="#0a1119" opacity="0.85">
        <circle cx="210" cy="352" r="11" />
        <path d="M198 364 q12 -7 24 0 l6 26 q-18 7 -36 0 z" />
        <path d="M228 390 l12 12 -7 7 -14 -11 z" />
      </g>
      <path d="M200 371 q10 -4 20 0 l2 7 q-12 4 -24 0 z" fill="#efa483" opacity="0.85" />

      {/* Bundle of new tiles stacked on the plane */}
      <g fill="#14202b" opacity="0.7">
        <rect x="120" y="418" width="66" height="9" rx="2" transform="rotate(-36 120 418)" />
        <rect x="132" y="426" width="66" height="9" rx="2" transform="rotate(-36 132 426)" />
        <rect x="144" y="434" width="66" height="9" rx="2" transform="rotate(-36 144 434)" />
      </g>

      {/* Honesty tag */}
      <g>
        <rect x="18" y="18" width="196" height="26" rx="4" fill="#0a1119" opacity="0.72" />
        <text
          x="30"
          y="35.5"
          fill="#faf6f0"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.1em"
        >
          ILLUSTRATION — PHOTO PENDING
        </text>
      </g>
    </svg>
  );
}
