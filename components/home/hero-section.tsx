"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-balance">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hotel ERP & CRM System
              </h1>
              <p className="text-lg text-gray-400">
                All-in-one solution for modern hotel operations
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full flex items-center justify-end">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part1-TuihonFcVZNPzSCG2mcg8F0sptrDNG.jpeg"
              alt="Hotel ERP Dashboard"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 pb-8">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
