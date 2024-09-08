import 'swiper/css'
import { ReactNode, useState } from 'react'
import { Swiper, SwiperSlide, SwiperClass, SwiperProps } from 'swiper/react'
import { cn } from '@/shared/ui'

interface SliderProps extends SwiperProps {
  items: ReactNode[]
  className?: string
  slidesPerView?: number
}

export const Slider = ({ items, className, ...props }: SliderProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={className}>
      <Swiper
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        slidesPerView={1.3}
        spaceBetween={24}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        {...props}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <ul className='flex gap-4 justify-center mt-5'>
        {items.map((_item, index) => (
          <li
            key={index}
            className={cn(
              'h-1 w-10 rounded-full',
              index === activeIndex ? 'bg-malachite-400' : 'bg-gray-500',
            )}
          />
        ))}
      </ul>
    </div>
  )
}
