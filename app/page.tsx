import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InstitutionalStrip } from "@/components/institutional-strip"
import { AnalysisSection } from "@/components/analysis-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InstitutionalStrip />
      <AnalysisSection />
      <CTASection />
      <Footer />
    </main>
  )
}
