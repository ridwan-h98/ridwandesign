import { notFound } from "next/navigation"
import { getAllCaseStudySlugs, getCaseStudyData } from "@/lib/case-studies"
import CaseStudyClientPage from "./CaseStudyClientPage"

export async function generateStaticParams() {
  try {
    const paths = getAllCaseStudySlugs()
    return paths.map((path) => ({ slug: path.params.slug }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const resolvedParams = await params
    const caseStudy = await getCaseStudyData(resolvedParams.slug)

    if (!caseStudy || caseStudy.title === "Case Study Not Found") {
      notFound()
    }

    return <CaseStudyClientPage initialCaseStudy={caseStudy} params={resolvedParams} />
  } catch (error) {
    console.error(`Error loading case study:`, error)
    notFound()
  }
}
