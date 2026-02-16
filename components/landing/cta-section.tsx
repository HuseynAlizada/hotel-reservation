"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-black text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Hotel Operations?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Join leading hotels worldwide in streamlining operations, reducing costs, and delivering exceptional guest experiences with our comprehensive ERP and CRM system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-form">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
