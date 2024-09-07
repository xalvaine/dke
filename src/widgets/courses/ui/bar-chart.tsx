import { cn } from '@/shared/ui'

interface BarChartProps {
  label: string
  percentage: number
  green?: boolean
}

export const BarChart = ({ label, percentage, green }: BarChartProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h6 className='text-black text-xl leading-5 font-light'>{label}</h6>
      <div className='flex gap-2 h-6 items-center'>
        <div className='h-6 rounded-full text-black bg-mercury-100 grow'>
          <div
            className={cn(
              'bg-tory-blue-900 h-full rounded-full',
              green && 'bg-malachite-300',
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className='font-bold text-tory-blue-900 text-[26px] leading-none'>
          {percentage} %
        </div>
      </div>
    </div>
  )
}
