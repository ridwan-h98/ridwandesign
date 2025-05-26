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
  },
  {
    slug: "growing-juniper",
    title: "Growing Juniper",
    description:
      "Designing a digital product to help parents track and celebrate their child's development milestones.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Product Design", "Mobile App", "Healthcare"],
  },
  {
    slug: "building-teams",
    title: "Building Teams",
    description:
      "Creating a team formation and management platform for a large enterprise to improve collaboration and productivity.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Enterprise UX", "Collaboration Tools", "User Research"],
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
  },
  {
    slug: "role-of-empathy",
    title: "Design systems should be made retrospectively",
    description:
      "Why building a design system after you've created products leads to more practical, useful tools for your team.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Design Systems", "UI Design", "Product Development"],
  },
  {
    slug: "balancing-stakeholder-needs",
    title: "Balancing stakeholder needs with user goals",
    description: "Strategies for navigating the complex landscape of business requirements and user expectations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tags: ["Stakeholder Management", "Product Strategy", "UX Leadership"],
  },
  {
    slug: "simple-user-research",
    title: "User research can be simple",
    description: "Effective approaches to user research that don't require extensive resources or specialized tools.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    tags: ["User Research", "Lean UX", "Practical Methods"],
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
          setProjects(data.caseStudies)
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

  return (
    <section
      id="projects"
      className="py-16 md:py-32 bg-white dark:bg-[oklch(0.2_0.01_256.848)] font-helvetica border-b border-gray-100 dark:border-white/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-12 md:mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-700 rounded-full text-white text-sm font-medium shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
              <path d="M18 14h-8"></path>
              <path d="M15 18h-5"></path>
              <path d="M10 6h8v4h-8V6Z"></path>
            </svg>
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            Selected <span className="font-instrument-serif font-normal italic">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my most impactful work across various industries and platforms.
          </p>
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
          <div className="space-y-12 md:space-y-20">
            {projects
              .filter(
                (project) =>
                  ![
                    "structuring-user-interviews",
                    "role-of-empathy",
                    "balancing-stakeholder-needs",
                    "simple-user-research",
                  ].includes(project.slug),
              )
              .map((project, index) => (
                <div key={project.slug} ref={(el) => (elementsRef.current[index] = el)} className="animate-on-scroll">
                  <Link href={`/case-studies/${project.slug}`} className="group">
                    <div
                      className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/20 transition-all duration-500 flex flex-col md:flex-row group-hover:transform group-hover:scale-[1.02]"
                      style={{
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "--hover-shadow": "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="md:w-1/2 relative h-64 sm:h-80 md:h-[500px]">
                        <Image
                          src={
                            project.slug === "building-teams"
                              ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20Maturity%20Scale-pHV4GwtZnls5JBnsntaSnpSh0dxwG1.webp"
                              : project.image || "/placeholder.svg?height=400&width=600"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 sm:p-8 md:p-14 md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 mb-4">
                          {project.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                          {project.description}
                        </p>
                        <div>
                          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-all duration-300">
                            <span>View case study</span>
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        )}

        {/* Divider */}
        <div className="my-20 md:my-32">
          <div className="w-full h-px bg-gray-200 dark:bg-white/20"></div>
        </div>

        {/* Thought Pieces Section */}
        <div className="mt-20 md:mt-32">
          {/* Left column - Section heading */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-700 rounded-full text-white text-sm font-medium shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m4.93 4.93 4.24 4.24"></path>
                <path d="m14.83 9.17 4.24-4.24"></path>
                <path d="m14.83 14.83 4.24 4.24"></path>
                <path d="m9.17 14.83-4.24 4.24"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              Perspectives
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
              UX <span className="font-instrument-serif font-normal italic">Perspectives</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-2xl">
              Short explorations of UX concepts, challenges, and solutions from my professional experience.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-16 mb-16">
            {/* Featured card (spans 8 columns) */}
            <div className="md:col-span-8 group">
              <Link href={`/case-studies/${thoughtPieces[0].slug}`} className="block h-full">
                <div
                  className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/20 transition-all duration-500 h-full flex flex-col group-hover:transform group-hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "--hover-shadow": "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="relative h-72 md:h-96">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                      alt={thoughtPieces[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {thoughtPieces[0].title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-8 flex-grow">
                      {thoughtPieces[0].description}
                    </p>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-all duration-300">
                        <span>View case study</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Text-only card with subtle background (spans 4 columns) */}
            <div className="md:col-span-4 group">
              <Link href={`/case-studies/${thoughtPieces[1].slug}`} className="block h-full">
                <div
                  className="bg-gray-50 dark:bg-[oklch(0.24_0.01_256.848)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/20 transition-all duration-500 h-full flex flex-col p-6 sm:p-8 md:p-10 group-hover:transform group-hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "--hover-shadow": "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      Design systems should be made retrospectively
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-8">{thoughtPieces[1].description}</p>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-all duration-300">
                      <span>View case study</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Horizontal card (spans 7 columns) */}
            <div className="md:col-span-7 group">
              <Link href={`/case-studies/${thoughtPieces[2].slug}`} className="block h-full">
                <div
                  className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/20 transition-all duration-500 h-full flex flex-col md:flex-row group-hover:transform group-hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "--hover-shadow": "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="md:w-2/5 relative h-56 md:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                      alt={thoughtPieces[2].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-8 md:w-3/5 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {thoughtPieces[2].title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-8">{thoughtPieces[2].description}</p>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-all duration-300">
                        <span>View case study</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Standard card (spans 5 columns) */}
            <div className="md:col-span-5 group">
              <Link href={`/case-studies/${thoughtPieces[3].slug}`} className="block h-full">
                <div
                  className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/20 transition-all duration-500 h-full flex flex-col group-hover:transform group-hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "--hover-shadow": "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="relative h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                      alt={thoughtPieces[3].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {thoughtPieces[3].title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-8 flex-grow">
                      {thoughtPieces[3].description}
                    </p>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-all duration-300">
                        <span>View case study</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
  .group:hover .group-hover\\:shadow-2xl {
    box-shadow: var(--hover-shadow);
  }
`}</style>
    </section>
  )
}
