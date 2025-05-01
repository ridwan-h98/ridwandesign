"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TableOfContents from "@/components/table-of-contents"

export default function CaseStudyClientPage({ initialCaseStudy, params }) {
  const [caseStudy, setCaseStudy] = useState(initialCaseStudy)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // If we already have the case study data from the server, no need to fetch again
    if (initialCaseStudy && initialCaseStudy.contentHtml) {
      return
    }

    const fetchCaseStudy = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/case-studies/${params.slug}`)

        if (!response.ok) {
          throw new Error(`Failed to load case study: ${response.statusText}`)
        }

        const data = await response.json()
        setCaseStudy(data.caseStudy)
      } catch (error) {
        console.error("Error loading case study:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCaseStudy()
  }, [params.slug, initialCaseStudy])

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-[oklch(0.2_0.01_256.848)] font-helvetica flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <div className="animate-pulse h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading case study...</p>
        </div>
      </main>
    )
  }

  if (error || !caseStudy) {
    return (
      <main className="min-h-screen bg-white dark:bg-[oklch(0.2_0.01_256.848)] font-helvetica flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {error || "The case study you're looking for could not be loaded."}
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center bg-black dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-md"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  // Function to enhance team makeup section with a bento grid
  const enhanceTeamMakeup = (html: string): string => {
    if (caseStudy.slug !== "building-teams") return html

    // Check if the content contains the team makeup section
    if (!html.includes("Capgemini Invent Consultants:") || !html.includes("National Highways DSG Team:")) return html

    // Create the enhanced team makeup HTML
    const teamMakeupHTML = `
<div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="bg-[#0070AD]/5 dark:bg-[#0070AD]/10 rounded-xl p-6 border border-[#0070AD]/10 dark:border-[#0070AD]/15 shadow-sm">
    <div class="flex items-start mb-4">
      <span class="px-2.5 py-1 text-xs font-medium bg-[#0070AD]/10 dark:bg-[#0070AD]/15 text-[#0070AD] dark:text-[#12ABDB] rounded border border-[#0070AD]/10 dark:border-[#0070AD]/20">
        Capgemini Invent
      </span>
    </div>
    <div class="space-y-3">
      <div class="bg-white dark:bg-gray-800/80 p-4 rounded-lg shadow-sm border border-gray-100/80 dark:border-gray-700/50 flex items-center">
        <div class="w-8 h-8 bg-[#12ABDB]/15 dark:bg-[#12ABDB]/20 rounded-full flex items-center justify-center mr-3">
          <span class="text-[#0070AD] dark:text-[#12ABDB] font-bold text-sm">3</span>
        </div>
        <p class="font-medium text-gray-900 dark:text-gray-100">Service Designers</p>
      </div>
      <div class="bg-white dark:bg-gray-800/80 p-4 rounded-lg shadow-sm border border-gray-100/80 dark:border-gray-700/50 flex items-center">
        <div class="w-8 h-8 bg-[#12ABDB]/15 dark:bg-[#12ABDB]/20 rounded-full flex items-center justify-center mr-3">
          <span class="text-[#0070AD] dark:text-[#12ABDB] font-bold text-sm">1</span>
        </div>
        <p class="font-medium text-gray-900 dark:text-gray-100">Automation Consultant</p>
      </div>
      <div class="bg-white dark:bg-gray-800/80 p-4 rounded-lg shadow-sm border border-gray-100/80 dark:border-gray-700/50 flex items-center">
        <div class="w-8 h-8 bg-[#12ABDB]/15 dark:bg-[#12ABDB]/20 rounded-full flex items-center justify-center mr-3">
          <span class="text-[#0070AD] dark:text-[#12ABDB] font-bold text-sm">1</span>
        </div>
        <p class="font-medium text-gray-900 dark:text-gray-100">Agile Coach</p>
      </div>
    </div>
  </div>
  <div class="bg-[#012F63]/5 dark:bg-[#012F63]/10 rounded-xl p-6 border border-[#012F63]/10 dark:border-[#012F63]/15 shadow-sm flex flex-col">
    <div class="flex items-start mb-4">
      <span class="px-2.5 py-1 text-xs font-medium bg-[#012F63]/10 dark:bg-[#012F63]/15 text-[#012F63] dark:text-[#4A7CB1] rounded border border-[#012F63]/10 dark:border-[#012F63]/20">
        National Highways
      </span>
    </div>
    <div class="bg-white dark:bg-gray-800/80 rounded-lg shadow-sm border border-gray-100/80 dark:border-gray-700/50 flex-1 flex flex-col justify-center items-center p-4">
      <div class="w-12 h-12 bg-[#012F63]/15 dark:bg-[#012F63]/20 rounded-full flex items-center justify-center mb-2">
        <span class="text-[#012F63] dark:text-[#4A7CB1] text-lg font-bold">10</span>
      </div>
      <p class="font-medium text-gray-900 dark:text-gray-100 text-center">Team members with varying levels of UX experience</p>
    </div>
  </div>
</div>
`

    // Replace the plain text team makeup with the enhanced version
    return html.replace(
      /<p>The team structure consisted of:<\/p>[\s\S]*?<p>This balanced team composition[\s\S]*?<\/p>/,
      `<p>The team structure consisted of:</p>${teamMakeupHTML}<p>This balanced team composition allowed us to provide specialized expertise while working closely with the internal team members to build sustainable capabilities.</p>`,
    )
  }

  // Function to enhance interview content with additional information
  const enhanceInterviewContent = (html: string, slug: string): string => {
    if (slug === "structuring-user-interviews") {
      // Add team alignment content for the interview structure case study - integrated approach
      const teamAlignmentHTML = `
<h3 id="team-alignment">Team Alignment: A Critical First Step</h3>
<p>When working in a team with diverse skills and perspectives, it's crucial that everyone is aligned on what we're trying to learn. Before conducting any interviews, I always ensure the entire research team has a shared understanding of our objectives.</p>

<h4>Pre-Research Planning Session</h4>
<p>Before even selecting participants, I hold a dedicated session with the research team to:</p>
<ul>
  <li>Define clear research objectives and questions</li>
  <li>Identify specific insights we need to gather</li>
  <li>Develop tailored questions that will elicit those insights</li>
  <li>Assign roles for each team member during the interviews</li>
</ul>

<h4>Structured Documentation</h4>
<p>For reporting interview findings, I've developed a thematic documentation approach that makes insights accessible months later:</p>
<ul>
  <li>Categorised participant quotes (positive, negative, neutral)</li>
  <li>Thematic grouping of insights across multiple interviews</li>
  <li>Visual indicators for priority issues and opportunities</li>
  <li>Cross-referenced findings with business objectives</li>
</ul>

<p>I successfully implemented this approach with the National Highways rostering service project, which allowed us to maintain research continuity across multiple sprints and team changes.</p>
`

      // Insert after the "My Preparation Framework" section
      return html.replace(
        /<h2 id="my-preparation-framework">My Preparation Framework<\/h2>[\s\S]*?<\/p>/,
        (match) => `${match}\n${teamAlignmentHTML}`,
      )
    }

    if (slug === "national-rostering-service") {
      // Add research process details for the National Rostering Service case study - integrated approach
      const researchProcessHTML = `
<h3 id="our-research-approach">Our Research Approach</h3>
<p>For this project, I implemented a structured research process that ensured alignment across our multi-disciplinary team:</p>

<h4>Pre-Research Alignment</h4>
<p>Before selecting participants, I facilitated a workshop with stakeholders and the design team to:</p>
<ul>
  <li>Define specific learning objectives for each user group</li>
  <li>Map research questions to business requirements</li>
  <li>Develop a shared understanding of what success looked like</li>
</ul>

<h4>Thematic Documentation</h4>
<p>To ensure insights remained accessible throughout the project lifecycle, I created:</p>
<ul>
  <li>Categorised interview notes with thematic tagging</li>
  <li>A searchable repository of user quotes and pain points</li>
  <li>Visual summaries that highlighted patterns across different user roles</li>
  <li>Prioritised insight documents that connected user needs to development priorities</li>
</ul>

<p>This structured approach allowed us to maintain research continuity even as the project team evolved, ensuring that insights gathered early in the process continued to inform decisions months later.</p>
`

      // Insert after the "Understanding the Problem" section
      return html.replace(
        /<h2 id="understanding-the-problem">Understanding the Problem<\/h2>[\s\S]*?<\/ul>/,
        (match) => `${match}\n${researchProcessHTML}`,
      )
    }

    return html
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[oklch(0.2_0.01_256.848)] font-helvetica">
      <Navbar />

      {/* Hero section */}
      <div className="bg-gray-50 dark:bg-[oklch(0.22_0.01_256.848)] pt-24 border-b border-gray-100 dark:border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <Link
                href="/#projects"
                className="inline-flex items-center bg-white/90 dark:bg-[oklch(0.25_0.01_256.848)] text-gray-700 dark:text-gray-100 text-xs font-medium px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 shadow-sm hover:bg-gray-50 dark:hover:bg-[oklch(0.28_0.01_256.848)] transition-all duration-300 mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5 mr-2" />
                Back to Projects
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {caseStudy.slug === "building-teams" ? "Building Teams: UX Maturity Journey" : caseStudy.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">{caseStudy.description}</p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 dark:bg-white/20 my-8"></div>

              {/* Project details with badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {caseStudy.tags && caseStudy.tags.includes("Thought Piece") ? (
                  <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Thought Piece</span>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">Client:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {caseStudy.client || "Various"}
                      </span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">Role:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {caseStudy.role || "UX Designer"}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right column - Image */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-white/20">
              <Image
                src={
                  caseStudy.image ||
                  "/placeholder.svg?height=600&width=1200&text=Case+Study:+" + encodeURIComponent(caseStudy.title) ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt={caseStudy.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
                priority
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case study content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar with Table of Contents */}
          <div className="lg:col-span-1">
            <TableOfContents headings={caseStudy.headings || []} />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <style jsx global>{`
.prose img {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 2.5rem 0;
  max-width: 100%;
  height: auto;
}

.prose h2 {
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  scroll-margin-top: 100px;
  font-size: 1.875rem;
  border-bottom: 1px solid rgba(209, 213, 219, 0.3);
  position: relative;
}

.prose h2::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, rgba(96, 165, 250, 0.6), rgba(59, 130, 246, 0.6));
  border-radius: 2px;
}

