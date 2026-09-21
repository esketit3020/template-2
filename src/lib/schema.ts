/**
 * JSON-LD structured data.
 *
 * Build checklist §2: "LocalBusiness / Service schema markup implemented — include
 * licence number, service area, and services offered."
 *
 * We use RoofingContractor (a LocalBusiness subtype) so the licence, service area
 * and service catalogue all attach to the right entity.
 */

import { business, siteUrl, yearsTrading } from "./business";
import { services } from "./services";
import { primarySuburbNames, secondaryRegions } from "./areas";
import { reviews } from "./reviews";
import type { Faq } from "./faqs";

const ORG_ID = `${siteUrl}/#organisation`;

export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    description: `QBCC-licensed roofing contractor serving the Brisbane southside since ${business.foundedYear}. Roof restoration, replacement, repairs, guttering and Colorbond metal roofing.`,
    url: siteUrl,
    telephone: business.phone.office.display,
    email: business.email,
    foundingDate: String(business.foundedYear),
    slogan: business.tagline,
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, EFT, Credit Card",

    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.suburb,
      addressRegion: business.address.state,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },

    // Build checklist §2: licence number in the schema.
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: business.licence.bodyFull,
      },
      identifier: `${business.licence.body} ${business.licence.number}`,
      name: `${business.licence.body} Licence ${business.licence.number} — ${business.licence.classes}`,
    },
    identifier: [
      { "@type": "PropertyValue", name: "ABN", value: business.abn },
      {
        "@type": "PropertyValue",
        name: `${business.licence.body} Licence`,
        value: business.licence.number,
      },
    ],

    // Suburb-level areaServed, not just "Brisbane" (build checklist §3).
    areaServed: [
      ...primarySuburbNames.map((name) => ({
        "@type": "City" as const,
        name: `${name}, Queensland`,
      })),
      ...secondaryRegions.map((r) => ({
        "@type": "AdministrativeArea" as const,
        name: `${r.name}, Queensland`,
      })),
    ],

    openingHoursSpecification: business.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.teaser,
          url: `${siteUrl}/services/${s.slug}`,
        },
      })),
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.reviews.rating,
      reviewCount: business.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },

    sameAs: [business.reviews.profileUrl, business.social.facebook, business.social.instagram],

    knowsAbout: [
      "Roof restoration",
      "Colorbond metal roofing",
      "Roof leak detection",
      "Gutter replacement",
    ],
    memberOf: business.accreditations
      .filter((a) => a.name.includes("Master Builders") || a.name.includes("Housing Industry"))
      .map((a) => ({ "@type": "Organization", name: a.name })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-AU",
  };
}

/** Per-service page schema. */
export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${s.slug}/#service`,
    name: s.name,
    description: s.metaDescription,
    serviceType: s.name,
    url: `${siteUrl}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: primarySuburbNames.map((name) => ({
      "@type": "City" as const,
      name: `${name}, Queensland`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.name} — what's included`,
      itemListElement: s.includes.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${siteUrl}${t.path}`,
    })),
  };
}

/** Individual reviews, for the dedicated reviews page. */
export function reviewsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        datePublished: r.date,
        reviewBody: r.body,
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
        itemReviewed: { "@id": ORG_ID },
      },
    })),
  };
}

export function suburbServiceSchema(suburb: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Roofing services in ${suburb}`,
    description: `Roof restoration, repairs, replacement in ${suburb}, Brisbane. ${yearsTrading()} years trading, QBCC licence ${business.licence.number}.`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: `${suburb}, Queensland` },
  };
}

/** Renders a JSON-LD block. Kept in one place so escaping is handled consistently. */
export function jsonLdProps(schema: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
    },
  };
}
