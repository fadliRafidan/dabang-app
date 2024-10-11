import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { UserPlus } from 'lucide-react'

export default function SalesSummary() {
    return (
        <Card className="pb-4 h-full">
            <CardHeader>
                <CardTitle className='text-lg'>Today&apos;s Sales</CardTitle>
                <CardDescription>
                    Sales Summery
                </CardDescription>
            </CardHeader>
            <CardContent className='h-full pt-4'>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className='bg-[#FFE2E5] border-none'>
                        <CardHeader className="flex px-3 pt-3 pb-0 flex-col items-start justify-start space-y-0">
                            <div className='p-2 bg-red-500 rounded-full'>
                                <Image src={'/icons/sales.png'} alt='icon' height={100} width={100} className='h-5 w-5' />
                            </div>
                            <CardTitle className="text-2xl font-bold py-2">
                                $1
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-3 py-0 pb-2'>
                            <div className="text-sm font-semibold text-[#425166]">Total Sales</div>
                            <p className="text-xs text-primary">
                                +8% from yesterday
                            </p>
                        </CardContent>
                    </Card>
                    <Card className='bg-[#FFF4DE] border-none'>
                        <CardHeader className="flex px-3 pt-3 pb-0 flex-col items-start justify-start space-y-0">
                            <div className='p-2 bg-[#FF947A] rounded-full'>
                                <Image src={'/icons/document.png'} alt='icon' height={100} width={100} className='h-5 w-5' />
                            </div>
                            <CardTitle className="text-2xl font-bold py-2">
                                300
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-3 py-0 pb-2'>
                            <div className="text-sm font-semibold text-[#425166]">Total Order</div>
                            <p className="text-xs text-primary">
                                +5% from yesterday
                            </p>
                        </CardContent>
                    </Card>
                    <Card className='bg-[#DCFCE7] border-none'>
                        <CardHeader className="flex px-3 pt-3 pb-0 flex-col items-start justify-start space-y-0">
                            <div className='p-2 bg-[#3CD856] rounded-full'>
                                <Image src={'/icons/tag.png'} alt='icon' height={100} width={100} className='h-5 w-5' />
                            </div>
                            <CardTitle className="text-2xl font-bold py-2">
                                5
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-3 py-0 pb-2'>
                            <div className="text-sm font-semibold text-[#425166]">Product Sold</div>
                            <p className="text-xs text-primary">
                                +1,2% from yesterday
                            </p>
                        </CardContent>
                    </Card>
                    <Card className='bg-[#F3E8FF] border-none'>
                        <CardHeader className="flex px-3 pt-3 pb-0 flex-col items-start justify-start space-y-0">
                            <div className='p-2 bg-[#BF83FF] rounded-full'>
                                <UserPlus className='h-5 w-5 fill-white stroke-white' />
                            </div>
                            <CardTitle className="text-2xl font-bold py-2">
                                8
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-3 py-0 pb-2'>
                            <div className="text-sm font-semibold text-[#425166]">New Customers</div>
                            <p className="text-xs text-primary">
                                +0,5% from yesterday
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}
