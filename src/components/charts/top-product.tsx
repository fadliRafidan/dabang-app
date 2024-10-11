"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Progress } from '../ui/progress'
import { cn } from '@/lib/utils'

const productTop = [
    {
        name: "Home Decor Range",
        popularity: 45,
        sales: "45%",
        color: "bg-[#0095FF]",
    },
    {
        name: "Disney Princess Pink Bag 18'",
        popularity: 29,
        sales: "29%",
        color: "bg-[#00E096]",
    },
    {
        name: "Bathroom Essentials",
        popularity: 18,
        sales: "18%",
        color: "bg-[#884DFF]",
    },
    {
        name: "Apple Smartwatches",
        popularity: 25,
        sales: "25%",
        color: "bg-[#FF8F0D]",
    }
]

export function TopProduct() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className='1-[100px]'>Popularity</TableHead>
                    <TableHead className="text-center">Sales</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {productTop.map((data, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>
                            <Progress value={data.popularity} indicator_color={`${data.color}`} className="w-[60%] h-[6px]" />
                        </TableCell>
                        <TableCell className="text-center">
                            {data.sales}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
