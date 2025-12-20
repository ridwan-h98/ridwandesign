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
      className="py-24 md:py-32 font-helvetica relative overflow-hidden bg-white dark:bg-background border-b border-gray-100 dark:border-border"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-border" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gray-100 dark:bg-secondary rounded-full text-gray-700 dark:text-secondary-foreground text-sm font-medium">
            Process
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[0.9]">
            How I deliver{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
              results
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology that transforms complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className="group relative bg-white/90 dark:bg-card rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.03] overflow-hidden"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 p-10">
              <h3 className="text-2xl font-bold">What I deliver</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-0">
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Service Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Product Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Interaction Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  User Research
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4">Design Systems</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="group relative bg-white/90 dark:bg-card rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.03] overflow-hidden"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-100 p-10">
              <h3 className="text-2xl font-bold">How I work</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-0">
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  User-Centered Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Agile Methodology
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Design Thinking
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Collaborative Approach
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4">Iterative Process</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="group relative bg-white/90 dark:bg-card rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.03] overflow-hidden"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="bg-purple-50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 p-10">
              <h3 className="text-2xl font-bold">Tools I use</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-0">
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Figma
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Adobe Creative Suite
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Sketch
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Miro
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4">Prototyping Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
