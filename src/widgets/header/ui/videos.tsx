import { cn, Slider, useMedia } from '@/shared/ui'

import { useCallback, useEffect, useRef } from 'react'

const Video = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = useCallback(() => {
    if (!videoRef.current) {
      return
    }

    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
  }, [])

  return (
    <video
      ref={videoRef}
      controls={false}
      onClick={handleClick}
      src={src}
      className='rounded-xl aspect-video object-contain bg-black w-[297px] md:w-[628px]'
    />
  )
}

const videos = [
  '/Центр оценки Motion дизайнер.mp4',
  '/Центр_оценки_Data_Scientist_платформа_МТС_Линк_Google_Chrome_2024.mp4',
]

export const Videos = () => {
  const { isTablet, isDesktop } = useMedia()
  return (
    <div className={'md:absolute w-full'}>
      <Slider
        slidesPerView='auto'
        slideStyle={{ width: isTablet || isDesktop ? 628 : 297 }}
        items={videos.map((src) => (
          <Video key={src} src={src} />
        ))}
      />
    </div>
  )
}
