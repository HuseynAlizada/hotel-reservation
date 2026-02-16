'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Operations Manager, Boutique Hotel",
    quote: "Complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and far more reliable.",
  },
  {
    id: 2,
    name: "Fatima Al-Mansouri",
    role: "General Manager, City Hotel",
    quote: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and far more reliable.",
  },
  {
    id: 3,
    name: "Karim Abdulaziz",
    role: "Operations Manager, Boutique Hotel",
    quote: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and far more reliable.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-neutral-50 px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our <span className="text-neutral-500">Clients Say</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable daily operations.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length
              const isNext = index === (currentIndex + 1) % testimonials.length

              if (!isActive && !isPrev && !isNext) return null

              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    isActive ? "md:scale-100 opacity-100" : "md:scale-95 opacity-60"
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 h-full flex flex-col gap-4 border border-neutral-200">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold">
                        W
                      </div>
                      <span className="text-sm font-medium text-neutral-900">Webonly</span>
                    </div>

                    {/* Quote */}
                    <p className="text-neutral-700 text-sm leading-relaxed flex-1">
                      {testimonial.quote}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                      <div className="h-10 w-10 rounded-full bg-neutral-300 flex items-center justify-center text-xs">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">{testimonial.name}</p>
                        <p className="text-xs text-neutral-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <Button
              onClick={prevTestimonial}
              size="sm"
              className="rounded-full bg-neutral-200 text-neutral-900 hover:bg-neutral-300 h-10 w-10 p-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              size="sm"
              className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 h-10 w-10 p-0"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
