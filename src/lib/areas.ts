/**
 * Onboarding §1: primary and secondary service areas.
 *
 * Design SOP §2 ("Localised proof of coverage") and build checklist §3 both require
 * suburb-level content rather than city-level. The client nominated six suburbs for
 * their own pages; the rest are listed on /service-areas.
 */

export type Suburb = {
  name: string;
  postcode: string;
  /** Suburbs with a dedicated page get a slug and page copy. */
  slug?: string;
  /** Local specifics — this is the content that makes a suburb page worth having. */
  localNote?: string;
  /** Housing stock context, used in the suburb page intro. */
  housingNote?: string;
  jobsCompleted?: number;
};

export const primarySuburbs: Suburb[] = [
  {
    name: "Coorparoo",
    postcode: "4151",
    slug: "coorparoo",
    localNote:
      "Our depot is a seven-minute drive up Old Cleveland Road, so it is easy to schedule a local roof inspection.",
    housingNote:
      "Coorparoo is dense with pre-war Queenslanders and post-war brick-and-tile, and a lot of the terracotta roofs here are original. That means ridge capping laid in rigid cement mortar 60 years ago — the single most common thing we re-bed on the southside.",
    jobsCompleted: 214,
  },
  {
    name: "Camp Hill",
    postcode: "4152",
    slug: "camp-hill",
    localNote:
      "We have worked on more roofs in Camp Hill than any other suburb, and a good share of them came from a neighbour's recommendation.",
    housingNote:
      "Camp Hill's renovation boom means a lot of raised-and-built-under Queenslanders where the original roof was never touched during the reno. We see a lot of new downstairs living areas sitting under 50-year-old ridge capping, and a lot of extension flashings that were never detailed properly.",
    jobsCompleted: 268,
  },
  {
    name: "Carindale",
    postcode: "4152",
    slug: "carindale",
    localNote:
      "We work on concrete tile restorations and guttering throughout Carindale.",
    housingNote:
      "Mostly 1980s and 1990s brick-and-tile on larger blocks, which means big roof areas with concrete tile — and concrete tile that has never been sealed goes chalky and porous right around the 30-year mark. Undersized downpipes for the roof area are common here too.",
    jobsCompleted: 191,
  },
  {
    name: "Bulimba",
    postcode: "4171",
    slug: "bulimba",
    localNote:
      "Being closer to the river, Bulimba jobs need the right material grade — we specify Colorbond Ultra on anything within the salt-air zone.",
    housingNote:
      "Character-protected Queenslanders across much of Bulimba, which limits what you can do to a roof line and means the work has to be sympathetic. We do a lot of tile-to-Colorbond conversions here where the frame was never built for the weight of tile.",
    jobsCompleted: 157,
  },
  {
    name: "Holland Park",
    postcode: "4121",
    slug: "holland-park",
    localNote:
      "Holland Park and Holland Park West are ten minutes from the depot and we are on a roof there most weeks.",
    housingNote:
      "Heavy post-war brick-and-tile stock, much of it on a slope. Steep driveways and tight side access are the norm, which affects scaffold and how we get material up — worth us seeing before quoting rather than pricing it blind.",
    jobsCompleted: 176,
  },
  {
    name: "Mount Gravatt",
    postcode: "4122",
    slug: "mount-gravatt",
    localNote:
      "Covering Mount Gravatt, Mount Gravatt East, Upper Mount Gravatt and Wishart from the same crews.",
    housingNote:
      "A real mix — post-war cottages, 1970s brick, and newer infill. The older terracotta roofs around the mountain have often had two or three patch repairs by different trades over the years, and untangling those is usually the first thing we do on an inspection.",
    jobsCompleted: 203,
  },
  { name: "Tarragindi", postcode: "4121" },
  { name: "Annerley", postcode: "4103" },
  { name: "Greenslopes", postcode: "4120" },
  { name: "Morningside", postcode: "4170" },
  { name: "Norman Park", postcode: "4170" },
  { name: "Cannon Hill", postcode: "4170" },
  { name: "Balmoral", postcode: "4171" },
  { name: "Seven Hills", postcode: "4170" },
  { name: "Woolloongabba", postcode: "4102" },
  { name: "Moorooka", postcode: "4105" },
  { name: "Yeronga", postcode: "4104" },
  { name: "Salisbury", postcode: "4107" },
  { name: "Sunnybank", postcode: "4109" },
  { name: "Wynnum", postcode: "4178" },
];

/** Onboarding §1: secondary/extended area. Travel fee may apply beyond 40km. */
export const secondaryRegions = [
  { name: "Logan", detail: "Springwood, Shailer Park, Daisy Hill, Browns Plains" },
  { name: "Redlands", detail: "Cleveland, Capalaba, Thornlands, Victoria Point" },
  { name: "Ipswich", detail: "Ipswich central, Springfield, Goodna" },
  { name: "Moreton Bay", detail: "Redcliffe, North Lakes, Kallangur" },
  { name: "Scenic Rim", detail: "Beaudesert, Boonah — larger jobs only" },
];

export const travelNote =
  "A travel fee may apply beyond 40km of Woolloongabba. We will tell you on the phone before we book the inspection, never after.";

export const suburbPages = primarySuburbs.filter(
  (s): s is Suburb & { slug: string } => Boolean(s.slug),
);

export function getSuburb(slug: string) {
  return suburbPages.find((s) => s.slug === slug);
}

/** Flat list of every primary suburb name — used in the footer and JSON-LD areaServed. */
export const primarySuburbNames = primarySuburbs.map((s) => s.name);
