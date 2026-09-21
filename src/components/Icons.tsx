/**
 * Inline SVG icon set. Inline rather than a sprite or icon package because these
 * are the only icons on the site and inlining them keeps the request count at zero
 * (build checklist §6 — page load under ~2s).
 */

import type { IconName } from "@/lib/services";

type Props = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      {children}
    </svg>
  );
}

/* ── Service icons ──────────────────────────────────────────────────────── */

export const serviceIcons: Record<IconName, (p: Props) => React.ReactElement> = {
  restoration: (p) => (
    <Svg {...p}>
      <path d="M2 11 12 4l10 7" />
      <path d="M4.5 11v9h15v-9" />
      <path d="M8 20v-5h8v5" />
      <path d="M15.5 7.5 18 5l1.6 1.6-2.5 2.5z" />
    </Svg>
  ),
  replacement: (p) => (
    <Svg {...p}>
      <path d="M2 12 12 4.5 22 12" />
      <path d="M12 4.5V2" />
      <path d="M5 14.5v6h14v-6" />
      <path d="M9.5 20.5v-4h5v4" />
      <path d="M17 3.5h4v4" />
      <path d="M21 3.5 16.5 8" />
    </Svg>
  ),
  repair: (p) => (
    <Svg {...p}>
      <path d="M3 11.5 12 5l9 6.5" />
      <path d="M5.5 11.5V20h13v-8.5" />
      <path d="M12 8.5v3" />
      <path d="M12 14.2v.01" />
      <circle cx="12" cy="17.6" r="2.2" />
    </Svg>
  ),
  gutter: (p) => (
    <Svg {...p}>
      <path d="M3 8 12 3l9 5" />
      <path d="M2.5 11.5h19v3a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z" />
      <path d="M7 19v3" />
      <path d="M12 19v3" />
      <path d="M17 19v3" />
    </Svg>
  ),
  paint: (p) => (
    <Svg {...p}>
      <path d="M3 11 12 4.5 21 11" />
      <path d="M5.5 11v4" />
      <path d="M4 15h10a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M18.5 8.5c1.2 1.8 2 3.1 2 4.2a2 2 0 1 1-4 0c0-1.1.8-2.4 2-4.2z" />
    </Svg>
  ),
  metal: (p) => (
    <Svg {...p}>
      <path d="M2 13 11 4h11l-9 9z" />
      <path d="M5.5 13 14.5 4" />
      <path d="M9 13 18 4" />
      <path d="M2 13v6h11v-6" />
      <path d="M13 13v6l9-9V4" />
    </Svg>
  ),
  vent: (p) => (
    <Svg {...p}>
      <path d="M2.5 15 12 8.5l9.5 6.5" />
      <path d="M5 15v5h14v-5" />
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 5 8 2.2" />
      <path d="M12 5l4-2.8" />
      <path d="M12 5v-3" />
    </Svg>
  ),
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = serviceIcons[name];
  return <Icon className={className} />;
}

/* ── UI icons ───────────────────────────────────────────────────────────── */

export function PhoneIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4.5 3.5h3.2l1.6 4-2 1.3a11 11 0 0 0 5.9 5.9l1.3-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 2.9 5.2 1.6 1.6 0 0 1 4.5 3.5z" />
    </Svg>
  );
}

export function StarIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export function ShieldIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 2.8l7.5 2.6v6c0 4.6-3.1 8.3-7.5 9.8-4.4-1.5-7.5-5.2-7.5-9.8v-6z" />
      <path d="M8.8 12.1l2.3 2.3 4.1-4.4" />
    </Svg>
  );
}

export function BadgeIcon(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="9.5" r="6.2" />
      <path d="M9 14.8 7.6 21.5l4.4-2.3 4.4 2.3-1.4-6.7" />
      <path d="M9.6 9.6l1.7 1.7 3.1-3.3" />
    </Svg>
  );
}

export function ClockIcon(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </Svg>
  );
}

export function MapPinIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </Svg>
  );
}

export function CheckIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4.5 12.5l5 5 10-11" />
    </Svg>
  );
}

export function ArrowRightIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4 12h15" />
      <path d="M13.5 6.5 20 12l-6.5 5.5" />
    </Svg>
  );
}

export function ChevronDownIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M6 9.5 12 15.5l6-6" />
    </Svg>
  );
}

export function MailIcon(p: Props) {
  return (
    <Svg {...p}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </Svg>
  );
}

export function AlertIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 3.4 22 20.6H2z" />
      <path d="M12 9.5v4.6" />
      <path d="M12 17.2v.01" />
    </Svg>
  );
}

export function MenuIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </Svg>
  );
}

export function CloseIcon(p: Props) {
  return (
    <Svg {...p}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function DroneIcon(p: Props) {
  return (
    <Svg {...p}>
      <rect x="9" y="9" width="6" height="6" rx="1.4" />
      <path d="M9 9 5.5 5.5M15 9l3.5-3.5M9 15l-3.5 3.5M15 15l3.5 3.5" />
      <circle cx="4.2" cy="4.2" r="2" />
      <circle cx="19.8" cy="4.2" r="2" />
      <circle cx="4.2" cy="19.8" r="2" />
      <circle cx="19.8" cy="19.8" r="2" />
    </Svg>
  );
}

export function UsersIcon(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3A4.5 4.5 0 0 1 15 18.5V20" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M17.5 14h.5a3.5 3.5 0 0 1 3.5 3.5V20" />
    </Svg>
  );
}

/** Star row — used in the hero badge and on review cards. */
export function StarRow({
  rating,
  className = "",
  starClass = "h-4 w-4",
}: {
  rating: number;
  className?: string;
  starClass?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`${starClass} ${i <= Math.round(rating) ? "text-amber-400" : "text-ink-300"}`}
        />
      ))}
    </span>
  );
}
