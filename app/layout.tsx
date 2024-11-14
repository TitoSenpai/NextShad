"use client"

import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LandingMenu } from "@/components/navbar";

import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();


  // Check if the current route starts with '/dashboard'
  const isDashboard = pathname.startsWith('/dashboard');
  const asds = pathname.startsWith('/dashboard');


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {/* Conditionally render LandingMenu */}
          {!isDashboard && <LandingMenu />} 
          {/* Pass isOpen to Navbar */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Remove getServerSideProps
