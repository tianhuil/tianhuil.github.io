import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import matter from 'gray-matter'

const requiredFields = ['title', 'date']

export function parseFrontmatter(source, filePath = 'input') {
  let parsed

  try {
    parsed = matter(source).data
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`${filePath}: invalid YAML front matter: ${message}`)
  }

  for (const field of requiredFields) {
    if (typeof parsed[field] !== 'string' || parsed[field].trim() === '') {
      throw new Error(`${filePath}: ${field} must be a non-empty string`)
    }
  }

  if (parsed.excerpt !== undefined && typeof parsed.excerpt !== 'string') {
    throw new Error(`${filePath}: excerpt must be a string`)
  }

  if (parsed.unlisted !== undefined && typeof parsed.unlisted !== 'boolean') {
    throw new Error(`${filePath}: unlisted must be a boolean`)
  }

  return parsed
}

export function checkFrontmatterDirectory(directory) {
  const files = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && (entry.name.endsWith('.mdx') || entry.name.endsWith('.md'))
    )
    .map((entry) => path.join(directory, entry.name))

  files.forEach((filePath) => {
    parseFrontmatter(fs.readFileSync(filePath, 'utf8'), filePath)
  })

  return files
}

const isCli =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href

if (isCli) {
  try {
    const directory = path.resolve(process.argv[2] ?? 'content/blog')
    const files = checkFrontmatterDirectory(directory)
    console.log(`Checked YAML front matter in ${files.length} blog posts.`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  }
}

