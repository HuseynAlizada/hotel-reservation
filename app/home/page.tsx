'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Instagram, Linkedin, Send, ChevronRight, ChevronLeft, Plus, Minus, Phone, MapPin, Mail, Facebook } from 'lucide-react'
import { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { HeroSection } from '@/components/home/hero-section'
import { LandingHeader } from '@/components/landing/landing-header'

export default function Home() {
  const [activeTab, setActiveTab] = useState('operations')
  const [expandedFaq, setExpandedFaq] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false }, [])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  const testimonials = [
    {
      name: "Operations Manager, Boutique Hotel",
      quote: "A complete operational upgrade for our hotel! Since switching to this system, our front desk and..."
    },
    {
      name: "General Manager, City Hotel",
      quote: "A complete operational upgrade for our hotel! Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and far more reliable."
    },
    {
      name: "Operations Manager, Boutique Hotel",
      quote: "A complete operational upgrade for our hotel! Since switching to this system, our front desk and..."
    }
  ]

  const faqs = [
    {
      question: "Is the system suitable for hotels of all sizes?",
      answer: "Yes. Our platform is designed to scale effortlessly — from boutique hotels to large multi-property operations."
    },
    {
      question: "Can all departments use the system simultaneously?",
      answer: "Yes, our cloud-based platform supports unlimited concurrent users across all departments with real-time synchronization."
    },
    {
      question: "Is training or technical support provided?",
      answer: "Yes, we provide comprehensive onboarding, training, and 24/7 technical support for all our clients."
    }
  ]
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-white">Webonly</h1>
            <p className="text-xs text-gray-300">Digital Web Studio</p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-white hover:text-white/70 transition">
              Solutions
            </Link>
            <Link href="#" className="text-sm text-white hover:text-white/70 transition">
              Features
            </Link>
            <Link href="#" className="text-sm text-white hover:text-white/70 transition">
              Testimonials
            </Link>
            <Link href="#" className="text-sm text-white hover:text-white/70 transition">
              FAQs
            </Link>
            <Link href="#" className="text-sm text-white hover:text-white/70 transition">
              Contact
            </Link>
          </nav>

          {/* Right side: Language + Button */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/30 hover:border-white/60 transition text-sm text-white">
              <span className="text-xs">ZA</span>
            </button>
            <button className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <LandingHeader activePage="Home" />
        <HeroSection />

        {/* Features Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
                    All-in-One Solutions Built for Modern Hotels
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From front desk operations to restaurant POS and inventory control, our unified platform connects every department into one powerful, real-time system — reducing costs, saving time, and elevating guest experiences.
                </p>
              </div>

              {/* Right - Device Mockup with Badges */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Device Container */}
                <div className="relative w-full max-w-md">
                  {/* Tilted Laptop Mockup */}
                  <div className="relative transform -rotate-6">
                    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-900">
                      {/* Screen Content */}
                      <div className="aspect-video bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part2-YCD74TP90kOzk4kTnz4xnc7igjNY9Q.jpeg"
                          alt="Hotel Management System Dashboard"
                          width={500}
                          height={350}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      {/* Keyboard Base */}
                      <div className="h-8 bg-gradient-to-b from-gray-800 to-gray-900" />
                    </div>
                  </div>

                  {/* Feature Badge - Payment */}
                  <div className="absolute top-8 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-300 rounded" />
                    Payment
                  </div>

                  {/* Feature Badge - 15+ */}
                  <div className="absolute top-24 -right-8 bg-white rounded-lg shadow-lg px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                  </div>

                  {/* Feature Badge - Users */}
                  <div className="absolute bottom-32 -left-6 bg-white rounded-lg shadow-lg px-4 py-2 text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-300 rounded-full" />
                    Users
                  </div>

                  {/* Feature Badge - 50+ */}
                  <div className="absolute bottom-12 -right-4 bg-white rounded-lg shadow-lg px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Section with Tabs */}
        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                One Platform.{' '}
              </h2>
              <p className="text-3xl lg:text-4xl font-bold text-gray-400 mt-2">
                Every Hotel Operation.
              </p>
            </div>

            {/* Tabs and Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left - Tabs and Content */}
              <div className="flex flex-col gap-8">
                {/* Tab Buttons - Horizontal */}
                <div className="flex gap-3 flex-nowrap">
                  <button
                    onClick={() => setActiveTab('operations')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition whitespace-nowrap ${activeTab === 'operations'
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    Operations Management
                  </button>
                  <button
                    onClick={() => setActiveTab('finance')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition whitespace-nowrap ${activeTab === 'finance'
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    Finance & Administration
                  </button>
                  <button
                    onClick={() => setActiveTab('service')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition whitespace-nowrap ${activeTab === 'service'
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    Service Management
                  </button>
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                  {activeTab === 'operations' && (
                    <div className="space-y-4 animate-fadeIn">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="text-3xl">🏨</span>
                        Front Office
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.
                      </p>
                    </div>
                  )}
                  {activeTab === 'finance' && (
                    <div className="space-y-4 animate-fadeIn">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="text-3xl">💰</span>
                        Accounting & Finance
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Manage invoicing, payments, expenses, and financial reporting with full audit trails and compliance tracking.
                      </p>
                    </div>
                  )}
                  {activeTab === 'service' && (
                    <div className="space-y-4 animate-fadeIn">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="text-3xl">🔧</span>
                        Service Management
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Track maintenance requests, schedule preventive maintenance, and manage service teams across all properties.
                      </p>
                    </div>
                  )}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  <button
                    onClick={() => setActiveTab('operations')}
                    className={`w-3 h-3 rounded-full transition ${activeTab === 'operations' ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                    aria-label="Tab 1"
                  />
                  <button
                    onClick={() => setActiveTab('finance')}
                    className={`w-3 h-3 rounded-full transition ${activeTab === 'finance' ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                    aria-label="Tab 2"
                  />
                  <button
                    onClick={() => setActiveTab('service')}
                    className={`w-3 h-3 rounded-full transition ${activeTab === 'service' ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                    aria-label="Tab 3"
                  />
                </div>
              </div>

              {/* Right - Device Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  {/* Black rounded container */}
                  <div className="bg-black rounded-3xl p-4 shadow-2xl relative">
                    {/* Scroll arrow button */}
                    <button className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition z-10">
                      <ChevronRight size={24} className="text-gray-900" />
                    </button>

                    {/* Device Screen */}
                    <div className="bg-white rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part3-quhkt3UzY8sftcHzd5ykboL1rzJiYa.jpeg"
                        alt="Hotel Operations Dashboard"
                        width={500}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight italic">
                    Stay Updated.
                    <span className="block">Stay In Control.</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Get product updates, feature releases, and hospitality insights — straight to your inbox.
                </p>
              </div>

              {/* Center - CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:col-start-1 lg:mt-4">
                <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition text-sm">
                  Get Request form
                </button>
                <button className="px-8 py-3 bg-black text-white border border-white/30 rounded-full font-semibold hover:border-white/60 transition text-sm">
                  Book a Demo
                </button>
              </div>

              {/* Right - Device Mockup */}
              <div className="relative flex justify-center lg:justify-end lg:row-start-1 lg:row-end-3">
                <div className="relative w-full max-w-md">
                  {/* Tilted Laptop */}
                  <div className="relative transform rotate-6">
                    <div className="bg-gray-700 rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-800">
                      {/* Screen Content */}
                      <div className="aspect-video bg-white flex items-center justify-center p-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part4-UTY3qCg1CmeBEzZrQa7aPYLZuLFFRB.jpeg"
                          alt="Hotel Dashboard Display"
                          width={500}
                          height={350}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      {/* Keyboard Base */}
                      <div className="h-8 bg-gradient-to-b from-gray-700 to-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable daily operations.
              </p>
            </div>

            {/* Testimonials Carousel - Embla */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                    >
                      <div className="p-8 rounded-xl bg-white border-2 border-gray-200 h-full hover:border-gray-300 transition shadow-sm hover:shadow-md">
                        {/* Webonly Badge */}
                        <div className="mb-4 inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                          Webonly
                        </div>

                        {/* Profile */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-700 text-lg font-bold">👤</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                          </div>
                        </div>

                        {/* Quote */}
                        <p className="text-gray-600 text-sm leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition"
                >
                  <ChevronLeft size={20} className="text-gray-900" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition"
                >
                  <ChevronRight size={20} className="text-gray-900" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left - FAQ Header */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">FAQ's</h2>
                  <p className="text-lg text-gray-600">
                    Find quick answers to the most common questions about our hotel CRM & ERP system.
                  </p>
                </div>

                <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition w-fit">
                  Need More Help?
                </button>
              </div>

              {/* Right - FAQ Items */}
              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                    >
                      <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                      {expandedFaq === idx ? (
                        <Minus size={20} className="text-gray-900 flex-shrink-0" />
                      ) : (
                        <Plus size={20} className="text-gray-900 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
          {/* Decorative wave */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50/50" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Left - Quick Links */}
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-bold text-gray-900">Quickly Links</h3>
                <nav className="flex flex-col gap-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">Solutions</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">Features</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">FAQ's</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
                </nav>
              </div>

              {/* Center - Logo & Social */}
              <div className="flex flex-col items-center gap-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Webonly</h1>
                  <p className="text-xs text-gray-500">Digital Web Studio</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Follow us</p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
                      <MessageCircle size={18} className="text-gray-900" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
                      <Instagram size={18} className="text-gray-900" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
                      <Linkedin size={18} className="text-gray-900" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
                      <Send size={18} className="text-gray-900" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition">
                      <Facebook size={18} className="text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Contact Info */}
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
                <div className="flex flex-col gap-4">
                  <a href="tel:+994507030302" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition">
                    <Phone size={18} />
                    <span>+994 50 703 03 02</span>
                  </a>
                  <a href="#" className="flex items-start gap-3 text-gray-600 hover:text-gray-900 transition">
                    <MapPin size={18} className="mt-1 flex-shrink-0" />
                    <span>Habib Shirvani 9,<br />Baku, Azerbaijan</span>
                  </a>
                  <a href="mailto:info@webonly.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition">
                    <Mail size={18} />
                    <span>info@webonly.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-center text-sm text-gray-500">
                © 2024 Webonly. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
