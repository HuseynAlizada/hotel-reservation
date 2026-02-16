"use client"

import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-16 px-4 md:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Main Hero Container with Dark Background */}
        <div className="relative bg-black rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[600px]">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 h-full">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Main Heading - Large and Bold */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Hotel ERP &
                <br />
                CRM System
              </h1>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-8">
                <a
                  href="https://wa.me/"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
                >
                  <MessageCircle className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
                >
                  <Send className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="flex-1 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-rWNEIE5Q5o1WD5jLbdeSmJxbeiksz.jpeg"
                  alt="Hotel ERP Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
