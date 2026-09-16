import assert from 'node:assert/strict'
import test from 'node:test'
import { checkFrontmatterDirectory, parseFrontmatter } from '../scripts/check-frontmatter.mjs'

test('all blog posts have valid YAML front matter', () => {
  const files = checkFrontmatterDirectory(new URL('../content/blog', import.meta.url).pathname)
  assert.ok(files.length > 0)
})

test('malformed YAML front matter fails the check', () => {
  assert.throws(
    () =>
      parseFrontmatter(
        "---\ntitle: 'Author's post'\ndate: '2026-01-01'\n---\n",
        'fixture.mdx'
      ),
    /fixture\.mdx: invalid YAML front matter/
  )
})
