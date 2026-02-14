import { Navbar } from "@/components/dashboard/navbar"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { InternationalChart } from "@/components/dashboard/international-chart"
import { RequestTable } from "@/components/dashboard/request-table"
import { Search } from "lucide-react"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <Navbar />

        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-foreground text-xl font-light">
            Welcome in. <span className="font-bold">User</span>
          </h1>
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-input text-foreground placeholder-muted-foreground text-sm rounded-xl pl-4 pr-10 py-2.5 outline-none w-56 focus:ring-1 focus:ring-primary/30"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressChart />
          <InternationalChart />
        </div>

        {/* Request Table */}
        <RequestTable />
      </div>
    </main>
  )
}
