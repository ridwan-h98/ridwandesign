import { notFound } from "next/navigation"
import { getAllCaseStudySlugs, getCaseStudyData } from "@/lib/case-studies"
import CaseStudyClientPage from "./CaseStudyClientPage"

export async function generateStaticParams() {
  try {
    const paths = getAllCaseStudySlugs()
    return paths
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function CaseStudyPage({ params }) {
  try {
    const caseStudy = await getCaseStudyData(params.slug)

    if (!caseStudy || caseStudy.title === "Case Study Not Found") {
      notFound()
    }

    return <CaseStudyClientPage initialCaseStudy={caseStudy} params={params} />
  } catch (error) {
    console.error(`Error loading case study ${params.slug}:`, error)
    notFound()
  }
}
