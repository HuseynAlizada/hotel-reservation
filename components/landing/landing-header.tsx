"use client"

import Link from "next/link"
import { Globe, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function LandingHeader({ activePage = "" }: { activePage?: string }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
            <span className="text-black font-bold text-base">W</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Webonly</p>
            <p className="text-neutral-400 text-[9px] leading-tight">Digital Web Studio</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                item.label === activePage
                  ? "bg-neutral-800 text-white font-medium"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors hidden sm:flex">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/request-form">
            <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 h-9 text-sm font-medium">
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
