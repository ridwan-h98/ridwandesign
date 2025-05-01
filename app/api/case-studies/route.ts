import { NextResponse } from "next/server"
import { getAllCaseStudies } from "@/lib/case-studies"

export async function GET() {
  try {
    const caseStudies = getAllCaseStudies()
    return NextResponse.json({ caseStudies })
  } catch (error) {
    console.error("Error fetching case studies:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch case studies",
        caseStudies: [],
      },
      { status: 500 },
    )
  }
}
