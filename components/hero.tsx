"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([null])
  const badgeRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    // Badge animation
    if (badgeRef.current) {
      badgeRef.current.classList.add("opacity-0", "translate-y-4")
      setTimeout(() => {
        badgeRef.current?.classList.remove("opacity-0", "translate-y-4")
        badgeRef.current?.classList.add("opacity-100", "translate-y-0")
      }, 300)
    }

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section className="relative pt-20 pb-24 md:pt-40 md:pb-32 overflow-hidden font-helvetica bg-white dark:bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-background"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/30 dark:to-card/20"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 mb-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold shadow-lg transition-all duration-700"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] mb-8 md:mb-12">
            <span className="block text-gray-900 dark:text-white">Design that drives</span>
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
              real impact
            </span>
          </h1>

          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              I partner with forward-thinking teams to create digital experiences that solve complex problems and
              deliver measurable results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button
              onClick={scrollToProjects}
              className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-lg shadow-lg"
            >
              View My Work
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="mailto:ridwanulhoque98@gmail.com"
              className="bg-transparent text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-center text-lg"
            >
              Let's Talk
            </a>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-16"></div>

          <div className="mb-20">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider">
              Trusted by leading organizations
            </p>
            <div className="flex flex-wrap items-center justify-start gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {[
                { name: "Home Office", src: "/images/home-office-logo.svg" },
                { name: "National Highways", src: "/images/national-highways-logo.svg" },
                { name: "Capgemini Invent", src: "/images/capgemini-invent-logo.svg" },
                { name: "Eucalyptus", src: "/images/eucalyptus-logo.svg" },
                { name: "Lab3", src: "/images/lab3-logo.svg" },
                { name: "WTW", src: "/images/wtw-logo.svg" },
              ].map((logo) => (
                <div key={logo.name} className="flex items-center justify-center h-5">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    width={80}
                    height={20}
                    className="max-h-5 w-auto object-contain dark:brightness-0 dark:invert grayscale hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
