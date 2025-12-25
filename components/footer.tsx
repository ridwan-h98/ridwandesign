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
      className="bg-white dark:bg-background py-16 md:py-20 animate-on-scroll font-helvetica relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-transparent to-transparent dark:from-blue-400/18 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-transparent to-transparent dark:from-blue-500/20 blur-3xl"></div>
      </div>
      {/* </CHANGE> */}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight leading-[0.9]">
              Let's build something <span className="dark:text-blue-400 text-blue-500">great</span>
            </h2>
            <p className="text-lg md:text-xl dark:text-blue-400 mb-0 font-medium text-gray-600">
              Ready to transform your next project.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:ridwanulhoque98@gmail.com"
              className="flex items-center gap-4 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 group text-base md:text-lg font-medium"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                <AtSign className="h-5 w-5" />
              </span>
              ridwanulhoque98@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/ridwanhoque/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 group text-base md:text-lg font-medium"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                <ExternalLink className="h-5 w-5" />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-border">
          <p className="text-gray-500 dark:text-gray-400 text-base">
            © {new Date().getFullYear()} Ridwan Hoque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
