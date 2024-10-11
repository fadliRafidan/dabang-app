"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Icons } from '../icons'

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
    color: "#4AB58E",
  },
  offline_sales: {
    label: "Offline Sales",
    color: "#FFCF00",
  },
} satisfies ChartConfig

export function TargetVsRealityGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>Target vs Reality</CardTitle>
      </CardHeader>
      <CardContent className='py-0'>
        <ChartContainer config={chartConfig} className="aspect-auto h-[140px] w-full">
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
            <Bar dataKey="online_sales" fill="#4AB58E" radius={4} />
            <Bar dataKey="offline_sales" fill="#FFCF00" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex flex-col w-full space-y-2 items-start justify-start text-sm">
          <div className="flex items-center justify-between w-full gap-2 font-medium text-xs leading-none">
            <div className="flex items-center gap-2 font-medium text-xs leading-none">
              <div className='p-3 bg-[#E2FFF3] rounded-[10px]' >
                <Icons.product className='h-5 w-5 text-[#4AB58E]' />
              </div>
              <div className='flex flex-col space-y-1'>
                <p className='font-semibold'>
                  Reality Sales
                </p>
                <p>
                  Global
                </p>
              </div>
            </div>
            <p className='font-semibold text-lg text-[#4AB58E]'>
              8.823
            </p>
          </div>
          <div className="flex items-center justify-between w-full gap-2 font-medium text-xs leading-none">
            <div className="flex items-center gap-2 font-medium text-xs leading-none">
              <div className='p-3 bg-[#FFF4DE] rounded-[10px]' >
                <Icons.product className='h-5 w-5 text-[#FFCF00]' />
              </div>
              <div className='flex flex-col space-y-1'>
                <p className='font-semibold'>
                  Target Sales
                </p>
                <p>
                  Global
                </p>
              </div>
            </div>
            <p className='font-semibold text-lg text-[#FFCF00]'>
              12.122
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
