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

export async function generateStaticParams() {
  const posts = getAllPosts()
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
        <article className='glass-card p-8 animate-fade-in-up'>
          <header className='mb-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              {post.frontmatter.title}
            </h1>
            <p className='text-muted-foreground'>{post.frontmatter.date}</p>
          </header>
          <div className='prose prose-sky max-w-none dark:prose-invert'>
            <MDXRemote source={post.content} options={options} />
          </div>
        </article>
      </div>
    )
  } catch {
    notFound()
  }
}
