import { LandingHeader } from "@/components/landing/landing-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <LandingHeader activePage="Home" />

        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Hotel ERP & CRM System
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your hotel operations with our comprehensive ERP and CRM solution designed specifically for modern hospitality businesses.
              </p>
              <div className="flex gap-4">
                <Button className="bg-card text-card-foreground hover:bg-card/90">
                  Book a Demo
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-FpbBTL93532TAKtWYmhWHzgtmFmiJG.jpeg"
                alt="Hotel ERP System Dashboard"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-12">
            <a href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="px-6 py-16 md:py-24 bg-secondary/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38%20%281%29-02qsAJFAnJWp7ckuBtvRKPGCIIFQL6.jpeg"
                alt="All-in-One Solutions"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                All-in-One Solutions Built for Modern Hotels
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                From front desk operations to restaurant POS and inventory control, our unified platform connects every department into one powerful, real-time system — reducing costs, saving time, and elevating guest experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Payment Integration</h3>
                    <p className="text-sm text-muted-foreground">Seamless payment processing for all transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">15+ Features</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive tools for hotel management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">50+ Users</h3>
                    <p className="text-sm text-muted-foreground">Support for teams of any size</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* One Platform Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              One Platform. Every Hotel Operation.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Streamline your entire hotel business with our integrated solution
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button variant="default" className="bg-card text-card-foreground hover:bg-card/90">
              Operations Management
            </Button>
            <Button variant="outline">Finance & Administration</Button>
            <Button variant="outline">Service Management</Button>
          </div>

          {/* Feature Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-sm text-accent">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Front Office</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.
              </p>
              <div className="pt-4">
                <Link href="/solutions" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
                  View All Features <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38%20%281%29-02qsAJFAnJWp7ckuBtvRKPGCIIFQL6.jpeg"
                alt="Front Office Features"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-16 md:py-24 bg-secondary/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable daily operations.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Operations Manager, Boutique Hotel",
                title: "Boutique Hotel",
                quote: "Complete operational upgrade for our hotel. Since switching to this system, our front desk staff have been more efficient.",
              },
              {
                name: "General Manager, City Hotel",
                title: "City Hotel",
                quote: "A complete operational upgrade for our hotel. Since switching to this system, our front desk and housekeeping teams work in perfect sync.",
              },
              {
                name: "Operations Manager, Boutique Hotel",
                title: "Boutique Hotel",
                quote: "Complete operational upgrade for our hotel. Since switching to this system, our front desk and staff have been far more reliable.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-background border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center">
                    <span className="text-card-foreground font-semibold">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Webonly</p>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 py-16 md:py-24 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground text-balance">
                Stay Updated. Stay In Control.
              </h2>
              <p className="text-card-foreground/70 text-lg">
                Get product updates, feature releases, and hospitality insights — straight to your inbox.
              </p>
              <div className="flex gap-2 pt-4">
                <Button variant="secondary">Get Request form</Button>
                <Button className="bg-background text-foreground hover:bg-background/90">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2023.20.38-FpbBTL93532TAKtWYmhWHzgtmFmiJG.jpeg"
                alt="Stay Updated Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                FAQ's
              </h2>
              <p className="text-muted-foreground text-lg">
                Find quick answers to the most common questions about our hotel CRM & ERP system.
              </p>
              <Button variant="outline" className="w-fit">
                Need More Help?
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is the system suitable for hotels of all sizes?",
                  a: "Yes. Our platform is designed to scale effortlessly — from boutique hotels to large multi-property operations.",
                },
                {
                  q: "Can all departments use the system simultaneously?",
                  a: "Absolutely. All departments have access with customizable permissions and real-time collaboration features.",
                },
                {
                  q: "Is training or technical support provided?",
                  a: "Yes, we provide comprehensive training, onboarding, and dedicated technical support for all clients.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-border pb-4 last:border-0">
                  <button className="w-full flex items-center justify-between text-left py-2">
                    <p className="font-semibold text-foreground">{faq.q}</p>
                    <span className="text-accent">+</span>
                  </button>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 md:py-24 bg-secondary/5 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-card flex items-center justify-center">
                  <span className="text-card-foreground font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-foreground">Webonly</span>
              </div>
              <p className="text-muted-foreground text-sm">Digital Web Studio</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground">Quickly Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link></li>
                <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link></li>
                <li><Link href="#faq" className="hover:text-foreground transition-colors">FAQ's</Link></li>
                <li><Link href="/request-form" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +994 50 703 03 02
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Nizami Street 9, Baku, Azerbaycan
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@webonly.com
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="h-9 w-9 rounded-full bg-card flex items-center justify-center text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-card flex items-center justify-center text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-card flex items-center justify-center text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Webonly. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
