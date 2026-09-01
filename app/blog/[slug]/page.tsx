import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] as never[],
  },
}

const components = {
  code(props: React.HTMLAttributes<HTMLElement>) {
    const { children, className, ...rest } = props
    const isInline = !className && !('data-language' in props)

    if (isInline) {
      const text = String(children).replace(/^`(.*)`$/, '$1')
      return (
        <code
          className='bg-zinc-800 text-white px-1.5 py-0.5 rounded text-sm font-mono'
          {...rest}
        >
          {text}
        </code>
      )
    }

    return (
      <code className={className} {...rest}>
        {children}
      </code>
    )
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return {
    title: post.frontmatter.title,
    alternates: {
      canonical: `https://tianhuil.github.io/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts(true)
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    const post = getPostBySlug(slug)

    return (
      <div className='blog-post mx-auto mb-20'>
        <article>
          <header className='blog-post-header'>
            <Link href='/blog' className='back-link'>← All writing</Link>
            <p className='eyebrow'>Essay <span>·</span> {post.frontmatter.date}</p>
            <h1>{post.frontmatter.title}</h1>
            {post.frontmatter.excerpt && <p className='post-dek'>{post.frontmatter.excerpt}</p>}
          </header>
          <div className='blog-prose prose prose-sky max-w-none dark:prose-invert'>
            <MDXRemote
              source={post.content}
              options={options}
              components={components}
            />
          </div>
        </article>
      </div>
    )
  } catch {
    notFound()
  }
}
