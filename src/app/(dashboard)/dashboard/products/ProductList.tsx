'use client'
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useRef, useState } from 'react';

type CategoryProps = {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

type ProductProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: CategoryProps;
}

export default function ProductList() {
    const { toast } = useToast()
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [hasMore, setHashMore] = useState(true);
    const [page, setPage] = useState(0);

    const elementRef = useRef(null)

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=12`);
            const data = await response.json();
            if (data.length == 0) {
                setHashMore(false)
            } else {
                setProducts(prevProducts => [...prevProducts, ...data])

                // untuk set agar tidak ada id yang sama
                // setProducts(prevProducts => {
                //     const existingIds = new Set(prevProducts.map(product => product.id));
                //     const uniqueProducts = data.filter((prod: ProductProps) => !existingIds.has(prod.id));
                //     return [...prevProducts, ...uniqueProducts];
                // });
                setPage(prevPage => prevPage + 1)
            }
        } catch {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        }
    };

    function onInterSection(entries: IntersectionObserverEntry[]) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
            fetchProducts()
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onInterSection);
        if (observer && elementRef.current) {
            observer.observe(elementRef.current)
        }
        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    }, [products]);

    return (
        <>
            <div className='flex md:flex-row flex-col justify-between w-full items-center pt-8'>
                <div className='flex flex-col justify-start w-full items-start'>
                    <p className='font-semibold text-lg'>
                        All your products
                    </p>
                    <p className='text-sm text-black/60'>
                        recomended
                    </p>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-md hover:shadow-lg transition-all border p-4 rounded-lg transform hover:scale-105 duration-200">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img loading='lazy' src={product.images[0]} alt={product.title} className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        </div>
                        <h2 className="font-semibold text-lg text-gray-800 truncate">{product.title}</h2>
                        <p className="text-sm text-gray-600 mb-2">Rp.{product.price}</p>
                        <span className="inline-block text-xs text-white bg-primary px-2 py-1 rounded-full">{product.category.name}</span>
                    </div>
                ))}
            </div>
            {hasMore &&
                <div ref={elementRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-white shadow-md border p-4 rounded-lg">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <Skeleton className="w-full h-56" />
                            </div>
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-1/2 mb-2" />
                            <Skeleton className="h-4 w-1/4" />
                        </div>
                    ))}
                </div>
            }
        </>
    );
}