import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InstitutionalStrip } from "@/components/institutional-strip"
import { AnalysisSection } from "@/components/analysis-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getAnalysisSlugsFromMarkdown, getAnalysisPostBySlugFromMarkdown } from "@/lib/analysis-md"
import { analysisData } from "@/lib/analysis-data"

export default function HomePage() {
  const mdSlugs = getAnalysisSlugsFromMarkdown()
  const mdPosts = mdSlugs
    .map((slug) => getAnalysisPostBySlugFromMarkdown(slug))
    .filter((p): p is NonNullable<typeof p> => p !== null)
  
  const allPosts = [...mdPosts, ...analysisData]

  return (
    <main>
      <Navbar />
      <HeroSection />
      <InstitutionalStrip />
      <AnalysisSection posts={allPosts} />
      <CTASection />
      <Footer />
    </main>
  )
}