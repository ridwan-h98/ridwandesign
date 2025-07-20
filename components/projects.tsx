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
    <section id="projects" className="py-16 md:py-32 bg-white dark:bg-[oklch(26.9%_0_0)] font-helvetica">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse space-y-8 w-full max-w-4xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20 items-stretch">
            {allProjects.map((project, index) => (
              <div
                key={project.slug}
                ref={(el) => (elementsRef.current[index] = el)}
                className="animate-on-scroll group flex flex-col h-full"
              >
                {/* Main Image at the top */}
                <div className="w-full mb-6 md:mb-8">
                  <div className="bg-white dark:bg-[oklch(20.5%_0_0)] rounded-lg overflow-hidden shadow-sm border border-gray-200/50 dark:border-white/10 group-hover:shadow-md group-hover:border-gray-300/50 dark:group-hover:border-white/20 transition-all duration-300">
                    <div className="relative h-64 md:h-80 lg:h-96 w-full">
                      <Image
                        src={
                          project.slug === "building-teams"
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20Maturity%20Scale-pHV4GwtZnls5JBnsntaSnpSh0dxwG1.webp"
                            : project.image || "/placeholder.svg?height=400&width=600"
                        }
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Header (content) */}
                <div className="flex flex-col flex-grow">
                  <div className="text-xs font-semibold bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-200 px-2 py-1 rounded-full w-fit mb-2">
                    {project.year || "N/A"}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-green-700 dark:group-hover:text-green-500 transition-colors duration-300">
                    {project.client && (
                      <span className="text-gray-500 dark:text-gray-400 font-normal">{project.client} • </span>
                    )}
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200 text-sm mt-auto"
                  >
                    VIEW CASE STUDY
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
