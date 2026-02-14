"use client"

import { Search, ArrowDownUp } from "lucide-react"
import { useState } from "react"

const requests = [
  { name: "Name Surname", company: "Example Hotel", field: "Field", email: "example@gmail.com", phone: "(+994)50 000 0000", comment: "example comment so...", status: "Read" as const },
  { name: "Name Surname", company: "Example Hotel", field: "Field", email: "example@gmail.com", phone: "(+994)50 000 0000", comment: "example comment so...", status: "Read" as const },
  { name: "Name Surname", company: "Example Hotel", field: "Field", email: "example@gmail.com", phone: "(+994)50 000 0000", comment: "example comment so...", status: "Unread" as const },
  { name: "Name Surname", company: "Example Hotel", field: "Field", email: "example@gmail.com", phone: "(+994)50 000 0000", comment: "example comment so...", status: "Read" as const },
  { name: "Name Surname", company: "Example Hotel", field: "Field", email: "example@gmail.com", phone: "(+994)50 000 0000", comment: "example comment so...", status: "Read" as const },
]

export function RequestTable() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="bg-card rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-foreground font-semibold text-sm">
          Recently <span className="font-bold">Request list</span>
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-1.5">
            <ArrowDownUp className="h-3.5 w-3.5 text-muted-foreground" />
            <select className="bg-transparent text-muted-foreground text-xs border-none outline-none">
              <option>{"Basliq (A-Z)"}</option>
              <option>{"Basliq (Z-A)"}</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-secondary text-foreground placeholder-muted-foreground text-xs rounded-lg pl-3 pr-8 py-1.5 outline-none border-none w-32 focus:ring-1 focus:ring-primary/30"
            />
            <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">Name Surname</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">Company</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">Field</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">Email</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">Phone</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">Comment</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="border-b border-border/50 last:border-none hover:bg-secondary/30 transition-colors">
                <td className="text-xs text-muted-foreground py-3.5 pr-4">{request.name}</td>
                <td className="text-xs text-muted-foreground py-3.5 pr-4">{request.company}</td>
                <td className="text-xs text-muted-foreground py-3.5 pr-4">{request.field}</td>
                <td className="text-xs text-muted-foreground py-3.5 pr-4">{request.email}</td>
                <td className="text-xs text-muted-foreground py-3.5 pr-4">{request.phone}</td>
                <td className="text-xs text-muted-foreground py-3.5 pr-4 max-w-[140px] truncate">{request.comment}</td>
                <td className="text-xs py-3.5">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        request.status === "Read" ? "bg-primary" : "bg-destructive"
                      }`}
                    />
                    <span className={request.status === "Read" ? "text-primary" : "text-destructive"}>
                      {request.status}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
