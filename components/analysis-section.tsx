"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Trophy } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"
import {
  analysisData as hardcodedData,
  categoryLabels,
  resolve,
  type AnalysisCategory,
  type AnalysisPost,
} from "@/lib/analysis-data"
import { getAnalysisSlugsFromMarkdown, getAnalysisPostBySlugFromMarkdown } from "@/lib/analysis-md"

const filterKeys: ("All" | AnalysisCategory)[] = [
  "All",
  "Players",
  "Teams",
  "Matches",
  "Data",
]

export function AnalysisSection({ posts }: { posts: AnalysisPost[] }) {
  const { lang } = useLang()
  const [activeFilter, setActiveFilter] = useState<"All" | AnalysisCategory>(
    "All"
  )

  const filteredPosts =
  activeFilter === "All"
    ? posts.slice(0, 3)
    : posts.filter((p) => p.category === activeFilter).slice(0, 3)

  return (
    <section id="analysis" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {ui["analysis.title.prefix"][lang]}{" "}
            <span className="text-primary">{ui["analysis.title.accent"][lang]}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            {ui["analysis.subtitle"][lang]}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/analysis/${post.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            >
              {/* Card Image */}
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

                {/* Category Badge */}
                <span className="absolute top-4 left-4 rounded bg-primary/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
                  {resolve(categoryLabels[post.category], lang)}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-balance text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {resolve(post.title, lang)}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {resolve(post.excerpt, lang)}
                </p>

                {/* Meta */}
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

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/analysis"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            {ui["analysis.viewAll"][lang]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
