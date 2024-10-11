"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { day: "Monday", online_sales: 186, offline_sales: 80 },
  { day: "Tuesday", online_sales: 305, offline_sales: 200 },
  { day: "Wednesday", online_sales: 237, offline_sales: 120 },
  { day: "Thursday", online_sales: 73, offline_sales: 190 },
  { day: "Friday", online_sales: 209, offline_sales: 130 },
  { day: "Saturday", online_sales: 214, offline_sales: 140 },
]

const chartConfig = {
  online_sales: {
    label: "Online Sales",
    color: "#0095FF",
  },
  offline_sales: {
    label: "Offline Sales",
    color: "#00E096",
  },
} satisfies ChartConfig

export function BarGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData} barSize={13}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="online_sales" fill="#0095FF" radius={4} />
            <Bar dataKey="offline_sales" fill="#00E096" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex w-full space-x-3 items-start justify-center text-sm">
          <div className="flex items-center gap-2 font-medium text-xs leading-none">
            <div className='h-3 w-3 bg-[#0095FF] rounded-[2px]' />
            Online Sales
          </div>
          <div className="flex items-center gap-2 font-medium text-xs leading-none">
            <div className='h-3 w-3 bg-[#00E096] rounded-[2px]' />
            Offline Sales
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
