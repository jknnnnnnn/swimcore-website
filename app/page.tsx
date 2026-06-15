import { About } from "@/components/About";
import { AudienceSection } from "@/components/AudienceSection";
import { CTA } from "@/components/CTA";
import { FirstLessonSection } from "@/components/FirstLessonSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
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
        <AudienceSection />
        <FirstLessonSection />
        <PricingSection />
        <WhyUs />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
