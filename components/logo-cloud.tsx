"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function LogoCloud() {
  const sectionRef = useRef<HTMLElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 animate-on-scroll font-helvetica border-b border-gray-100 dark:border-white/20 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at center 300%, rgba(191, 219, 254, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
      }}
    >
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: "radial-gradient(circle at center 150%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      ></div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              I've worked with amazing companies
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
            {[
              {
                name: "Home Office",
                src: "/images/home-office-logo.png",
                href: "https://www.gov.uk/government/organisations/home-office",
              },
              {
                name: "National Highways",
                src: "/images/national-highways-logo.png",
                href: "https://nationalhighways.co.uk/",
              },
              {
                name: "Capgemini Invent",
                src: "/images/capgemini-invent-logo.png",
                href: "https://www.capgemini.com/about-us/who-we-are/our-brands/capgemini-invent/",
              },
              {
                name: "Eucalyptus",
                src: "/images/eucalyptus-logo.png",
                href: "https://www.eucalyptus.health/",
              },
              {
                name: "Lab3",
                src: "/images/lab3-logo.png",
                className: "lab3-logo",
                href: "https://lab3apps.com/",
              },
              {
                name: "WTW",
                src: "/images/wtw-logo.svg",
                className: "wtw-logo",
                href: "https://www.wtwco.com/en-gb",
              },
            ].map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.4s ease",
                }}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 h-24 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] dark:hover:shadow-blue-900/30 hover:transform hover:scale-[1.05]"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={110}
                  height={36}
                  className={`max-h-8 w-auto transition-opacity duration-300 ${
                    logo.className ? logo.className : ""
                  } ${logo.name !== "Lab3" && logo.name !== "WTW" ? "dark:brightness-0 dark:invert" : ""}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom styles for Lab3 and WTW logos */}
      <style jsx global>{`
        .lab3-logo {
          filter: brightness(0) saturate(100%) invert(19%) sepia(98%) saturate(2254%) hue-rotate(195deg) brightness(96%) contrast(101%);
        }
        
        .dark .lab3-logo {
          filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
        }

        .wtw-logo {
          /* The logo is already purple, so we don't need to modify it in light mode */
        }
        
        .dark .wtw-logo {
          filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
        }
      `}</style>
    </section>
  )
}
