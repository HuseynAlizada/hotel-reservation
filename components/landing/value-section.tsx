"use client"

import Image from "next/image"

export function ValueSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              All-in-One Solutions
              <br />
              Built for Modern Hotels
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed">
              From front desk operations to restaurant POS and inventory control, our unified platform connects every department into one powerful, real-time system — reducing costs, saving time, and elevating guest experiences.
            </p>

            {/* Stats Side by Side */}
            <div className="flex gap-8 md:gap-12">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600 mt-2">Payment Methods</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600 mt-2">Hotel Users</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image with Badge */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gray-100 border-4 border-gray-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-2lfixzlBCaNL7E6gpEcXbALoV9ueGI.jpeg"
                alt="Hotel Management Dashboard"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-200">
              <p className="text-xs text-gray-600 font-medium">Payment</p>
              <p className="text-lg font-bold text-gray-900">15+</p>
            </div>
            
            <div className="absolute bottom-12 right-0 bg-gray-100 rounded-lg shadow-lg px-4 py-3 border border-gray-300">
              <p className="text-xs text-gray-600 font-medium">Users</p>
              <p className="text-lg font-bold text-gray-900">50+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
