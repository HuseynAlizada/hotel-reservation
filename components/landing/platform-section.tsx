"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface TabOption {
  id: string
  label: string
  description: string
}

const tabs: TabOption[] = [
  {
    id: "operations",
    label: "Operations Management",
    description: "Streamline your hotel operations with our comprehensive management suite",
  },
  {
    id: "finance",
    label: "Finance & Administration",
    description: "Complete financial control and administrative management",
  },
  {
    id: "service",
    label: "Service Management",
    description: "Deliver exceptional guest service with integrated management tools",
  },
]

const features = {
  operations: {
    title: "Operations Management",
    subtitle: "Front Office",
    description:
      "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
    icon: "🏢",
  },
  finance: {
    title: "Finance & Administration",
    subtitle: "Financial Control",
    description: "Manage billing, invoicing, and financial reporting with complete transparency and accuracy.",
    icon: "💰",
  },
  service: {
    title: "Service Management",
    subtitle: "Guest Services",
    description: "Coordinate housekeeping, maintenance, and guest requests for seamless service delivery.",
    icon: "🎯",
  },
}

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState("operations")

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            One Platform.
            <br />
            Every Hotel Operation.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Unified solutions designed for every aspect of your hotel business
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${activeTab === tab.id
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-2 rounded-lg bg-gray-900 text-white">
              <span>{features[activeTab as keyof typeof features].icon}</span>
              <span className="text-sm font-medium">{features[activeTab as keyof typeof features].subtitle}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {features[activeTab as keyof typeof features].title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              {features[activeTab as keyof typeof features].description}
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Real-time updates and synchronization",
                "User-friendly interface designed for staff",
                "Comprehensive reporting and analytics",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100 border-4 border-gray-200">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-2lfixzlBCaNL7E6gpEcXbALoV9ueGI.jpeg"
                alt={`${features[activeTab as keyof typeof features].title} Dashboard`}
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Floating Arrow Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full shadow-lg p-4 border-2 border-gray-300 hidden md:flex items-center justify-center">
              <ChevronRight className="h-6 w-6 text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
