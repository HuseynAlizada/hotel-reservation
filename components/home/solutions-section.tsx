"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("operations")

  const tabs = [
    { id: "operations", label: "Operations Management" },
    { id: "finance", label: "Finance & Administration" },
    { id: "service", label: "Service Management" },
  ]

  const tabContent = {
    operations: {
      title: "Operations Management",
      subtitle: "Front Office",
      description:
        "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part3-Z9JblPnQMaqP61p88Jc2F7hG3MBAKE.jpeg",
    },
    finance: {
      title: "Finance & Administration",
      subtitle: "Financial Management",
      description:
        "Complete financial control with integrated accounting, reporting, and analytics for better decision-making.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part3-Z9JblPnQMaqP61p88Jc2F7hG3MBAKE.jpeg",
    },
    service: {
      title: "Service Management",
      subtitle: "Guest Services",
      description:
        "Manage housekeeping, maintenance, and guest services for superior satisfaction and operational excellence.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part3-Z9JblPnQMaqP61p88Jc2F7hG3MBAKE.jpeg",
    },
  }

  const content = tabContent[activeTab as keyof typeof tabContent]

  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            One Platform.
            <br />
            Every Hotel Operation.
          </h2>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 gap-2 mb-12 bg-transparent p-0 w-full max-w-2xl mx-auto h-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-4 py-2 rounded-lg font-medium text-sm transition-all data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=inactive]:text-foreground/60 data-[state=inactive]:hover:text-foreground"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {content.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12a9 9 0 110 18 9 9 0 010-18z"
                      />
                    </svg>
                    <h4 className="text-lg font-semibold text-foreground">
                      {content.subtitle}
                    </h4>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {content.description}
                  </p>
                  {/* Pagination */}
                  <div className="flex gap-2 mt-4">
                    {[0, 1, 2, 3].map((i) => (
                      <button
                        key={i}
                        className={`h-2 rounded-full transition-all ${
                          i === 0
                            ? "w-8 bg-foreground"
                            : "w-2 bg-foreground/30 hover:bg-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
