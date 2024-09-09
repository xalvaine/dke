import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/ui/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  blue?: boolean
}

export const Button = ({
  size = 'md',
  children,
  className,
  blue,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'text-black shadow-malachite-300 shadow bg-malachite rounded-full font-bold',
        size === 'sm' && 'h-6 text-[8px] px-4 ' + 'md:text-base md:h-10',
        size === 'md' && 'h-16 text-2xl leading-none ' + 'md:h-28',
        blue && 'bg-tory-blue-900 shadow-tory-blue-900 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
