'use client';
import { navItems } from '@/constants/data';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { DashboardNav } from './dashboard-nav';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative hidden h-screen bg-white flex-none z-10 pt-28 md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-64' : 'w-[100px]',
        className
      )}
    >
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-28 cursor-pointer rounded-full border bg-white text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 pb-4 px-4">
        <div className="px-3 pb-2">
          <div className="space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
