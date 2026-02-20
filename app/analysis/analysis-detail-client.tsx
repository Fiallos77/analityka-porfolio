"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Trophy, Clock, Bookmark } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"
import {
  type AnalysisPost,
  resolve,
  categoryLabels,
} from "@/lib/analysis-data"

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function renderContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: React.ReactNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mb-5 mt-16 text-[1.4rem] font-bold tracking-tight text-primary first:mt-0 md:text-[1.55rem]"
        >
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mb-4 mt-10 text-[1.1rem] font-semibold tracking-tight text-foreground md:text-lg"
        >
          {line.replace("### ", "")}
        </h3>
      )
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = []
      let j = i
      while (j < lines.length && lines[j].startsWith("| ")) {
        tableLines.push(lines[j])
        j++
      }
      i = j - 1

      const dataRows = tableLines.filter((l) => !l.match(/^\|\s*[-]+/))

      if (dataRows.length > 0) {
        const headers = dataRows[0]
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
        const rows = dataRows.slice(1).map((row) =>
          row
            .split("|")
            .filter((c) => c.trim())
            .map((c) => c.trim())
        )

        elements.push(
          <div
            key={i}
            className="my-10 overflow-x-auto rounded-lg border border-primary/10 bg-secondary/30 p-1 shadow-md shadow-primary/[0.02]"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-primary/15">
                  {headers.map((h, hi) => (
                    <th
                      key={hi}
                      className="px-5 py-3.5 text-left text-[11px] font-semibold tracking-wider text-primary uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-border/20 last:border-b-0"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-3 text-sm ${
                          ci === 0
                            ? "font-medium text-foreground/90"
                            : "text-muted-foreground"
                        } ${
                          cell.match(/^\d+(\.\d+)?%?$/)
                            ? "font-mono text-primary/80"
                            : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*[-:]?\s*(.*)/)
      if (match) {
        elements.push(
          <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
            <span className="leading-[1.8]">
              <span className="font-semibold text-foreground">
                {match[1]}
              </span>
              {match[2] ? ` \u2014 ${match[2]}` : ""}
            </span>
          </li>
        )
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
          <span className="leading-[1.8]">{line.replace("- ", "")}</span>
        </li>
      )
    } else if (line.match(/^\d+\.\s/)) {
      const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*[-:]?\s*(.*)/)
      if (match) {
        const num = line.match(/^(\d+)/)?.[1]
        elements.push(
          <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-[11px] font-bold text-primary">
              {num}
            </span>
            <span className="leading-[1.8]">
              <span className="font-semibold text-foreground">
                {match[1]}
              </span>
              {match[2] ? ` \u2014 ${match[2]}` : ""}
            </span>
          </li>
        )
      } else {
        const num = line.match(/^(\d+)/)?.[1]
        elements.push(
          <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-[11px] font-bold text-primary">
              {num}
            </span>
            <span className="leading-[1.8]">{line.replace(/^\d+\.\s/, "")}</span>
          </li>
        )
      }
    } else if (line.trim() !== "") {
      elements.push(
        <p
          key={i}
          className="mb-6 text-[0.95rem] leading-[1.85] text-muted-foreground"
        >
          {line}
        </p>
      )
    }
  }

  return elements
}

export function AnalysisDetailClient({ post }: { post: AnalysisPost | null }) {
  const { lang } = useLang()

  if (!post) {
    notFound()
  }

  const contentText = resolve(post.content, lang)
  const readTime = estimateReadingTime(contentText)

  return (
    <main>
      <Navbar />

      <article className="bg-background pb-28 pt-28">
        <div className="mx-auto max-w-[760px] px-6">
          <Link
            href="/analysis"
            className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {ui["detail.backToAnalysis"][lang]}
          </Link>

          <div className="mt-10">
            <span className="inline-block rounded border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold tracking-wider text-primary uppercase">
              {resolve(categoryLabels[post.category], lang)}
            </span>
          </div>

          <h1 className="mt-5 text-balance text-[1.9rem] font-extrabold leading-[1.18] tracking-tight text-foreground sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.75rem]">
            {resolve(post.title, lang)}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5 text-primary/50" />
              {post.competition}
            </span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary/50" />
              {new Date(post.date).toLocaleDateString(
                lang === "es" ? "es-ES" : "en-US",
                { month: "long", day: "numeric", year: "numeric" }
              )}
            </span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary/50" />
              {readTime} {ui["detail.readingTime"][lang]}
            </span>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-primary/20 via-border to-transparent" />

          <div className="mt-10 relative overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-secondary/60 via-secondary/40 to-card p-6 shadow-lg shadow-primary/[0.03] md:p-8">
            <div className="absolute top-0 left-0 h-full w-[3px] rounded-l-xl bg-primary shadow-[0_0_12px_rgba(0,229,255,0.3)]" />

            <h2 className="mb-4 flex items-center gap-2.5 text-[13px] font-semibold tracking-wider text-primary uppercase">
              <Bookmark className="h-3.5 w-3.5" />
              {ui["detail.executiveSummary"][lang]}
            </h2>
            <p className="pl-0.5 text-[0.94rem] leading-[1.8] text-foreground/80">
              {resolve(post.executiveSummary, lang)}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-primary/10 bg-secondary/20 p-1.5 shadow-lg shadow-primary/[0.04]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={resolve(post.title, lang)}
                fill
                className="object-cover"
                sizes="(max-width: 760px) 100vw, 760px"
                priority
              />
            </div>
          </div>

          <div className="mt-14">{renderContent(contentText)}</div>

          <div className="mt-20 h-px bg-gradient-to-r from-primary/20 via-border to-transparent" />
          <div className="mt-8">
            <Link
              href="/analysis"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui["detail.backToAnalysis"][lang]}
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

