import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import ProgressShowcase from "@/components/ProgressShowcase";
import StreamlinedSection from "@/components/StreamlinedSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <main className="flex-1 pt-[80px]">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <ProgressShowcase />
      <StreamlinedSection />
      <Pricing />
      <Testimonials />
      <CtaFooter />
    </main>
  );
}
