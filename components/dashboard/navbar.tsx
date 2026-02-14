"use client"

import Link from "next/link"
import { Globe, User } from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Request", href: "/request" },
  { label: "Contact", href: "/contact" },
]

export function Navbar({ activePage = "Dashboard" }: { activePage?: string }) {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-card rounded-xl border-0">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">W</span>
        </div>
        <div>
          <p className="text-card-foreground font-semibold text-sm leading-tight">Webonly</p>
          <p className="text-muted-foreground text-[10px] leading-tight">Digital Web Studio</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              item.label === activePage
                ? "bg-secondary text-card-foreground"
                : "text-muted-foreground hover:text-card-foreground hover:bg-secondary/50"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <Globe className="h-4 w-4" />
        </button>
        <button className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <User className="h-4 w-4" />
        </button>
      </div>
    </nav>
  )
}
