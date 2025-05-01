import "./globals.css"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/scroll-progress"
import type { Metadata } from "next"
import { Instrument_Serif } from "next/font/google"
import ScrollToTop from "@/components/scroll-to-top"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

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
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
