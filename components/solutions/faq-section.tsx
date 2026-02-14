"use client"

import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

const initialFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Is the system suitable for hotels of all sizes?",
    answer:
      "Yes, our platform is designed to scale from boutique hotels to large multi-property operations.",
  },
  {
    id: 2,
    question: "How does the CRM help with guest management?",
    answer:
      "Find quick answers to the most common questions about our hotel CRM & ERP system.",
  },
]

export function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs)

  const deleteFaq = (id: number) => {
    setFaqs((prev) => prev.filter((faq) => faq.id !== id))
  }

  const addFaq = () => {
    const newId = faqs.length > 0 ? Math.max(...faqs.map((f) => f.id)) + 1 : 1
    setFaqs((prev) => [
      ...prev,
      { id: newId, question: "", answer: "" },
    ])
  }

  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-lg font-semibold">{"FAQ's"}</h2>
        <button
          onClick={addFaq}
          className="h-8 w-8 rounded-full border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* FAQ Description */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
        <label className="text-foreground text-sm font-medium w-32 shrink-0 pt-1">Description</label>
        <p className="text-foreground/70 text-sm leading-relaxed flex-1">
          Find quick answers to the most common questions about our hotel CRM & ERP system.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="rounded-xl border border-input bg-background p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-foreground text-sm font-medium shrink-0">Questions</span>
              <div className="flex-1 rounded-lg border border-input bg-background px-3 py-2">
                <p className="text-foreground/80 text-sm">{faq.question || `Question #${index + 1}`}</p>
              </div>
              <button
                onClick={() => deleteFaq(faq.id)}
                className="flex items-center gap-1.5 text-destructive hover:text-destructive/80 text-sm font-medium transition-colors shrink-0"
              >
                Delete Questions
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-foreground text-sm font-medium shrink-0 pt-2">Answer</span>
              <div className="flex-1 rounded-lg border border-input bg-background px-3 py-2">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {faq.answer || "Enter answer..."}
                </p>
              </div>
            </div>

            {index < faqs.length - 1 && null}
          </div>
        ))}
      </div>
    </div>
  )
}
