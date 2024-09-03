import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/ui/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
}

export const Button = ({
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'text-black shadow-malachite-300 shadow bg-malachite rounded-full font-bold',
        size === 'sm' && 'h-6 text-[8px] px-4',
        size === 'md' && 'h-16 text-2xl leading-none',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
