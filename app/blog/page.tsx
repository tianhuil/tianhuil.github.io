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
            className='glass-card p-6 block animate-fade-in-up hover:border-primary transition-colors'
            style={{ animationDelay: `${100 + idx * 50}ms` }}
          >
            <h2 className='text-xl font-semibold mb-2'>{post.frontmatter.title}</h2>
            <p className='text-muted-foreground text-sm mb-2'>{post.frontmatter.date}</p>
            {post.frontmatter.excerpt && (
              <p className='text-muted-foreground'>{post.frontmatter.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
