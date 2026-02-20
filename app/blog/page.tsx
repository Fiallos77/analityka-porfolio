import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogListingClient } from "./blog-listing-client"
import { getBlogPosts } from "@/lib/blog"

export default async function BlogPage() {
  const posts = getBlogPosts()
  const serialized = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    pubDate: p.pubDate.toISOString(),
  }))
  return (
    <main>
      <Navbar />
      <section className="bg-background pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <BlogListingClient posts={serialized} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
