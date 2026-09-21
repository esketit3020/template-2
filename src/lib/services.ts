/**
 * Onboarding §4: "Services list with descriptions (per service, not one blob)".
 * Design SOP §4 row 4 requires 4–8 tiles linking to dedicated pages — we have 7.
 *
 * Service descriptions do not publish prices; visitors request an individual quote.
 */

export type Service = {
  slug: string;
  name: string;
  /** Short label for tiles and nav. */
  shortName: string;
  /** One line for the services grid. */
  teaser: string;
  /** Page <title> / meta description pair. */
  metaTitle: string;
  metaDescription: string;
  /** Hero paragraph on the service page. */
  intro: string;
  icon: IconName;
  /** Bullet list — what is actually included. */
  includes: string[];
  /** "You probably need this if..." — written from real symptoms, not features. */
  signs: string[];
  /** Typical duration on site. */
  duration: string;
  warrantyYears: number;
  /** Used for the gallery filter and cross-links. */
  featured: boolean;
};

export type IconName =
  | "restoration"
  | "replacement"
  | "repair"
  | "gutter"
  | "paint"
  | "metal"
  | "vent";

export const services: Service[] = [
  {
    slug: "roof-restoration",
    name: "Roof Restoration",
    shortName: "Roof Restoration",
    teaser: "Re-bed, re-point, repair and recoat — 15 to 20 more years out of the roof you have.",
    metaTitle: "Roof Restoration Brisbane Southside | Ironbark Roofing",
    metaDescription:
      "Full roof restorations across Coorparoo, Camp Hill, Carindale and the Brisbane southside. Re-bedding, pointing and recoating with a 25-year workmanship warranty.",
    intro:
      "Most Brisbane tile roofs do not need replacing at 30 years — they need the ridge caps re-bedded, the pointing redone in flexible compound, the broken tiles swapped out and the whole thing sealed properly. Done right, a restoration buys you 15 to 20 more years for a fraction of a re-roof, and it is the job we do more than any other.",
    icon: "restoration",
    includes: [
      "High-pressure clean and moss and lichen treatment",
      "Every ridge cap stripped, re-bedded and re-pointed in flexible pointing",
      "Broken and slipped tiles replaced, colour matched",
      "Valley irons checked and replaced where rusted",
      "Gutters cleaned out and re-fixed where they have dropped",
      "Two coats of Dulux AcraTex membrane over a primer or sealer coat",
      "25-year written workmanship warranty on handover",
    ],
    signs: [
      "Ridge capping cracked, crumbling, or mortar on the ground",
      "The roof looks chalky, faded or patchy with moss",
      "Small leaks appearing in more than one spot",
      "Roof is 20+ years old and has never been restored",
      "You are selling and the roof is dragging the street appeal down",
    ],
    duration: "3–5 days on site, weather permitting",
    warrantyYears: 25,
    featured: true,
  },
  {
    slug: "roof-repairs",
    name: "Roof Repairs & Leak Detection",
    shortName: "Repairs & Leaks",
    teaser: "We find the actual source of the leak instead of sealing the nearest suspicious spot.",
    metaTitle: "Roof Repairs & Leak Detection Brisbane | Ironbark Roofing",
    metaDescription:
      "Roof leak detection and repairs across the Brisbane southside. We trace the real source, fix it, and back it with a 10-year workmanship warranty. QBCC 15234876.",
    intro:
      "A ceiling stain is almost never directly under the hole. Water runs along battens and rafters before it drops, so the fix depends entirely on tracing it back properly — which is why we hose-test and inspect from inside the roof cavity as well as on top, rather than sealing the nearest cracked tile and hoping.",
    icon: "repair",
    includes: [
      "Leak tracing from inside the roof cavity and on the roof",
      "Hose testing to confirm the source before we quote",
      "Cracked, slipped and broken tile replacement",
      "Re-bedding and re-pointing of isolated ridge sections",
      "Flashing, valley and penetration re-sealing",
      "Rusted valley iron replacement",
      "Skylight, vent and solar penetration sealing",
      "10-year workmanship warranty on the repair",
    ],
    signs: [
      "A ceiling stain, bubbling paint, or a musty smell in one room",
      "Drips only during driving rain from one direction",
      "Someone has already 'fixed' it twice and it came back",
      "Sagging or damp insulation in the roof cavity",
    ],
    duration: "Most repairs are a half day to one day",
    warrantyYears: 10,
    featured: true,
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement & Re-Roofing",
    shortName: "Roof Replacement",
    teaser: "Tile to Colorbond, or like-for-like — a full strip and re-roof with the sarking done right.",
    metaTitle: "Roof Replacement & Re-Roofing Brisbane | Tile to Colorbond® | Ironbark",
    metaDescription:
      "Full roof replacement and tile-to-Colorbond re-roofing on the Brisbane southside. Colorbond accredited installers, 25-year workmanship warranty, QBCC 15234876.",
    intro:
      "Sometimes restoration is throwing money at a roof that is finished — the battens have gone, the tiles are delaminating, or you simply want the weight of tile off the frame. A full re-roof is the biggest job we do, and the parts that matter most are the ones you never see again: the batten condition, the sarking, and the flashing detail where the roof meets everything else.",
    icon: "replacement",
    includes: [
      "Complete strip and disposal of the old roof",
      "Batten inspection, with replacement where needed, quoted upfront",
      "New sarking and thermal insulation blanket",
      "Colorbond® sheeting or new concrete or terracotta tile",
      "All new flashings, valleys, ridge and barge detail",
      "New gutters and downpipes where they are past it",
      "Asbestos removal coordinated with a licensed removalist where present",
      "25-year workmanship warranty plus the BlueScope material warranty",
    ],
    signs: [
      "Widespread tile delamination, or tiles crumbling when walked on",
      "Multiple leaks in different parts of the house",
      "Battens or timbers rotten or borer affected",
      "A restoration quote is approaching half the cost of replacing it",
      "You want to move from tile to Colorbond for weight or looks",
    ],
    duration: "1–3 weeks depending on size and access",
    warrantyYears: 25,
    featured: true,
  },
  {
    slug: "guttering-downpipes",
    name: "Gutter & Downpipe Replacement",
    shortName: "Gutters & Downpipes",
    teaser: "New Colorbond guttering, fascia covers and downpipes sized for actual Brisbane rain.",
    metaTitle: "Gutter & Downpipe Replacement Brisbane | Ironbark Roofing",
    metaDescription:
      "Colorbond gutter and downpipe replacement across the Brisbane southside. Correctly sized and fallen for subtropical downpours. 10-year workmanship warranty.",
    intro:
      "Rusted-through gutters cause rotten fascia, and undersized downpipes cause water over the front edge in every serious downpour. Both are common on older southside homes where the original guttering was specified for a gentler climate than the one we actually get in February.",
    icon: "gutter",
    includes: [
      "Removal and disposal of old guttering",
      "New Colorbond® quad, hi-front or box gutter in your colour",
      "Correct fall set so water actually reaches the downpipes",
      "Downpipes resized and added where the roof area demands it",
      "Colorbond fascia covers over rusted or rotten fascia",
      "Leaf guard and gutter mesh where you have overhanging trees",
      "Rainhead and sump work on box gutter systems",
      "10-year workmanship warranty",
    ],
    signs: [
      "Rust holes, or water running down the wall behind the gutter",
      "Water sheeting over the front lip in heavy rain",
      "Sagging gutter line, or brackets pulling away",
      "Rotten or peeling fascia and eaves",
      "Constantly blocked gutters under gum trees",
    ],
    duration: "1–2 days for a typical home",
    warrantyYears: 10,
    featured: true,
  },
  {
    slug: "metal-roofing",
    name: "Colorbond® Metal Roofing",
    shortName: "Metal Roofing",
    teaser: "Accredited Colorbond installation — new builds, extensions, patios and carports.",
    metaTitle: "Colorbond® Metal Roofing Brisbane | Accredited Installer | Ironbark Roofing",
    metaDescription:
      "BlueScope Colorbond accredited metal roofing on the Brisbane southside. New builds, extensions, patios and carports. QBCC 15234876, 25-year workmanship warranty.",
    intro:
      "We are a BlueScope Colorbond® accredited installer, which matters less for the marketing badge than for the material warranty — installed outside the specification, the manufacturer cover on a metal roof can be void, and that is the cover that carries the sheeting for the next three decades.",
    icon: "metal",
    includes: [
      "Colorbond® Custom Orb, Trimdek and Klip-Lok profiles",
      "Ultra range specified for coastal and bayside sites",
      "New build, extension, patio, carport and shed roofing",
      "Insulated and anticon blanket systems",
      "Concealed and exposed fixing to specification",
      "All flashings, capping and barge fabricated to suit",
      "Full BlueScope material warranty preserved",
      "25-year Ironbark workmanship warranty",
    ],
    signs: [
      "Building an extension, patio, carport or shed",
      "Moving from tile to metal in a re-roof",
      "A previous metal roof leaking at the fixings or flashings",
      "You are within a few kilometres of the bay and need the right grade",
    ],
    duration: "3 days to 2 weeks depending on scope",
    warrantyYears: 25,
    featured: true,
  },
  {
    slug: "roof-painting",
    name: "Roof Painting & Sealing",
    shortName: "Roof Painting",
    teaser: "Dulux AcraTex membrane over a properly prepared roof — not a coat of paint over moss.",
    metaTitle: "Roof Painting & Sealing Brisbane | Ironbark Roofing",
    metaDescription:
      "Roof painting and sealing on the Brisbane southside using Dulux AcraTex membrane systems. Accredited applicator, proper preparation, 10-year warranty.",
    intro:
      "Roof painting fails for one reason: preparation. A membrane coating will not hold on a surface that still has lichen root in the pores or on tiles that were never sealed first. We are a Dulux AcraTex accredited applicator and we do the clean, the treatment and the primer as separate steps, because that is the part that decides whether it still looks right in year eight.",
    icon: "paint",
    includes: [
      "High-pressure clean to remove chalking and old coating",
      "Moss, mould and lichen treatment, then a full rinse",
      "Terracotta and concrete tile sealer or primer coat",
      "Two coats of Dulux AcraTex heat-reflective membrane",
      "Full Colorbond and AcraTex colour range",
      "Gutters and paths masked, and cleaned down on completion",
      "10-year workmanship warranty on the coating",
    ],
    signs: [
      "Roof looks chalky, faded, or two different colours",
      "Moss and lichen keeps coming back after cleaning",
      "A previous paint job is peeling or flaking off in sheets",
      "You want a lighter colour to cut upstairs heat",
    ],
    duration: "2–4 days on site, weather permitting",
    warrantyYears: 10,
    featured: false,
  },
  {
    slug: "roof-ventilation",
    name: "Roof Ventilation & Skylights",
    shortName: "Ventilation & Skylights",
    teaser: "Whirlybirds, powered vents and Velux skylights — installed and flashed so they don't leak.",
    metaTitle: "Whirlybird & Skylight Installation Brisbane | Ironbark Roofing",
    metaDescription:
      "Roof ventilation and skylight installation on the Brisbane southside. Whirlybirds, powered vents and Velux skylights, correctly flashed. 10-year warranty.",
    intro:
      "A Brisbane roof cavity hits 60°C plus in summer, and that heat sits directly above your ceiling insulation all afternoon. Ventilation is the cheapest thing we install and the one customers most often tell us they should have done years earlier. Skylights are the opposite — cheap to buy, easy to get wrong, and the flashing is the whole job.",
    icon: "vent",
    includes: [
      "Whirlybird and static vent supply and installation",
      "Solar and powered extraction fans",
      "Velux and Keylite skylight installation",
      "Ridge and eave ventilation systems",
      "Correct flashing and sarking detail at every penetration",
      "Advice on how many vents your roof area actually needs",
      "10-year workmanship warranty on the penetration",
    ],
    signs: [
      "Upstairs or top-floor rooms unbearable in summer",
      "Condensation or a musty smell in the roof cavity",
      "Air conditioning running constantly and barely keeping up",
      "A dark hallway or bathroom with no external window",
    ],
    duration: "Half a day for vents; 1–2 days for a skylight",
    warrantyYears: 10,
    featured: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
