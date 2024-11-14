
import { LandingMenu } from "@/components/navbar";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav></nav>
        <LandingMenu />
        {children}
      </section>
    )
  }