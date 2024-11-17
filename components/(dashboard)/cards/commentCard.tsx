import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { MessageSquareIcon } from "lucide-react"

export function CommentsCard() {
  return (
    <Card>
      <CardHeader className="shadow-sm p-2 ps-3">
        <div className="flex justify-between d-flex"> 
          <div className="flex flex-col space-y-1"> 
            
            <CardDescription>New Comments</CardDescription>
            <CardTitle>353</CardTitle>
          </div>
          <span className="border bg-gradient-to-t from-black to-gray-600 dark:to-blue-950 p-4 rounded-md"> 
            <MessageSquareIcon className="text-white" />
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 justify-between">
      <span className="text-green-500">+45</span> New Comments
      </CardContent>
    </Card>
  )
}
