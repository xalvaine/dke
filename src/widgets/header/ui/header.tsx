import HeaderBG from '../assets/header-bg.svg'
import HeaderBGTablet from '../assets/bg-tablet.svg'
import DKELogo from '../assets/dke-ogo.svg'
import DPIRGLogo from '../assets/dpirg-logo.svg'
import ANOLogo from '../assets/ano-logo.svg'
import Arrow from '../assets/arrow.svg'
import HeaderPC from '../assets/bg-pc.svg'
import ArrowPC from '../assets/arrow-pc.svg'
import { Button, Slider, useMedia } from '@/shared/ui'

import { Videos } from './videos'

export const Header = () => {
  const { isMobile, isTablet, isDesktop } = useMedia()

  return (
    <div
      className={
        'bg-gradient-to-b from-tory-blue-900 to-tory-blue-950 pb-5 overflow-x-hidden '
      }
    >
      <header className='flex lg:w-full lg:px-[calc((100%-1024px)/2)]'>
        <div className='ml-auto relative'>
          {isMobile && <HeaderBG className='' />}
          {isTablet && <HeaderBGTablet className='' />}
          {isDesktop && <HeaderPC className='' />}
          <div
            className={
              'absolute inset-0 pt-5 px-4 md:pt-6 md:pl-7 ' + 'lg:pr-[172px]'
            }
          >
            <div className='flex relative'>
              <div className='flex gap-1 md:gap-5'>
                <DKELogo className='w-24 md:w-auto md:h-6' />
                <DPIRGLogo className='w-16 md:w-auto md:h-6' />
                <ANOLogo className='w-14 md:w-auto md:h-6' />
              </div>
              <Button
                className={'ml-auto relative w-[88px] ' + 'md:w-[174px]'}
                size='sm'
              >
                Пройти тест
              </Button>
            </div>
            <p
              className={
                'mt-3 text-[8px] w-44 text-black leading-[8px] relative ' +
                'md:mt-4 md:w-[350px] md:text-xs md:leading-none'
              }
            >
              Добровольный квалификационный экзамен для студентов, выпускников и
              молодых специалистов
            </p>
            <div
              className={
                'absolute w-[120px] h-[120px] rounded-full border-8 border-malachite right-0 bottom-0 box-border ' +
                'md:w-[313px] md:h-[313px] md:border-[50px] md:-right-[49px] md:-top-[112px] ' +
                'lg:right-[101px] '
              }
            />
          </div>
        </div>
      </header>
      <p
        className={
          'mt-6 px-5 text-[34px] leading-[34px] font-bold relative w-96 mb-11 ' +
          'md:w-[834px] md:text-[52px] md:leading-none md:mt-28 md:mb-24 ' +
          'lg:mt-[120px] lg:px-0 lg:mx-[calc((100%-904px)/2)] lg:w-[795px] lg:mb-[105px]'
        }
      >
        Один тест вместо сотни откликов «в&nbsp;холодную», чтобы найти{' '}
        <span className={'text-malachite-300'}>работу мечты</span>
        <Arrow
          className={
            'absolute -bottom-6 right-11 ' + 'md:right-5 ' + 'lg:hidden'
          }
        />
        <ArrowPC className={'hidden lg:block absolute right-0 -bottom-12'} />
      </p>
      <Videos />
      {(isTablet || isDesktop) && <div className={'h-40'} />}
      <div className='hidden lg:block absolute top-0 right-0 h-[92px] w-[calc((100%-1024px)/2)] bg-white' />
    </div>
  )
}
