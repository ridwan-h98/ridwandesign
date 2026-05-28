"use client"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { ReactNode } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return (localStorage.getItem("theme") as Theme) || "light"
}

export function ThemeProvider({ children, defaultTheme = "light" }: { children: ReactNode; defaultTheme?: Theme; attribute?: string; enableSystem?: boolean; disableTransitionOnChange?: boolean }) {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme() || defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    const stored = getStoredTheme() || defaultTheme
    return stored === "system" ? getSystemTheme() : (stored as "light" | "dark")
  })

  const applyTheme = useCallback((resolved: "light" | "dark") => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolved)
    setResolvedTheme(resolved)
  }, [])

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme
    applyTheme(resolved)
  }, [applyTheme])

  useEffect(() => {
    const stored = getStoredTheme() || defaultTheme
    const resolved = stored === "system" ? getSystemTheme() : (stored as "light" | "dark")
    setThemeState(stored)
    applyTheme(resolved)
  }, [defaultTheme, applyTheme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      if (theme === "system") {
        applyTheme(getSystemTheme())
      }
    }
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [theme, applyTheme])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
