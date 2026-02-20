"use client"

import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

type PostItem = {
  slug: string
  title: string
  description: string
  pubDate: string
}

export function BlogListingClient({ posts }: { posts: PostItem[] }) {
  const { lang } = useLang()
  return (
    <>
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        {ui["blog.back"][lang]}
      </Link>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          <span className="text-primary">{ui["blog.title.prefix"][lang]}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {ui["blog.description"][lang]}
        </p>
      </div>
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            >
              <div className="p-5">
                <h3 className="text-balance text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 text-primary/60" />
                    {new Date(post.pubDate).toLocaleDateString(
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
        <p className="py-20 text-center text-muted-foreground">
          {ui["blog.empty"][lang]}
        </p>
      )}
    </>
  )
}
