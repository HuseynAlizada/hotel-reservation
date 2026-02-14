"use client"

import { useState } from "react"
import { Upload, ChevronUp, ChevronDown } from "lucide-react"
import Image from "next/image"

export function SolutionsForm() {
  const [payment, setPayment] = useState(12)
  const [user, setUser] = useState(12)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-5">
      {/* Header Field */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
        <label className="text-foreground text-sm font-medium w-32 shrink-0 pt-2.5">Header</label>
        <div className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5">
          <p className="text-foreground text-sm font-medium">All-in-One Solutions.</p>
          <p className="text-muted-foreground text-sm">Built for Modern Hotels</p>
        </div>
      </div>

      {/* Description Field */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
        <label className="text-foreground text-sm font-medium w-32 shrink-0 pt-2.5">Description</label>
        <div className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5">
          <p className="text-foreground/80 text-sm leading-relaxed">
            From front desk operations to restaurant POS and inventory control, our unified platform connects every
            department into one powerful, real-time system — reducing costs, saving time, and elevating guest experiences.
          </p>
        </div>
      </div>

      {/* Payment & User */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
          <label className="text-foreground text-sm font-medium w-32 shrink-0">Payment</label>
          <div className="flex items-center rounded-xl border border-input bg-background px-4 py-2 flex-1">
            <span className="text-foreground text-sm flex-1">{payment}</span>
            <div className="flex flex-col">
              <button
                onClick={() => setPayment((p) => p + 1)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setPayment((p) => Math.max(0, p - 1))}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
          <label className="text-foreground text-sm font-medium w-32 shrink-0">User</label>
          <div className="flex items-center rounded-xl border border-input bg-background px-4 py-2 flex-1">
            <span className="text-foreground text-sm flex-1">{user}</span>
            <div className="flex flex-col">
              <button
                onClick={() => setUser((u) => u + 1)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setUser((u) => Math.max(0, u - 1))}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Upload Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upload Zone */}
        <label className="flex flex-col items-center justify-center h-48 rounded-xl border-2 border-dashed border-input bg-background cursor-pointer hover:border-primary/40 transition-colors">
          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Click to upload</span> or
          </p>
          <p className="text-muted-foreground text-xs">drag and drop</p>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                setUploadedImage(URL.createObjectURL(file))
              }
            }}
          />
        </label>

        {/* Uploaded Image Preview */}
        <div className="relative h-48 rounded-xl border border-input bg-background overflow-hidden">
          {uploadedImage ? (
            <Image src={uploadedImage} alt="Uploaded preview" fill className="object-cover" />
          ) : (
            <Image
              src="/images/solution-preview.jpg"
              alt="Solution preview"
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}
