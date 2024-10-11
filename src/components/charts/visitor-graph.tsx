"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A multiple line chart"

const chartData = [
    { month: "January", loyal_customers: 186, new_customers: 80, unique_customers: 100 },
    { month: "February", loyal_customers: 305, new_customers: 200, unique_customers: 120 },
    { month: "March", loyal_customers: 237, new_customers: 120, unique_customers: 110 },
    { month: "April", loyal_customers: 73, new_customers: 190, unique_customers: 90 },
    { month: "May", loyal_customers: 209, new_customers: 130, unique_customers: 60 },
    { month: "June", loyal_customers: 214, new_customers: 140, unique_customers: 120 },
    { month: "July", loyal_customers: 214, new_customers: 140, unique_customers: 100 },
    { month: "August", loyal_customers: 214, new_customers: 140, unique_customers: 100 },
    { month: "September", loyal_customers: 214, new_customers: 140, unique_customers: 100 },
    { month: "October", loyal_customers: 214, new_customers: 140, unique_customers: 190 },
    { month: "November", loyal_customers: 214, new_customers: 140, unique_customers: 100 },
    { month: "December", loyal_customers: 214, new_customers: 140, unique_customers: 100 },
]

const chartConfig = {
    loyal_customers: {
        label: "Loyal Customers",
        color: "#A700FF",
    },
    new_customers: {
        label: "New Customers",
        color: "#EF4444",
    },
    unique_customers: {
        label: "Unique Customers",
        color: "#3CD856",
    },
} satisfies ChartConfig

export function VisitorGraph() {
    return (
        <Card className='h-full'>
            <CardHeader>
                <CardTitle className='text-lg'>Visitor Insights</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="aspect-auto h-[160px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
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
                        <Line
                            dataKey="loyal_customers"
                            type="monotone"
                            stroke="#A700FF"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="new_customers"
                            type="monotone"
                            stroke="#EF4444"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="unique_customers"
                            type="monotone"
                            stroke="#3CD856"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full space-x-3 items-start justify-center text-sm">
                    <div className="flex items-center gap-2 font-medium text-xs leading-none">
                        <div className='h-3 w-3 bg-[#A700FF] rounded-[2px]' />
                        Loyal Customers
                    </div>
                    <div className="flex items-center gap-2 font-medium text-xs leading-none">
                        <div className='h-3 w-3 bg-[#EF4444] rounded-[2px]' />
                        New Customers
                    </div>
                    <div className="flex items-center gap-2 font-medium text-xs leading-none">
                        <div className='h-3 w-3 bg-[#3CD856] rounded-[2px]' />
                        Unique Customers
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
