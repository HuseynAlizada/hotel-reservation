"use client"

import { useState } from "react"
import { Globe, User, Settings } from "lucide-react"

const sections = [
  { label: "Operations Management", shortLabel: "OM" },
  { label: "Operations Management", shortLabel: "OM" },
]

export function AdminSidebar({
  activeSection = "Operations Management",
}: {
  activeSection?: string
}) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <aside className="flex flex-col items-center gap-5 py-6 px-2 bg-card rounded-xl border-0 h-fit">
      {/* Icon Buttons */}
      <div className="flex flex-col items-center gap-3">
        <button className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <Globe className="h-4 w-4" />
        </button>
        <button className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <Globe className="h-4 w-4" />
        </button>
        <button className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <User className="h-4 w-4" />
        </button>
        <button className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <User className="h-4 w-4" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-6 h-px bg-border/30" />

      {/* Section Tabs */}
      <div className="flex flex-col items-center gap-3">
        {sections.map((section, i) => (
          <button
            key={i}
            onMouseEnter={() => setHoveredSection(section.label)}
            onMouseLeave={() => setHoveredSection(null)}
            className={`relative px-2 py-1.5 rounded-lg text-[10px] font-medium transition-colors leading-tight text-center max-w-[72px] ${
              section.label === activeSection
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {section.shortLabel === "OM" ? "Operations\nManagement" : section.label}
            {hoveredSection === section.label && (
              <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">
                {section.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Bottom Settings */}
      <div className="mt-auto">
        <button className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
