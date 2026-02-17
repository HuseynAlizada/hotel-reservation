"use client"

export function FeaturesSection() {
  return (
    <section className="w-full bg-foreground py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-background text-balance">
              All-in-One Solutions
              <br />
              Built for Modern Hotels
            </h2>
            <p className="text-lg text-background/80 leading-relaxed max-w-lg">
              From front desk operations to restaurant POS and inventory control, our unified
              platform connects every department into one powerful, real-time system — reducing
              costs, saving time, and elevating guest experiences.
            </p>
            {/* Stats */}
            <div className="flex gap-8 mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-background">15</span>
                  <span className="text-sm text-background/70">+</span>
                </div>
                <p className="text-sm text-background/70">Modules</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-background">50</span>
                  <span className="text-sm text-background/70">+</span>
                </div>
                <p className="text-sm text-background/70">Users</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/part2-3gaQgLBjMHHWPCNd3MCNMb8Fr3ziu7.jpeg"
              alt="All-in-One Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
