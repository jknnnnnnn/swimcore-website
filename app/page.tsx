import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OfferSection } from "@/components/OfferSection";
import { PracticalInfo } from "@/components/PracticalInfo";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SocialFollowSection } from "@/components/SocialFollowSection";
import { SmoothEffects } from "@/components/SmoothEffects";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SmoothEffects />
        <Hero />
        <OfferSection />
        <ProcessSection />
        <WhyUs />
        <About />
        <SocialFollowSection />
        <Testimonials />
        <PracticalInfo />
        <PricingSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
