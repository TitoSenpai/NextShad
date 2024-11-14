"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/app/dashboard/(header)/theme-toggler"


export function LandingMenu() {
  return (
    <header className="border-b-[1px] items-center z-40 w-full p-4 dark:border-b-slate-700 flex justify-between">
      <Link href="/" className="text-2xl font-bold">
      NextShad
          </Link>
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          
          
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:bg-transparent">
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Button>
              Login
              </Button>
            </NavigationMenuLink>
          </Link>
          
        </NavigationMenuItem>
       
      </NavigationMenuList>
    </NavigationMenu>
    </header>
  )
}


