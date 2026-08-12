import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'secondary' | 'outline' }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          'border-transparent bg-indigo-100 text-indigo-900 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300': variant === 'default',
          'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50': variant === 'secondary',
          'text-foreground': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  )
}
