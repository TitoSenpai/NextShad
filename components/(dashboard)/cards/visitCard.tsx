import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PersonStandingIcon } from "lucide-react"

export function VisitorCard() {
  return (
    <Card>
      <CardHeader className="shadow-sm p-2 ps-3">
        <div className="flex justify-between d-flex"> 
          <div className="flex flex-col space-y-1"> 
            
            <CardDescription>Today's visitors</CardDescription>
            <CardTitle>4,423</CardTitle>
          </div>
          <span className="border bg-gradient-to-t from-black to-gray-600 dark:to-blue-950 p-4 rounded-md"> 
            <PersonStandingIcon className="text-white" />
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 justify-between">
        <span className="text-green-500">+25%</span> than last week
      </CardContent>
    </Card>
  )
}
