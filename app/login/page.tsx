"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Building2, ChevronDown, Phone, Mail, MessageSquare, Check, X } from "lucide-react"

const fieldOptions = [
  "Hospitality",
  "Restaurant",
  "Tourism",
  "Real Estate",
  "Technology",
  "Other",
]

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    field: "",
    phone: "",
    email: "",
    comment: "",
  })
  const [fieldOpen, setFieldOpen] = useState(false)

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleReset = () => {
    setFormData({ name: "", company: "", field: "", phone: "", email: "", comment: "" })
  }

  return (
    <main className="min-h-screen bg-[#eae7e2] flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-row bg-white rounded-[2rem] overflow-hidden max-w-[880px] w-full mx-auto shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
        {/* Left: Laptop Image */}
        <div className="relative w-[46%] min-h-[500px] bg-[#d6d3ce] shrink-0">
          <Image
            src="/images/request-laptop.jpg"
            alt="Hotel management dashboard on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex flex-col px-10 py-10 relative">
          {/* Status icons */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <button
              type="button"
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
              aria-label="Confirm"
            >
              <Check className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-red-500 hover:text-red-600 transition-colors"
              aria-label="Clear form"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <h2 className="text-[#1a1a2e] text-2xl font-semibold italic mb-8">
            Request
          </h2>

          <div className="flex flex-col gap-6 flex-1">
            {/* Name Surname */}
            <div className="flex items-center border-b border-[#e0ddd8] pb-3">
              <input
                type="text"
                placeholder="Name Surname"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="flex-1 bg-transparent text-[#1a1a2e] text-sm placeholder:text-[#9a9a9a] outline-none"
              />
              <User className="h-4 w-4 text-[#9a9a9a] shrink-0" />
            </div>

            {/* Company */}
            <div className="flex items-center border-b border-[#e0ddd8] pb-3">
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="flex-1 bg-transparent text-[#1a1a2e] text-sm placeholder:text-[#9a9a9a] outline-none"
              />
              <Building2 className="h-4 w-4 text-[#9a9a9a] shrink-0" />
            </div>

            {/* Field (Dropdown) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setFieldOpen(!fieldOpen)}
                className="flex items-center w-full border-b border-[#e0ddd8] pb-3"
              >
                <span
                  className={`flex-1 text-left text-sm ${
                    formData.field ? "text-[#1a1a2e]" : "text-[#9a9a9a]"
                  }`}
                >
                  {formData.field || "Field"}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-[#9a9a9a] shrink-0 transition-transform ${
                    fieldOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {fieldOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg border border-[#e0ddd8] py-1 z-10 shadow-md">
                  {fieldOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        handleChange("field", option)
                        setFieldOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-[#6a6a6a] hover:text-[#1a1a2e] hover:bg-[#f5f3ef] transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="flex items-center border-b border-[#e0ddd8] pb-3">
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="flex-1 bg-transparent text-[#1a1a2e] text-sm placeholder:text-[#9a9a9a] outline-none"
              />
              <Phone className="h-4 w-4 text-[#9a9a9a] shrink-0" />
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-[#e0ddd8] pb-3">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="flex-1 bg-transparent text-[#1a1a2e] text-sm placeholder:text-[#9a9a9a] outline-none"
              />
              <Mail className="h-4 w-4 text-[#9a9a9a] shrink-0" />
            </div>

            {/* Comment */}
            <div className="flex items-center border-b border-[#e0ddd8] pb-3">
              <input
                type="text"
                placeholder="Comment"
                value={formData.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
                className="flex-1 bg-transparent text-[#1a1a2e] text-sm placeholder:text-[#9a9a9a] outline-none"
              />
              <MessageSquare className="h-4 w-4 text-[#9a9a9a] shrink-0" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-8">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-6 py-3 rounded-full border border-[#d6d3ce] text-[#6a6a6a] text-sm font-medium hover:text-[#1a1a2e] hover:border-[#1a1a2e] transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 px-6 py-3 rounded-full bg-[#1a1a2e] text-white text-sm font-medium hover:bg-[#2a2a3e] transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
