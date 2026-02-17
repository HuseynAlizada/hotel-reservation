"use client"

import Link from "next/link"
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Send,
  Facebook,
} from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full bg-foreground text-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg">Quickly Links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/solutions"
                className="text-background/80 hover:text-background transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/features"
                className="text-background/80 hover:text-background transition-colors"
              >
                Features
              </Link>
              <Link
                href="/testimonials"
                className="text-background/80 hover:text-background transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/solutions"
                className="text-background/80 hover:text-background transition-colors"
              >
                FAQ's
              </Link>
              <Link
                href="#"
                className="text-background/80 hover:text-background transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Logo & Social */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-background/20 flex items-center justify-center">
                <span className="text-background font-bold text-base">W</span>
              </div>
              <div>
                <p className="text-background font-bold">Webonly</p>
                <p className="text-background/60 text-xs">Digital Web Studio</p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-3 items-center">
              <p className="text-sm text-background/70">Follow us:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-background/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-background/80">+994 50 703 03 02</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-background/60 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-background/80 text-sm">Hedir Shıxo 9</span>
                  <span className="text-background/80 text-sm">Baku, Azerbaijan</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-background/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-background/80">info@webonly.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8" />

        {/* Copyright */}
        <div className="text-center text-background/60 text-sm">
          <p>&copy; 2024 Webonly Digital Web Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
