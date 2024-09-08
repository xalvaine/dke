import { cn, Slider } from '@/shared/ui'
import { useRef, useState } from 'react'

const Video = ({ src }: { src: string }) => {
  return (
    <video
      controls
      className='rounded-xl w-full aspect-video object-contain bg-black'
    >
      <source src={src} type='video/mp4' />
    </video>
  )
}

const videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
]

export const Videos = () => {
  return (
    <div className={'md:absolute w-full'}>
      <Slider
        items={videos.map((src) => (
          <Video key={src} src={src} />
        ))}
      />
    </div>
  )
}
