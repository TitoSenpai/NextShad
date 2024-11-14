import { NavMain } from "@/components/nav-main"
import { LandingMenu } from "@/components/navbar";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <LandingMenu />
        {children}
      </section>
    )
  }