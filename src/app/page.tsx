import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CallCTASection from "@/components/sections/CallCTASection";
import ProviderLogos from "@/components/sections/ProviderLogos";
import ServicesSection from "@/components/sections/ServicesSection";
import SmartCTA from "@/components/sections/SmartCTA";
import TrustSection from "@/components/sections/TrustSection";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProviderLogos />
        <HowItWorks />
        <ServicesSection />
        <WhyChooseUs />
        <Testimonials />
        <TrustSection />
        <SmartCTA />
        <CallCTASection />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}