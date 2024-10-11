import { ScrollArea } from '@/components/ui/scroll-area'
import ProductList from './ProductList'

export default function page() {
    return (
        <ScrollArea className='h-full'>
            <ProductList />
        </ScrollArea>
    )
}
