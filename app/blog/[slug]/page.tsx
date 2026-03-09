import { notFound } from 'next/navigation'
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
      <div className='max-w-4xl mx-auto mb-8'>
        <article>
          <header className='mb-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              {post.frontmatter.title}
            </h1>
            <p className='text-muted-foreground'>{post.frontmatter.date}</p>
          </header>
          <div className='prose prose-sky max-w-none dark:prose-invert'>
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
