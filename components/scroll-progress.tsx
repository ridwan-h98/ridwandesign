"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Call once to set initial state
    handleScroll()

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1.5 bg-gray-100 dark:bg-gray-800">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(to right, #3b82f6, #2563eb)",
          backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
        }}
        role="progressbar"
        aria-valuenow={scrollProgress * 100}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
