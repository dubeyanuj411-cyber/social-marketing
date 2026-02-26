import Hero from "../section/hero";
import ServicesPreview from "../section/serviespreview";
import WhyChooseUs from "../section/whychooseus";
import CaseStudyPreview from "../section/casestudypreview";
import Testimonials from "../section/testimonials";
import PricingPreview from "../section/pricingpreview";
import FAQ from "../section/faq";
import CTASection from "../section/ctasection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CaseStudyPreview />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTASection />
    </>
  );
}
