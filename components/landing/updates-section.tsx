'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function UpdatesSection() {
  return (
    <section className="bg-neutral-900 text-white px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                <span>Stay Updated.</span>
                <br />
                <span>Stay In Control.</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg">
                Get product updates, feature releases, and hospitality insights — straight to your inbox
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/request-form">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 h-10">
                  Get Request form
                </Button>
              </Link>
              <Link href="/request-form">
                <Button className="bg-neutral-800 text-white hover:bg-neutral-700 px-6 py-2 h-10 border border-neutral-700">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-rWNEIE5Q5o1WD5jLbdeSmJxbeiksz.jpeg"
                alt="Dashboard mockup"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
