"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Mon", request: 15, sent: 10 },
  { name: "Tue", request: 25, sent: 18 },
  { name: "Wed", request: 20, sent: 22 },
  { name: "Thu", request: 35, sent: 28 },
  { name: "Fri", request: 30, sent: 20 },
  { name: "Sat", request: 40, sent: 30 },
  { name: "Sun", request: 49, sent: 32 },
]

export function ProgressChart() {
  return (
    <div className="bg-card rounded-xl p-5 flex-1 min-w-0">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-foreground font-semibold text-sm">My Progress</h3>
          <p className="text-muted-foreground text-xs">Request</p>
        </div>
        <select className="bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-lg border-none outline-none">
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>

      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="requestGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 70%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(160, 70%, 50%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(270, 60%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(270, 60%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(228, 15%, 22%)" />
            <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(228, 22%, 14%)",
                border: "1px solid hsl(228, 15%, 22%)",
                borderRadius: "8px",
                color: "hsl(210, 20%, 95%)",
                fontSize: 12,
              }}
            />
            <Area type="monotone" dataKey="request" stroke="hsl(160, 70%, 50%)" fill="url(#requestGradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="sent" stroke="hsl(270, 60%, 60%)" fill="url(#sentGradient)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-muted-foreground text-xs">Request</span>
          <span className="text-foreground text-xs font-medium">49</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(270, 60%, 60%)" }} />
          <span className="text-muted-foreground text-xs">Sent Request</span>
          <span className="text-foreground text-xs font-medium">32</span>
        </div>
      </div>
    </div>
  )
}
