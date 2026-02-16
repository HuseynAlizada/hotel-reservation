'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Send, Zap, ChevronRight, Users, CreditCard, Utensils } from 'lucide-react'
import { LandingHeader } from '@/components/landing/landing-header'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('operations')
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <LandingHeader activePage="Home" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 py-12 md:py-0 bg-gradient-to-b from-card/50 to-background">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                Hotel ERP & <span className="text-accent">CRM System</span>
              </h1>

              <p className="text-lg text-muted-foreground text-balance max-w-lg leading-relaxed">
                Streamline your hotel operations with our comprehensive management solution. From reservations to guest services, handle everything in one unified platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/request-form"
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/solutions"
                  className="px-6 py-3 bg-card text-card-foreground rounded-lg font-medium hover:bg-card/80 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-6">
                <a
                  href="#"
                  className="p-3 rounded-full bg-card/50 text-muted-foreground hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <Send className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-card/50 text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-card/50 text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part1-IpYwv5WxcnkXwW7Xrr2WtPiUNIFp8U.jpeg"
                alt="Hotel ERP Dashboard"
                className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="hidden lg:flex justify-center order-2 lg:order-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part2-tYoPhKGBosscYi859LqI2rglI6ekrL.jpeg"
                alt="All-in-One Solutions"
                className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Integrated Solutions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                  All-in-One Solutions Built for Modern Hotels
                </h2>
              </div>

              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                From front desk operations to restaurant POS and inventory control, our unified platform connects every department into one powerful, real-time system — reducing costs, saving time, and elevating guest experiences.
              </p>

              {/* Feature Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Payment Methods</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">15+</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Active Users</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">50+</p>
                </div>
              </div>

              <Link
                href="/features"
                className="inline-block mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Platform Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="mx-auto w-full max-w-7xl">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                One Platform.
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Every Hotel Operation.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 justify-start md:justify-center">
              <button
                onClick={() => setActiveTab('operations')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'operations'
                    ? 'bg-foreground text-background'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                Operations Management
              </button>
              <button
                onClick={() => setActiveTab('finance')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'finance'
                    ? 'bg-foreground text-background'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                Finance & Administration
              </button>
              <button
                onClick={() => setActiveTab('service')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'service'
                    ? 'bg-foreground text-background'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                Service Management
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {activeTab === 'operations' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <Users className="h-6 w-6 text-accent" />
                      Front Office
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.
                    </p>
                  </div>
                )}
                {activeTab === 'finance' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-accent" />
                      Financial Management
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Manage accounting, billing, payroll, and financial reports with complete transparency and real-time insights.
                    </p>
                  </div>
                )}
                {activeTab === 'service' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <Utensils className="h-6 w-6 text-accent" />
                      Dining & Services
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Streamline restaurant operations, manage menus, track orders, and deliver exceptional guest service across all departments.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Image */}
              <div className="hidden lg:flex justify-center relative">
                <div className="relative w-full max-w-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part3-y52zd05lxpzHutSg8sZOwWgbk89yj5.jpeg"
                    alt="Operations Management Platform"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                  />
                  <button className="absolute bottom-4 right-4 p-3 bg-accent/90 text-accent-foreground rounded-full hover:bg-accent transition-colors shadow-lg">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 px-6 bg-foreground text-background rounded-3xl mx-6 md:mx-auto md:max-w-7xl mb-16 md:mb-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                Stay Updated.
                <br />
                Stay In Control.
              </h2>

              <p className="text-lg text-background/80 leading-relaxed">
                Get product updates, feature releases, and hospitality insights — straight to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/request-form"
                  className="px-6 py-3 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors text-center"
                >
                  Get Request form
                </Link>
                <Link
                  href="/book-demo"
                  className="px-6 py-3 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors text-center"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part4-fpU1VbJQOGMYtRNlImttZs99YOAJmQ.jpeg"
                alt="Stay Updated Dashboard"
                className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-card/30">
        <div className="mx-auto w-full max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Ready to Transform Your Hotel Operations?
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Join hotel managers who are streamlining their operations with our comprehensive ERP & CRM system.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-form"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-card text-card-foreground rounded-lg font-medium hover:bg-card/80 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
