# Template 2 — Australian Roofing Website Concepts

A separate copy of **template-1**, now maintained in the `esketit3020/template-2` repository on the `main` branch.

## Choose a site-wide design
Open the site and use the Horizon Digital preview bar. The selected style follows you across service pages, suburbs, galleries, and the contact form and persists in localStorage.

- **Trade Bold** — charcoal, burnt orange, strong trade-style typography and full-bleed hero.
- **Coastal Clean** — navy and ocean-blue, lighter spacious layout, split hero, pill CTAs.
- **Architectural** — forest and warm stone, editorial typography, pared-back squared surfaces.

The designs share one Next.js codebase rather than duplicating business logic. No storm/hail marketing or emergency route is included.

## Before making a client's website live
1. Replace ALL example Ironbark business details, ABN, licence, price claims, warranty, people, reviews, projects, URL and NAP information with verified customer-supplied details. Example content is NOT independently verified.
2. Replace line-art project placeholders with authentic client photos, with permission.
3. Choose a design. Set the desired `data-site-style` on the root HTML (`trade`, `coastal`, or `architectural`) and remove `<StyleSwitcher />` from `layout.tsx` for the customer website.
4. Check `NEXT_PUBLIC_SITE_URL`, contact form environment variables, Google Business Profile link, sitemap/canonicals and structured data before launch.
5. Test desktop/mobile, navigation, phone links, quote form submission and accessibility.

Built for Australian roof repairs, tile and metal roof restoration, Colorbond reroofing, gutters, ventilation and local SEO — **not** disaster or insurance-claim lead generation.

## Real-photo preview option

The preview toolbar has an independent **Real photos / Illustrations** choice, saved alongside the selected design. Photo mode is the default. It uses real (non-AI) licensed Unsplash photographs in the hero, service cards, service detail headers and project preview cards. **They are illustrative assets, not Ironbark's own projects or workforce**; the project cards are visibly labelled, with photographer/source links in `src/lib/demoPhotos.ts`. This is for design preview only. Do not present sample photography or the example Ironbark case studies as verified client work.

Replace `heroPhoto`, `servicePhotos` and each `project.photo` with genuine authorised client photography before launching. For project photos, provide the actual `before`, `after` and `alt` paths in `src/lib/projects.ts`; the gallery prioritises client images automatically. Keep the illustrative label until replaced. Confirm third-party photo licence terms if commercialising an unchanged demo.

## No published pricing

This template deliberately omits prices, starting rates and project value bands from public-facing pages, SEO metadata and JSON-LD schema. Calls to action encourage a free inspection and an individual itemised written quote. Keep any client-specific prices out of service titles, FAQs, example reviews and project descriptions unless the website owner later opts in to publishing them.
