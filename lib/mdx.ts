import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

const contentDirectory = path.join(process.cwd(), 'content/blog')

const blogPostFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string().optional(),
  unlisted: z.boolean().optional(),
})

export type BlogPostFrontmatter = z.infer<typeof blogPostFrontmatterSchema>

export interface BlogPost {
  slug: string
  frontmatter: BlogPostFrontmatter
  content: string
}

export function getAllPosts(includeUnlisted = false) {
  const files = fs.readdirSync(contentDirectory)
  return files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const filePath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      const frontmatter = blogPostFrontmatterSchema.parse(data)
      return { slug, frontmatter }
    })
    .filter((post) => includeUnlisted || !post.frontmatter.unlisted)
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost {
  const extensions = ['.mdx', '.md']
  let filePath = ''

  for (const ext of extensions) {
    const potentialPath = path.join(contentDirectory, `${slug}${ext}`)
    if (fs.existsSync(potentialPath)) {
      filePath = potentialPath
      break
    }
  }

  if (!filePath) {
    throw new Error(`Post not found: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const frontmatter = blogPostFrontmatterSchema.parse(data)
  return { slug, frontmatter, content }
}
