"use client"

import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Main Hero Container */}
        <div className="relative bg-gradient-to-br from-black via-neutral-900 to-black rounded-3xl overflow-hidden border border-neutral-800 p-8 md:p-12 lg:p-16">
          {/* Background gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0"></div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Top Badge */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                  Hotel Management Solution
                </span>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Hotel ERP &<br />CRM System
                </h1>
                <p className="text-lg text-neutral-400">
                  Complete platform for modern hotel management
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors border border-neutral-700"
                >
                  <MessageCircle className="h-4 w-4 text-neutral-400" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors border border-neutral-700"
                >
                  <Instagram className="h-4 w-4 text-neutral-400" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors border border-neutral-700"
                >
                  <Linkedin className="h-4 w-4 text-neutral-400" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors border border-neutral-700"
                >
                  <Send className="h-4 w-4 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-8 border-neutral-900 shadow-2xl bg-gradient-to-b from-neutral-100 to-neutral-50">
                {/* <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-rWNEIE5Q5o1WD5jLbdeSmJxbeiksz.jpeg"
                  alt="Hotel ERP Dashboard"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
