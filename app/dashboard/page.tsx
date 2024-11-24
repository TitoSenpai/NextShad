
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { VisitorCard } from "@/components/(dashboard)/cards/visitCard"
import { AdsCard } from "@/components/(dashboard)/cards/adCard"
import { EmailsCard } from "@/components/(dashboard)/cards/emailCard"
import { CommentsCard } from "@/components/(dashboard)/cards/commentCard"

import { ChartedOne } from "@/components/(dashboard)/charts/chartOne"
import { ChartedTwo } from "@/components/(dashboard)/charts/chartTwo"

export default function Page() {
  return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className={inter.className}>
          <h1 className="text-2xl font-bold tracking-tight sm:text-2xl md:text-2xl">
                Dashboard
              </h1>
              <span className="block  mb=4">Check the sales, value and bounce rate by country.</span>
          </div>
          <div className="grid auto-rows-min gap-4 lg:grid-cols-4 md:grid-cols-2">
            <div>
              <AdsCard />
              </div>
            <div>
              <VisitorCard />
            </div>
            <div>
              <EmailsCard />
            </div>
            <div>
              <CommentsCard />
            </div>
          </div>
          <div className="" />
          <div  className="grid auto-rows-min gap-4 lg:grid-cols-2 md:grid-cols-2">
            <ChartedOne />
            <ChartedTwo />
          </div>
        </div>
    
  )
}
