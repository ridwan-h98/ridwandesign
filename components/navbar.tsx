"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Handle hash navigation after page load
  useEffect(() => {
    // Check if we arrived from another page with a hash in the URL
    if (window.location.hash) {
      // Wait a moment for the page to fully render
      setTimeout(() => {
        const sectionId = window.location.hash.substring(1) // Remove the # character
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    }
  }, [])

  return (
    <>
      {/* Main static Navbar */}
      <div className="relative w-full z-30 bg-white dark:bg-[oklch(26.9%_0_0)]">
        <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-sm font-medium text-gray-900 dark:text-gray-100"
              onClick={() => {
                // Force scroll to top when clicking the logo
                window.scrollTo(0, 0)
              }}
            >
              Ridwan
            </Link>
          </div>

          {/* Navigation links for desktop */}
          <nav className="hidden md:block font-helvetica">
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/ridwanhoque/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-300 text-xs font-medium"
              >
                LinkedIn
              </a>
              <Link
                href="/#about"
                className="px-4 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-300 text-xs font-medium"
              >
                About
              </Link>
              <a
                href="mailto:ridwanulhoque98@gmail.com"
                className="px-4 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-300 text-xs font-medium"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-full text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {isMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {/* Light divider at the bottom of the nav */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100 dark:bg-white/20" />
      </div>

      {/* Mobile menu (full screen) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden">
          <div className="h-full flex flex-col">
            {/* Header with close button */}
            <div className="border-b border-gray-100 dark:border-white/20 py-5">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ridwan
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
                >
                  <X className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Menu items */}
            <div className="flex-1 flex flex-col justify-center px-4">
              <div className="space-y-8 text-center">
                <a
                  href="https://www.linkedin.com/in/ridwanhoque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LinkedIn
                </a>
                <Link
                  href="/#about"
                  className="block py-3 text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <a
                  href="mailto:ridwanulhoque98@gmail.com"
                  className="block py-3 text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 dark:border-white/20 py-6 px-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Ridwan</p>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Theme Toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border-2 border-gray-200/60 dark:border-white/20 p-2.5 shadow-lg">
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
