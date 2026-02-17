"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtalSection() {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              Stay Updated.
              <br />
              Stay In Control.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Get product updates, feature releases, and hospitality insights — straight to your inbox.
            </p>
            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link href="/request-form">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  Get Request form
                </Button>
              </Link>
              <Link href="/request-form">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part4-Rjs90zjT1z4w972J15XBg9dxm1FqjU.jpeg"
              alt="Stay Updated Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
