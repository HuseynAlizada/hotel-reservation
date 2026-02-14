"use client"

import { Search, ChevronDown, ChevronRight, ArrowDownUp } from "lucide-react"
import { useState } from "react"

interface RequestItem {
  id: number
  name: string
  company: string
  field: string
  email: string
  phone: string
  comment: string
  status: "Read" | "Unread"
  fullComment: string
  answer: string
}

const requests: RequestItem[] = [
  {
    id: 1,
    name: "Name Surname",
    company: "Example Hotel",
    field: "Field",
    email: "example@gmail.com",
    phone: "(+994)50 000 0000",
    comment: "example comment s...",
    status: "Read",
    fullComment: "Example comment something",
    answer: "One Platform. Every Hotel Operation.",
  },
  {
    id: 2,
    name: "Name Surname",
    company: "Example Hotel",
    field: "Field",
    email: "example@gmail.com",
    phone: "(+994)50 000 0000",
    comment: "example comment s...",
    status: "Read",
    fullComment: "Example comment something",
    answer: "One Platform. Every Hotel Operation.",
  },
  {
    id: 3,
    name: "Name Surname",
    company: "Example Hotel",
    field: "Field",
    email: "example@gmail.com",
    phone: "(+994)50 000 0000",
    comment: "example comment s...",
    status: "Unread",
    fullComment: "Example comment something",
    answer: "One Platform. Every Hotel Operation.",
  },
  {
    id: 4,
    name: "Name Surname",
    company: "Example Hotel",
    field: "Field",
    email: "example@gmail.com",
    phone: "(+994)50 000 0000",
    comment: "example comment s...",
    status: "Read",
    fullComment: "Example comment something",
    answer: "One Platform. Every Hotel Operation.",
  },
]

export function RequestList() {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set([1, 3]))
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const filteredRequests = requests.filter((r) => {
    if (filter !== "All" && r.status !== filter) return false
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      return (
        r.name.toLowerCase().includes(term) ||
        r.company.toLowerCase().includes(term) ||
        r.email.toLowerCase().includes(term) ||
        r.comment.toLowerCase().includes(term)
      )
    }
    return true
  })

  return (
    <div className="bg-card rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-card-foreground font-semibold text-base">Request list</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-1.5">
            <ArrowDownUp className="h-3.5 w-3.5 text-muted-foreground" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent text-muted-foreground text-xs border-none outline-none cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Read">Read</option>
              <option value="Unread">Unread</option>
            </select>
          </div>
          <button className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30">
              <th className="w-8 pb-3" />
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">
                Name Surname
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">
                Company
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">
                Field
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">
                Email
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">
                Phone
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3 pr-4">
                Comment
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => {
              const isExpanded = expandedRows.has(request.id)
              return (
                <RequestRow
                  key={request.id}
                  request={request}
                  isExpanded={isExpanded}
                  onToggle={() => toggleRow(request.id)}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function RequestRow({
  request,
  isExpanded,
  onToggle,
}: {
  request: RequestItem
  isExpanded: boolean
  onToggle: () => void
}) {
  const [answerText, setAnswerText] = useState(request.answer)

  return (
    <>
      {/* Main Row */}
      <tr
        className="border-b border-border/20 hover:bg-secondary/20 transition-colors cursor-pointer"
        onClick={onToggle}
      >
        <td className="py-3 pr-1">
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </td>
        <td className="text-xs text-muted-foreground py-3 pr-4">{request.name}</td>
        <td className="text-xs text-muted-foreground py-3 pr-4">{request.company}</td>
        <td className="text-xs text-muted-foreground py-3 pr-4">{request.field}</td>
        <td className="text-xs text-muted-foreground py-3 pr-4">{request.email}</td>
        <td className="text-xs text-muted-foreground py-3 pr-4">{request.phone}</td>
        <td className="text-xs text-muted-foreground py-3 pr-4 max-w-[140px] truncate">
          {request.comment}
        </td>
        <td className="text-xs py-3">
          <span className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                request.status === "Read" ? "bg-primary" : "bg-destructive"
              }`}
            />
            <span
              className={
                request.status === "Read" ? "text-primary" : "text-destructive"
              }
            >
              {request.status}
            </span>
          </span>
        </td>
      </tr>

      {/* Expanded Content */}
      {isExpanded && (
        <tr>
          <td colSpan={8} className="py-0">
            <div className="pl-8 pr-4 py-4 flex flex-col gap-3 bg-secondary/10 border-b border-border/20">
              {/* Comments */}
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-muted-foreground min-w-[80px]">
                  Comments
                </span>
                <p className="text-xs text-muted-foreground">{request.fullComment}</p>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-muted-foreground min-w-[80px]">
                  Answer
                </span>
                {request.status === "Unread" ? (
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="text"
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-transparent text-xs text-muted-foreground outline-none flex-1 border-b border-border/30 pb-1 focus:border-primary/50"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                      className="bg-primary text-primary-foreground text-xs font-medium px-5 py-1.5 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">{answerText}</p>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
