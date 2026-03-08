import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

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
    <div className='max-w-6xl mx-auto mb-8'>
      <div className='glass-card p-8 mb-8 animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Blog <span className='gradient-text'>Posts</span>
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl'>
          Thoughts on data science, technology, and more.
        </p>
      </div>

      <div className='grid gap-6'>
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='glass-card p-6 block animate-fade-in-up hover:border-primary transition-colors'
            style={{ animationDelay: `${100 + idx * 50}ms` }}
          >
            <div className='flex items-start justify-between gap-4 mb-3'>
              <h2 className='text-xl font-semibold'>{post.frontmatter.title}</h2>
              <span className='text-sm text-muted-foreground whitespace-nowrap'>
                {post.frontmatter.date}
              </span>
            </div>
            {post.frontmatter.excerpt && (
              <p className='text-muted-foreground line-clamp-2'>{post.frontmatter.excerpt}</p>
            )}
            <span className='inline-block mt-4 text-sm text-primary font-medium'>
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
