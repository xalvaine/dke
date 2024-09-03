import { cn } from '@/shared/ui'
import { ReactNode } from 'react'

interface NumberProps {
  value: number
  className?: string
  green?: boolean
  alternative?: boolean
  children?: ReactNode
}

export const Number = ({
  value,
  green,
  children,
  alternative,
}: NumberProps) => {
  return (
    <div
      className={cn(
        'border border-tory-blue-900 p-2 rounded-full w-20 h-20 relative',
        green && 'border-malachite-400',
        alternative && 'border-white'
      )}
    >
      <div
        className={cn(
          'bg-tory-blue-900 rounded-full h-full text-[28px] leading-none justify-center items-center',
          green && 'bg-malachite-400',
        )}
      >
        {children}
        <div
          className={cn(
            'absolute inset-0 m-auto w-fit h-fit',
            alternative && 'text-malachite-400',
          )}
        >
          {value}
        </div>
      </div>
    </div>
  )
}
