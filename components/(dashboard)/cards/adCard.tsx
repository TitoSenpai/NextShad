import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ThumbsUp, Tv2Icon } from "lucide-react"

export function AdsCard() {
  return (
    <Card>
      <CardHeader className="shadow-sm p-2 ps-3">
        <div className="flex justify-between d-flex"> 
          <div className="flex flex-col space-y-1"> 
            
            <CardDescription>Ads Views</CardDescription>
            <CardTitle>1,422</CardTitle>
          </div>
          <span className="border bg-gradient-to-t from-black to-gray-600 dark:to-blue-950 p-4 rounded-md"> 
            <Tv2Icon className="text-white" />
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 justify-between">
      <span className="text-green-500">+45%</span> than last week
      </CardContent>
    </Card>
  )
}
