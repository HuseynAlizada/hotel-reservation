"use client"

import { Phone, Pencil, ClipboardList, Mail, Globe, AtSign, Plus } from "lucide-react"

const contacts = [
  {
    phone: "+{994}50 000 0000",
    phoneIcon: Phone,
    email: "webonly@gmail.com",
    emailIcon: Mail,
  },
  {
    phone: "+{994}50 000 0000",
    phoneIcon: Pencil,
    email: "webonly@gmail.com",
    emailIcon: Globe,
  },
  {
    phone: "+{994}50 000 0000",
    phoneIcon: ClipboardList,
    email: "webonly@gmail.com",
    emailIcon: AtSign,
  },
]

export function ContactSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-lg font-semibold">Contact</h2>
        <button className="h-8 w-8 rounded-full border border-input flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {contacts.map((contact, i) => {
          const PhoneIcon = contact.phoneIcon
          const EmailIcon = contact.emailIcon
          return (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center rounded-xl border border-input bg-background px-4 py-3">
                <span className="text-foreground text-sm flex-1">{contact.phone}</span>
                <PhoneIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center rounded-xl border border-input bg-background px-4 py-3">
                <span className="text-foreground text-sm flex-1">{contact.email}</span>
                <EmailIcon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
