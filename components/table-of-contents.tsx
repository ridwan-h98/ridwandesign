"use client"

import { useState, useEffect } from "react"

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    // Observe all section headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  return (
    <div className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] p-6 rounded-2xl sticky top-24 border border-gray-200 dark:border-white/20 shadow-sm">
      <div className="relative z-10">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
            Table of Contents
          </span>
        </div>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
                <a
                  href={`#${heading.id}`}
                  className={`block py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:transform hover:translate-x-1 ${
                    activeId === heading.id
                      ? "bg-gray-50 dark:bg-[oklch(0.25_0.01_256.848)] text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
