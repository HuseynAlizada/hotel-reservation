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
    <section className="w-full py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One Platform.
            <br />
            Every Hotel Operation.
          </h2>
          <p className="text-lg text-gray-600">
            Unified solutions designed for every aspect of your hotel business
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <Badge className="w-fit mb-4 bg-gray-900 text-white hover:bg-gray-800">
              {features[activeTab as keyof typeof features].icon} {features[activeTab as keyof typeof features].subtitle}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {features[activeTab as keyof typeof features].title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {features[activeTab as keyof typeof features].description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Real-time updates and synchronization",
                "User-friendly interface designed for staff",
                "Comprehensive reporting and analytics",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-200 to-gray-100 border-8 border-black">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-rWNEIE5Q5o1WD5jLbdeSmJxbeiksz.jpeg"
                alt={`${features[activeTab as keyof typeof features].title} Dashboard`}
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-4 border-4 border-gray-900">
              <p className="text-sm font-bold text-gray-900">Trusted by</p>
              <p className="text-xl font-bold text-gray-900">50+ Hotels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
