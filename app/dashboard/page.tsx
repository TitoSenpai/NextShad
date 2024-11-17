import { AppSidebar } from "@/components/(dashboard)/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AvatarDropdown from "@/components/(dashboard)/header/avatar-menu"
import Breadcrumbs from "@/components/(dashboard)/header/breadcrumbs"
import { ModeToggle } from "@/components/(sharedComponents)/theme-toggler"
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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />
          </div>
          <div className="ml-auto p-4 flex items-center gap-4">
            <ModeToggle />

            <AvatarDropdown />
          </div> 
        </header>
        
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
      </SidebarInset>
    </SidebarProvider>
  )
}
