"use client"

import { useState } from "react"
import { Plus, Trash2, Upload, Maximize2 } from "lucide-react"
import Image from "next/image"

interface Client {
  id: number
  header: string
  description: string
  logoSrc: string | null
  imageSrc: string | null
}

const initialClients: Client[] = [
  {
    id: 1,
    header: "General Manager, City Hotel",
    description:
      '"A complete operational upgrade for our hotel." Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, clearer, and far more reliable.',
    logoSrc: "/images/feature-1.jpg",
    imageSrc: "/images/feature-2.jpg",
  },
  {
    id: 2,
    header: "General Manager, City Hotel",
    description:
      '"A complete operational upgrade for our hotel." Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, clearer, and far more reliable.',
    logoSrc: null,
    imageSrc: null,
  },
]

export function ClientsSection() {
  const [clients, setClients] = useState<Client[]>(initialClients)

  const deleteClient = (id: number) => {
    setClients((prev) => prev.filter((c) => c.id !== id))
  }

  const addClient = () => {
    const newId =
      clients.length > 0 ? Math.max(...clients.map((c) => c.id)) + 1 : 1
    setClients((prev) => [
      ...prev,
      {
        id: newId,
        header: "",
        description: "",
        logoSrc: null,
        imageSrc: null,
      },
    ])
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Clients Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-lg font-semibold">Clients</h2>
        <button
          onClick={addClient}
          className="h-8 w-8 rounded-full border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Client Cards */}
      <div className="flex flex-col gap-6 pb-8">
        {clients.map((client) => (
          <div
            key={client.id}
            className="rounded-xl border border-input bg-background p-5 flex flex-col gap-5"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="text-foreground text-sm font-medium w-28 shrink-0">
                Header
              </label>
              <input
                type="text"
                defaultValue={client.header}
                placeholder="Client title..."
                className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30"
              />
              <button
                onClick={() => deleteClient(client.id)}
                className="flex items-center gap-1.5 text-destructive hover:text-destructive/80 text-sm font-medium transition-colors shrink-0"
              >
                Delete Client
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Description Row */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <label className="text-foreground text-sm font-medium w-28 shrink-0 pt-2.5">
                Description
              </label>
              <textarea
                defaultValue={client.description}
                placeholder="Client testimonial..."
                rows={3}
                className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30 resize-none leading-relaxed"
              />
            </div>

            {/* Images Row */}
            <div className="flex flex-wrap gap-4">
              {/* Upload Zone */}
              <label className="flex flex-col items-center justify-center h-36 w-48 rounded-xl border-2 border-dashed border-input bg-background cursor-pointer hover:border-primary/40 transition-colors shrink-0">
                <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-xs text-center">
                  <span className="text-foreground font-medium">
                    Click to upload
                  </span>{" "}
                  or
                </p>
                <p className="text-muted-foreground text-[10px]">
                  drag and drop
                </p>
                <input type="file" className="hidden" accept="image/*" />
              </label>

              {/* Logo Image */}
              <div className="relative h-36 w-48 rounded-xl border border-input bg-background overflow-hidden group shrink-0">
                {client.logoSrc ? (
                  <Image
                    src={client.logoSrc}
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground text-sm">Logo</span>
                  </div>
                )}
                <button className="absolute top-2 right-2 h-6 w-6 rounded-md bg-background/80 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-background/70 text-center py-1">
                  <span className="text-foreground text-xs font-medium">
                    Logo
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-36 w-48 rounded-xl border border-input bg-background overflow-hidden group shrink-0">
                {client.imageSrc ? (
                  <Image
                    src={client.imageSrc}
                    alt="Client image"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground text-sm">Image</span>
                  </div>
                )}
                <button className="absolute top-2 right-2 h-6 w-6 rounded-md bg-background/80 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-background/70 text-center py-1">
                  <span className="text-foreground text-xs font-medium">
                    Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
