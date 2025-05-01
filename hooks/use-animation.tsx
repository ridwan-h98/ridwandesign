"use client"

import { useEffect, useRef } from "react"

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-in-right"
  | "slide-in-left"
  | "zoom-in"

interface UseAnimationOptions {
  type?: AnimationType
  threshold?: number
  delay?: number
  root?: Element | null
  rootMargin?: string
}

export function useAnimation<T extends HTMLElement>(options: UseAnimationOptions = {}) {
  const { type = "fade-up", threshold = 0.1, delay = 0, root = null, rootMargin = "0px" } = options

  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    // Add base class for initial state
    element.classList.add("animate-on-scroll")

    // Set animation delay if provided
    if (delay > 0) {
      element.style.animationDelay = `${delay}s`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the animation class directly without @apply
          element.classList.add(`animate-${type}`)
          observer.unobserve(element)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [type, threshold, delay, root, rootMargin])

  return elementRef
}
