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
    image: "/images/structuring-interviews-thumbnail.png",
    tags: ["User Research", "Methodology", "Best Practices"],
    year: "2023",
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
          "simple-user-research",
        ].includes(project.slug),
    ),
    ...thoughtPieces,
  ]

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white dark:bg-background font-helvetica relative overflow-hidden border-t border-b border-gray-200 dark:border-white/10"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-transparent to-transparent dark:from-blue-400/15 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-transparent to-transparent dark:from-blue-500/15 blur-3xl"></div>
      </div>
      {/* </CHANGE> */}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-8">
            <span className="block text-gray-900 dark:text-white">Selected</span>
            <span className="block dark:text-blue-400 text-blue-500">work</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              Case studies showcasing design solutions
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse space-y-8 w-full max-w-4xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 dark:bg-card h-96 rounded-lg"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-20 lg:gap-y-24 items-start">
              {allProjects.map((project, index) => (
                <div
                  key={project.slug}
                  ref={(el) => (elementsRef.current[index] = el)}
                  className="animate-on-scroll group flex flex-col h-full"
                >
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-card">
                    <div className="aspect-[4/3] w-full">
                      <Image
                        src={
                          project.slug === "building-teams"
                            ? "/images/ux-20maturity-20scale.webp"
                            : project.image || "/placeholder.svg?height=400&width=600"
                        }
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-secondary text-gray-800 dark:text-secondary-foreground rounded-full text-xs font-semibold">
                      {project.year || "N/A"}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>

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
