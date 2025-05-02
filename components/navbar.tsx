"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <div className="fixed top-0 w-full z-50">
      {/* Full-width background that appears on scroll */}
      <div
        className={`absolute inset-x-0 top-0 h-20 transition-all duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 pt-5 relative z-10">
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

        {/* Pill navigation in the middle for desktop */}
        <nav className="hidden md:block bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border-2 border-gray-200/60 dark:border-white/20 py-1.5 px-1.5 transition-all duration-300 font-helvetica shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_0_8px_rgba(161,161,170,0.15)]">
          <div className="flex justify-between items-center">
            {/* Desktop menu */}
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/ridwanhoque/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-300 text-xs"
              >
                LinkedIn
              </a>
              <Link
                href="/#about"
                className="px-4 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-300 text-xs"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="px-4 py-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-300 text-xs"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Combined pill for mobile with menu and theme toggle */}
        <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border-2 border-gray-200/60 dark:border-white/20 py-1 px-1.5 flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_0_8px_rgba(161,161,170,0.15)]">
          <ThemeToggle />
          <div className="h-6 w-px bg-gray-200 dark:bg-white/20 mx-1"></div>
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

        {/* Theme toggle on the right - desktop only */}
        <div className="hidden md:flex items-center">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border-2 border-gray-200/60 dark:border-white/20 p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_0_8px_rgba(161,161,170,0.15)]">
            <ThemeToggle />
          </div>
        </div>
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
                  className="block py-3 text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LinkedIn
                </a>
                <Link
                  href="/#about"
                  className="block py-3 text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block py-3 text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 dark:border-white/20 py-6 px-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Ridwan</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
