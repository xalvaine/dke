import { cn, Slider, useMedia } from '@/shared/ui'

const Video = ({ src }: { src: string }) => {
  return (
    <iframe
      src={src}
      className='rounded-xl aspect-video object-contain bg-black w-[297px] md:w-[628px]'
    />
  )
}

const videos = [
  'https://vk.com/video_ext.php?oid=-172706962&id=456239233&hd=2&autoplay=0',
  'https://vk.com/video_ext.php?oid=-172706962&id=456239233&hd=2&autoplay=0',
  'https://vk.com/video_ext.php?oid=-172706962&id=456239233&hd=2&autoplay=0',
  'https://vk.com/video_ext.php?oid=-172706962&id=456239233&hd=2&autoplay=0',
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
