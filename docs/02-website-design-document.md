# WEBSITE DESIGN DOCUMENT — Ironbark Roofing Co.

Produced per *SOP: Website Design Document & Layout Standard for Trade Businesses (AU)*.
Section 3 completed from the returned onboarding form; Sections 4–5 are the SOP standard applied to this client.

| | |
|---|---|
| **Client** | Ironbark Roofing Co. |
| **Trade** | Roofing (AU / QLD) |
| **Prepared** | 2026-08-28 |
| **Target launch** | 2026-10-06 |
| **Stack** | Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deploy to Vercel |

---

## 3. Design Document

### 3.1 Business & Positioning

- **Trade type and services:** Roofing — restoration, replacement/re-roofing, repairs & leak detection, storm & hail damage, guttering, roof painting, Colorbond metal roofing, roof ventilation. Eight services, each with a dedicated page.
- **Licence:** QBCC Licence No. 15234876 (Roof Tiling & Roof Plumbing), Queensland Building and Construction Commission. **Must appear in the footer of every page** — QLD legal requirement for licensed building work.
- **ABN:** 48 621 305 774 — footer, every page.
- **Years trading / founding story:** Established 2009 (17 years). One-liner: *"Started with one ute after the 2008 Brisbane hailstorms. Still family-run, still employing every crew member."*
- **Primary service area:** 20 Brisbane southside / inner-east suburbs. **Secondary:** Logan, Redlands, Ipswich, Moreton Bay, Scenic Rim.
- **Target customer:** Both — 80% residential, 20% commercial. Residential leads the design; commercial gets a section on the About page and a note on relevant service pages.
- **Key differentiator:** 25-year workmanship warranty · employed crews, no subbies · 4-hour storm make-safe · fixed-price quote in 48 hours with drone report.
- **Average job value:** ~$8,500.
  → **CTA implication:** this is a high-consideration purchase. A single "buy now" CTA will not do it. The SOP's three-tier CTA strategy is required: *Free Quote* (warm), *Call Now / Emergency* (urgent), *see how we work / browse projects* (early-stage). Placed at different scroll depths.

### 3.2 Conversion Goals

- **Primary:** Free roof inspection & fixed-price quote form. Short and inline — name, phone, suburb, service, brief description. Nothing more (SOP §5).
- **Secondary:** click-to-call office · projects gallery browse · reviews page.
- **Emergency pathway:** **Required.** Distinct number (0447 882 310) routing to the on-call foreman. Gets: a slot in the sticky header, the full-width emergency band at section 10, its own `/emergency` page, and a red-tinted treatment that is visually distinct from the ember primary CTA so urgent and non-urgent intent never compete.

### 3.3 Trust Assets — status

| Asset | Status |
|---|---|
| Licence + ABN | ✅ Confirmed, in footer |
| Insurance / warranty | ✅ $20M PL, 25-yr workmanship, 10-yr repairs |
| Google rating & count | ✅ 4.9 ★ / 187 reviews — above the fold in hero |
| 6–10 recent specific reviews | ✅ 8 supplied, all with suburb + service + date |
| Real job-site / crew photography | ⚠️ **Shoot booked, not yet delivered** — line-art placeholders in build, no stock |
| Before/after photos | ⚠️ Same as above |
| Certifications / accreditations | ✅ QBCC, MBQ, HIA, Colorbond Accredited Installer, Dulux AcraTex |
| Team photos/bios | ⚠️ Bios written, portraits in the booked shoot |

### 3.4 Content Inventory — status

| Item | Status |
|---|---|
| Per-service descriptions | ✅ 8 services, individual copy each |
| Service area suburb list | ✅ 20 primary + 5 secondary regions; 6 suburbs get their own page |
| Process / how we work | ✅ 5 steps |
| FAQs | ✅ 8, sourced from the client's real inbox |
| Pricing approach | ✅ Hybrid — "from" pricing on 5 services, quote-only on replacement/metal/commercial |

---

## 4. Homepage Layout — as built

The SOP §4 order, implemented exactly. Component paths are the delivered build.

