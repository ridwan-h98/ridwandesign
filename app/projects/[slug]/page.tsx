import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import ProjectContent from "@/components/project-content"
import { ArrowLeft } from "lucide-react"

// This would typically come from a CMS or API
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description:
      "A complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["UX Research", "UI Design", "Prototyping"],
    slug: "ecommerce-redesign",
    client: "Fashion Retailer",
    duration: "3 months",
    role: "Lead UX Designer",
    year: "2023",
  },
  {
    id: 2,
    title: "Healthcare App",
    description: "A mobile application designed to help patients manage their healthcare appointments and medication.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Mobile Design", "User Testing", "Accessibility"],
    slug: "healthcare-app",
    client: "Healthcare Provider",
    duration: "4 months",
    role: "UX/UI Designer",
    year: "2022",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "A comprehensive dashboard for financial analysts to visualize and analyze complex data sets.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Data Visualization", "Enterprise UX", "User Research"],
    slug: "financial-dashboard",
    client: "Investment Firm",
    duration: "6 months",
    role: "Senior UX Designer",
    year: "2023",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[oklch(26.9%_0_0)]">
      {/* Hero section */}
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-8 pb-16">
            <Link
              href="/#projects"
              className="inline-flex items-center text-white mb-8 hover:text-primary-400 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-2xl mb-10 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="font-medium text-gray-900">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-medium text-gray-900">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Role</p>
                  <p className="font-medium text-gray-900">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Year</p>
                  <p className="font-medium text-gray-900">{project.year}</p>
                </div>
              </div>
            </div>

            <ProjectContent.TableOfContents />
          </div>

          <div className="lg:col-span-3">
            <ProjectContent.Content />
          </div>
        </div>
      </div>
    </main>
  )
}
