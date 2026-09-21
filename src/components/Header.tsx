"use client";

/**
 * Design SOP §4 — Section 1: Sticky header.
 * "Logo, click-to-call number, primary CTA button, nav" — persistent contact access.
 *
 * Conversion checklist item 1: click-to-call visible in the header on mobile.
 * Build checklist §4: sticky header behaves correctly on scroll, desktop + mobile.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { Logo } from "./Logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  StarIcon,
} from "./Icons";

const nav = [
  { label: "Services", href: "/services", children: true },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Condense on scroll so the header takes less vertical space once reading starts.
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* ── Utility strip: rating + credentials. Hidden on mobile to save height;
             the mobile equivalents live in the sticky bottom bar. ── */}
      <div className="hidden bg-ink-950 text-ink-200 lg:block">
        <div className="shell flex h-9 items-center justify-between text-[0.8125rem]">
          <a
            href={business.reviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <StarIcon className="h-3.5 w-3.5 text-amber-400" />
            <strong className="font-semibold text-white">{business.reviews.rating}</strong>
            <span>from {business.reviews.count} Google reviews</span>
          </a>
          <div className="flex items-center gap-5">
            <span>
              {business.licence.body} Lic. {business.licence.number}
            </span>
            <span aria-hidden="true" className="text-ink-600">
              |
            </span>
            <span className="text-ink-200">Roof restorations · repairs · Colorbond</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-cream/95 backdrop-blur transition-shadow ${
          condensed ? "border-ink-200 shadow-md" : "border-transparent"
        }`}
      >
        <div className="shell">
          <div
            className={`flex items-center justify-between gap-4 transition-[height] duration-200 ${
              condensed ? "h-16" : "h-[4.75rem] md:h-[5.5rem]"
            }`}
          >
            <Link href="/" aria-label={`${business.name} — home`} className="shrink-0">
              <Logo />
            </Link>

            {/* ── Desktop nav ── */}
            <nav aria-label="Main" className="hidden xl:block">
              <ul className="flex items-center gap-1">
                {nav.map((item) => (
                  <li key={item.href} className={item.children ? "group relative" : undefined}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 rounded px-3 py-2 font-display text-[1.0625rem] font-semibold transition-colors ${
                        isActive(item.href)
                          ? "text-ember-600"
                          : "text-ink-800 hover:text-ember-600"
                      }`}
                    >
                      {item.label}
                      {item.children && <ChevronDownIcon className="h-3.5 w-3.5" />}
                    </Link>

                    {item.children && (
                      <div className="invisible absolute left-0 top-full w-[21rem] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="card overflow-hidden py-1.5">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="flex items-baseline justify-between gap-3 px-4 py-2.5 text-[0.9375rem] hover:bg-cream"
                              >
                                <span className="font-medium text-ink-900">{s.shortName}</span>
                                {s.fromPrice && (
                                  <span className="shrink-0 text-xs text-ink-500">
                                    from {s.fromPrice}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                          <li className="mt-1 border-t border-ink-100">
                            <Link
                              href="/services"
                              className="block px-4 py-2.5 text-[0.9375rem] font-semibold text-ember-600 hover:bg-cream"
                            >
                              All services →
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Actions ── */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Click-to-call. Icon-only under md so it always fits (checklist item 1). */}
              <a
                href={business.phone.office.href}
                className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-ink-900 transition-colors hover:text-ember-600 md:px-3"
                aria-label={`Call ${business.name} on ${business.phone.office.display}`}
              >
                <PhoneIcon className="h-5 w-5 shrink-0" />
                <span className="hidden text-left leading-tight md:block">
                  <span className="block text-[0.6875rem] font-medium uppercase tracking-wider text-ink-500">
                    Call the office
                  </span>
                  <span className="block font-display text-[1.0625rem] font-bold">
                    {business.phone.office.display}
                  </span>
                </span>
              </a>

              <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
                Get a Free Quote
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink-200 text-ink-900 xl:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-200 bg-cream xl:hidden"
          >
            <nav aria-label="Mobile" className="shell py-4">
              <ul className="divide-y divide-ink-100">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="flex-1 py-3.5 font-display text-xl font-semibold text-ink-900"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setServicesOpen((v) => !v)}
                            className="inline-flex h-11 w-11 items-center justify-center text-ink-600"
                            aria-expanded={servicesOpen}
                            aria-label={
                              servicesOpen ? "Hide service list" : "Show service list"
                            }
                          >
                            <ChevronDownIcon
                              className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                        </div>
                        {servicesOpen && (
                          <ul className="pb-3 pl-3">
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  className="block border-l-2 border-ink-200 py-2.5 pl-4 text-[0.9375rem] text-ink-700"
                                >
                                  {s.shortName}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3.5 font-display text-xl font-semibold text-ink-900"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2.5">
                <Link href="/contact" className="btn btn-primary w-full">
                  Get a Free Quote
                </Link>
                <a href={business.phone.office.href} className="btn btn-outline w-full">
                  <PhoneIcon className="h-5 w-5" />
                  {business.phone.office.display}
                </a>
                <p className="pt-1 text-center text-xs text-ink-500">
                  {business.licence.body} Licence {business.licence.number} · ABN {business.abn}
                </p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
