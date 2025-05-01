"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function MarketingOptimizationProject() {
  const [contentStructure, setContentStructure] = useState("")

  useEffect(() => {
    // This is just to display the content structure - it won't affect the actual page rendering
    const structure = `
[HERO SECTION]
[h1] Marketing Optimization
[p] Optimizing conversion rates for a UK market launch through data-driven design and testing.

[PROJECT DETAILS]
[detail-label] Client
[detail-value] UK E-commerce Company

[detail-label] Role
[detail-value] UX Strategist & Designer

[img] Marketing Optimization Project Hero Image
[img-description] A hero image showing data visualization or marketing analytics dashboard

[TABLE OF CONTENTS]
[toc-item] The Challenge
[toc-item] Marketing Strategy
[toc-item] Synthesising and Designing
[toc-item] Mitigating risk with A/B tests
[toc-item] Results
[toc-item] Learnings

[CONTENT SECTION]

[h2] The Challenge
[p] The primary task was to create and execute a comprehensive strategy that catered to the varied needs and preferences of the incoming user base, ensuring a seamless and tailored user experience for each segment. We needed to hit the ground running when launching into the new UK market, and developing an understanding of optimising conversion was the top priority.

[h2] Marketing Strategy
[p] Collaborated with marketing to execute a strategy to bring in new customers. Using platforms like Meta and Google. The news of an influx of up to 100,000 new site visitors

[img] Marketing strategy visualization
[img-description] Marketing strategy visualization showing campaign structure and targeting

[quote] "How do we get them to convert?"

[stat-box] Visitors
[stat-value] 100,000+
[stat-description] Marketing brought in 100,000 new visitors

[p] The team and I quickly understood that there was a new unknown, demographics, and behaviors had to be understood for us to drive conversion. Using Meta's Ads Tracker and Google's insights we developed a deep understanding of the values of incoming users brought in by different channels and campaigns that had been established. What ads worked and why?

[h2] Synthesising and Designing
[p] Amplitude gave insight into where traffic was coming from and a breakdown of sales. It was fundamental to get a sense of what channels brought in the most traffic. With the combination of these two pools of data, our new challenge was to synthesise and identify distinct customer groups - crafting tailored experiences to resonate with each.

[img] Traffic breakdown visualization
[img-description] Traffic Breakdown using Amplitude and Hotjar

[p] Furthermore, we implemented more tracking parameters such as heatmaps to give confidence in design decisions. With a process of marketing insight, traffic analysis and heatmapping, it gave us an idea to understand customer values. Giving us the groundwork for us to design sites and services. It's important to note that this gave us an idea and not a grounded understanding.

[h2] Mitigating risk with A/B tests
[p] Before site deployment, we leveraged A/B testing using Google Optimise. Tests were designed based on perceived risks, with high-traffic sites undergoing more rounds of testing. Embracing a build-test-iterate cycle, we continually refined designs to identify winning variations that resonated with users. We also tested journeys from when users initially visit an ad to the site that they get redirected to. This approach achieved the confidence of senior management.

[img] Heatmaps visualization
[img-description] Heatmaps and A/B testing of Ad to Site pairings

[h2] Results
[p] An average of 2% improvement occurred across 16 sites, with a high of 7% in some. Moreover, successfully implemented an optimisation process that both UK and AUS teams adopted. It wasn't a 'finger in the wind' process anymore - now there was an actual understanding of how to build, learn, and serve our customers. This new process also reduced the turnaround time of site improvement for future projects - from an average of months to now two weeks.

[h2] Learnings
[p] A crucial learning was the impact different traffic channels made. Meta users typically valued messaging, whereas Google users seemed to want to buy as soon as possible. This made sense once you understood the journeys of types of users.

[img] Results visualization
[img-description] Results showing Google brings in high intent users

[p] What this meant was a refocus on how we designed. Meta sites utilised more focus on content design and messaging whereas users coming from Google - were higher intent, which meant accessibility was fundamental for them to convert.
`
    setContentStructure(structure)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[oklch(0.2_0.01_256.848)] font-helvetica">
      {/* Hero section */}
      <div className="bg-gray-50 dark:bg-[oklch(0.22_0.01_256.848)] pt-24 border-b border-gray-100 dark:border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <Link
                href="/#projects"
                className="inline-flex items-center bg-white/90 dark:bg-[oklch(0.25_0.01_256.848)] text-gray-700 dark:text-gray-100 text-xs font-medium px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 shadow-sm hover:bg-gray-50 dark:hover:bg-[oklch(0.28_0.01_256.848)] transition-all duration-300 mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5 mr-2" />
                Back to Projects
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Marketing Optimization
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Optimizing conversion rates for a UK market launch through data-driven design and testing.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 dark:bg-white/20 my-8"></div>

              {/* Project details with badges */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">Client:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">UK E-commerce Company</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">Role:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">UX Strategist & Designer</span>
                </div>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                alt="Marketing Optimization Project"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Table of Contents */}
            <div className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] p-6 rounded-2xl sticky top-24 border border-gray-200 dark:border-white/20 shadow-sm">
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[oklch(0.25_0.01_256.848)] rounded-md border border-gray-200 dark:border-white/20">
                    Table of Contents
                  </span>
                </div>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#challenge"
                        className="block py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[oklch(0.25_0.01_256.848)] hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        The Challenge
                      </a>
                    </li>
                    <li>
                      <a
                        href="#marketing-strategy"
                        className="block py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[oklch(0.25_0.01_256.848)] hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Marketing Strategy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#synthesising"
                        className="block py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[oklch(0.25_0.01_256.848)] hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Synthesising and Designing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ab-testing"
                        className="block py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[oklch(0.25_0.01_256.848)] hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Mitigating risk with A/B tests
                      </a>
                    </li>
                    <li>
                      <a
                        href="#results"
                        className="block py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[oklch(0.25_0.01_256.848)] hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Results
                      </a>
                    </li>
                    <li>
                      <a
                        href="#learnings"
                        className="block py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[oklch(0.25_0.01_256.848)] hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Learnings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-3xl mx-auto dark:prose-invert" style={{ lineHeight: 2.2 }}>
              <style jsx global>{`
                .article-paragraph {
                  line-height: 2.2;
                  margin-bottom: 1.5rem;
                  font-size: 1.125rem;
                  letter-spacing: 0.01em;
                }
              `}</style>

              {/* Section 1: The Challenge */}
              <section id="challenge" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">The Challenge</h2>
                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  The primary task was to create and execute a comprehensive strategy that catered to the varied needs
                  and preferences of the incoming user base, ensuring a seamless and tailored user experience for each
                  segment. We needed to hit the ground running when launching into the new UK market, and developing an
                  understanding of optimising conversion was the top priority.
                </p>
              </section>

              {/* Section 2: Marketing Strategy */}
              <section id="marketing-strategy" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Marketing Strategy</h2>
                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  Collaborated with marketing to execute a strategy to bring in new customers. Using platforms like Meta
                  and Google. The news of an influx of up to 100,000 new site visitors
                </p>

                <div className="my-12">
                  <Image
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070"
                    alt="Marketing strategy visualization"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Marketing strategy visualization showing campaign structure and targeting
                  </p>
                </div>

                <div className="my-12 py-6 px-8 border-l-4 bg-gray-50 dark:bg-gray-800/30 border-gray-300 dark:border-gray-600">
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-bold">
                    <span className="font-['Georgia'] mr-2 text-gray-800 dark:text-gray-200">"</span>
                    How do we get them to convert?
                    <span className="font-['Georgia'] ml-2 text-gray-800 dark:text-gray-200">"</span>
                  </p>
                </div>

                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  The team and I quickly understood that there was a new unknown, demographics, and behaviors had to be
                  understood for us to drive conversion. Using Meta's Ads Tracker and Google's insights we developed a
                  deep understanding of the values of incoming users brought in by different channels and campaigns that
                  had been established. What ads worked and why?
                </p>
              </section>

              {/* Section 3: Synthesising and Designing */}
              <section id="synthesising" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Synthesising and Designing</h2>
                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  Amplitude gave insight into where traffic was coming from and a breakdown of sales. It was fundamental
                  to get a sense of what channels brought in the most traffic. With the combination of these two pools
                  of data, our new challenge was to synthesise and identify distinct customer groups - crafting tailored
                  experiences to resonate with each.
                </p>

                <div className="my-12">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                    alt="Traffic breakdown visualization"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Traffic Breakdown using Amplitude and Hotjar
                  </p>
                </div>

                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  Furthermore, we implemented more tracking parameters such as heatmaps to give confidence in design
                  decisions. With a process of marketing insight, traffic analysis and heatmapping, it gave us an idea
                  to understand customer values. Giving us the groundwork for us to design sites and services. It's
                  important to note that this gave us an idea and not a grounded understanding.
                </p>
              </section>

              {/* Section 4: Mitigating risk with A/B tests */}
              <section id="ab-testing" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Mitigating risk with A/B tests
                </h2>
                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  Before site deployment, we leveraged A/B testing using Google Optimise. Tests were designed based on
                  perceived risks, with high-traffic sites undergoing more rounds of testing. Embracing a
                  build-test-iterate cycle, we continually refined designs to identify winning variations that resonated
                  with users. We also tested journeys from when users initially visit an ad to the site that they get
                  redirected to. This approach achieved the confidence of senior management.
                </p>

                <div className="my-12">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                    alt="Heatmaps visualization"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Heatmaps and A/B testing of Ad to Site pairings
                  </p>
                </div>
              </section>

              {/* Section 5: Results */}
              <section id="results" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Results</h2>
                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  An average of 2% improvement occurred across 16 sites, with a high of 7% in some. Moreover,
                  successfully implemented an optimisation process that both UK and AUS teams adopted. It wasn't a
                  'finger in the wind' process anymore - now there was an actual understanding of how to build, learn,
                  and serve our customers. This new process also reduced the turnaround time of site improvement for
                  future projects - from an average of months to now two weeks.
                </p>
              </section>

              {/* Section 6: Learnings */}
              <section id="learnings" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Learnings</h2>
                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  A crucial learning was the impact different traffic channels made. Meta users typically valued
                  messaging, whereas Google users seemed to want to buy as soon as possible. This made sense once you
                  understood the journeys of types of users.
                </p>

                <div className="my-12">
                  <Image
                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070"
                    alt="Results visualization"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Results showing Google brings in high intent users
                  </p>
                </div>

                <p className="text-gray-800 dark:text-gray-300 article-paragraph">
                  What this meant was a refocus on how we designed. Meta sites utilised more focus on content design and
                  messaging whereas users coming from Google - were higher intent, which meant accessibility was
                  fundamental for them to convert.
                </p>
              </section>
            </article>

            {/* Content Structure Display (hidden in production) */}
            <div className="hidden">
              <pre>{contentStructure}</pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
