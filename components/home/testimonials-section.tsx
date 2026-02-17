"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Operations Manager",
      title: "Boutique Hotel",
      company: "Webonly",
      text: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and more reliable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
    },
    {
      name: "General Manager",
      title: "City Hotel",
      company: "Webonly",
      text: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and more reliable.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop",
    },
    {
      name: "Operations Manager",
      title: "Boutique Hotel",
      company: "Webonly",
      text: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and more reliable.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70 text-lg">
            Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable
            daily operations.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-96 snap-start"
              >
                <div className="bg-card rounded-xl p-6 h-full flex flex-col gap-4 border border-input">
                  {/* Quote Text */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-input" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-0">
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-foreground/70 text-xs">
                        {testimonial.title} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 justify-center mt-8">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border border-input flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-input flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
