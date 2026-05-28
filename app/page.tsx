import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import LogoCloud from "@/components/logo-cloud"
import Projects from "@/components/projects"
import Process from "@/components/process"
import Metrics from "@/components/metrics"
import Footer from "@/components/footer"
import AboutMe from "@/components/about-me"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[oklch(26.9%_0_0)]">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Projects />
      <Process />
      <Metrics />
      <AboutMe />
      <Footer />
    </main>
  )
}
