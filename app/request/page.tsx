import { Navbar } from "@/components/dashboard/navbar"
import { RequestList } from "@/components/request/request-list"

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <Navbar activePage="Request" />

        {/* Request List */}
        <RequestList />
      </div>
    </main>
  )
}
