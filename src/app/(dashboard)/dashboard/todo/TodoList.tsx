'use client'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { status } from '@/constants/data';
import { Status } from '@/interface/status';
import { useTodoStore } from '@/store/store';
import { motion } from 'framer-motion';
import { ChevronDown, Filter, Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { CreateTodo } from './CreateTodo';


export default function TodoList() {
    const today = new Date();
    const [initState, setInitState] = React.useState(false);
    const [selectedStatus, setSelectedStatus] = React.useState<Status>(status[0])
    const formatedDate = today.toLocaleDateString('ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const todos = useTodoStore((state) => state)

    const filteredTodos = todos.todos.filter(todo =>
        selectedStatus?.value === 'Semua' || todo.status === selectedStatus.value
    );

    useEffect(() => {
        setInitState(true);

        return () => {
            setInitState(false);
        }
    }, [])
    return (
        <div className='flex w-full py-8 justify-center'>
            <div className='w-full max-w-2xl items-center flex flex-col'>
                <div className='flex md:flex-row flex-col justify-between w-full items-center'>
                    <div className='flex flex-col justify-start w-full items-start'>
                        <p className='font-semibold text-lg'>
                            Start Today with ToDo
                        </p>
                        <p className='text-sm text-black/60'>
                            {formatedDate}
                        </p>
                    </div>
                    <div className='flex md:justify-end justify-between md:mt-0 mt-5 w-full items-center space-x-4'>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant={'outline'} className='flex items-center space-x-2'>
                                        <Filter size={16} />
                                        <div>
                                            {selectedStatus?.value && selectedStatus?.value}
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent defaultValue={selectedStatus?.value} className="w-56" align="end">
                                    {status.map((row, index) => (
                                        <DropdownMenuCheckboxItem
                                            checked={selectedStatus?.value === row.value}
                                            key={index}
                                            textValue={row.value}
                                            onClick={() => setSelectedStatus(row)}
                                        >
                                            {row.label}
                                        </DropdownMenuCheckboxItem>

                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu >
                        </div>
                        <div>
                            <CreateTodo />
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-full mb-4'>
                    {!initState && (
                        [1, 2, 3].map(item => (
                            <div key={item} className="flex items-center space-x-4 mb-3">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2 w-full">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                </div>
                            </div>
                        ))
                    )}
                    {filteredTodos.length === 0 && initState ?
                        <div className='flex w-full justify-center mt-2'>
                            <div className='flex w-full max-w-sm justify-center py-1 items-center border border-primary rounded-sm'>
                                <p className='text-primary'>Tidak ada tugas.</p>
                            </div>
                        </div>
                        : filteredTodos.map((todo, index) => (
                            <motion.div
                                key={index}
                                className='bg-white shadow-sm px-2 rounded-sm w-full flex justify-between items-center py-2 mb-2'
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='flex items-center space-x-3'>
                                    <Checkbox
                                        id={`todo-${todo.id}`}
                                        className='h-6 w-6'
                                        checked={todo.status === 'Selesai'}
                                        onCheckedChange={() => todos.toggleStatus(todo.id)}
                                    />
                                    <div className='flex md:flex-row flex-col md:space-y-0 space-y-2 md:items-center items-start md:space-x-2 space-x-0'>
                                        <p className={`text-base font-medium leading-none ${todo.status === 'Selesai' ? 'line-through' : ''} truncate w-32 sm:w-56 md:w-full max-w-sm`}>
                                            {todo.title}
                                        </p>
                                        <p className="text-sm italic bg-gray-100 rounded-sm px-1 flex-1 text-blue-500 font-medium">
                                            #{todo.division.label}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <Button variant={'secondary'} className='flex items-center space-x-1'>
                                        <Image width={100} height={100} className='h-5 w-5 rounded-full' alt='user' src={`/images/${todo.client.value}.png`} />
                                        <p className="text-sm text-black/55 font-medium leading-none">
                                            {todo.client.label}
                                        </p>
                                    </Button>
                                    <Button variant={'secondary'} size={'icon'} onClick={() => todos.deleteTodo(todo.id)}>
                                        <Trash size={17} className='text-red-500' />
                                    </Button>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
