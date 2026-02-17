"use client"

import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      className="relative w-full overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32"
      style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part1-TuihonFcVZNPzSCG2mcg8F0sptrDNG.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'white',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/70 mix-blend-overlay" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-full flex flex-col">
        <div className="flex-1 flex items-end pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-end">
            {/* Left - Social Icons */}
            <div className="flex gap-4">
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.996-.228-3.926-.228-3.88 0-6.785 2.369-6.785 6.719v2.509z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 1.5h-5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h3.54l4.96-6.35-3.75 2.81z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.175h-3.868v-1.787c0-.974-.191-1.388-1.268-1.388-.977 0-1.156.411-1.156 1.388v1.787h-3.868v-1.787c0-.974-.191-1.388-1.268-1.388-.977 0-1.156.411-1.156 1.388v1.787h-3.868v16.218h3.868v-8.544c0-.974.191-1.388 1.268-1.388.977 0 1.156.411 1.156 1.388v8.544h3.868v-8.544c0-.974.191-1.388 1.268-1.388.977 0 1.156.411 1.156 1.388v8.544h3.868V3.175z" />
                </svg>
              </button>
            </div>

            {/* Right - Hotel ERP & CRM System Text */}
            <div className="flex flex-col items-end text-right">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight text-balance">
                Hotel ERP &<br />CRM System
              </h1>
              <div className="mt-4 flex items-center justify-end gap-2">
                <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
