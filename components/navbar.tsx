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
import { ModeToggle } from "@/components/(sharedComponents)/theme-toggler"


export function LandingMenu() {
  return (
    <header className="border-b-[1px] items-center z-40 w-full p-4 dark:border-b-slate-700 flex justify-between">
      <Link href="/" className="text-2xl font-bold">
      NextShad
          </Link>
    <NavigationMenu className="">
      <NavigationMenuList className="">
        
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Button className="bg-gradient-to-t from-black to-gray-600 dark:to-blue-950 text-white">
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


