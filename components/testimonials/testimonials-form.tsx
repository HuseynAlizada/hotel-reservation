export function TestimonialsForm() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <label className="text-foreground text-sm font-medium w-32 shrink-0">
          Header
        </label>
        <input
          type="text"
          defaultValue="What Our Clients Say"
          className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
        <label className="text-foreground text-sm font-medium w-32 shrink-0 pt-2.5">
          Description
        </label>
        <textarea
          defaultValue="Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable daily operations."
          rows={2}
          className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30 resize-none leading-relaxed"
        />
      </div>
    </div>
  )
}
