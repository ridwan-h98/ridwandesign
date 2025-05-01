"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
// import Image from "next/image"

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
    <section className="relative pt-36 pb-16 md:pt-64 md:pb-52 overflow-hidden font-helvetica border-b border-gray-100 dark:border-white/20 bg-white dark:bg-[oklch(0.2_0.01_256.848)]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white dark:bg-[oklch(0.2_0.01_256.848)]"></div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white dark:bg-[oklch(0.2_0.01_256.848)]">
          <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[oklch(0.2_0.01_256.848)] dark:to-[oklch(0.18_0.01_256.848)]"></div>
          <div className="absolute inset-0 dark:bg-radial-gradient-to-t dark:from-blue-900/20 dark:via-blue-800/10 dark:to-transparent"></div>
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 hidden dark:block dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 hidden dark:block dark:bg-blue-900/20 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 hidden dark:block dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-64 h-64 hidden dark:block dark:bg-gray-800/30 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 h-96 hidden dark:block dark:bg-gray-800 rounded-full opacity-35 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full h-64 hidden dark:block dark:bg-gray-700 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/3 w-96 h-96 hidden dark:block dark:bg-gray-800 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/3 w-96 h-96 hidden dark:block dark:bg-gray-700 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-full h-80 hidden dark:block dark:bg-gray-600/50 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-800 rounded-full text-white text-sm font-medium shadow-sm transition-all duration-700"
          >
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
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              <path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
            </svg>
            Product Design
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 md:mb-10">
            <span className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Crafting{" "}
            </span>
            <span className="font-instrument-serif font-normal italic text-gray-700 dark:text-gray-300">
              meaningful
            </span>{" "}
            <span className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              experiences
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 md:mb-10">
            I design intuitive and impactful digital products that solve real user problems and deliver meaningful
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 md:mb-16 justify-center">
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-b from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium hover:from-gray-900 hover:to-black dark:hover:from-gray-100 dark:hover:to-white transition-all duration-300 text-center flex items-center justify-center"
            >
              See My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a
              href="mailto:ridwanulhoque98@gmail.com"
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
