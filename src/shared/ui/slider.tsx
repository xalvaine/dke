import 'swiper/css'
import { ReactNode, useState } from 'react'
import { Swiper, SwiperSlide, SwiperClass, SwiperProps } from 'swiper/react'
import { cn, useMedia } from '@/shared/ui'

interface SliderProps extends SwiperProps {
  items: ReactNode[]
  className?: string
  slidesPerView?: number
}

export const Slider = ({ items, className, ...props }: SliderProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState(0)
  const { isMobile, isTablet, isDesktop } = useMedia()

  const paddingDesktop = Math.round((window.screen.width - 904) / 2)

  return (
    <div className={className}>
      <Swiper
        slidesOffsetBefore={isTablet ? 20 : isDesktop ? paddingDesktop : 16}
        slidesOffsetAfter={isTablet ? 20 : isDesktop ? paddingDesktop : 16}
        slidesPerView={1.7}
        spaceBetween={isTablet ? 50 : isDesktop ? 30 : 24}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        {...props}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <ul className='flex gap-4 justify-center mt-5 md:gap-7 md:mt-11 relative z-10'>
        {items.map((_item, index) => (
          <li
            key={index}
            className={cn(
              'h-1 w-10 rounded-full md:h-2 md:w-20',
              index === activeIndex ? 'bg-malachite-400' : 'bg-gray-500/40',
            )}
          />
        ))}
      </ul>
    </div>
  )
}
