/**
 * Indicative coverage map for Design SOP §4 Section 9 ("suburb list and/or map graphic").
 *
 * Deliberately a stylised schematic, not a geographic map: an embedded Google Map
 * costs ~400KB of third-party JS and a consent banner for what is essentially a
 * "we cover this area" reassurance. Suburb positions are approximate relative
 * geography only. The interactive map lives on /contact where it earns its weight
 * (people navigating to the depot), and there it is a plain iframe link-out.
 */

const RING = { r10: 78, r25: 150, r40: 218 };
const DEPOT = { x: 236, y: 212 };

/** Approximate relative positions — labelled suburbs only. */
const points: Array<{ name: string; x: number; y: number; anchor?: "start" | "end" | "middle" }> = [
  { name: "Bulimba", x: 296, y: 128 },
  { name: "Morningside", x: 330, y: 158, anchor: "start" },
  { name: "Cannon Hill", x: 366, y: 178, anchor: "start" },
  { name: "Camp Hill", x: 300, y: 206, anchor: "start" },
  { name: "Carindale", x: 372, y: 232, anchor: "start" },
  { name: "Coorparoo", x: 264, y: 232, anchor: "start" },
  { name: "Holland Park", x: 268, y: 292, anchor: "start" },
  { name: "Mount Gravatt", x: 276, y: 340, anchor: "start" },
  { name: "Tarragindi", x: 208, y: 306, anchor: "end" },
  { name: "Annerley", x: 178, y: 264, anchor: "end" },
  { name: "Moorooka", x: 156, y: 310, anchor: "end" },
  { name: "Sunnybank", x: 216, y: 384, anchor: "end" },
  { name: "Wynnum", x: 424, y: 142, anchor: "start" },
  { name: "Salisbury", x: 186, y: 348, anchor: "end" },
];

