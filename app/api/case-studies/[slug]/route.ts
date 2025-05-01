import { NextResponse } from "next/server"
import { getCaseStudyData } from "@/lib/case-studies"

export async function GET(request, { params }) {
  try {
    const { slug } = params
    const caseStudy = await getCaseStudyData(slug)

    if (!caseStudy || caseStudy.title === "Case Study Not Found") {
      return NextResponse.json({ error: "Case study not found" }, { status: 404 })
    }

    return NextResponse.json({ caseStudy })
  } catch (error) {
    console.error(`Error fetching case study ${params.slug}:`, error)
    return NextResponse.json({ error: "Failed to fetch case study" }, { status: 500 })
  }
}
