import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export interface BlogPost {
  slug: string
  title: string
  description: string
  pubDate: Date
  draft: boolean
  body: string
}

function getRawBody(data: Record<string, unknown>, content: string): string {
  if (typeof data.body === "string") return data.body
  return content
}

export function getBlogPosts(): BlogPost[] {
  const dir = BLOG_DIR
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))
  const posts: BlogPost[] = []
  for (const file of files) {
    const slug = path.basename(file, ".md")
    const fullPath = path.join(dir, file)
    const raw = fs.readFileSync(fullPath, "utf-8")
    const { data, content } = matter(raw)
    const draft = data.draft === true
    if (draft) continue
    posts.push({
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      pubDate: data.pubDate ? new Date(data.pubDate as string) : new Date(),
      draft: Boolean(data.draft),
      body: getRawBody(data as Record<string, unknown>, content),
    })
  }
  posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
  return posts
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const file = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, "utf-8")
  const { data, content } = matter(raw)
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    pubDate: data.pubDate ? new Date(data.pubDate as string) : new Date(),
    draft: Boolean(data.draft),
    body: getRawBody(data as Record<string, unknown>, content),
  }
}
