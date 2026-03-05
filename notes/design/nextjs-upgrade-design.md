# Feature: Next.js 13 to 16 Upgrade with App Router Migration

## Executive Summary

Upgrade the personal website from Next.js 13.0.0 (Pages Router) to Next.js 16 (App Router) to leverage modern React features, improved performance with Turbopack, and better developer experience. This is a static site deployed to GitHub Pages that currently uses Emotion for CSS-in-JS styling. Success criteria: working site with all existing routes functional, improved build performance, and future-proof architecture.

## Current State Analysis

### Project Overview

| Aspect | Current Value |
|--------|---------------|
| Next.js Version | 13.0.0 |
| React Version | 18.1.0 |
| Router | Pages Router (`pages/` directory) |
| Styling | Emotion (`@emotion/react`, `@emotion/styled`) |
| TypeScript | 4.5.4 |
| Node.js | Unknown (check `.nvmrc` or `package.json`) |
| Deployment | GitHub Pages (static export via `next export`) |

### File Structure

```
tianhuil/
├── components/
│   ├── layout.tsx      # Main layout with navbar, head, global styles
│   └── logo.tsx        # Logo component
├── pages/
│   ├── index.tsx       # Home page
│   ├── professional.tsx # Professional experience page
│   ├── writing.tsx     # Publications page
│   └── standup.tsx     # Additional page
├── public/             # Static assets (images, favicons)
├── docs/               # Build output (distDir)
├── next.config.js      # Minimal config (only distDir set)
└── package.json
```

### Dependencies to Update

