"use client"

import { LandingHeader } from "@/components/landing/landing-header"
import { HeroSection } from "@/components/home/hero-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { FeaturesSection } from "@/components/home/features-section"
import { CtalSection } from "@/components/home/ctal-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FaqHomeSection } from "@/components/home/faq-home-section"
import { FooterSection } from "@/components/home/footer-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <LandingHeader activePage="Home" />
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <CtalSection />
      <TestimonialsSection />
      <FaqHomeSection />
      <FooterSection />
    </main>
  )
}
