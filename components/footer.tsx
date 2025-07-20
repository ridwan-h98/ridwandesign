"use client"

import { useEffect, useRef } from "react"
import { AtSign, ExternalLink } from "lucide-react"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

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

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-white dark:bg-[oklch(26.9%_0_0)] py-12 animate-on-scroll font-helvetica"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Let's work <span className="font-instrument-serif font-normal italic">together</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-0">Available for new projects and collaborations.</p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:ridwanulhoque98@gmail.com"
              className="flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                <AtSign className="h-4 w-4" />
              </span>
              ridwanulhoque98@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/ridwanhoque/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                <ExternalLink className="h-4 w-4" />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/20">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Ridwan Hoque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
