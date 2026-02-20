import fs from "fs"
import path from "path"
import matter from "gray-matter"

import type {
  AnalysisPost,
  AnalysisCategory,
  BilingualText,
} from "./analysis-data"

const ANALYSIS_DIR = path.join(process.cwd(), "content/analysis")

function toBilingual(
  en?: string,
  es?: string,
  fallback?: string
): BilingualText {
  const enText = en ?? fallback ?? ""
  const esText = es ?? enText
  return { en: enText, es: esText }
}

function readMarkdownFile(slug: string): AnalysisPost | null {
  const filePath = path.join(ANALYSIS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(raw)

  const category = (data.category ?? "Data") as AnalysisCategory

  const title = toBilingual(
    data.title_en as string | undefined,
    data.title_es as string | undefined,
    (data.title as string | undefined) ?? slug
  )

  const excerpt = toBilingual(
    data.excerpt_en as string | undefined,
    data.excerpt_es as string | undefined
  )

  const executiveSummary = toBilingual(
    data.executiveSummary_en as string | undefined,
    data.executiveSummary_es as string | undefined
  )

  const content = toBilingual(
    data.content_en as string | undefined,
    data.content_es as string | undefined
  )

  const date =
    (data.date as string | undefined) ?? new Date().toISOString().slice(0, 10)

  const post: AnalysisPost = {
    id: (data.id as string | undefined) ?? slug,
    slug: (data.slug as string | undefined) ?? slug,
    title,
    excerpt,
    category,
    competition: (data.competition as string | undefined) ?? "",
    date,
    coverImage: (data.coverImage as string | undefined) ?? "/images/analysis-1.jpg",
    executiveSummary,
    content,
  }

  return post
}

export function getAnalysisPostBySlugFromMarkdown(
  slug: string
): AnalysisPost | null {
  return readMarkdownFile(slug)
}

export function getAnalysisSlugsFromMarkdown(): string[] {
  if (!fs.existsSync(ANALYSIS_DIR)) return []
  return fs
    .readdirSync(ANALYSIS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.basename(f, ".md"))
}

