import { LandingHeader } from "@/components/landing/landing-header"
import { HeroSection } from "@/components/landing/hero-section"
import { ValueSection } from "@/components/landing/value-section"
import { PlatformSection } from "@/components/landing/platform-section"
import { CTASection } from "@/components/landing/cta-section"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingHeader />
      {/* <HeroSection /> */}
      <ValueSection />
      <PlatformSection />
      <CTASection />
    </main>
  )
}
