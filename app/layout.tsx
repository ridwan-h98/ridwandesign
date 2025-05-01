import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/scroll-progress"
import type { Metadata } from "next"
import { Instrument_Serif } from "next/font/google"
// Import the ScrollToTop component at the top of the file
import ScrollToTop from "@/components/scroll-to-top"

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "UX Portfolio",
  description: "Showcasing my UX design work and process",
    generator: 'v0.dev'
}

// Inside the RootLayout component, add the ScrollToTop component right after the opening <body> tag
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSerif.variable}`}>
      <body className="font-helvetica antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToTop />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