export function AreaMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      role="img"
      aria-label="Indicative map of Ironbark Roofing's coverage. Depot in Woolloongabba, with primary service area covering the Brisbane southside and inner east including Coorparoo, Camp Hill, Carindale, Bulimba, Holland Park and Mount Gravatt, and an extended area reaching Logan, Redlands, Ipswich and Moreton Bay."
    >
      <rect width="480" height="480" fill="#faf6f0" />

      {/* Coverage rings, outermost first */}
      <circle
        cx={DEPOT.x}
        cy={DEPOT.y}
        r={RING.r40}
        fill="#c9552b"
        fillOpacity="0.05"
        stroke="#c9552b"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <circle
        cx={DEPOT.x}
        cy={DEPOT.y}
        r={RING.r25}
        fill="#c9552b"
        fillOpacity="0.07"
        stroke="#c9552b"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <circle
        cx={DEPOT.x}
        cy={DEPOT.y}
        r={RING.r10}
        fill="#c9552b"
        fillOpacity="0.12"
        stroke="#c9552b"
        strokeOpacity="0.6"
        strokeWidth="2"
      />

      {/* Brisbane River — the defining feature of the northern boundary */}
      <path
        d="M-10 96 C 70 118, 122 82, 178 108 S 262 168, 320 120 C 366 82, 410 92, 494 66"
        fill="none"
        stroke="#8299aa"
        strokeWidth="17"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M-10 96 C 70 118, 122 82, 178 108 S 262 168, 320 120 C 366 82, 410 92, 494 66"
        fill="none"
        stroke="#587488"
        strokeWidth="1.5"
        strokeOpacity="0.35"
        strokeDasharray="2 4"
      />
      <text x="52" y="88" fill="#587488" fontSize="10.5" fontFamily="system-ui, sans-serif" fontStyle="italic">
        Brisbane River
      </text>

      {/* Moreton Bay edge, bottom right */}
      <path
        d="M470 120 C 448 190, 456 260, 480 320 L480 120 Z"
        fill="#8299aa"
        fillOpacity="0.25"
      />
      <text
        x="462"
        y="240"
        fill="#587488"
        fontSize="10.5"
        fontFamily="system-ui, sans-serif"
        fontStyle="italic"
        textAnchor="end"
      >
        Moreton Bay
      </text>

      {/* Arterials, for orientation */}
      <g stroke="#d6dfe6" strokeWidth="3.5" strokeLinecap="round">
        <path d="M236 212 L440 168" />
        <path d="M236 212 L300 400" />
        <path d="M236 212 L96 300" />
        <path d="M236 212 L180 60" />
      </g>

      {/* Suburb dots */}
      {points.map((p) => (
        <g key={p.name}>
          <circle cx={p.x} cy={p.y} r="4.5" fill="#14202b" />
          <text
            x={p.anchor === "end" ? p.x - 9 : p.anchor === "start" ? p.x + 9 : p.x}
            y={p.y + 3.5}
            textAnchor={p.anchor ?? "middle"}
            fill="#2a4152"
            fontSize="11"
            fontWeight="500"
            fontFamily="system-ui, sans-serif"
          >
            {p.name}
          </text>
        </g>
      ))}

      {/* Depot marker */}
      <g>
        <circle cx={DEPOT.x} cy={DEPOT.y} r="13" fill="#c9552b" />
        <circle cx={DEPOT.x} cy={DEPOT.y} r="13" fill="none" stroke="#faf6f0" strokeWidth="2.5" />
        <path
          d={`M${DEPOT.x - 6} ${DEPOT.y + 1} L${DEPOT.x} ${DEPOT.y - 5} L${DEPOT.x + 6} ${DEPOT.y + 1}`}
          fill="none"
          stroke="#faf6f0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M${DEPOT.x - 4} ${DEPOT.y + 1} L${DEPOT.x - 4} ${DEPOT.y + 6} L${DEPOT.x + 4} ${DEPOT.y + 6} L${DEPOT.x + 4} ${DEPOT.y + 1}`}
          fill="none"
          stroke="#faf6f0"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <text
          x={DEPOT.x}
          y={DEPOT.y + 32}
          textAnchor="middle"
          fill="#14202b"
          fontSize="11.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Woolloongabba depot
        </text>
      </g>

      {/* Ring labels */}
      <text x={DEPOT.x} y={DEPOT.y - RING.r10 + 15} textAnchor="middle" fill="#a8431f" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
        ~10km
      </text>
      <text x={DEPOT.x} y={DEPOT.y - RING.r25 + 15} textAnchor="middle" fill="#a8431f" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.8">
        ~25km
      </text>
      <text x={DEPOT.x} y={DEPOT.y + RING.r40 - 8} textAnchor="middle" fill="#a8431f" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.7">
        ~40km · extended area
      </text>

      {/* Legend */}
      <g transform="translate(16, 396)">
        <rect width="184" height="68" rx="5" fill="#ffffff" stroke="#d6dfe6" strokeWidth="1" />
        <circle cx="16" cy="18" r="6" fill="#c9552b" />
        <text x="30" y="21.5" fill="#2a4152" fontSize="10.5" fontFamily="system-ui, sans-serif">
          Depot — 4hr storm response
        </text>
        <circle cx="16" cy="38" r="4.5" fill="#14202b" />
        <text x="30" y="41.5" fill="#2a4152" fontSize="10.5" fontFamily="system-ui, sans-serif">
          Primary service suburb
        </text>
        <rect x="11" y="53" width="10" height="10" fill="#c9552b" fillOpacity="0.14" stroke="#c9552b" strokeOpacity="0.4" strokeDasharray="3 3" />
        <text x="30" y="61.5" fill="#2a4152" fontSize="10.5" fontFamily="system-ui, sans-serif">
          Extended — travel fee may apply
        </text>
      </g>

      <text x="464" y="470" textAnchor="end" fill="#8299aa" fontSize="9.5" fontFamily="system-ui, sans-serif">
        Indicative only — not to scale
      </text>
    </svg>
  );
}
