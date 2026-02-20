import { notFound } from "next/navigation"
import { analysisData } from "@/lib/analysis-data"
import {
  getAnalysisPostBySlugFromMarkdown,
  getAnalysisSlugsFromMarkdown,
} from "@/lib/analysis-md"
import { AnalysisDetailClient } from "../analysis-detail-client"

export function generateStaticParams() {
  const mdSlugs = getAnalysisSlugsFromMarkdown()
  const tsSlugs = analysisData.map((p) => p.slug)
  const all = Array.from(new Set([...mdSlugs, ...tsSlugs]))
  return all.map((slug) => ({ slug }))
}

export default async function AnalysisDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const mdPost = getAnalysisPostBySlugFromMarkdown(slug)
  const fallback = analysisData.find((p) => p.slug === slug) ?? null
  const post = mdPost ?? fallback

  if (!post) notFound()

  return <AnalysisDetailClient post={post} />
}

