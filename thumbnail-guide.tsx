"use client"

import { useState } from "react"
import Image from "next/image"

export default function ThumbnailGuide() {
  const [showGuides, setShowGuides] = useState(true)

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Thumbnail Guide</h1>
        <p className="mb-4">Use this guide to understand the safe zones and focus areas for your thumbnails.</p>
        <button
          onClick={() => setShowGuides(!showGuides)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
        >
          {showGuides ? "Hide Guides" : "Show Guides"}
        </button>
      </div>

      <div className="space-y-12">
        {/* Projects Section Thumbnail */}
        <div>
          <h2 className="text-xl font-bold mb-4">Projects Section (1200×900px)</h2>
          <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=900&width=1200"
                alt="Project Thumbnail Guide"
                fill
                className="object-cover"
              />

              {showGuides && (
                <>
                  {/* Primary focus area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] border-2 border-blue-500 rounded-md flex items-center justify-center">
                      <span className="bg-blue-500/70 text-white px-2 py-1 text-sm rounded">Primary Focus (60%)</span>
                    </div>
                  </div>

                  {/* Safe zone */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] border-2 border-green-500 rounded-md flex items-center justify-center">
                      <span className="bg-green-500/70 text-white px-2 py-1 text-sm rounded absolute top-0 -translate-y-1/2">
                        Safe Zone (80%)
                      </span>
                    </div>
                  </div>

                  {/* Mobile crop indicators */}
                  <div className="absolute inset-x-0 top-0 h-[15%] bg-red-500/20 border-b border-red-500 flex items-center justify-center">
                    <span className="bg-red-500/70 text-white px-2 py-1 text-sm rounded">Mobile Crop</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[15%] bg-red-500/20 border-t border-red-500 flex items-center justify-center">
                    <span className="bg-red-500/70 text-white px-2 py-1 text-sm rounded">Mobile Crop</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>• On mobile: Top and bottom portions may be cropped</p>
            <p>• On desktop: Full image is visible in a 4:3 aspect ratio</p>
            <p>• Keep key visual elements within the safe zone (80% of image)</p>
            <p>• Place the most important content in the primary focus area</p>
          </div>
        </div>

        {/* Ideas Worth Sharing - Featured Card */}
        <div>
          <h2 className="text-xl font-bold mb-4">Ideas Worth Sharing - Featured Card (1200×800px)</h2>
          <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Featured Card Thumbnail Guide"
                fill
                className="object-cover"
              />

              {showGuides && (
                <>
                  {/* Primary focus area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] border-2 border-blue-500 rounded-md flex items-center justify-center">
                      <span className="bg-blue-500/70 text-white px-2 py-1 text-sm rounded">Primary Focus (60%)</span>
                    </div>
                  </div>

                  {/* Safe zone */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] border-2 border-green-500 rounded-md flex items-center justify-center">
                      <span className="bg-green-500/70 text-white px-2 py-1 text-sm rounded absolute top-0 -translate-y-1/2">
                        Safe Zone (80%)
                      </span>
                    </div>
                  </div>

                  {/* Mobile crop indicators */}
                  <div className="absolute inset-y-0 left-0 w-[15%] bg-red-500/20 border-r border-red-500 flex items-center justify-center">
                    <span className="bg-red-500/70 text-white px-2 py-1 text-sm rounded rotate-90">Mobile Crop</span>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-[15%] bg-red-500/20 border-l border-red-500 flex items-center justify-center">
                    <span className="bg-red-500/70 text-white px-2 py-1 text-sm rounded -rotate-90">Mobile Crop</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>• On mobile: Left and right portions may be cropped</p>
            <p>• On desktop: Full image is visible in a 3:2 aspect ratio</p>
            <p>• This is your largest thumbnail - use a high-impact image</p>
          </div>
        </div>

        {/* Ideas Worth Sharing - Standard Card */}
        <div>
          <h2 className="text-xl font-bold mb-4">Ideas Worth Sharing - Standard Card (800×600px)</h2>
          <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Standard Card Thumbnail Guide"
                fill
                className="object-cover"
              />

              {showGuides && (
                <>
                  {/* Primary focus area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[70%] h-[70%] border-2 border-blue-500 rounded-md flex items-center justify-center">
                      <span className="bg-blue-500/70 text-white px-2 py-1 text-sm rounded">Primary Focus (70%)</span>
                    </div>
                  </div>

                  {/* Safe zone */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%] h-[90%] border-2 border-green-500 rounded-md flex items-center justify-center">
                      <span className="bg-green-500/70 text-white px-2 py-1 text-sm rounded absolute top-0 -translate-y-1/2">
                        Safe Zone (90%)
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>• These smaller cards maintain their aspect ratio across devices</p>
            <p>• Less cropping occurs, so you can use more of the image area</p>
            <p>• Simple, high-contrast images work best at this smaller size</p>
          </div>
        </div>
      </div>
    </div>
  )
}
