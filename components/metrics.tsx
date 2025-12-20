"use client"

import { useState, useEffect, useRef } from "react"
import { Users, TrendingDown, Target } from "lucide-react"

const metrics = [
  {
    value: 100000,
    label: "Users Served",
    suffix: "+",
    description: "Designed service for over 100,000 users",
    icon: Users,
  },
  {
    value: 60,
    label: "Cost Reduction",
    suffix: "%",
    description: "Led UX, driving 60% reduction in operating costs",
    icon: TrendingDown,
  },
  {
    value: 75,
    label: "Delivery Improvement",
    suffix: "%",
    description: "Elevated UX team's maturity, enabling 75% improvement in project delivery",
    icon: Target,
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

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-gray-100 dark:border-border font-helvetica bg-white dark:bg-background overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/4 to-transparent dark:from-emerald-400/7 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/4 to-transparent dark:from-green-400/7 blur-3xl"></div>
      </div>
      {/* End of added gradient background */}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="relative mb-20 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold shadow-lg">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Results
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[0.9]">
            Proven{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium max-w-3xl">
            My work has consistently delivered measurable results across multiple projects and industries.
          </p>
        </div>

        {/* Metrics display - aligned grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div
                key={index}
                className="group relative bg-white/90 dark:bg-card p-8 rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.03] overflow-hidden"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Animated icon at the top of each card */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-secondary mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>

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
                  <div className="h-px w-12 mb-4 bg-gray-200 dark:bg-border"></div>
                  <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