| # | Section | Component | Notes on this client |
|---|---|---|---|
| 1 | Sticky header | `components/Header.tsx` | Logo, click-to-call `(07) 3856 4120`, emergency link, "Get a Free Quote" button, nav. Condenses on scroll. |
| 2 | Hero | `components/Hero.tsx` | Headline names the outcome + service area. Google 4.9★/187 badge, licence chip, primary CTA + secondary "How we work". |
| 3 | Trust bar | `components/TrustBar.tsx` | Icon row, no scroll needed: QBCC licence no. · 17 years · 25-yr warranty · $20M insured · 4.9★. |
| 4 | Services overview | `components/ServicesGrid.tsx` | 8 tiles → dedicated pages. "From" price on the 5 that have one. |
| 5 | Why choose us | `components/WhyChooseUs.tsx` | 4 props tied to the real differentiators, not generic. |
| 6 | How we work | `components/HowWeWork.tsx` | 5 numbered steps, enquiry → warranty certificate. |
| 7 | Recent projects | `components/Gallery.tsx` | Filterable by service type, each with suburb + job value band. |
| 8 | Reviews | `components/Reviews.tsx` | 8 specific reviews, suburb named, dated, service tagged. Links to GBP. |
| 9 | Service area | `components/ServiceArea.tsx` | 20-suburb list + region map graphic + secondary regions. |
| 10 | Secondary CTA / emergency band | `components/EmergencyBand.tsx` | Full-width. Storm/hail/leak. 4-hour make-safe promise. |
| 11 | FAQ accordion | `components/FaqAccordion.tsx` | 8 questions, `FAQPage` schema attached. |
| 12 | Footer | `components/Footer.tsx` | ABN, QBCC licence, address, both phone numbers, service links, socials, privacy/terms. |

**Mobile:** `components/MobileCtaBar.tsx` — sticky bottom bar (Call · Quote · Emergency) appears after 400px scroll. SOP §5 requirement.

### Supporting pages — as built

| SOP requirement | Route |
|---|---|
| About (story, team, credentials) | `/about` |
| Individual service pages | `/services` + `/services/[slug]` × 8 |
| Projects/Gallery | `/projects` |
| Reviews/Testimonials | `/reviews` |
| Service Area page(s) | `/service-areas` + `/service-areas/[slug]` × 6 |
| FAQ | `/faq` |
| Contact (form + map + click-to-call) | `/contact` |
| Blog (optional) | Deferred to phase 2 — agreed on kickoff call |
| *Additional* | `/emergency`, `/quote-received`, `/privacy-policy`, `/terms`, custom `404` |

---

## 5. Conversion Element Checklist

| # | Item | Status | Where |
|---|---|---|---|
| 1 | Click-to-call in header on mobile | ✅ | `Header.tsx` + `MobileCtaBar.tsx` |
| 2 | Primary CTA visible without scrolling | ✅ | `Hero.tsx` |
| 3 | Review rating/count above the fold | ✅ | Hero badge — 4.9★ / 187 |
| 4 | Licence number + ABN in footer | ✅ | `Footer.tsx`, all pages |
| 5 | Real photography only, no stock | ⚠️ | Placeholders pending the booked shoot — **no stock used** |
| 6 | Page load under ~2s | ✅ | Static generation, SVG art, `next/font` self-hosted, zero client JS on most sections |
| 7 | Mobile-first, tested on real devices | ☐ | Pre-launch QA task |
| 8 | Sticky CTA bar on mobile scroll | ✅ | `MobileCtaBar.tsx` |
| 9 | Inline/short quote form — 5 fields max | ✅ | `QuoteForm.tsx` — name, phone, suburb, service, description |
| 10 | Emergency pathway | ✅ | Header, band, `/emergency`, mobile bar |
| 11 | Local schema + suburb-level content | ✅ | `lib/schema.ts` — RoofingContractor, Service, FAQPage, Breadcrumb; 6 suburb pages |
| 12 | Google Reviews widget/embed, kept current | ⚠️ | Static now + GBP deep links. Live Places API pull is a phase-2 item (needs the client's API key). |

### Brand application

| Token | Value | Use |
|---|---|---|
| `--ink` | `#14202B` | Ironbark charcoal — headers, footer, body text |
| `--ember` | `#C9552B` | Primary CTA, accents, active states |
| `--cream` | `#FAF6F0` | Page and alternating section background |
| `--urgent` | `#B3261E` | Emergency pathway only — never for standard CTAs |
| Display type | Barlow Condensed 600/700 | Headings, uppercase eyebrows |
| Body type | Inter | Body copy, UI |

---

## Open items carried to build / QA

1. **Photography shoot** — booked, not delivered. Placeholders clearly marked; swap in `src/lib/projects.ts` and `src/lib/business.ts`.
2. **Form delivery** — `POST /api/quote` validates and logs. Wire to the client's inbox/CRM (Resend or ServiceM8) before launch; see `.env.example`.
3. **Live Google reviews** — needs the client's Places API key.
4. **GA4 / Search Console** — property not yet created; IDs go in `.env`.
5. **Blog** — phase 2.
6. Everything else: see `03-website-build-checklist.md` for the tracked state against the internal build checklist.
