import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import TodoList from './TodoList'

export default function page() {
    return (
        <ScrollArea className='h-full'>
            <TodoList />
        </ScrollArea>
    )
}
