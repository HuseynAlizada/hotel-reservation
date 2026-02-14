"use client"

import { useState } from "react"
import { Plus, Upload, Maximize2 } from "lucide-react"
import Image from "next/image"

const tabs = [
  "Operations Management",
  "Finance & Administration",
  "Service Managements",
  "Data Control",
]

const sectionData: Record<
  string,
  { header: string; description: string }[]
> = {
  "Operations Management": [
    {
      header: "Front Office",
      description:
        "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
    },
    {
      header: "Front Cash",
      description:
        "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
    },
    {
      header: "End of day",
      description:
        "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
    },
    {
      header: "House Keeping",
      description:
        "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
    },
  ],
  "Finance & Administration": [
    {
      header: "Accounting",
      description:
        "Manage all financial transactions, reporting, and budgeting in one centralized system.",
    },
    {
      header: "Payroll",
      description:
        "Automate employee payroll calculations, deductions, and payment processing.",
    },
    {
      header: "Invoicing",
      description:
        "Generate and track invoices for guests, vendors, and corporate clients seamlessly.",
    },
    {
      header: "Tax Management",
      description:
        "Simplify tax compliance with automated calculations and reporting tools.",
    },
  ],
  "Service Managements": [
    {
      header: "Room Service",
      description:
        "Coordinate in-room dining orders, delivery tracking, and guest satisfaction in real time.",
    },
    {
      header: "Maintenance",
      description:
        "Schedule and track maintenance requests, preventive tasks, and equipment management.",
    },
    {
      header: "Concierge",
      description:
        "Manage guest requests, local recommendations, and special arrangements efficiently.",
    },
    {
      header: "Laundry",
      description:
        "Track laundry orders, scheduling, and delivery for guest and hotel linens.",
    },
  ],
  "Data Control": [
    {
      header: "Analytics",
      description:
        "Access real-time dashboards and reports to make data-driven business decisions.",
    },
    {
      header: "Guest Data",
      description:
        "Securely manage guest profiles, preferences, and history for personalized service.",
    },
    {
      header: "Inventory",
      description:
        "Monitor stock levels, automate reorders, and reduce waste across departments.",
    },
    {
      header: "Security",
      description:
        "Implement role-based access controls and audit trails for data protection.",
    },
  ],
}

const featureImages = [
  "/images/feature-1.jpg",
  "/images/feature-2.jpg",
  "/images/feature-3.jpg",
]

export function FeaturesForm() {
  const [activeTab, setActiveTab] = useState("Operations Management")

  const currentSections = sectionData[activeTab] || []

  return (
    <div className="flex flex-col gap-6">
      {/* Header Field */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
        <label className="text-foreground text-sm font-medium w-32 shrink-0 pt-2.5">
          Header
        </label>
        <div className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5">
          <p className="text-foreground text-sm font-medium">One Platform.</p>
          <p className="text-muted-foreground text-sm">Every Hotel Operation.</p>
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-foreground text-base font-semibold">Sections</h2>
          <button className="h-7 w-7 rounded-full border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-colors ${
                tab === activeTab
                  ? "bg-foreground text-background font-medium"
                  : "bg-transparent border border-input text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {tab === activeTab && <Plus className="h-3.5 w-3.5" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Section Rows */}
        <div className="flex flex-col gap-4">
          {currentSections.map((section, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-4"
            >
              {/* Header Input */}
              <div className="flex items-center gap-3 lg:w-[280px] shrink-0">
                <label className="text-foreground text-sm font-medium whitespace-nowrap">
                  Header #{index + 1}
                </label>
                <input
                  type="text"
                  defaultValue={section.header}
                  className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>

              {/* Description Input */}
              <div className="flex items-start gap-3 flex-1">
                <label className="text-foreground text-sm font-medium whitespace-nowrap pt-2.5">
                  Description
                </label>
                <textarea
                  defaultValue={section.description}
                  rows={2}
                  className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30 resize-none leading-relaxed"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="flex flex-wrap gap-4">
        {/* Upload Zone */}
        <label className="flex flex-col items-center justify-center h-40 w-40 sm:h-44 sm:w-44 rounded-xl border-2 border-dashed border-input bg-background cursor-pointer hover:border-primary/40 transition-colors shrink-0">
          <Upload className="h-7 w-7 text-muted-foreground mb-2" />
          <p className="text-muted-foreground text-xs text-center">
            <span className="text-foreground font-medium">Click to upload</span>{" "}
            or
          </p>
          <p className="text-muted-foreground text-[10px]">drag and drop</p>
          <input type="file" className="hidden" accept="image/*" />
        </label>

        {/* Image Thumbnails */}
        {featureImages.map((img, index) => (
          <div
            key={index}
            className="relative h-40 w-40 sm:h-44 sm:w-44 rounded-xl border border-input bg-background overflow-hidden group shrink-0"
          >
            <Image
              src={img}
              alt={`Feature image ${index + 1}`}
              fill
              className="object-cover"
            />
            <button className="absolute top-2 right-2 h-6 w-6 rounded-md bg-background/80 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
            <div className="absolute bottom-2 right-2 text-background text-xs font-medium bg-foreground/50 rounded px-1.5 py-0.5">
              #{index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
