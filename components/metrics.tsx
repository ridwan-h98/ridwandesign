"use client"

import { useState, useEffect, useRef } from "react"

const metrics = [
  { value: 100000, label: "Users Served", suffix: "+", description: "Designed service for over 100,000 users" },
  { value: 60, label: "Cost Reduction", suffix: "%", description: "Led UX, driving 60% reduction in operating costs" },
  {
    value: 75,
    label: "Delivery Improvement",
    suffix: "%",
    description: "Elevated UX team's maturity, enabling 75% improvement in project delivery",
  },
]

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(metrics.map(() => 0))
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = metrics.map((metric, index) => {
      // Adjust the speed for the large number (100,000)
      const duration = metric.value > 1000 ? 2000 : 2000 / metric.value
      const increment = metric.value > 1000 ? Math.ceil(metric.value / 50) : 1

      return setInterval(
        () => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            if (newCounts[index] < metric.value) {
              newCounts[index] = Math.min(newCounts[index] + increment, metric.value)
            }
            return newCounts
          })
        },
        duration / (metric.value / increment),
      )
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isVisible])

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-gray-100 dark:border-white/20 font-helvetica bg-white dark:bg-[oklch(26.9%_0_0)] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="relative mb-20 max-wxl">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-700 rounded-full text-white text-sm font-medium shadow-sm">
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
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Results
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight">
            Proven <span className="font-instrument-serif font-normal italic">Success</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My work has consistently delivered measurable results across multiple projects and industries.
          </p>
        </div>

        {/* Metrics display - aligned grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-white/90 dark:bg-gray-700 p-8 rounded-xl border border-gray-200/40 dark:border-gray-700/30 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.03]"
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Number */}
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-medium tabular-nums tracking-tight text-gray-900 dark:text-white">
                  {metric.value > 1000 ? formatNumber(counts[index]) : counts[index]}
                </span>
                <span className="text-2xl font-medium text-gray-600 dark:text-gray-300 ml-1">{metric.suffix}</span>
              </div>

              {/* Label and description */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">{metric.label}</h3>
                <div className="h-px w-12 mb-4 bg-gray-200 dark:bg-gray-600"></div>
                <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