.dark .prose h2 {
  border-bottom: 1px solid rgba(75, 85, 99, 0.3);
}

.prose h3 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  scroll-margin-top: 100px;
}

/* Responsive line height for paragraphs */
.prose p, .prose ul, .prose ol {
  line-height: 1.9; /* Default for mobile */
  margin-bottom: 1.75rem;
  font-size: 1.125rem;
}

/* Medium screens and up */
@media (min-width: 768px) {
  .prose p, .prose ul, .prose ol {
    line-height: 2.1;
    margin-bottom: 2rem;
  }
}

/* Large screens */
@media (min-width: 1024px) {
  .prose p, .prose ul, .prose ol {
    line-height: 2.4;
  }
}

.prose figure {
  margin: 3rem 0;
}

/* Updated image caption styling */
.prose figcaption, 
.prose img + em {
  text-align: left; /* Left-aligned instead of centred */
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: 0.75rem;
  font-style: normal;
  display: block;
}

.dark .prose figcaption,
.dark .prose img + em {
  color: #9ca3af;
}

/* Updated blockquote styling with improved dark mode support */
.prose blockquote {
  margin-left: 0;
  margin-right: 0;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 2rem 3rem 2rem 2.5rem;
  background-color: rgba(249, 250, 251, 0.8);
  border-radius: 0;
  font-size: 1.25rem;
  line-height: 1.6;
  color: #1f2937;
  border-left: none;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  position: relative;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  max-width: 100%;
}

