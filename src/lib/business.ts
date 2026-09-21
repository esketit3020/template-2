/**
 * Single source of truth for everything the client supplied on the onboarding form.
 *
 * Every licence number, phone number, ABN and warranty claim on the site reads from
 * here. Build checklist §8 requires these to be triple-checked against the
 * client-provided source before launch — that means checking this one file, not
 * hunting through templates.
 *
 * Source: docs/01-client-onboarding-form-FILLED.md (returned 2026-08-24)
 */

export const business = {
  // --- Onboarding §1: Business & Positioning ---
  name: "Ironbark Roofing Co.",
  legalName: "Ironbark Roofing Co. Pty Ltd",
  shortName: "Ironbark Roofing",
  tagline: "Brisbane southside roofing, done once and done properly.",
  trade: "Roofing",
  foundedYear: 2009,

  /** QBCC licence — displayed in the footer of every page (QLD legal requirement). */
  licence: {
    number: "15234876",
    body: "QBCC",
    bodyFull: "Queensland Building and Construction Commission",
    classes: "Roof Tiling & Roof Plumbing",
    verifyUrl: "https://my.qbcc.qld.gov.au/oslpub/",
  },

  abn: "48 621 305 774",

  foundingStory:
    "Dave Whitlock started Ironbark with one ute to provide careful, straightforward roof repairs and restorations for southside homeowners. Seventeen years on it is still a family business — his daughter Nina runs the office, and every crew member is on the books, not subcontracted.",

  customerSplit: { residential: 80, commercial: 20 },

  // --- Contact ---
  phone: {
    office: { display: "(07) 3856 4120", href: "tel:+61738564120" },
    national: { display: "1300 476 622", href: "tel:1300476622" },
  },
  email: "quotes@ironbarkroofing.com.au",

  /** NAP block — must stay identical to the Google Business Profile (checklist §3). */
  address: {
    street: "Unit 7, 24 Balaclava Street",
    suburb: "Woolloongabba",
    state: "QLD",
    postcode: "4102",
    country: "AU",
    oneLine: "Unit 7, 24 Balaclava Street, Woolloongabba QLD 4102",
  },
  geo: { lat: -27.4949, lng: 153.0345 },

  hours: {
    display: [
      { days: "Monday – Friday", time: "6:30am – 5:00pm" },
      { days: "Saturday", time: "7:00am – 1:00pm" },
      { days: "Sunday", time: "Closed" },
    ],
    /** schema.org opening hours specification */
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:30", closes: "17:00" },
      { days: ["Saturday"], opens: "07:00", closes: "13:00" },
    ],
  },

  // --- Onboarding §3: Trust Assets ---
  reviews: {
    rating: 4.9,
    count: 187,
    platform: "Google",
    profileUrl: "https://g.page/ironbark-roofing-brisbane",
    reviewUrl: "https://g.page/r/ironbark-roofing-brisbane/review",
    /** Rating and count are a manual figure as at this date until the Places API is wired. */
    asAt: "2026-08-24",
  },

  insurance: {
    publicLiability: "$20 million",
    insurer: "CGU",
    workcover: true,
  },

  warranty: {
    restoration: 25,
    repairs: 10,
    materialNote:
      "BlueScope Colorbond® material warranty of up to 36 years applies on new metal roofing, depending on product and site environment. Coastal sites carry different terms — we confirm the exact figure in writing on your quote.",
  },

  accreditations: [
    { name: "QBCC Licensed Contractor", detail: "Licence 15234876 — Roof Tiling & Roof Plumbing" },
    { name: "Master Builders Queensland", detail: "Member since 2011" },
    { name: "Housing Industry Association", detail: "HIA member" },
    { name: "Colorbond® Accredited Installer", detail: "BlueScope accredited for metal roofing" },
    { name: "Dulux AcraTex Accredited Applicator", detail: "Roof coating systems" },
    { name: "Working at Heights RIIWHS204E", detail: "Current for every crew member" },
  ],

  // --- Onboarding §1: differentiators. Drives the "Why choose us" section. ---
  differentiators: [
    {
      title: "A 25-year workmanship warranty",
      body:
        "Not 7 years, not 10. If our workmanship fails inside 25 years we come back and fix it, and you get the certificate in writing on handover — not a verbal promise at the front gate.",
      stat: "25 yr",
    },
    {
      title: "Our crews are employed, not subcontracted",
      body:
        "The people on your roof are on Ironbark's books, trained by us and covered by our insurance. That is why we can warrant the work for 25 years — we are not relying on a subbie who may not be trading next winter.",
      stat: "0 subbies",
    },
    {
      title: "Fixed-price quote in 48 hours, with the photos",
      body:
        "Every inspection includes a drone and photo condition report, so you can see the ridge caps and valleys yourself instead of taking our word for it. The written quote is itemised and fixed — not an estimate that moves once the scaffold is up.",
      stat: "48 hr",
    },
  ],

  // --- Onboarding §4: how-we-work steps ---
  process: [
    {
      step: 1,
      title: "Tell us what is going on",
      body:
        "Ring the office or send the form — name, suburb and a line about the problem is plenty. We will help you work out whether you need a repair, restoration or re-roof.",
    },
    {
      step: 2,
      title: "Free on-site inspection",
      body:
        "We get up there properly, usually within 3 business days. You get a drone and photo condition report showing exactly what we found: ridge caps, valleys, flashings, gutters, the lot.",
    },
    {
      step: 3,
      title: "Fixed-price written quote in 48 hours",
      body:
        "Itemised, plain English, no allowances that blow out later. We will also tell you honestly if the roof does not need the work yet — that happens more often than you would think.",
    },
    {
      step: 4,
      title: "The job",
      body:
        "An employed Ironbark crew, a start date we actually keep, and your yard, paths and gardens protected and cleaned down every afternoon before we leave.",
    },
    {
      step: 5,
      title: "Walk-through and warranty",
      body:
        "We walk the job with you, hand over the full photo record, and issue your written 25-year workmanship warranty certificate. Then we check in once the work is complete.",
    },
  ],

  social: {
    facebook: "https://www.facebook.com/ironbarkroofing",
    instagram: "https://www.instagram.com/ironbarkroofing",
  },

  // --- Onboarding §5 ---
  domain: "www.ironbarkroofing.com.au",

  team: [
    {
      name: "Dave Whitlock",
      role: "Director & Estimator",
      bio:
        "Started Ironbark in 2009 with one ute and a second-hand trailer. Thirty-one years on Brisbane roofs, and he still does most of the inspections himself.",
      licence: "QBCC 15234876",
    },
    {
      name: "Nina Whitlock",
      role: "Office Manager",
      bio:
        "Dave's daughter. Runs scheduling, the quoting paperwork and the follow-ups, and is the person who will actually answer when you ring the office.",
    },
    {
      name: "Sam Tuiletufuga",
      role: "Leading Hand — Restorations",
      bio:
        "Eleven years with Ironbark. Runs the restoration crew and is the reason the re-bedding and pointing on our jobs still looks right a decade later.",
    },
    {
      name: "Marco Ferreira",
      role: "Foreman — Metal Roofing",
      bio:
        "Colorbond accredited and responsible for coordinating careful metal roofing installations.",
    },
  ],
} as const;

/** Years trading, computed so the site never goes stale. */
export function yearsTrading(): number {
  return new Date().getFullYear() - business.foundedYear;
}

/** Always a valid absolute URL — never empty, never trailing-slash. */
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.ironbarkroofing.com.au").replace(
    /\/$/,
    "",
  );
