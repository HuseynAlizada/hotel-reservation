"use client"

import Image from "next/image"

export function ValueSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              All-in-One Solutions
              <br />
              Built for Modern Hotels
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From front desk operations to restaurant POS and inventory control, our unified platform connects every department into one powerful, real-time system — reducing costs, saving time, and elevating guest experiences.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600 mt-1">Payment Methods</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600 mt-1">Hotel Users</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-200 to-gray-100 border-8 border-black">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-rWNEIE5Q5o1WD5jLbdeSmJxbeiksz.jpeg"
                alt="Hotel Management Dashboard"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
