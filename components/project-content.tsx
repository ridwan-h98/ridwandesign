"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

// Sample content sections for the case study
const sections = [
  {
    id: "overview",
    title: "Project Overview",
    content: `
      <p>This case study explores the process and outcomes of a comprehensive UX/UI design project. The client approached us with specific challenges related to user engagement, conversion rates, and overall user satisfaction.</p>
      <p>Through a structured design process, we were able to identify key pain points and opportunities for improvement, resulting in a redesigned digital experience that significantly enhanced user metrics and business outcomes.</p>
    `,
  },
  {
    id: "challenge",
    title: "The Challenge",
    content: `
      <p>The client faced several challenges with their existing digital product:</p>
      <ul>
        <li>Low conversion rates compared to industry standards</li>
        <li>High bounce rates on key pages</li>
        <li>Confusing navigation that led to user frustration</li>
        <li>Inconsistent design patterns across the platform</li>
        <li>Poor mobile experience leading to abandoned sessions</li>
      </ul>
      <p>These issues were directly impacting business metrics and user satisfaction, necessitating a comprehensive redesign approach.</p>
    `,
  },
  {
    id: "research",
    title: "User Research",
    content: `
      <p>We conducted extensive user research to understand the core issues and user needs:</p>
      <ul>
        <li>15 in-depth user interviews with existing and potential users</li>
        <li>Competitive analysis of 5 industry leaders</li>
        <li>Heuristic evaluation of the existing platform</li>
        <li>Analysis of user session recordings and heatmaps</li>
        <li>Survey with 200+ responses from the target audience</li>
      </ul>
      <p>This research phase revealed critical insights about user behaviors, expectations, and pain points that informed our design decisions.</p>
    `,
  },
  {
    id: "personas",
    title: "User Personas",
    content: `
      <p>Based on our research, we developed three primary user personas to guide our design process:</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h4 class="font-bold mb-2">Sarah, 34</h4>
          <p class="text-sm">Busy professional who values efficiency and clear information</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h4 class="font-bold mb-2">Michael, 52</h4>
          <p class="text-sm">Tech-cautious user who needs intuitive navigation and support</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h4 class="font-bold mb-2">Emma, 26</h4>
          <p class="text-sm">Tech-savvy user looking for advanced features and customization</p>
        </div>
      </div>
      <p>These personas helped us maintain focus on real user needs throughout the design process.</p>
    `,
  },
  {
    id: "wireframes",
    title: "Wireframes & Prototypes",
    content: `
      <p>We created low-fidelity wireframes to explore different layout options and information architecture solutions. These wireframes were iterated based on internal feedback before moving to interactive prototypes.</p>
      <div class="my-8">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="Wireframes showing the evolution of the design"
          width={800}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>
      <p>The interactive prototypes were then used for user testing to validate our design decisions before moving to high-fidelity designs.</p>
    `,
  },
  {
    id: "testing",
    title: "User Testing",
    content: `
      <p>We conducted usability testing with 10 participants representing our key user personas. The testing sessions focused on core user flows and key interactions.</p>
      <ul>
        <li>5 in-person moderated sessions</li>
        <li>5 remote unmoderated sessions</li>
        <li>Tasks covering the primary user journeys</li>
        <li>Post-test interviews to gather qualitative feedback</li>
      </ul>
      <p>The testing revealed several usability issues that were addressed in subsequent design iterations, ensuring the final design was intuitive and user-friendly.</p>
    `,
  },
  {
    id: "visual-design",
    title: "Visual Design",
    content: `
      <p>The visual design phase focused on creating a cohesive, modern aesthetic that aligned with the client's brand while improving usability and accessibility.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <p class="text-sm text-gray-500 mb-2">Before</p>
          <Image 
            src="/placeholder.svg?height=300&width=500" 
            alt="Before redesign"
            width={500}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">After</p>
          <Image 
            src="/placeholder.svg?height=300&width=500" 
            alt="After redesign"
            width={500}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
      <p>Key improvements included:</p>
      <ul>
        <li>Simplified color palette for better visual hierarchy</li>
        <li>Improved typography for better readability</li>
        <li>Consistent component design across the platform</li>
        <li>Enhanced contrast ratios for accessibility</li>
        <li>Responsive design optimized for all device sizes</li>
      </ul>
    `,
  },
  {
    id: "outcomes",
    title: "Outcomes & Results",
    content: `
      <p>The redesigned product launched successfully and achieved significant improvements in key metrics:</p>
      <div class="bg-gray-50 p-8 rounded-xl my-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p class="text-3xl font-bold text-primary-600">35%</p>
            <p class="text-sm text-gray-600">Increase in Conversion Rate</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-primary-600">42%</p>
            <p class="text-sm text-gray-600">Decrease in Bounce Rate</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-primary-600">28%</p>
            <p class="text-sm text-gray-600">Increase in Time on Site</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-primary-600">4.8/5</p>
            <p class="text-sm text-gray-600">User Satisfaction Rating</p>
          </div>
        </div>
      </div>
      <p>User feedback has been overwhelmingly positive, with particular praise for the intuitive navigation, clean design, and improved performance.</p>
    `,
  },
  {
    id: "lessons",
    title: "Lessons Learned",
    content: `
      <p>This project provided valuable insights and lessons that we've carried forward to other projects:</p>
      <ul>
        <li>Early user involvement is critical for identifying the right problems to solve</li>
        <li>Iterative testing throughout the design process saves time and resources</li>
        <li>Cross-functional collaboration leads to more holistic solutions</li>
        <li>Accessibility considerations should be integrated from the beginning</li>
        <li>Post-launch monitoring is essential for continuous improvement</li>
      </ul>
      <p>These lessons have become core principles in our design approach, ensuring we deliver exceptional user experiences that drive business results.</p>
    `,
  },
]

// Table of Contents component
function TableOfContents() {
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => document.getElementById(section.id)).filter(Boolean)

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  return (
    <div className="sticky top-24">
      <div className="bg-gray-50 p-8 rounded-2xl dark:bg-[oklch(26.9%_0_0)]">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Table of Contents</h3>
        <nav>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block py-2 border-l-2 pl-4 text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? "border-primary-600 text-primary-600 font-medium"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

// Content component
function Content() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

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

    sectionsRef.current.forEach((el, i) => {
      if (el) {
        el.style.animationDelay = `${0.1 + i * 0.05}s`
        observer.observe(el)
      }
    })

    return () => {
      sectionsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="prose prose-lg max-w-none">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="mb-16 scroll-mt-24 animate-on-scroll"
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </section>
      ))}
    </div>
  )
}

const ProjectContent = {
  TableOfContents,
  Content,
}

export default ProjectContent
