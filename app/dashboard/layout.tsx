
import { AppSidebar } from "@/components/(dashboard)/sidebar/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AvatarDropdown from "@/components/(dashboard)/header/avatar-menu"
import Breadcrumbs from "@/components/(dashboard)/header/breadcrumbs"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/(sharedComponents)/theme-toggler"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
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
          {children}
        </SidebarInset>
      </SidebarProvider>
    )
  }