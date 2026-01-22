'use client'

import AboutSection from "@/components/aboutSection/aboutSection";
import UnderConstruction from "@/components/common/underConstruction/underConstruction";
import ContactSection from "@/components/contactSection/contactSection";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import ServicesSection from "@/components/servicesSection/servicesSection";
import WhyMeSection from "@/components/whymeSection/whymeSection";

export default function Home() {
  return (
    <div className="bg-sand">
      <UnderConstruction />
    </div>
  )

  return (
    <div id="home">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyMeSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
