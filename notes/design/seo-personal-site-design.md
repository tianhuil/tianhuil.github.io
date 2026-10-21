# SEO Improvements for Personal Homepage and Blog

## Executive Summary

Improve discovery and search-result presentation for Michael Li’s homepage and MDX blog. Add page-specific metadata, reliable canonical URLs, crawl discovery, and relevant person/article structured data while preserving current Next.js static-export behavior. Success means every public page has accurate metadata, generated sitemap/robots files include intended routes, and structured data validates. This design excludes content rewriting, link-building, analytics, and ranking guarantees.

## User Stories

- As a search visitor, I want clear page titles and summaries, so I can choose relevant results.
- As a crawler, I want canonical URLs and discoverable public routes, so I can index the right pages.
- As a reader, I want accurate article dates and authorship in search previews.

## Scope and Decisions

- In scope: homepage, `/blog`, each `/blog/[slug]`, metadata, sitemap, robots, JSON-LD, image/share metadata.
- Out of scope: article keyword strategy, changing post content, Search Console setup, backlink campaigns, paid SEO tools.
- Keep static export and current Next.js App Router; avoid new dependencies unless native support is insufficient.
- Canonical origin: `https://tianhuil.github.io` (confirm deployment configuration before implementation).
- Article source of truth: existing MDX frontmatter and route slug. Do not invent missing author/date data; add required frontmatter only if current parser/content lacks it.

## Technical Design

### Architecture

Use Next.js Metadata API in `app/layout.tsx` for site defaults and page-level metadata in homepage, blog index, and blog detail routes. Inspect existing MDX frontmatter/parser before defining article field requirements. Generate sitemap and robots using Next.js-supported routes compatible with static export; include only published routes. Add JSON-LD to homepage for `Person` and article pages for `BlogPosting` (or `Article`), matching visible page content. Keep canonical URLs consistent with sitemap, Open Graph URLs, and internal links.

Set distinct title and description per page. Homepage title should identify Michael Li and professional focus. Blog index should describe the writing collection. Article title should use post title plus site name; description should use post description/excerpt where available. Add Open Graph type/title/description/url/image and Twitter card metadata. Ensure share image is absolute URL and exists.

### Contract Example

Article metadata for slug `example`:

```json
{
  "url": "https://tianhuil.github.io/blog/example",
  "title": "Article title | Michael Li",
  "description": "Accurate summary from article frontmatter.",
  "author": "Michael Li",
  "datePublished": "2026-01-01"
}
```

Only include date fields when backed by frontmatter. Sitemap contains absolute canonical URLs for homepage, blog index, and published articles. `robots.txt` permits public content and points to sitemap.

### Ownership

| Behavior | Owner | Source of truth | Verification |
|----------|-------|-----------------|--------------|
| Site metadata defaults | `app/layout.tsx` | Site identity and canonical origin | Inspect rendered HTML |
| Blog metadata and JSON-LD | `app/blog/[slug]/page.tsx` | MDX frontmatter and slug | Build output and structured-data test |
| Blog listing metadata | `app/blog/page.tsx` | Site identity and listing content | Inspect rendered HTML |
| Sitemap and robots | Next.js metadata routes or static public files | Published route list | Check exported files and URLs |

## Implementation Plan

1. **Audit metadata and frontmatter** — completion: identify existing fields, export constraints, and published route enumeration.
2. **Implement metadata and crawl files** — completion: all intended pages have unique metadata and sitemap/robots generated in static output.
3. **Add structured data and verify** — completion: visible content matches JSON-LD; production build and route checks pass.

## Acceptance Criteria

- [ ] A-01 Homepage, blog index, and every article render unique title, description, canonical, and social metadata — verify: review: inspect generated HTML for representative routes and confirm per-route uniqueness.
- [ ] A-02 Sitemap lists homepage, blog index, and every published article using canonical HTTPS URLs — verify: cmd: `pnpm build` then inspect exported sitemap.
- [ ] A-03 Robots file permits public pages and references sitemap — verify: cmd: `pnpm build` then inspect exported robots file.
- [ ] A-04 Person and article structured data match visible content and required available frontmatter — verify: review: validate representative homepage/article JSON-LD with Google Rich Results Test or Schema.org validator.
- [ ] A-05 Existing tests, typecheck, and static build pass — verify: cmd: `pnpm test && pnpm typecheck && pnpm build`.

## Acceptance Environment

Run `pnpm dev` and inspect `http://localhost:3500/`, `/blog`, and one article route. Production verification uses static export in `out/`.

## Owner Acceptance Script

1. Open homepage and check title, summary, canonical, social preview fields, and Person data.
2. Open `/blog` and one article; confirm unique titles/summaries, article URL, date/author accuracy, and BlogPosting data.
3. Inspect generated sitemap and robots files; confirm only public canonical routes appear.

## Failure and Assumption Notes

- If static export prevents runtime metadata routes, generate equivalent files at build time or commit static files generated from the same route source; do not omit sitemap/robots silently.
- If article dates or summaries are absent, omit unsupported structured-data fields and use a truthful excerpt; do not infer publication dates.
- Search engines control indexing, snippets, and rich-result display. These changes improve eligibility and clarity, not ranking guarantees.
- Current canonical origin assumes GitHub Pages deployment at `tianhuil.github.io`; verify against actual deployment before implementation.

## References

- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (accessed 2026-03-09)
- Title links: https://developers.google.com/search/docs/appearance/title-link (accessed 2026-03-09)
- Snippets and meta descriptions: https://developers.google.com/search/docs/appearance/snippet (accessed 2026-03-09)
- Sitemap construction: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (accessed 2026-03-09)
- Canonical URLs: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls (accessed 2026-03-09)
- Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article (accessed 2026-03-09)
- ProfilePage structured data: https://developers.google.com/search/docs/appearance/structured-data/profile-page (accessed 2026-03-09)
- Image SEO: https://developers.google.com/search/docs/appearance/google-images (accessed 2026-03-09)
