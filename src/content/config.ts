/**
 * Content collection schema (astro:content–compatible shape).
 * Used by Decap CMS and blog reader; for Astro use defineCollection from "astro:content".
 */
export const blogSchema = {
  title: "" as string,
  description: "" as string,
  pubDate: new Date(),
  draft: false as boolean,
}

export type BlogFrontmatter = {
  title: string
  description: string
  pubDate: Date | string
  draft?: boolean
}
