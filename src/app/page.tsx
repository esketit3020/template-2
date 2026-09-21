import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowWeWork } from "@/components/HowWeWork";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { ServiceArea } from "@/components/ServiceArea";
import { NextStepBand } from "@/components/NextStepBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuoteCta } from "@/components/Blocks";
import { faqs } from "@/lib/faqs";
import { faqSchema, jsonLdProps } from "@/lib/schema";

/**
 * Design SOP §4: Homepage Layout — as built.
 * Implements the exact 12-section SOP order.
 * Header and Footer are mounted in layout.tsx.
 */
export default function HomePage() {
  return (
    <>
      {/* FAQPage JSON-LD for homepage FAQs (build checklist §2) */}
      <script {...jsonLdProps(faqSchema(faqs))} />

      {/* Section 2: Hero */}
      <Hero />

      {/* Section 3: Trust Bar */}
      <TrustBar />

      {/* Section 4: Services Overview */}
      <ServicesGrid />

      {/* Section 5: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 6: How We Work */}
      <HowWeWork />

      {/* Section 7: Recent Projects */}
      <Gallery limit={6} />

      {/* Section 8: Customer Reviews */}
      <Reviews limit={6} />

      {/* Section 9: Service Area */}
      <ServiceArea />

      {/* Section 10: Maintenance and quote CTA */}
      <NextStepBand />

      {/* Section 11: FAQ Accordion */}
      <FaqAccordion items={faqs} />

      {/* Section 12: Final Free Quote CTA */}
      <QuoteCta />
    </>
  );
}
