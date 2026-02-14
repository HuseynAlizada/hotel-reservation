import { Navbar } from "@/components/dashboard/navbar"
import { TestimonialsForm } from "@/components/testimonials/testimonials-form"
import { ClientsSection } from "@/components/testimonials/clients-section"
import { Search, Plus } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <Navbar activePage="Testimonials" />

        {/* Testimonials Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-foreground text-xl font-semibold">Testimonials</h1>
            <button className="h-7 w-7 rounded-full border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-background text-foreground placeholder-muted-foreground text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none border border-input w-56 focus:ring-1 focus:ring-primary/30"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Testimonials Form */}
        <TestimonialsForm />

        {/* Clients Section */}
        <ClientsSection />
      </div>
    </main>
  )
}
