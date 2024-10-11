'use client'
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
export function ChangeLanguage() {

  const [language, setLanguage] = React.useState("Eng (US)");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-between space-x-2 h-auto w-32 px-2">
          <Image alt='profile' src={'/icons/us-flag.png'} height={50} width={50} className='h-6 w-6 rounded-sm' />
          <div className='flex-col justify-start items-start text-left'>
            <div className='flex items-center'>
              <p className='font-semibold text-sm'>{language ? language : "Eng(US)"}</p>
              <ChevronDown size={15} />
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setLanguage("Ind (ID)")}>
            Indonesia (ID)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("Eng (US)")}>
            English (US)
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu >
  );
}
