"use client"

export default function Process() {

  return (
    <section
      id="process"
      className="py-20 md:py-28 font-helvetica relative overflow-hidden bg-white dark:bg-background border-b border-gray-100 dark:border-border"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-transparent to-transparent dark:from-blue-400/15 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-transparent to-transparent dark:from-blue-500/15 blur-3xl"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-border" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gray-100 dark:bg-secondary rounded-full text-gray-700 dark:text-secondary-foreground text-sm font-medium">
            Process
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[0.9]">
            How I deliver <span className="dark:text-blue-400 text-blue-500">results</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven methodology that transforms complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div
            
            className="group relative bg-white/90 dark:bg-card rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:transform hover:scale-[1.03] overflow-hidden"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)"
            }}
          >
            <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 p-10">
              <h3 className="text-2xl font-bold">What I deliver</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-0">
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Service Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Product Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Interaction Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  User Research
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4">Design Systems</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div
            
            className="group relative bg-white/90 dark:bg-card rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:transform hover:scale-[1.03] overflow-hidden"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)"
            }}
          >
            <div className="bg-cyan-50 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-100 p-10">
              <h3 className="text-2xl font-bold">How I work</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-0">
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  User-Centered Design
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Agile Methodology
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Design Thinking
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Collaborative Approach
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4">Iterative Process</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div
            
            className="group relative bg-white/90 dark:bg-card rounded-xl border border-gray-200/40 dark:border-border transition-all duration-300 hover:transform hover:scale-[1.03] overflow-hidden"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)"
            }}
          >
            <div className="bg-purple-50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 p-10">
              <h3 className="text-2xl font-bold">Tools I use</h3>
            </div>
            <div className="p-10">
              <ul className="space-y-0">
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Figma
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Adobe Creative Suite
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Sketch
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4 border-b border-gray-200/50 dark:border-gray-600/30">
                  Miro
                </li>
                <li className="text-lg text-gray-700 dark:text-gray-300 font-medium py-4">Prototyping Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
