'use client'

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    id: 1,
    question: "Is the system suitable for hotels of all sizes?",
    answer: "Yes. Our platform is designed to scale effortlessly — from boutique hotels to large multi-property operations.",
  },
  {
    id: 2,
    question: "Can all departments use the system simultaneously?",
    answer: "Absolutely. All departments can work in the system at the same time with real-time synchronization across front desk, housekeeping, F&B, and more.",
  },
  {
    id: 3,
    question: "Is training or technical support provided?",
    answer: "Yes, we provide comprehensive training for your team and dedicated technical support to ensure smooth implementation and ongoing success.",
  },
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="bg-white px-4 md:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">FAQ's</h2>
            <p className="text-neutral-600 mb-6">
              Find quick answers to the most common questions about our hotel CRM & ERP system.
            </p>
            <Link href="/contact">
              <Button className="bg-neutral-900 text-white hover:bg-neutral-800 px-6 py-2 h-10">
                Need More Help?
              </Button>
            </Link>
          </div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-neutral-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-neutral-50 transition-colors text-left"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''}`}>
                    <Plus className="h-5 w-5 text-neutral-600" />
                  </div>
                </button>
                
                {expandedId === faq.id && (
                  <div className="bg-neutral-50 px-4 py-4 border-t border-neutral-200">
                    <p className="text-neutral-700 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