| Package | Current | Target | Notes |
|---------|---------|--------|-------|
| next | ^13.0.0 | ^16.0.0 | Major upgrade |
| react | 18.1.0 | ^19.0.0 | React 19 required |
| react-dom | 18.1.0 | ^19.0.0 | React 19 required |
| typescript | ^4.5.4 | ^5.1.0 | Minimum 5.1 required |
| @types/react | ^17.0.38 | ^19.0.0 | Match React version |
| @types/react-dom | ^17.0.11 | ^19.0.0 | Match React version |
| @types/node | ^12.20.39 | ^20.0.0 | Node 20+ required |
| eslint | ^7.32.0 | ^9.0.0 | ESLint flat config |
| @typescript-eslint/* | ^4.33.0 | ^8.0.0 | Latest |
| eslint-config-prettier | ^6.14.0 | ^10.0.0 | Latest |
| eslint-plugin-prettier | ^3.4.1 | ^5.0.0 | Latest |

### Dependencies to Remove

| Package | Reason |
|---------|--------|
| emotion-theming | Deprecated, use @emotion/react theme |
| @babel/plugin-transform-react-jsx | Handled by Next.js |
| @babel/preset-typescript | Handled by Next.js |
| @emotion/babel-plugin | May need alternative setup |
| @emotion/babel-preset-css-prop | May need alternative setup |
| regenerator-runtime | Not needed with modern targets |

## User Stories

- Site visitor can view all existing pages without regression
- Developer can build and deploy the site to GitHub Pages
- Developer benefits from faster builds with Turbopack
- Developer can use modern React patterns (Server Components)

## Technical Design

### Architecture Changes

```
Before (Pages Router):              After (App Router):
pages/                              app/
├── index.tsx                       ├── page.tsx
├── professional.tsx       →        ├── professional/page.tsx
├── writing.tsx                     ├── writing/page.tsx
└── standup.tsx                     └── standup/page.tsx
components/                         app/
└── layout.tsx             →        └── layout.tsx (root layout)
```

### Breaking Changes Summary (v13 → v16)

#### Version 15 Breaking Changes

| Change | Impact | Action Required |
|--------|--------|-----------------|
| React 19 minimum | Major | Update React, update hook patterns |
| Async Request APIs | Breaking | `cookies()`, `headers()`, `params`, `searchParams` now async |
| `fetch` not cached by default | Breaking | Explicitly set `cache: 'force-cache'` if needed |
| `@next/font` removed | Breaking | Use `next/font` instead |
| Runtime config removed | Breaking | Use environment variables |

#### Version 16 Breaking Changes

| Change | Impact | Action Required |
|--------|--------|-----------------|
| Node.js 20.9+ required | Breaking | Update Node.js |
| TypeScript 5.1+ required | Breaking | Update TypeScript |
| Turbopack default | Breaking | Update scripts, check webpack config |
| Async APIs sync access removed | Breaking | All dynamic APIs must be awaited |
| `next lint` removed | Breaking | Use ESLint CLI directly |
| `next export` deprecated | Major | Use `output: 'export'` in config |
| `middleware` renamed to `proxy` | Breaking | Rename file if using middleware |
| Image component changes | Breaking | Update image configurations |
| AMP support removed | Breaking | Remove if used (unlikely) |
| Runtime config removed | Breaking | Use environment variables |

### App Router Migration Strategy

#### Step 1: Create App Directory Structure

```
app/
├── layout.tsx          # Root layout (replaces _app + _document)
├── page.tsx            # Home page (was pages/index.tsx)
├── professional/
│   └── page.tsx        # Professional page
├── writing/
│   └── page.tsx        # Writing page
└── standup/
    └── page.tsx        # Standup page
```

#### Step 2: Migrate Layout Component

**Before (components/layout.tsx):**
```tsx
import Head from 'next/head'
import { useRouter } from 'next/router'

const Layout: React.FC = ({ children }) => (
  <div>
    <HeadDiv />
    <Header />
    <section>
      <div className='container'>{children}</div>
    </section>
    <Global styles={...} />
  </div>
)
```

**After (app/layout.tsx):**
```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michael Li',
  description: 'Personal Homepage for Tianhui Michael Li',
  openGraph: { ... },
  twitter: { ... },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
```

#### Step 3: Migrate Pages to Client Components

Since current pages use hooks (`useRouter`), convert to Client Components:

**app/page.tsx:**
```tsx
'use client'

import HomePage from './home-page'

export default function Page() {
  return <HomePage />
}
```

**app/home-page.tsx:**
```tsx
'use client'

import { SocialIcon } from 'react-social-icons'
import styled from '@emotion/styled'
import Link from 'next/link'

// Move component logic here
```

#### Step 4: Update Routing Hooks

| Before | After |
|--------|-------|
| `import { useRouter } from 'next/router'` | `import { useRouter } from 'next/navigation'` |
| `router.asPath` | `usePathname()` |
| `router.query` | `useSearchParams()` |

### Styling Migration

#### Option A: Keep Emotion (Recommended for minimal changes)

Emotion works with App Router but requires setup:

1. Create Client Component wrapper for styled components
2. Use `'use client'` directive for components using Emotion
3. Configure `next.config.js` for Emotion:

```js
const nextConfig = {
  distDir: 'docs',
  experimental: {
    emotion: true, // If using @emotion/react
  },
}
```

#### Option B: Migrate to CSS Modules (Simpler for App Router)

1. Create `app/globals.css` for global styles
2. Create `*.module.css` for component styles
3. Remove Emotion dependencies

### Static Export Configuration

**next.config.js:**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
```

**package.json scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

Note: `next export` command removed - use `output: 'export'` config instead.

## Implementation Plan

### Phase 1: Preparation

- [ ] Update Node.js to 20.9+ (check with `node --version`)
- [ ] Create backup branch: `git checkout -b backup-pre-upgrade`
- [ ] Create feature branch: `git checkout -b upgrade/nextjs-16`
- [ ] Document current build process
- [ ] Test current site works locally

### Phase 2: Dependency Updates

- [ ] Update `package.json` with new versions
- [ ] Remove deprecated dependencies
- [ ] Run `pnpm install` (or npm/yarn)
- [ ] Update `tsconfig.json` for Next.js App Router:
  ```json
  {
    "compilerOptions": {
      "lib": ["dom", "dom.iterable", "esnext"],
      "plugins": [{ "name": "next" }]
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
  }
  ```

### Phase 3: Create App Directory Structure

- [ ] Create `app/` directory
- [ ] Create `app/layout.tsx` root layout
- [ ] Create `app/globals.css` for global styles (if migrating from Emotion Global)
- [ ] Update `next.config.js` with `output: 'export'`

### Phase 4: Migrate Pages (One at a Time)

For each page (`index`, `professional`, `writing`, `standup`):

- [ ] Create corresponding `app/[route]/page.tsx`
- [ ] Add `'use client'` directive if using hooks
- [ ] Update imports (`next/router` → `next/navigation`)
- [ ] Move component logic to separate Client Component file
- [ ] Test route works
- [ ] Remove corresponding `pages/[route].tsx`

### Phase 5: Migrate Layout & Components

- [ ] Move `components/layout.tsx` header logic to `app/layout.tsx`
- [ ] Convert `next/head` to `metadata` exports
- [ ] Update `components/logo.tsx` for App Router compatibility
- [ ] Remove `components/layout.tsx` after migration complete

### Phase 6: Cleanup

- [ ] Remove `pages/` directory
- [ ] Remove unused dependencies from `package.json`
- [ ] Update ESLint config for flat config format
- [ ] Run full build: `pnpm build`
- [ ] Test deployed site on GitHub Pages

### Phase 7: Optimization (Optional)

- [ ] Enable Turbopack for faster dev builds
- [ ] Consider migrating from Emotion to CSS Modules
- [ ] Add React Compiler for performance
- [ ] Update images to use `next/image` with proper config

## Acceptance Criteria

- [ ] All existing routes (`/`, `/professional`, `/writing`, `/standup`) work correctly
- [ ] Site builds successfully with `next build`
- [ ] Static export generates files in `docs/` directory
- [ ] All styling renders correctly
- [ ] Social icons and links work
- [ ] SEO metadata renders correctly
- [ ] Build time improved or comparable
- [ ] No console errors in browser

## Boundaries

✅ Always:
- Run `pnpm build` before committing changes
- Test all pages manually after migration
- Keep git commits atomic (one page per commit during migration)
- Maintain backward compatibility with GitHub Pages deployment

⚠️ Ask first:
- Removing Emotion for alternative styling solution
- Adding new dependencies
- Changing deployment configuration
- Modifying TypeScript strictness settings

🚫 Never:
- Commit without testing build locally
- Remove existing pages without creating app equivalents
- Skip updating TypeScript and Node.js versions
- Ignore ESLint errors

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Emotion incompatibility with App Router | Medium | High | Test early, have CSS Modules fallback |
| Static export limitations | Medium | Medium | Check feature support before migrating |
| Breaking changes in React 19 | Medium | Medium | Read React 19 upgrade guide |
| Build failures with Turbopack | Low | Low | Can opt out with `--webpack` flag |

## Open Questions

1. Should we migrate from Emotion to CSS Modules or Tailwind CSS?
2. Do we need to preserve any analytics or tracking scripts?
3. Are there any other pages or routes not documented in the file structure?
4. Should we enable React Compiler for automatic memoization?
5. What is the current Node.js version in use?

## References

- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-15)
- [Pages to App Router Migration](https://nextjs.org/docs/pages/guides/migrating/app-router-migration)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Static Exports with App Router](https://nextjs.org/docs/app/guides/static-exports)
- [Emotion with Next.js App Router](https://emotion.sh/docs/ssr#nextjs-app-router)
