import { notFound } from "next/navigation"
import { getAllCaseStudySlugs, getCaseStudyData } from "@/lib/case-studies"
import CaseStudyClientPage from "./CaseStudyClientPage"

export async function generateStaticParams() {
  try {
    const slugs = getAllCaseStudySlugs()
    // Return array of objects with just the slug property
    return slugs.map((item) => ({
      slug: item.params.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  try {
    const { slug } = await params
    const caseStudy = await getCaseStudyData(slug)

    if (!caseStudy || caseStudy.title === "Case Study Not Found") {
      notFound()
    }

    return <CaseStudyClientPage initialCaseStudy={caseStudy} slug={slug} />
  } catch (error) {
    console.error("Error loading case study:", error)
    notFound()
  }
}
