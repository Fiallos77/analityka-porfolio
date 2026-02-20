"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Trophy, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"
import {
  analysisData,
  categoryLabels,
  resolve,
  type AnalysisCategory,
} from "@/lib/analysis-data"

const filterKeys: ("All" | AnalysisCategory)[] = [
  "All",
  "Players",
  "Teams",
  "Matches",
  "Data",
]

export default function AnalysisListingPage() {
  const { lang } = useLang()
  const [activeFilter, setActiveFilter] = useState<"All" | AnalysisCategory>(
    "All"
  )

  const filteredPosts =
    activeFilter === "All"
      ? analysisData
      : analysisData.filter((p) => p.category === activeFilter)

  return (
    <main>
      <Navbar />

      <section className="bg-background pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back Link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui["listing.back"][lang]}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {ui["listing.title.prefix"][lang]}{" "}
              <span className="text-primary">{ui["listing.title.accent"][lang]}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {ui["listing.description"][lang]}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === key
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "border border-border bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {resolve(categoryLabels[key], lang)}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/analysis/${post.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={resolve(post.title, lang)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute top-4 left-4 rounded bg-primary/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
                      {resolve(categoryLabels[post.category], lang)}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-balance text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {resolve(post.title, lang)}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {resolve(post.excerpt, lang)}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Trophy className="h-3 w-3 text-primary/60" />
                        {post.competition}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-primary/60" />
                        {new Date(post.date).toLocaleDateString(
                          lang === "es" ? "es-ES" : "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                {ui["analysis.empty"][lang]}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
