# Feature: Blog Section

## Executive Summary

Add a `/blog/` section to the personal website using MDX for content authoring with full styling control. Blog posts will be static Markdown files with frontmatter, rendered at build time for optimal performance. Uses the existing Tailwind CSS 4 + shadcn/ui design system.

## User Stories

- Site owner can write blog posts in Markdown with optional React components
- Visitors can browse a list of blog posts at `/blog`
- Visitors can read individual posts at `/blog/[slug]`

## Technical Design

### Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Content format | MDX with frontmatter | Markdown + React components |
| Content location | `content/blog/*.mdx` | Separated from app directory |
| Parser | `gray-matter` + `next-mdx-remote` | Build-time rendering, flexible |
| Styling | Tailwind Typography (`prose`) | Consistent with existing design |
| Package manager | `pnpm` | Matches repo standard |

### Directory Structure

```
/Volumes/Workspace/tianhuil
├── app/
│   ├── blog/
│   │   ├── page.tsx           # Blog index
│   │   └── [slug]/
│   │       └── page.tsx       # Individual post
├── content/
│   └── blog/
│       └── example-post.mdx   # Blog content files
└── lib/
    └── mdx.ts                 # MDX utilities
```

### Dependencies

```bash
pnpm add gray-matter next-mdx-remote @tailwindcss/typography
pnpm add -D @types/mdx
```

### Content Format

Each `.mdx` file in `content/blog/`:

```mdx
---
title: 'Post Title'
date: '2024-01-15'
excerpt: 'Brief description for listing'
---

Your **markdown** content here.

You can also use React components if needed.
```

### Implementation Notes

1. **Static Export Compatible**: This site uses `output: 'export'` in `next.config.js`. Use `generateStaticParams` to pre-render all blog posts at build time.

2. **Styling Pattern**: Apply the existing design system:
   - Use `glass-card` class for card containers
   - Use `animate-fade-in-up` for animations
   - Use `prose prose-sky dark:prose-invert` for blog content
   - Use `gradient-text` for accent text

3. **Page Structure**: Follow existing patterns from `app/professional/page.tsx` and `app/writing/page.tsx`:
   - `'use client'` directive if using client features
   - Page header with title and description
   - Consistent spacing (`max-w-6xl mx-auto mb-8`)

### API Contracts

#### Blog Post Frontmatter

```typescript
interface BlogPostFrontmatter {
  title: string
  date: string // ISO date format: 'YYYY-MM-DD'
  excerpt?: string
  slug: string // Derived from filename
}
```

#### Blog Post Data

```typescript
interface BlogPost {
  slug: string
  frontmatter: BlogPostFrontmatter
  content: string // Serialized MDX source
}
```

## Implementation Plan

### Phase 1: Setup
- [ ] Install dependencies: `pnpm add gray-matter next-mdx-remote @tailwindcss/typography`
- [ ] Create `content/blog/` directory
- [ ] Create `lib/mdx.ts` with `getAllPosts()` and `getPostBySlug()` functions
- [ ] Add `@tailwindcss/typography` to Tailwind config (if needed for v4)

### Phase 2: Blog Index Page
- [ ] Create `app/blog/page.tsx`
- [ ] List all posts with title, date, excerpt
- [ ] Link to individual posts

### Phase 3: Individual Post Page
- [ ] Create `app/blog/[slug]/page.tsx`
- [ ] Use `generateStaticParams` for static export
- [ ] Render MDX with custom components
- [ ] Apply prose styling

### Phase 4: Sample Content
- [ ] Create example blog post in `content/blog/`
- [ ] Test build and verify static export

## Acceptance Criteria

- [ ] `/blog` displays list of all posts
- [ ] `/blog/[slug]` renders individual post with proper styling
- [ ] Blog posts use `prose` typography classes
- [ ] Build succeeds with static export
- [ ] Styling matches existing site design

## Boundaries

- ✅ Always: Use `pnpm add` for dependencies, follow existing component patterns
- ⚠️ Ask first: Modifying `next.config.js`, adding new shadcn components
- 🚫 Never: Commit `.next/` or `out/` directories, modify `node_modules/`

## Code Reference

### MDX Utility (`lib/mdx.ts`)

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  const files = fs.readdirSync(contentDirectory)
  return files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.mdx?$/, '')
      const filePath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data: frontmatter } = matter(fileContents)
      return { slug, frontmatter }
    })
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1))
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)
  return { slug, frontmatter, content }
}
```

### Blog Index Page (`app/blog/page.tsx`)

```tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className='max-w-6xl mx-auto mb-8'>
      <div className='glass-card p-8 mb-8 animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Blog <span className='gradient-text'>Posts</span>
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl'>
          Thoughts on data science, technology, and more.
        </p>
      </div>

      <div className='space-y-4'>
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='glass-card p-6 block animate-fade-in-up'
            style={{ animationDelay: `${100 + idx * 50}ms` }}
          >
            <h2 className='text-xl font-semibold mb-2'>{post.frontmatter.title}</h2>
            <p className='text-muted-foreground text-sm'>{post.frontmatter.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
```

### Individual Post Page (`app/blog/[slug]/page.tsx`)

```tsx
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)

    return (
      <div className='max-w-4xl mx-auto mb-8'>
        <article className='glass-card p-8 animate-fade-in-up'>
          <header className='mb-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              {post.frontmatter.title}
            </h1>
            <p className='text-muted-foreground'>{post.frontmatter.date}</p>
          </header>
          <div className='prose prose-sky max-w-none'>
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    )
  } catch {
    notFound()
  }
}
```

## Open Questions

- Should we add syntax highlighting for code blocks? (Would require `rehype-highlight` or similar)
- Should we add reading time estimates?
- Should we add tags/categories?
