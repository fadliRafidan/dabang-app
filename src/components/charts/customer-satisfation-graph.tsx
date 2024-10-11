"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An area chart with gradient fill"

const chartData = [
    { month: "January", last_month: 186, this_mont: 80 },
    { month: "February", last_month: 305, this_mont: 200 },
    { month: "March", last_month: 237, this_mont: 120 },
    { month: "April", last_month: 73, this_mont: 190 },
    { month: "May", last_month: 209, this_mont: 130 },
    { month: "June", last_month: 214, this_mont: 140 },
]

const chartConfig = {
    last_month: {
        label: "Last Month",
        color: "#0095FF",
    },
    this_mont: {
        label: "This Month",
        color: "#00E096",
    },
} satisfies ChartConfig

export function CustomerSatisfationGraph() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-lg'>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="aspect-auto h-[180px] w-full">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 1,
                            right: 1,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="#0095FF"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#0095FF"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1" >
                                <stop
                                    offset="5%"
                                    stopColor="#00E096"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#00E096"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="last_month"
                            type="natural"
                            fill="#00E096"
                            fillOpacity={0.4}
                            stroke="#00E096"
                            stackId="a"
                        />
                        <Area
                            dataKey="this_mont"
                            type="natural"
                            fill="#0095FF"
                            fillOpacity={0.4}
                            stroke="#0095FF"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full space-x-3 items-start justify-center text-sm">
                    <div className="flex flex-col items-center gap-2 font-medium text-xs leading-none">
                        <div className="flex items-center gap-2 font-medium text-xs leading-none">
                            <div className='h-3 w-3 bg-[#0095FF] rounded-[2px]' />
                            Last Month
                        </div>
                        <p className='font-semibold'>
                            $3,004
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 font-medium text-xs leading-none">
                        <div className="flex items-center gap-2 font-medium text-xs leading-none">
                            <div className='h-3 w-3 bg-[#00E096] rounded-[2px]' />
                            This Month
                        </div>
                        <p className='font-semibold'>
                            $4,504
                        </p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
