I want to use the following to add a /blog/ section.

## Native Next.js Support

Next.js doesn't parse Markdown natively, but it has first-class support for it through its file-based routing and the ecosystem around it. There are two main approaches:

**1. MDX (recommended for styling control)**

MDX is Markdown + JSX — you can embed React components directly in your `.md`/`.mdx` files. Next.js has an official plugin:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

```js
// next.config.js
const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
```

Then just drop `.mdx` files in your `app/` or `pages/` directory and they're automatically routed.

**2. `gray-matter` + `remark`/`unified` (more control)**

Keep your `.md` files in a `/content/blog/` folder and parse them at build time. This is the most flexible approach for a blog:

```bash
npm install gray-matter remark remark-html
```

```
/content
  /blog
    my-first-post.md
    another-post.md
```

Each file has frontmatter:

```md
---
title: 'My First Post'
date: '2024-01-15'
slug: 'my-first-post'
---

Your **markdown** content here.
```

Then use a dynamic route `app/blog/[slug]/page.tsx` that reads and renders the file at build time via `generateStaticParams`.

---

## Styling Control

This is where your options diverge:

| Approach                                                   | Styling Control                                                                   |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Tailwind Typography plugin** (`@tailwindcss/typography`) | Apply `prose` class to a wrapper — instant beautiful defaults, fully customizable |
| **Custom CSS**                                             | Target `article h1`, `article p`, etc. in your stylesheet                         |
| **MDX + custom components**                                | Pass a `components` map to replace any HTML element with your own React component |

The MDX component override approach gives you the most control:

```tsx
// Completely replace how <h1>, <code>, <a> etc. render
const components = {
  h1: ({ children }) => (
    <h1 className='text-4xl font-bold text-blue-600'>{children}</h1>
  ),
  code: ({ children }) => (
    <code className='bg-gray-100 rounded px-1'>{children}</code>
  ),
}
```

---

## Recommended Stack for a Marketing Blog

For a Next.js marketing site, the sweet spot is usually:

1. **`/content/blog/*.md`** — plain Markdown files with frontmatter (`gray-matter`)
2. **`next-mdx-remote`** — renders MDX from files outside the `app/` directory (more flexible than `@next/mdx`)
3. **`@tailwindcss/typography`** — handles prose styling with the `prose` class, with easy overrides

```bash
npm install next-mdx-remote gray-matter @tailwindcss/typography
```

This gives you clean content files, full styling control, and the ability to drop React components into posts when needed.
