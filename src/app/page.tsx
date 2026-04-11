import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";
import ProviderLogos from "@/components/sections/ProviderLogos";
import ServicesSection from "@/components/sections/ServicesSection";
import SmartCTA from "@/components/sections/SmartCTA";
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
        <SmartCTA />
        <ComparisonTable />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
