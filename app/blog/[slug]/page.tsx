import { notFound } from "next/navigation"
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog"
import { BlogPostView } from "../blog-post-view"

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }))
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()
  const serialized = {
    slug: post.slug,
    title: post.title,
    description: post.description,
    pubDate: post.pubDate.toISOString(),
    body: post.body,
  }
  return <BlogPostView post={serialized} />
}
