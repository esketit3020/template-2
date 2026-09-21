/**
 * Onboarding §5: the client's 2009 logo is an ironbark tree on a roof pitch, with
 * no vector file. Redraw was approved as part of this project — this is that redraw:
 * an ironbark trunk standing inside a roof pitch, with the ember ridge line.
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {/* Roof pitch enclosing the mark */}
      <path
        d="M4 26 L24 8 L44 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ember ridge cap */}
      <path
        d="M18.5 12.8 L24 8 L29.5 12.8"
        fill="none"
        stroke="#c9552b"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ironbark trunk — the furrowed bark is the whole point of the name */}
      <path
        d="M24 42 V22"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M24 27 L18.5 21.5 M24 31.5 L29.5 26 M24 35.5 L19.5 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Eave line / ground */}
      <path d="M11 42 H37" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  /** `dark` = dark text for light backgrounds; `light` = white text for dark. */
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-ink-900";
  const sub = variant === "light" ? "text-ink-300" : "text-ink-500";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-9 w-9 shrink-0 ${text}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.375rem] font-bold uppercase tracking-tight ${text}`}
        >
          Ironbark
        </span>
        <span
          className={`font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] ${sub}`}
        >
          Roofing Co.
        </span>
      </span>
    </span>
  );
}
