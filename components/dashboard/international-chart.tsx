"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Azerbaijan", value: 59, color: "hsl(160, 70%, 50%)" },
  { name: "Turkey", value: 43, color: "hsl(270, 60%, 60%)" },
  { name: "Russian", value: 26, color: "hsl(220, 10%, 40%)" },
]

export function InternationalChart() {
  return (
    <div className="bg-card rounded-xl p-5 flex-1 min-w-0">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-foreground font-semibold text-sm">My Progress</h3>
          <p className="text-muted-foreground text-xs">Request</p>
        </div>
        <select className="bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-lg border-none outline-none">
          <option>International</option>
          <option>Local</option>
        </select>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="h-[180px] w-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(228, 22%, 14%)",
                    border: "1px solid hsl(228, 15%, 22%)",
                    borderRadius: "8px",
                    color: "hsl(210, 20%, 95%)",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* World map dots decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <WorldMapDots />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground text-xs min-w-[80px]">{item.name}</span>
              <span className="text-foreground text-xs font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorldMapDots() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" className="opacity-10">
      {/* Simplified world map dots */}
      {/* Europe/Africa region */}
      <circle cx="55" cy="20" r="1" fill="currentColor" />
      <circle cx="58" cy="18" r="1" fill="currentColor" />
      <circle cx="61" cy="20" r="1" fill="currentColor" />
      <circle cx="57" cy="23" r="1" fill="currentColor" />
      <circle cx="54" cy="26" r="1" fill="currentColor" />
      <circle cx="58" cy="28" r="1" fill="currentColor" />
      <circle cx="55" cy="32" r="1" fill="currentColor" />
      <circle cx="57" cy="35" r="1" fill="currentColor" />
      {/* Asia region */}
      <circle cx="70" cy="18" r="1" fill="currentColor" />
      <circle cx="74" cy="20" r="1" fill="currentColor" />
      <circle cx="78" cy="22" r="1" fill="currentColor" />
      <circle cx="82" cy="20" r="1" fill="currentColor" />
      <circle cx="75" cy="25" r="1" fill="currentColor" />
      <circle cx="80" cy="28" r="1" fill="currentColor" />
      <circle cx="85" cy="25" r="1" fill="currentColor" />
      {/* Americas region */}
      <circle cx="30" cy="20" r="1" fill="currentColor" />
      <circle cx="33" cy="23" r="1" fill="currentColor" />
      <circle cx="28" cy="26" r="1" fill="currentColor" />
      <circle cx="35" cy="30" r="1" fill="currentColor" />
      <circle cx="38" cy="35" r="1" fill="currentColor" />
      <circle cx="40" cy="40" r="1" fill="currentColor" />
      <circle cx="42" cy="45" r="1" fill="currentColor" />
      {/* Oceania */}
      <circle cx="88" cy="45" r="1" fill="currentColor" />
      <circle cx="92" cy="48" r="1" fill="currentColor" />
    </svg>
  )
}
