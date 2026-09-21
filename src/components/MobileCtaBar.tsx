"use client";

/**
 * Conversion checklist item 8: "Sticky CTA bar or button on mobile scroll."
 *
 * Appears after 400px of scroll so it does not cover the hero CTA on first paint.
 * Three actions matching the three intent levels (design doc §3.2): call the office,
 * or request a quote.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";
import { AlertIcon, MailIcon, PhoneIcon } from "./Icons";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-ink-800 bg-ink-950/97 backdrop-blur transition-transform duration-200 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 divide-x divide-ink-800">
        <a
          href={business.phone.office.href}
          className="flex flex-col items-center gap-1 py-2.5 text-white"
          tabIndex={visible ? 0 : -1}
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="font-display text-[0.8125rem] font-semibold uppercase tracking-wide">
            Call
          </span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 bg-ember-500 py-2.5 text-white"
          tabIndex={visible ? 0 : -1}
        >
          <MailIcon className="h-5 w-5" />
          <span className="font-display text-[0.8125rem] font-semibold uppercase tracking-wide">
            Free Quote
          </span>
        </Link>

      </div>
    </div>
  );
}
