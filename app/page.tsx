import { LandingHeader } from "@/components/landing/landing-header"
import { HeroSection } from "@/components/landing/hero-section"
import { ValueSection } from "@/components/landing/value-section"
import { PlatformSection } from "@/components/landing/platform-section"
import { CTASection } from "@/components/landing/cta-section"
import { UpdatesSection } from "@/components/landing/updates-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingHeader />
      <HeroSection />
      <ValueSection />
      <PlatformSection />
      <CTASection />
      <UpdatesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
