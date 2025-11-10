"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  bannerCards,
  heroSlides,
  navLinks,
  navLegalLinks,
  navSecondaryLinks,
  newsItems,
  socialGroups,
  talentGroups,
} from "@/data/siteData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TalentSection } from "@/components/sections/TalentSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { AuditionSection } from "@/components/sections/AuditionSection";
import { BannerSection } from "@/components/sections/BannerSection";

export default function HomePage() {
  return (
    <>
      <LoadingOverlay />
      <Header
        navLinks={navLinks}
        secondaryLinks={navSecondaryLinks}
        legalLinks={navLegalLinks}
        promoBanners={bannerCards}
      />
      <main className="top_main">
        <HeroSection slides={heroSlides} />
        <AboutSection />
        <TalentSection groups={talentGroups} />
        <NewsSection items={newsItems} />
        <AuditionSection />
        <BannerSection banners={bannerCards} />
      </main>
      <Footer navLinks={navLinks} socialGroups={socialGroups} />
    </>
  );
}
