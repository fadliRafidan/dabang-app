"use client"

import { Bar, BarChart, XAxis } from "recharts"

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

export const description = "A stacked bar chart with a legend"

const chartData = [
  { date: "2024-07-15", volume: 450, service_level: 300 },
  { date: "2024-07-16", volume: 380, service_level: 420 },
  { date: "2024-07-17", volume: 520, service_level: 120 },
  { date: "2024-07-18", volume: 140, service_level: 550 },
  { date: "2024-07-19", volume: 600, service_level: 350 },
  { date: "2024-07-20", volume: 480, service_level: 400 },
]

const chartConfig = {
  volume: {
    label: "Volume",
    color: "#00E096",
  },
  service_level: {
    label: "Service Level",
    color: "#0095FF",
  },
} satisfies ChartConfig

export function VolumeVsServiceLevelGraph() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle className='text-lg'>Volume vs Service Level</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-[200px] w-full aspect-auto'>
          <BarChart accessibilityLayer data={chartData} barSize={12}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                })
              }}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#00E096"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="service_level"
              stackId="a"
              fill="#0095FF"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full space-x-3 items-start justify-center text-sm">
          <div className="flex flex-col items-center gap-2 font-medium text-xs leading-none">
            <div className="flex items-center gap-2 font-medium text-xs leading-none">
              <div className='h-3 w-3 bg-[#0095FF] rounded-full' />
              Volume
            </div>
            <p className='font-semibold'>
              1,135
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 font-medium text-xs leading-none">
            <div className="flex items-center gap-2 font-medium text-xs leading-none">
              <div className='h-3 w-3 bg-[#00E096] rounded-full' />
              Services
            </div>
            <p className='font-semibold'>
              635
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
