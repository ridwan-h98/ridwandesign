"use client"

import { useEffect, useRef } from "react"

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])

  // Scroll animation on element visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Don't add the animation class immediately for cards
            // Animation will be handled separately with staggered delays
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate-fade-up")
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Staggered animation for cards
    elementsRef.current.forEach((el, i) => {
      if (el) {
        // Initially hide all cards
        el.style.opacity = "0"
        el.style.transform = "translateY(20px)"
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"

        // Set up observer for each card
        const cardObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Stagger the animation with increasing delays
                setTimeout(
                  () => {
                    el.style.opacity = "1"
                    el.style.transform = "translateY(0)"
                  },
                  300 * (i + 1),
                ) // 300ms delay between each card
                cardObserver.unobserve(el)
              }
            })
          },
          { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        )

        cardObserver.observe(el)
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
  }, [])

  return (
    <section
      id="process"
      className="py-24 md:py-32 font-helvetica relative overflow-hidden bg-white dark:bg-[oklch(0.2_0.01_256.848)] border-b border-gray-100 dark:border-white/20"
    >
      {/* Add decorative blur elements similar to hero section */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-100 dark:bg-blue-900/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-72 h-72 bg-primary-100 dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-teal-600 dark:to-emerald-700 rounded-full text-white text-sm font-medium shadow-sm">
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
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            My Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            How I Build Great <span className="font-instrument-serif font-normal italic">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My user-centered design process ensures we create products that truly meet user needs.
          </p>
        </div>

        {/* 3 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl mx-auto py-8 md:py-12">
          {/* Card 1 */}
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className="bg-white/95 dark:bg-[oklch(0.22_0.01_256.848)] backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/60 dark:border-white/20 transform rotate-[-2deg] transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:rotate-[0deg] hover:border-blue-200 dark:hover:border-blue-500/30"
            style={{
              transformOrigin: "center",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50 dark:from-[oklch(0.25_0.02_250)] dark:to-[oklch(0.28_0.03_245)] text-blue-800 dark:text-blue-100 p-8 shadow-sm">
              <h3 className="text-2xl font-medium">What I produce</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-8">
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Service Design</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Product Design</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Interaction Design</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">User Research</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Design Systems</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="bg-white/95 dark:bg-[oklch(0.22_0.01_256.848)] backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/60 dark:border-white/20 transform rotate-[1deg] transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:rotate-[0deg] hover:border-blue-200 dark:hover:border-blue-500/30"
            style={{
              transformOrigin: "center",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50 dark:from-[oklch(0.25_0.02_60)] dark:to-[oklch(0.28_0.03_50)] text-amber-700 dark:text-amber-100 p-8 shadow-sm">
              <h3 className="text-2xl font-medium">How I work</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-8">
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">User-Centered Design</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Agile Methodology</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Design Thinking</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Collaborative Approach</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Iterative Process</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="bg-white/95 dark:bg-[oklch(0.22_0.01_256.848)] backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/60 dark:border-white/20 transform rotate-[3deg] transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:rotate-[0deg] hover:border-blue-200 dark:hover:border-blue-500/30"
            style={{
              transformOrigin: "center",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-50 dark:from-[oklch(0.25_0.02_200)] dark:to-[oklch(0.28_0.03_210)] text-sky-800 dark:text-sky-100 p-8 shadow-sm">
              <h3 className="text-2xl font-medium">Tools I use</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-8">
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Figma</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Adobe Creative Suite</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Sketch</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Miro</li>
                <li className="text-lg text-gray-600 dark:text-gray-300 font-medium">Prototyping Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
