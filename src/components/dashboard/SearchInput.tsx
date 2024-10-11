import { SearchIcon } from 'lucide-react';
import { InputProps } from '../ui/input';
import React from 'react';
import { cn } from '@/lib/utils';

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex h-10 items-center w-full group overflow-hidden rounded-md bg-background pl-3 text-sm border border-transparent focus-within:border-primary",
                    className,
                )}
            >
                <SearchIcon className="h-[20px] w-[20px] text-primary" />
                <input
                    {...props}
                    type="search"
                    ref={ref}
                    className="w-full  p-2 bg-background placeholder:text-[#737791] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
        );
    },
);

SearchInput.displayName = "Search";

export { SearchInput };