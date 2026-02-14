"use client"

import Link from "next/link"
import { Globe, User } from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Request", href: "/request-form" },
  { label: "Contact", href: "/contact" },
]

export function LandingHeader({ activePage = "" }: { activePage?: string }) {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-card flex items-center justify-center">
          <span className="text-card-foreground font-bold text-sm">W</span>
        </div>
        <div>
          <p className="text-foreground font-bold text-base leading-tight">Webonly</p>
          <p className="text-muted-foreground text-[10px] leading-tight">Digital Web Studio</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              item.label === activePage
                ? "bg-card text-card-foreground font-medium"
                : "text-foreground/70 hover:text-foreground hover:bg-card/50"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button className="h-8 w-8 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <Globe className="h-4 w-4" />
        </button>
        <Link
          href="/login"
          className="h-8 w-8 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors"
        >
          <User className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
