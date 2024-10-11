'use client'
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export function UserNav() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-3 h-auto">
          <Image alt='profile' src={'/images/fadli.png'} height={100} width={100} className='h-10 w-10 rounded-sm' />
          <div className='flex-col justify-start items-start text-left'>
            <div className='flex items-center md:space-x-8 space-x-2'>
              <p className='font-medium text-sm'>Fadli</p>
              <ChevronDown size={15} />
            </div>
            <p className='text-xs font-light text-[#737791]'>Admin</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              Fadli Rafidan
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              rafidfid28@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profil
          </DropdownMenuItem>
          <DropdownMenuItem>
            Pesanan saya
          </DropdownMenuItem>
          <DropdownMenuItem>
            Pengaturan
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button onClick={() => { }} className='w-full'>
            Sign Out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  );
}
