import * as React from 'react'

import { cn } from '@/lib/class-merge'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'p-4 rounded-md bg-background text-text-base border-none placeholder:text-placeholder focus:ring focus:ring-green-light',
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
Input.displayName = 'Input'

export { Input }
