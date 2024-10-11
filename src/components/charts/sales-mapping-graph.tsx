"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a legend"

const chartData = [
    { browser: "amil", visitors: 200, fill: "#1F3863" },
    { browser: "ekonomi", visitors: 275, fill: "#4471C4" },
    { browser: "pendidikan", visitors: 187, fill: "#BCD6ED" },
    { browser: "olahraga", visitors: 173, fill: "#00AFEF" },
    { browser: "antusias", visitors: 90, fill: "#000000" },
    { browser: "other", visitors: 90, fill: "#949494" },
]

const chartConfig = {
    amil: {
        label: "Amil",
    },
    ekonomi: {
        label: "Ekonimi",
        color: "hsl(var(--chart-2))",
    },
    pendidikan: {
        label: "Pendidikan",
        color: "hsl(var(--chart-3))",
    },
    olahraga: {
        label: "Olahraga",
        color: "hsl(var(--chart-4))",
    },
    antusias: {
        label: "Antusias",
        color: "hsl(var(--chart-5))",
    },
    other: {
        label: "Lainnya",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function SalesMappingGraph() {
    return (
        <Card className="flex flex-col relative h-full">
            <CardHeader>
                <CardTitle className='text-lg text-left'>Sales Mapping by Sector</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[280px]"
                >
                    <PieChart height={20}>
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="browser" />}
                            className="-translate-y-1 flex-wrap gap-1 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
