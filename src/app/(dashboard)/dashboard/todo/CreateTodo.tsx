"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from '@/components/ui/textarea'
import { division, users } from '@/constants/data'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Status } from '@/interface/status'
import { cn } from '@/lib/utils'
import { useTodoStore } from '@/store/store'
import { File, Pen, User } from 'lucide-react'
import Image from 'next/image'


export function CreateTodo() {
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [selectedClient, setSelectedClient] = React.useState<Status | null>(null)
    const [selectedDivision, setSelectedDivision] = React.useState<Status | null>(null)
    const [title, setTitle] = React.useState('')
    const addTodo = useTodoStore((state) => state.addTodo)

    const handleSubmit = () => {
        if (selectedClient && selectedDivision && title) {
            addTodo({
                title,
                client: selectedClient,
                division: selectedDivision,
            });
            setOpen(false);
            setSelectedClient(null);
            setSelectedDivision(null);
            setTitle('');
            setError(false);
        } else {
            setError(true);
        }
    };

    const handleOpenChange = (e: boolean) => {
        setOpen(e);
        setSelectedClient(null);
        setSelectedDivision(null);
        setTitle('');
        setError(false);
    }

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={handleOpenChange}>
                <PopoverTrigger asChild>
                    <Button className="justify-center">
                        Create Todo
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0" align="end">
                    <CardInsertTodo
                        setSelectedClient={setSelectedClient}
                        selectedClient={selectedClient}
                        setSelectedDivision={setSelectedDivision}
                        selectedDivision={selectedDivision}
                        handleSubmit={handleSubmit}
                        setTitle={setTitle}
                        title={title}
                        error={error}
                    />
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <Drawer open={open} onOpenChange={handleOpenChange}>
            <DrawerTrigger asChild>
                <Button className="justify-center">
                    Create Todo
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t">
                    <CardInsertTodo
                        setSelectedClient={setSelectedClient}
                        selectedClient={selectedClient}
                        setSelectedDivision={setSelectedDivision}
                        selectedDivision={selectedDivision}
                        handleSubmit={handleSubmit}
                        setTitle={setTitle}
                        title={title}
                        error={error}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function CardInsertTodo({
    setSelectedClient,
    selectedClient,
    setSelectedDivision,
    selectedDivision,
    handleSubmit,
    setTitle,
    title,
    error,

}: {
    selectedClient: Status | null
    setSelectedClient: (status: Status | null) => void
    selectedDivision: Status | null
    setSelectedDivision: (status: Status | null) => void
    title: string
    error: boolean
    setTitle: (message: string) => void
    handleSubmit: () => void
}) {
    return (
        <Card className='p-2 border-none'>
            <CardTitle className='text-sm px-2 font-semibold'>
                Create Todo
            </CardTitle>
            <CardContent className='flex flex-col items-start justify-between px-2 mt-3 pb-0'>
                <div className='flex items-start space-x-3 w-full'>
                    <div className='bg-white border border-black/20 p-1 rounded-sm h-6 w-6 flex justify-center items-center'>
                        <Pen className='text-black/40' size={15} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <Textarea onChange={(e) => setTitle(e.target.value)} value={title} className='w-full' placeholder="Add description." />
                        {error && !title && (
                            <p className='text-red-500 h-1 text-xs pt-1'>Deskripsi diperlukan</p>
                        )}
                    </div>
                </div>
                <div className='flex justify-between items-start w-full h-full pt-5'>
                    <div className='flex items-center space-x-1'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size={'sm'} variant={'outline'}
                                    className={cn("justify-center items-center space-x-1 flex", error && !selectedClient && 'border-red-500 border')}
                                >
                                    {selectedClient?.label ?
                                        <Image width={100} height={100} className='h-5 w-5 rounded-full' alt='user' src={`/images/${selectedClient.value}.png`} />
                                        : <User size={15} />
                                    }
                                    <p>
                                        {selectedClient?.label ? selectedClient.label : "Client"}
                                    </p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent defaultValue={selectedClient?.value} className="w-56">
                                {users.map((row, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        textValue={row.value}
                                        onClick={() => setSelectedClient(row)}
                                        className='flex items-center space-x-2'
                                    >
                                        <Image width={100} height={100} className='h-7 w-7 rounded-full' alt='user' src={`/images/${row.value}.png`} />
                                        <p>
                                            {row.label}
                                        </p>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>

                                <Button size={'sm'} variant={'outline'} className={cn("justify-center items-center space-x-1 flex", error && !selectedDivision && 'border-red-500 border')}>
                                    <File size={15} />
                                    <p>
                                        {selectedDivision?.label ? selectedDivision.label : "Divisi"}
                                    </p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent defaultValue={selectedDivision?.value} className="w-56">
                                {division.map((row, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        textValue={row.value}
                                        onClick={() => setSelectedDivision(row)}
                                        className='flex items-center space-x-2'
                                    >
                                        <p>
                                            {row.label}
                                        </p>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <Button size={'sm'} onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
