/**
 * Onboarding §3: before/after and job-site photography.
 * Design SOP §4 row 7: real job photography, "ideally filterable by service type".
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PHOTOGRAPHY IS AN OPEN ITEM. The client's photo library is insurance phone
 * shots; a marketing shoot is booked but not delivered (see onboarding §3 note).
 *
 * Design SOP §5 forbids stock trade photography, so rather than substitute stock
 * we render a generated line-art plate per project via <RoofPlate>. Each entry
 * below carries the real job detail and a `photo` field that is currently null.
 *
 * TO SWAP IN REAL PHOTOS: drop files in /public/img/projects/ and set
 * `photo: { before, after, alt }`. The gallery already branches on it — no
 * component changes needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  title: string;
  suburb: string;
  serviceSlug: string;
  serviceName: string;
  /** Month completed. */
  completed: string;
  /** Value band rather than exact price — the client asked not to publish job prices. */
  valueBand: string;
  duration: string;
  summary: string;
  /** The interesting detail — what made this job non-obvious. */
  detail: string;
  /** Null until the booked shoot is delivered. See file header. */
  photo: { before: string; after: string; alt: string } | null;
  /** Seed for the generated placeholder plate so each project looks distinct. */
  plate: { hue: number; profile: "gable" | "hip" | "skillion" | "dutch" };
};

export const projects: Project[] = [
  {
    slug: "camp-hill-queenslander-restoration",
    title: "Terracotta restoration on a raised Queenslander",
    suburb: "Camp Hill",
    serviceSlug: "roof-restoration",
    serviceName: "Roof Restoration",
    completed: "August 2026",
    valueBand: "$6,000 – $9,000",
    duration: "4 days",
    summary:
      "Full re-bed and re-point of every ridge cap, 62 broken tiles replaced, and two coats of AcraTex membrane over an original 1938 terracotta roof.",
    detail:
      "The house had been raised and built under in 2016 but the roof was never touched, so 80-year-old rigid mortar was sitting above a brand new downstairs living area. We stripped every ridge, re-bedded, and re-pointed in flexible compound — the failure mode here is not the tiles, it is the mortar cracking as the frame moves.",
    photo: null,
    plate: { hue: 18, profile: "gable" },
  },
  {
    slug: "bulimba-tile-to-colorbond",
    title: "Tile to Colorbond® conversion, character home",
    suburb: "Bulimba",
    serviceSlug: "roof-replacement",
    serviceName: "Roof Replacement",
    completed: "July 2026",
    valueBand: "$28,000 – $34,000",
    duration: "11 days",
    summary:
      "Complete strip of concrete tile, batten replacement where rot was found, new sarking and insulation, and Colorbond Ultra Custom Orb in Basalt.",
    detail:
      "Character-protected street, so the profile and colour had to be sympathetic and approved. Taking roughly nine tonnes of tile off a 1940s frame also meant the roof plumber and a structural check had to agree before we started. Ultra grade specified for the salt air off the river.",
    photo: null,
    plate: { hue: 212, profile: "dutch" },
  },
  {
    slug: "holland-park-persistent-leak",
    title: "Third-time-lucky leak trace above an ensuite",
    suburb: "Holland Park",
    serviceSlug: "roof-repairs",
    serviceName: "Roof Repairs & Leak Detection",
    completed: "June 2026",
    valueBand: "$340 – $800",
    duration: "1 day",
    summary:
      "Two previous roofers had sealed the wrong spot. Hose testing found water tracking three metres along a batten from a cracked valley iron.",
    detail:
      "This is the job we get called to most. The stain was above the ensuite; the actual defect was in the valley near the garage. Without a hose test from inside the cavity you are sealing whatever cracked tile is closest to the stain, which is why it came back twice.",
    photo: null,
    plate: { hue: 32, profile: "gable" },
  },
  {
    slug: "carindale-gutter-replacement",
    title: "Full re-gutter with resized downpipes",
    suburb: "Carindale",
    serviceSlug: "guttering-downpipes",
    serviceName: "Gutters & Downpipes",
    completed: "May 2026",
    valueBand: "$4,000 – $6,000",
    duration: "2 days",
    summary:
      "84 metres of Colorbond hi-front gutter, Colorbond fascia covers over rotten timber, and four extra downpipes added.",
    detail:
      "The owners thought they had a blockage problem. The original 1980s downpipes were sized for about half the roof area they were draining, so in any real Brisbane downpour the gutters simply could not clear the water. Adding downpipes fixed what fifteen years of gutter cleaning had not.",
    photo: null,
    plate: { hue: 150, profile: "hip" },
  },
  {
    slug: "woolloongabba-childcare-reroof",
    title: "Commercial re-roof, childcare centre",
    suburb: "Woolloongabba",
    serviceSlug: "metal-roofing",
    serviceName: "Colorbond® Metal Roofing",
    completed: "April 2026",
    valueBand: "$40,000+",
    duration: "3 weeks, staged",
    summary:
      "620m² Klip-Lok re-roof with new box gutters and rainheads, staged in sections so the centre never closed a room.",
    detail:
      "Working above operating childcare meant no crew movement over occupied areas, a hard 3pm noise cut-off, and full hoarding each stage. We ran it in four sections across three weeks. The centre did not lose a single day of trade.",
    photo: null,
    plate: { hue: 196, profile: "skillion" },
  },
  {
    slug: "mount-gravatt-restoration-repaint",
    title: "Concrete tile restoration and recolour",
    suburb: "Mount Gravatt",
    serviceSlug: "roof-painting",
    serviceName: "Roof Painting",
    completed: "March 2026",
    valueBand: "$4,000 – $6,000",
    duration: "3 days",
    summary:
      "Chalked and lichen-covered 1970s concrete tile, cleaned, treated, sealed and recoated in AcraTex Surfmist to cut upstairs heat.",
    detail:
      "Two previous coating attempts by others had peeled. The tiles had never been sealed, so the membrane had nothing to bond to. We did the clean, the lichen treatment and a full primer coat as three separate stages before any colour went on.",
    photo: null,
    plate: { hue: 42, profile: "hip" },
  },
  {
    slug: "tarragindi-skylight-ventilation",
    title: "Velux skylight and roof ventilation",
    suburb: "Tarragindi",
    serviceSlug: "roof-ventilation",
    serviceName: "Ventilation & Skylights",
    completed: "March 2026",
    valueBand: "$2,000 – $4,000",
    duration: "2 days",
    summary:
      "One Velux fixed skylight into a windowless hallway plus two whirlybirds, with new sarking dressed around every penetration.",
    detail:
      "Skylights leak at the flashing, not the glass. We cut back the sarking, dressed new material into the upstand and used the manufacturer's flashing kit for the tile profile rather than a generic one — which is the shortcut that causes most of the leaking skylights we get called out to.",
    photo: null,
    plate: { hue: 8, profile: "gable" },
  },
];

export function projectsForService(slug: string): Project[] {
  return projects.filter((p) => p.serviceSlug === slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Distinct services represented in the gallery — drives the filter chips. */
export const projectFilters = Array.from(
  new Map(projects.map((p) => [p.serviceSlug, p.serviceName])).entries(),
).map(([slug, name]) => ({ slug, name }));
