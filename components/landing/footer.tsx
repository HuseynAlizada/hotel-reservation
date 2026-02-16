'use client'

import Link from "next/link"
import { MessageCircle, Instagram, Linkedin, Send, Facebook, Mail, MapPin, Phone } from "lucide-react"

const quickLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: MessageCircle, href: "https://wa.me", label: "WhatsApp" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://telegram.me", label: "Telegram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* Main Footer */}
      <div className="px-4 md:px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Quickly Links */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Quickly Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branding */}
          <div className="flex flex-col items-center justify-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-lg bg-neutral-900 flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div className="text-center">
                <p className="text-neutral-900 font-bold">Webonly</p>
                <p className="text-neutral-600 text-xs">Digital Web Studio</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+994507039302" className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors">
                  +994 50 703 93 02
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-600 text-sm">
                  Nadir Şirayev 9<br />
                  Baku, Azerbaijan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@webonly.com" className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors">
                  info@webonly.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 px-4 md:px-6 py-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>&copy; {currentYear} Webonly. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
