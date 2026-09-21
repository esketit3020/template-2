/**
 * Real Unsplash photography for TEMPLATE PREVIEW ONLY.
 * These images are not Ironbark's team, jobs, before/after records or premises.
 * Do not publish as client work. Swap in client's licensed/original photography.
 * Source pages, photographers and commercial-use licence are recorded below.
 * Photo delivery is through Unsplash's image CDN; no runtime Unsplash API key.
 */
export type DemoPhoto = {
  src: string;
  alt: string;
  credit: string;
  source: string;
};
const image = (id: string, width = 960) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=82&w=${width}`;

export const heroPhoto: DemoPhoto = {
  src: image("photo-1763665814538-8ba04597286c", 1920),
  alt: "Two roofing tradespeople installing roof tiles on battens",
  credit: "Sergej Karpow / Unsplash",
  source: "https://unsplash.com/photos/workers-installing-roof-tiles-on-a-new-building-OnwxQNEbPco",
};

export const servicePhotos: Record<string, DemoPhoto> = {
  "roof-restoration": {
    src: image("photo-1599570750519-a26b62691be7"),
    alt: "Close-up of terracotta roof tiles photographed in Melbourne",
    credit: "Mitchell Luo / Unsplash",
    source: "https://unsplash.com/photos/brown-roof-tiles-in-close-up-photography-Ng4xt7m9bDA",
  },
  "roof-repairs": {
    src: image("photo-1760544137672-c22ce36ea818"),
    alt: "Close view of ageing terracotta roofing tiles",
    credit: "engin akyurt / Unsplash",
    source: "https://unsplash.com/photos/close-up-of-weathered-terracotta-roof-tiles-S7bFgamAVS8",
  },
  "roof-replacement": {
    src: image("photo-1687169503260-85f00f122398"),
    alt: "Australian house with roof trusses and scaffolding during construction",
    credit: "Troy Mortier / Unsplash",
    source: "https://unsplash.com/photos/a-house-under-construction-with-scaffolding-on-the-roof-p7xziuUi0vA",
  },
  "guttering-downpipes": {
    src: image("photo-1745478433374-8af6dc30a743"),
    alt: "Newly tiled roof and roof gutter system",
    credit: "Clément Proust / Unsplash",
    source: "https://unsplash.com/photos/newly-tiled-roof-with-a-gutter-system-CRr5XfoVcxk",
  },
  "metal-roofing": {
    src: image("photo-1761667803892-af792edb43ba"),
    alt: "Metal roof with ventilation hardware",
    credit: "Belov Sergey / Unsplash",
    source: "https://unsplash.com/photos/metal-roof-with-a-ventilation-vent-M0rIVjcWMkE",
  },
  "roof-painting": {
    src: image("photo-1771479755055-6a305f50845e"),
    alt: "Residential tiled rooftops in daylight",
    credit: "Truong Tuyet Ly / Unsplash",
    source: "https://unsplash.com/photos/tiled-rooftops-of-residential-houses-under-sunlight-wJPq-H-Eh7k",
  },
  "roof-ventilation": {
    src: image("photo-1763665814965-b5c4b3547908"),
    alt: "Roofers installing roof tiles during construction",
    credit: "Sergej Karpow / Unsplash",
    source: "https://unsplash.com/photos/construction-workers-installing-roof-tiles-on-a-new-building-zWL_sYw10gs",
  },
};
