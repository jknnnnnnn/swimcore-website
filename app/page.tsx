import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OfferSection } from "@/components/OfferSection";
import { ParentsChoiceSection } from "@/components/ParentsChoiceSection";
import { PracticalInfo } from "@/components/PracticalInfo";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SocialFollowSection } from "@/components/SocialFollowSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofSection />
        <OfferSection />
        <ProcessSection />
        <WhyUs />
        <ParentsChoiceSection />
        <About />
        <GallerySection />
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
