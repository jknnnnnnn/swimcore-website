import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OfferSection } from "@/components/OfferSection";
import { PracticalInfo } from "@/components/PracticalInfo";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OfferSection />
        <ProcessSection />
        <WhyUs />
        <About />
        <Testimonials />
        <PracticalInfo />
        <PricingSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
