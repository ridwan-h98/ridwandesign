"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const polaroidAnimationStyle = `
  @keyframes polaroidIn {
    0% {
      opacity: 0;
      transform: translateY(30px) rotate(-3deg);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotate(-2deg);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
  }
`

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

    elementsRef.current.forEach((el, i) => {
      if (el) {
        el.style.animationDelay = `${0.2 + i * 0.1}s`
        observer.observe(el)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.innerHTML = polaroidAnimationStyle
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-32 bg-white dark:bg-[oklch(0.2_0.01_256.848)] font-helvetica border-b border-gray-100 dark:border-white/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column - About text and experience (moved from right) */}
          <div ref={(el) => (elementsRef.current[1] = el)} className="animate-on-scroll order-2 md:order-1">
            {/* Nest everything in a single card */}
            <div
              className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.02)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ""
              }}
            >
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  <span className="font-instrument-serif font-normal italic">Lil'</span>about me
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    I blend computer science background with creative design thinking to craft user-centered
                    experiences. My career spans startups and government sectors, working on projects ranging from rapid
                    prototypes to enterprise solutions. This diverse experience allows me to bridge technical and design
                    perspectives effectively.
                  </p>

                  {/* Add divider here */}
                  <div className="w-full h-px bg-gray-200 dark:bg-white/20 my-8"></div>

                  {/* Work section */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-8">Work</h3>

                    <div className="space-y-16">
                      <div className="flex items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#2B0A3D] dark:bg-[#2B0A3D] rounded-full flex items-center justify-center mr-4 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                            <svg
                              width="415"
                              height="415"
                              viewBox="0 0 415 415"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M350.342 210.583C342.209 194.241 325.053 187.235 307.493 188.066C290.527 188.864 278.148 199.692 268.71 213.01C258.019 228.075 250.524 245.279 241.797 261.504C233.378 277.143 224.332 292.463 212.229 305.548C198.81 320.069 181.94 331.003 163 336.752C171.759 343.076 183.904 344.502 194.372 344.896C206.189 345.354 218.164 344.268 229.811 342.182C251.086 338.36 274.05 330.886 289.763 315.31C265.238 315.63 245.438 299.075 243.687 274.13C259.474 293.304 283.361 300.682 307.249 293.869C328.185 287.896 345.002 271.288 351.796 250.613C356.085 237.475 356.51 223.209 350.342 210.583"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M350 192.377C342.014 165.916 325.85 142.719 304.369 123.054C281.177 101.935 253.634 85.9164 224.752 73.8306C222.424 72.8659 220.074 71.9117 217.745 71H217.723C182.174 113.47 59 145.179 59 234.221C59 269.048 81.0869 301.594 113.478 314.655C133.608 321.462 155.302 320.189 174.645 311.411C193.34 302.93 207.568 287.993 219.031 271.327C231.112 253.75 240.342 234.444 251.837 216.485C262.514 199.819 276.179 183.175 296.436 178.468C314.801 174.206 336.548 178.966 350 192.377"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-grow mt-4 sm:mt-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-base m-0">
                                Capgemini Invent
                              </h4>
                              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-0">UX Consultant</p>
                            </div>
                            <span className="text-gray-400 dark:text-gray-500 text-sm mt-2 sm:mt-0">
                              March 2023 — September 2023
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center mr-4 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                            <svg
                              width="415"
                              height="415"
                              viewBox="0 0 415 415"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7"
                            >
                              <path d="M256.187 102.563L222.351 97L225.375 115.756L256.187 102.563Z" fill="#1B315E" />
                              <path
                                d="M269.248 131.44L251.919 139.808L189.957 130.926L256.186 102.562L269.248 131.44Z"
                                fill="#0E8BCA"
                              />
                              <path
                                d="M189.951 130.92L274.499 143.04L214.176 173.526L185.583 171.831L189.951 130.92Z"
                                fill="#1B315E"
                              />
                              <path
                                d="M290.336 178.04L263.344 193.592L183.767 188.904L274.502 143.044L290.336 178.04Z"
                                fill="#0E8BCA"
                              />
                              <path
                                d="M183.763 188.904L298.297 195.64L224.596 240.804L178.009 242.735L183.763 188.904Z"
                                fill="#1B315E"
                              />
                              <path
                                d="M317 236.992L298.302 195.642L97 319L218.228 306.462L317 236.992Z"
                                fill="#0E8BCA"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-grow mt-4 sm:mt-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-base m-0">
                                National Highways
                              </h4>
                              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-0">
                                Senior Service Designer
                              </p>
                            </div>
                            <span className="text-gray-400 dark:text-gray-500 text-sm mt-2 sm:mt-0">
                              October 2023 — September 2024
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#00AA53] dark:bg-[#00AA53] rounded-full flex items-center justify-center mr-4 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                            <svg
                              width="415"
                              height="415"
                              viewBox="0 0 415 415"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7"
                            >
                              <path
                                d="M156.604 149.96H197.794C196.812 152.214 196.015 154.539 195.411 156.915C194.202 163.891 192.61 170.89 192.384 177.91C191.898 193.059 192.147 208.23 192.158 223.39C192.184 225.163 192.404 226.928 192.813 228.655C195.512 240.722 207.281 245.724 218.089 239.219C221.917 237.021 225.094 233.897 227.308 230.152C229.523 226.407 230.701 222.169 230.728 217.85C231.055 201.747 230.648 185.6 229.835 169.508C229.497 163.036 227.272 156.651 225.86 150.026H266.339C266.341 150.619 266.261 151.209 266.101 151.781C262.396 160.249 261.257 169.222 261.166 178.272C260.963 197.623 260.963 216.973 261.166 236.323C261.278 245.845 262.442 255.289 266.813 264.526H235.618C234.32 255.191 233.009 245.702 231.699 236.224L231.078 236.126C230.762 237.223 230.434 238.418 230.129 239.581C229.147 243.311 228.47 247.15 227.125 250.759C223.511 260.544 216.203 266.423 205.666 268.146C196.901 269.583 188.148 269.407 179.689 266.072C176.347 264.819 173.317 262.891 170.8 260.416C168.282 257.94 166.335 254.974 165.085 251.713C162.947 246.101 161.924 240.145 162.07 234.162C162.07 218.201 162.205 202.23 161.912 186.269C161.766 178.54 161.186 170.824 160.172 163.156C159.585 158.769 157.914 154.512 156.604 149.96Z"
                                fill="white"
                              />
                              <path
                                d="M137.584 170.222C135.429 165.386 132.237 161.053 128.221 157.51C124.205 153.967 119.458 151.296 114.295 149.676C109.103 148.005 103.735 146.902 98.2911 146.385C72.495 143.917 49.5563 156.258 40.6903 180.819C34.0684 198.799 34.4702 218.514 41.8197 236.226C44.1375 242.317 47.7081 247.886 52.3139 252.593C56.9199 257.3 62.4644 261.047 68.6097 263.606C80.1285 268.448 92.8227 270.026 105.226 268.158C124.426 265.536 137.697 252.472 140.972 233.176C139.741 234.076 138.792 234.876 137.731 235.513C132.965 238.409 128.458 242.04 123.297 243.959C110.975 248.534 98.4492 248.83 87.042 241.294C76.5157 234.361 72.6191 223.742 70.4168 211.522H141.706C143.321 197.108 143.773 183.364 137.584 170.222ZM69.5133 200.366C69.0727 190.044 70.2248 180.523 75.6009 171.944C80.0509 164.858 86.6354 161.315 95.2755 162.291C102.402 163.103 107.519 167.118 110.952 173.03C115.808 181.378 117.243 190.582 117.412 200.366H69.5133Z"
                                fill="white"
                              />
                              <path
                                d="M358.14 190.578C357.538 187.606 356.743 184.675 355.757 181.802C354.12 177.798 352.504 173.608 349.952 170.141C341.39 158.503 324.076 159.611 316.679 172.006C314.067 176.525 312.495 181.54 312.071 186.705C311.065 196.852 311.032 207.01 313.822 216.959C314.8 220.537 316.113 224.022 317.741 227.369C328.684 249.385 354.243 251.777 370.823 239.875C373.478 237.977 375.94 235.827 379 233.392C378.951 234.495 378.826 235.595 378.628 236.683C373.377 256.428 358.242 268.088 337.145 268.637C329.661 268.976 322.175 268.014 315.042 265.796C300.111 260.892 289.708 251.184 283.892 237.154C276.488 219.842 275.722 200.526 281.734 182.713C288.929 160.949 304.877 149.212 328.04 146.59C341.3 145.087 354.254 146.338 366.532 151.713C370.057 153.462 373.487 155.384 376.809 157.472C370.745 168.825 364.905 179.751 359.055 190.676L358.14 190.578Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-grow mt-4 sm:mt-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-base m-0">Eucalyptus</h4>
                              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-0">UX Designer</p>
                            </div>
                            <span className="text-gray-400 dark:text-gray-500 text-sm mt-2 sm:mt-0">
                              April 2022 — March 2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-16">
                      <a
                        href="https://docs.google.com/document/d/1-wRVz-llb5nGAWiu1UPl7-VWqBf_VL8gwN9wM1sEEDQ/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-3 px-4 bg-gray-100 dark:bg-gray-800/60 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 rounded-lg transition-colors duration-300 font-medium text-sm no-underline"
                      >
                        View CV
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 w-4 h-4"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mentoring Section - Now placed outside the main card */}
            <div className="mt-8">
              <div
                className="bg-white dark:bg-[oklch(0.22_0.01_256.848)] rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 p-8 md:p-10"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.02)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ""
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-600 dark:text-blue-300"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">UX Design Mentor</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  I'm passionate about helping junior and graduate designers grow in their careers. I offer mentoring
                  sessions through ADPList where I provide guidance on portfolio development, career advice, and UX best
                  practices.
                </p>
                <a
                  href="https://adplist.org/mentors/ridwan-hoque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-gray-100 dark:bg-gray-800/60 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 rounded-lg transition-colors duration-300 font-medium text-sm no-underline"
                >
                  Book a mentoring session
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Polaroid image (moved from left) */}
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className="animate-on-scroll flex justify-center items-center h-full order-1 md:order-2"
          >
            <div
              className="relative bg-white dark:bg-gray-100 p-5 shadow-lg max-w-lg mx-auto transform rotate-[-2deg] transition-all duration-500 hover:rotate-[3deg] hover:scale-110 hover:shadow-2xl"
              style={{
                animation: "polaroidIn 1s ease-out forwards",
                opacity: 0,
                transform: "translateY(20px) rotate(-2deg)",
              }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rid%20in%20the%20wild.jpg-JxcSYMzCmErrlwvXaPeToBCoRCwPA9.jpeg"
                  alt="Ridwan sitting on a chair"
                  width={800}
                  height={1067}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="mt-4 mb-2 text-center">
                <p className="text-gray-800 font-medium text-sm">Rid in the wild</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
