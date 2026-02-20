"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"
import { renderMarkdownContent } from "@/lib/render-markdown"

type Post = {
  slug: string
  title: string
  description: string
  pubDate: string
  body: string
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function BlogPostView({ post }: { post: Post }) {
  const { lang } = useLang()
  const readTime = estimateReadingTime(post.body)
  return (
    <main>
      <Navbar />
      <article className="bg-background pb-28 pt-28">
        <div className="mx-auto max-w-[760px] px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {ui["blog.backToBlog"][lang]}
          </Link>
          <h1 className="mt-10 text-balance text-[1.9rem] font-extrabold leading-[1.18] tracking-tight text-foreground sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary/50" />
              {new Date(post.pubDate).toLocaleDateString(
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
          <div className="mt-14">{renderMarkdownContent(post.body)}</div>
          <div className="mt-20 h-px bg-gradient-to-r from-primary/20 via-border to-transparent" />
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui["blog.backToBlog"][lang]}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
