"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FaqHomeSection() {
  const faqs = [
    {
      question: "Is the system suitable for hotels of all sizes?",
      answer:
        "Yes. Our platform is designed to scale effortlessly — from boutique hotels to large multi-property operations.",
    },
    {
      question: "Can all departments use the system simultaneously?",
      answer:
        "Absolutely. The system supports multiple concurrent users across all departments with real-time synchronization.",
    },
    {
      question: "Is training or technical support provided?",
      answer:
        "Yes. We provide comprehensive training, onboarding, and 24/7 technical support to ensure smooth implementation.",
    },
  ]

  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                FAQ's
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Find quick answers to the most common questions about our hotel CRM & ERP system.
              </p>
            </div>

            <Link href="/solutions">
              <Button
                variant="outline"
                className="w-fit"
              >
                Need More Help?
              </Button>
            </Link>
          </div>

          {/* Right Side - Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-foreground hover:text-foreground/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
