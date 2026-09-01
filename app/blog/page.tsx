import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog Posts',
  alternates: {
    canonical: 'https://tianhuil.github.io/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  if (posts.length === 0) {
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
        <div className='glass-card p-8 animate-fade-in-up'>
          <p className='text-muted-foreground'>No posts yet. Check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className='blog-index mx-auto mb-16'>
      <header className='blog-index-header animate-fade-in-up'>
        <p className='eyebrow'>Field notes ·  {String(posts.length).padStart(2, '0')} entries</p>
        <h1>Writing about <span className='gradient-text'>building</span>.</h1>
        <p className='blog-lede'>Practical notes on AI, data, and the tools that make ambitious work feel lighter.</p>
      </header>

      <div className='post-list'>
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='post-preview animate-fade-in-up'
            style={{ animationDelay: `${100 + idx * 50}ms` }}
          >
            <span className='post-number'>{String(idx + 1).padStart(2, '0')}</span>
            <div className='post-preview-copy'>
              <div className='post-meta'>
                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                <span aria-hidden='true'>·</span>
                <span>Essay</span>
              </div>
              <h2>{post.frontmatter.title}</h2>
              {post.frontmatter.excerpt && <p>{post.frontmatter.excerpt}</p>}
            </div>
            <span className='post-arrow' aria-hidden='true'>↗</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
