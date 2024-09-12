import { cn, Slider, useMedia } from '@/shared/ui'
import { useRef, useState } from 'react'

const Video = ({ src }: { src: string }) => {
  return (
    <video
      controls
      className='rounded-xl aspect-video object-contain bg-black w-[297px] md:w-[628px]'
    >
      <source src={src} type='video/mp4' />
    </video>
  )
}

const videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
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
