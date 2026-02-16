'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Send, Zap, ChevronRight, Users, CreditCard, Utensils, ChevronLeft, Mail, Phone, MapPin, MessageCircle, Smartphone } from 'lucide-react'
import { LandingHeader } from '@/components/landing/landing-header'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const testimonials = [
  {
    id: 1,
    quote: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, cleaner, and far more reliable.",
    author: "General Manager",
    company: "City Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part5-G0DQrvB58eUmbkFp94Aqxexwx8KWqR.jpeg"
  },
  {
    id: 2,
    quote: "The best investment we made for our boutique property. The system is intuitive and our entire team adapted within days. Guest satisfaction scores improved immediately.",
    author: "Operations Manager",
    company: "Boutique Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part5-G0DQrvB58eUmbkFp94Aqxexwx8KWqR.jpeg"
  },
  {
    id: 3,
    quote: "We've streamlined our entire operation with this platform. From reservations to billing, everything is seamless. It's saved us countless hours and improved our bottom line significantly.",
    author: "General Manager",
    company: "Resort & Spa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part5-G0DQrvB58eUmbkFp94Aqxexwx8KWqR.jpeg"
  }
]

const faqs = [
  {
    id: 'faq-1',
    question: "Is the system suitable for hotels of all sizes?",
    answer: "Yes. Our platform is designed to scale effortlessly — from boutique hotels to large multi-property operations. The system adapts to your needs without requiring custom development."
  },
  {
    id: 'faq-2',
    question: "Can all departments use the system simultaneously?",
    answer: "Absolutely. Our system supports unlimited concurrent users across all departments. Front office, housekeeping, accounting, restaurant, and maintenance teams can all work in real-time without performance issues."
  },
  {
    id: 'faq-3',
    question: "Is training or technical support provided?",
    answer: "Yes. We provide comprehensive training for your staff, detailed documentation, and 24/7 technical support to ensure smooth implementation and ongoing success."
  }
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('operations')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <LandingHeader activePage="Home" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12 md:py-0 bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part1-m4B3B1K3qCMPvgfmLu5cg2SyQcyRZn.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-between py-12">
            {/* Top spacing */}
            <div />

            {/* Center Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
              {/* Left - Empty space for image */}
              <div className="flex-1 hidden lg:block" />

              {/* Right - Title */}
              <div className="flex-1 flex items-center justify-end">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-right text-balance leading-tight">
                  Hotel ERP &<br />CRM System
                </h1>
              </div>
            </div>

            {/* Bottom Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                aria-label="WhatsApp"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-6 bg-foreground text-background">
        <div className="mx-auto w-full max-w-7xl">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                What Our Clients Say
              </h2>
              <p className="text-lg text-background/80 text-balance max-w-2xl mx-auto">
                Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable daily operations.
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="flex gap-6 items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Testimonial Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-background text-foreground scale-100 opacity-100'
                        : 'bg-background/20 text-background/80 scale-95 opacity-60'
                    }`}
                  >
                    <p className="mb-6 text-base leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs opacity-75">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-background w-8'
                      : 'bg-background/40 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                  FAQ's
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find quick answers to the most common questions about our hotel CRM & ERP system.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block px-6 py-3 mt-4 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-card transition-colors"
              >
                Need More Help?
              </Link>
            </div>

            {/* Right FAQ Items */}
            <div>
              <Accordion type="single" collapsible defaultValue="faq-1">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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

      {/* Footer Section */}
      <footer className="py-16 md:py-24 px-6 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
        {/* Decorative Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
              fill="currentColor"
              className="text-accent"
            />
          </svg>
        </div>

        <div className="mx-auto w-full max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Quickly Links
              </h3>
              <nav className="space-y-3 flex flex-col">
                <Link
                  href="/solutions"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Solutions
                </Link>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Testimonials
                </Link>
                <Link
                  href="#faqs"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  FAQ's
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Center Logo Column */}
            <div className="space-y-6 flex flex-col items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-1">Webanly</h2>
                <p className="text-sm text-muted-foreground">Digital Web Studio</p>
              </div>

              {/* Social Icons */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center font-medium">Follow us:</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-card/50 text-muted-foreground hover:text-accent hover:bg-card transition-colors"
                    aria-label="WhatsApp"
                  >
                    <Smartphone className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-card/50 text-muted-foreground hover:text-accent hover:bg-card transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-card/50 text-muted-foreground hover:text-accent hover:bg-card transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-card/50 text-muted-foreground hover:text-accent hover:bg-card transition-colors"
                    aria-label="Telegram"
                  >
                    <Send className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-card/50 text-muted-foreground hover:text-accent hover:bg-card transition-colors"
                    aria-label="Facebook"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-4 md:text-right">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contact Us
              </h3>
              <div className="space-y-4 flex flex-col">
                <a
                  href="tel:+994507030302"
                  className="flex md:flex-row-reverse items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+994 50 703 03 02</span>
                </a>
                <a
                  href="#"
                  className="flex md:flex-row-reverse items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Naxçıvan 9, Baku, Azerbaijan</span>
                </a>
                <a
                  href="mailto:info@webanly.com"
                  className="flex md:flex-row-reverse items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@webanly.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-card/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; 2024 Webanly. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
