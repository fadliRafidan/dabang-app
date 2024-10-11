'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from '../dashboard/SearchInput';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import { Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { ChangeLanguage } from './change-language';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();
  return (
    <div className="supports-backdrop-blur:bg-white fixed left-0 right-0 top-0 z-20 bg-white backdrop-blur">
      <nav className="flex h-20 items-center justify-between px-7">
        <div className="hidden lg:flex justify-start items-center gap-x-3 w-64">
          <Link
            href={'/dashboard'}
            className='flex items-center space-x-3'
          >
            <Image alt='logo' src={'/images/dummy-logo.png'}
              width={50}
              height={50}
              className='h-10 w-10 mr-2'
            />
            <h1 className='font-semibold'>Dabang</h1>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center w-full justify-between gap-5">
          <div className='flex items-center pl-10'>
            <h1 className='font-semibold text-xl'>
              {path === '/dashboard' && "Dashboard"}
              {path === '/dashboard/products' && "Products"}
              {path === '/dashboard/todo' && "Todo"}
            </h1>
          </div>
          <div className='flex items-center justify-end gap-2 w-full'>
            <div className='md:flex hidden items-center w-full max-w-96'>
              <SearchInput placeholder='Search here...' />
            </div>
            <div className='md:flex hidden'>
              <ChangeLanguage />
            </div>
            <Button className='bg-[#FFFAF1] relative md:flex hidden'>
              <Bell color='#FFA412' />
              <div className='h-2 w-2 absolute right-2 top-1 rounded-full bg-[#EB5757]' />
            </Button>
            <UserNav />
          </div>
        </div>
      </nav>
    </div>
  );
}
