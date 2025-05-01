import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"

const caseStudiesDirectory = path.join(process.cwd(), "case-studies")

// Ensure the case-studies directory exists
try {
  if (!fs.existsSync(caseStudiesDirectory)) {
    fs.mkdirSync(caseStudiesDirectory, { recursive: true })
  }
} catch (err) {
  console.error("Failed to create case-studies directory", err)
}

// Helper function to decode HTML entities
function decodeHtmlEntities(text) {
  const entities = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&#x26;": "&",
    "&#x3C;": "<",
    "&#x3E;": ">",
    "&#x22;": '"',
    "&#x27;": "'",
  }

  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#x26;|&#x3C;|&#x3E;|&#x22;|&#x27;/g, (match) => entities[match])
}

// Add better error handling for file operations

export async function getCaseStudyData(slug) {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.md`)

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Case study file not found: ${fullPath}`)
      return {
        slug,
        title: "Case Study Not Found",
        description: "This case study could not be found.",
        contentHtml: "<p>The requested case study could not be found.</p>",
        headings: [],
      }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Process markdown content with remark to add slugs to headings
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Extract headings for table of contents
    const headings = []
    const headingRegex = /<h([2-3])\s+id="([^"]+)"[^>]*>(.*?)<\/h\1>/g
    let match

    while ((match = headingRegex.exec(contentHtml)) !== null) {
      headings.push({
        level: Number.parseInt(match[1]),
        id: match[2],
        text: decodeHtmlEntities(match[3].replace(/<[^>]*>/g, "")), // Remove HTML tags and decode entities
      })
    }

    return {
      slug,
      contentHtml,
      headings,
      ...matterResult.data,
    }
  } catch (error) {
    console.error(`Error getting case study data for ${slug}:`, error)
    return {
      slug,
      title: "Error Loading Case Study",
      description: "There was an error loading this case study.",
      contentHtml: "<p>There was an error loading the case study content.</p>",
      headings: [],
    }
  }
}

export function getAllCaseStudies() {
  try {
    // Check if directory exists first
    if (!fs.existsSync(caseStudiesDirectory)) {
      console.warn("Case studies directory does not exist, creating it now")
      fs.mkdirSync(caseStudiesDirectory, { recursive: true })
      return []
    }

    const fileNames = fs.readdirSync(caseStudiesDirectory)
    console.log(`Found ${fileNames.length} files in case-studies directory`)

    if (fileNames.length === 0) {
      console.warn("No case study files found in directory")
      return []
    }

    return fileNames
      .filter((fileName) => {
        const isMdFile = fileName.endsWith(".md")
        if (!isMdFile) {
          console.log(`Skipping non-markdown file: ${fileName}`)
        }
        return isMdFile
      })
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, "")
          const fullPath = path.join(caseStudiesDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, "utf8")
          const matterResult = matter(fileContents)

          console.log(`Successfully processed case study: ${slug}`)

          return {
            slug,
            ...matterResult.data,
          }
        } catch (error) {
          console.error(`Error processing case study file ${fileName}:`, error)
          return null
        }
      })
      .filter(Boolean) // Remove any null entries
      .sort((a, b) => {
        // Sort by date if available, otherwise by title
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        }
        return a.title < b.title ? -1 : 1
      })
  } catch (error) {
    console.error("Error getting all case studies:", error)
    return []
  }
}

export function getAllCaseStudySlugs() {
  try {
    // Check if directory exists first
    if (!fs.existsSync(caseStudiesDirectory)) {
      console.warn("Case studies directory does not exist")
      return []
    }

    const fileNames = fs.readdirSync(caseStudiesDirectory)

    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        return {
          params: {
            slug: fileName.replace(/\.md$/, ""),
          },
        }
      })
  } catch (error) {
    console.error("Error getting all case study slugs:", error)
    return []
  }
}
