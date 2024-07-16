import { ContactSection } from "@/components/contact-section/ContactSection";
import { CopySection } from "@/components/copy-section/CopySection";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero-section/HeroSection";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { Topbar } from "@/components/hero-section/Topbar";
import { Bg } from "@/components/general/Bg";
// import dynamic from "next/dynamic";
import ResultsSection from "@/components/results-section/ResultsSection";
import { Metadata } from 'next';
import SMMServices from "@/smm-components/SMMServices";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";

export const metadata: Metadata = {
  openGraph: {
    title: 'Vital Socials',
    description: 'Unique Ad Creatives on a Biweekly Basis',
    url: 'https://vitalsocials.vercel.app',
    siteName: 'Vital Socials',
    images: [
      {
        url: 'https://vitalsocials.vercel.app/home-OG.png',
        width: 1200,
        height: 630,
        alt: "Vital Socials"
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// const DynamicTestimonialsSection = dynamic(() => import('@/components/testimonials-section/TestimonialsSection'), {
//   ssr: false,
//   loading: () => <h1>Loading...</h1>
// })

export default function Home() {
  return (
    <div className="relative">
      <Topbar />
      <HeroSection />
      <PortfolioSection />
      <CopySection />
      <ProcessSection />
      <SMMServices />
      <ResultsSection />
      {/* <DynamicTestimonialsSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Bg />
    </div>
  );
}