.prose blockquote::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: linear-gradient(to bottom, #60a5fa, #3b82f6);
}

.dark .prose blockquote {
  background-color: rgba(30, 41, 59, 0.5);
  color: #f3f4f6;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.dark .prose blockquote::before {
  background: linear-gradient(to bottom, #60a5fa, #3b82f6);
}

.prose blockquote p {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  padding-top: 0;
  font-style: normal;
}

/* Remove the speech marks in the text */
.prose blockquote p::before {
  content: none;
}

/* Add quote mark to top right */
.prose blockquote p::after {
  content: """;
  position: absolute;
  top: 0;
  right: -1rem;
  font-size: 3rem;
  line-height: 1;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: rgba(59, 130, 246, 0.15);
  z-index: 1;
}

/* Adjust font size for better mobile reading */
@media (max-width: 640px) {
  .prose blockquote {
    padding: 2rem;
    font-size: 1.125rem;
  }
  
  .prose blockquote p {
    font-size: 1.125rem;
  }
  
  .prose blockquote p::after {
    font-size: 2.5rem;
    top: 0;
    right: -0.5rem;
  }
}
`}</style>
              {/* 
                Note: The content below comes from the Markdown file in the case-studies directory.
                To update this content, edit the corresponding .md file in the case-studies folder.
                For the National Highways case study, update case-studies/national-rostering-service.md
                
                IMPORTANT UPDATES NEEDED FOR BUILDING TEAMS CASE STUDY:
                1. Shorten the length of quotes
                2. Correct that you worked with consultants as a team, not as a leader of 5 consultants
                3. Remove mentions of stakeholder mapping of the organization
                4. Clarify that you engaged with project stakeholders to understand business needs
                5. Remove mentions of design system adoption, stakeholder satisfaction measurements, 
                   design rework, and improved participant selection
                6. Make the results section more brief
              */}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    caseStudy.slug === "building-teams"
                      ? enhanceTeamMakeup(caseStudy.contentHtml).replace(
                          /https:\/\/hebbkx1anhila5yf\.public\.blob\.vercel-storage\.com\/UX%20Maturity%20Scale-HjJY5UxNmn3t6kVxtRZDXbOzIqBKm3\.webp/g,
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20Maturity%20Scale-pHV4GwtZnls5JBnsntaSnpSh0dxwG1.webp",
                        )
                      : caseStudy.slug === "structuring-user-interviews" ||
                          caseStudy.slug === "national-rostering-service"
                        ? enhanceInterviewContent(caseStudy.contentHtml, caseStudy.slug)
                        : caseStudy.contentHtml,
                }}
              />
              {/* The component itself doesn't control the specific placement of images within the case study content.
              Instead, the content is rendered from Markdown files using `dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml }}`.
              To change image placement, you need to edit the corresponding Markdown file (case-studies/growing-juniper.md).
              No changes are needed to this component itself. */}

              {/* Additional insight on the challenge */}
              {/* Additional context has been removed and should be incorporated into the main case study Markdown files */}
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
