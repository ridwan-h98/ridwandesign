"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Fallback projects in case API fails
const fallbackProjects = [
  {
    slug: "national-rostering-service",
    title: "National Rostering Service",
    description: "Designing a rostering system for National Highways to improve efficiency and user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Service Design", "Government", "Enterprise Software"],
    year: "2022-2023", // Updated year
    client: "National Highways",
  },
  {
    slug: "growing-juniper",
    title: "Growing Juniper",
    description:
      "Designing a digital product to help parents track and celebrate their child's development milestones.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Product Design", "Mobile App", "Healthcare"],
    year: "2023",
    client: "Growing Juniper",
  },
  {
    slug: "building-teams",
    title: "Building Teams",
    description:
      "Creating a team formation and management platform for a large enterprise to improve collaboration and productivity.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Enterprise UX", "Collaboration Tools", "User Research"],
    year: "2022",
    client: "Enterprise Client",
  },
]

// Add this new array of thought pieces case studies after the fallbackProjects array
const thoughtPieces = [
  {
    slug: "structuring-user-interviews",
    title: "Structuring user interviews with the right pre-work",
    description:
      "How thoughtful preparation can dramatically improve the quality of insights from user interviews. Learn the techniques that have helped me uncover deeper user needs and motivations.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    tags: ["User Research", "Methodology", "Best Practices"],
    year: "2023",
  },
  {
    slug: "role-of-empathy",
    title: "Design systems should be made retrospectively",
    description:
      "Why building a design system after you've created products leads to more practical, useful tools for your team.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Design Systems", "UI Design", "Product Development"],
    year: "2022",
  },
  {
    slug: "balancing-stakeholder-needs",
    title: "Balancing stakeholder needs with user goals",
    description: "Strategies for navigating the complex landscape of business requirements and user expectations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tags: ["Stakeholder Management", "Product Strategy", "UX Leadership"],
    year: "2024",
  },
  {
    slug: "simple-user-research",
    title: "User research can be simple",
    description: "Effective approaches to user research that don't require extensive resources or specialized tools.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    tags: ["User Research", "Lean UX", "Practical Methods"],
    year: "2024",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const [projects, setProjects] = useState(fallbackProjects)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch case studies from API
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/case-studies")

        if (!response.ok) {
          throw new Error("Failed to fetch case studies")
        }

        const data = await response.json()

        if (data.caseStudies && data.caseStudies.length > 0) {
          const apiProjectsMap = new Map(data.caseStudies.map((p: any) => [p.slug, p]))
          const mergedProjects = fallbackProjects.map((fp) => {
            const apiVersion = apiProjectsMap.get(fp.slug)
            // If API has this project, use API data but override 'year' with fallback's year
            return apiVersion ? { ...apiVersion, year: fp.year } : fp
          })

          // Add any API projects that are not in fallbackProjects
          data.caseStudies.forEach((apiProject: any) => {
            if (!mergedProjects.some((p) => p.slug === apiProject.slug)) {
              mergedProjects.push(apiProject)
            }
          })
          setProjects(mergedProjects)
        }
      } catch (error) {
        console.error("Error fetching case studies:", error)
        // Keep using fallback projects
      } finally {
        setIsLoading(false)
      }
    }

    fetchCaseStudies()
  }, [])

  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    elementsRef.current.forEach((el, i) => {
      if (el) {
        el.style.animationDelay = `${0.2 + i * 0.1}s`
        observer.observe(el)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [projects])

  // Combine all projects including thought pieces
  const allProjects = [
    ...projects.filter(
      (project) =>
        ![
          "structuring-user-interviews",
          "role-of-empathy",
          "balancing-stakeholder-needs",
          "simple-user-research",
        ].includes(project.slug),
    ),
    ...thoughtPieces,
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-[oklch(26.9%_0_0)] font-helvetica">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto mb-20 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-6">
            <span className="block text-gray-900 dark:text-white">Selected</span>
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
              work
            </span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              Case studies showcasing design solutions that drive measurable business impact.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse space-y-8 w-full max-w-4xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-24 lg:gap-y-28 items-start">
              {allProjects.map((project, index) => (
                <div
                  key={project.slug}
                  ref={(el) => (elementsRef.current[index] = el)}
                  className="animate-on-scroll group flex flex-col h-full"
                >
                  <div className="relative mb-8 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="aspect-[4/3] w-full">
                      <Image
                        src={
                          project.slug === "building-teams"
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20Maturity%20Scale-pHV4GwtZnls5JBnsntaSnpSh0dxwG1.webp"
                            : project.image || "/placeholder.svg?height=400&width=600"
                        }
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-semibold">
                      {project.year || "N/A"}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="group/link inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-sm shadow-lg mt-6"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
