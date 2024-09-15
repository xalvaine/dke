import Plate from '../assets/plate.svg'
import LeftPlate from '../assets/left-plate.svg'
import Sber from '../assets/sber.png'
import Tinkoff from '../assets/tinkoff.png'
import Vkusvill from '../assets/vkusvill.png'
import Yandex from '../assets/yandex.png'
import Plate3T from '../assets/plate-3-tablet.svg'
import PlateTablet from '../assets/plate-tablet.svg'
import Plate1T from '../assets/plate-1-tablet.svg'
import Plate2T from '../assets/plate-2-tablet.svg'
import CirclePC from '../assets/circle-pc.svg'
import CirclePC2 from '../assets/circle-pc-2.svg'
import { useMedia } from '@/shared/ui'

export const Participants = () => {
  const { isTablet, isDesktop } = useMedia()

  return (
    <>
      <div
        className={
          '-mt-12 relative bg-gradient-to-b from-tory-blue-900 to-tory-blue-950 pt-16 pb-5 rounded-t-3xl px-4 overflow-hidden ' +
          'md:px-5 pt-[120px] ' +
          'lg:px-[calc((100%-904px)/2)]'
        }
      >
        <CirclePC className={'absolute w-540 h-540 -left-[379px] -top-[280px] ' +
          'lg:w-625 lg:h-625 lg:-left-[calc((1024px-100dvw)/2+380px)] lg:-top-[210px]'} />
        <CirclePC2 className={'absolute -right-[950px] top-[440px] ' +
          'lg:right-[calc((100dvw-1024px)/2-520px)] lg:top-[300px]'} />
        {isTablet && <PlateTablet className={'absolute -top-[1px] right-20'} />}
        {isDesktop && <PlateTablet className={'absolute -top-[1px] right-20'} />}
        <p
          className={
            'text-3xl leading-none font-bold mb-12 relative ' +
            'md:text-[46px] ' +
            'lg:w-[800px] lg:mb-[86px]'
          }
        >
          Участники нашего проекта получают офферы от&nbsp;топовых московских
          компаний и&nbsp;стартапов
        </p>
        <div className='relative md:mb-12'>
          <Plate className={'md:hidden'} />
          <Plate1T className={'hidden md:block mx-auto'} />
          <div className='absolute inset-0 m-auto h-fit px-7 text-center flex flex-col items-center'>
            <h5
              className={
                'text-malachite-950 text-[26px] leading-none font-bold ' +
                'md:text-[38px]'
              }
            >
              IT-компании
            </h5>
            <p
              className={
                'text-black mt-4 text-xl leading-none font-light w-[302px] ' +
                'md:text-[22px] md:leading-[26px] md:w-[440px]'
              }
            >
              С прозрачной грейдовой системой и&nbsp;понятным карьерным лифтом.
            </p>
          </div>
        </div>
        <div
          className={
            'mt-8 -mx-2 mb-16 flex gap-4 justify-center flex-wrap ' +
            'md:w-[476px] md:mx-auto md:mb-12 ' +
            'lg:w-[730px] lg:mb-20'
          }
        >
          <img className='w-20 h-20 md:w-24 md:h-24' src={Sber.src} alt='' />
          <img className='w-20 h-20 md:w-24 md:h-24' src={Tinkoff.src} alt='' />
          <img
            className='w-20 h-20 md:w-24 md:h-24'
            src={Vkusvill.src}
            alt=''
          />
          <img className='w-20 h-20 md:w-24 md:h-24' src={Yandex.src} alt='' />
          <img
            className='w-20 h-20 md:w-24 md:h-24'
            src={Vkusvill.src}
            alt=''
          />
          <img className='w-20 h-20 md:w-24 md:h-24' src={Yandex.src} alt='' />
        </div>
        <div className={'relative ' + 'md:mb-20 ' + 'lg:mb-[50px]'}>
          <Plate className={'md:hidden'} />
          <Plate2T className={'hidden md:block mx-auto'} />
          <div className='absolute inset-0 m-auto h-fit px-7 text-center flex flex-col items-center'>
            <h5
              className={
                'text-malachite-950 text-[26px] leading-none font-bold ' +
                'md:text-[38px]'
              }
            >
              Крутые стартапы
            </h5>
            <p
              className={
                'text-black mt-4 text-xl leading-none font-light ' +
                'md:text-[22px] md:leading-[26px] md:w-[552px]'
              }
            >
              Где каждый может создать технологии будущего и&nbsp;продвинуть
              вперёд целые отрасли.
            </p>
          </div>
        </div>
        <div className='mt-8 grid gap-4 grid-cols-2 md:grid-cols-4 md:w-[600px] md:mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <img className='w-20 h-20 md:w-24 md:h-24' src={Sber.src} alt='' />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img
              className='w-20 h-20 md:w-24 md:h-24'
              src={Tinkoff.src}
              alt=''
            />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img
              className='w-20 h-20 md:w-24 md:h-24'
              src={Vkusvill.src}
              alt=''
            />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
          <div className='flex flex-col items-center text-center md:mb-12'>
            <img
              className='w-20 h-20 md:w-24 md:h-24'
              src={Yandex.src}
              alt=''
            />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
        </div>
        <div className='md:flex items-center lg:justify-center lg:h-[324px]'>
          <div
            className={
              'relative -left-4 -mt-4 md:-left-5 ' + 'lg:left-auto lg:mr-[34px]'
            }
          >
            <Plate3T className={'hidden md:inline'} />
            <LeftPlate className={'md:hidden'} />
            <h5
              className={
                'font-bold text-3xl leading-none absolute inset-0 m-auto h-fit text-tory-blue-800 pl-4 pt-2 ' +
                'md:text-[38px] md:w-52 md:mx-auto right-full pl-5 '
              }
            >
              Гиганты и&nbsp;лидеры
              <br />
              отрасли
            </h5>
          </div>
          <div className='-mt-1 flex flex-wrap gap-6 justify-center md:flex-nowrap'>
            <img width={121} height={121} src={Sber.src} alt='' />
            <img width={121} height={121} src={Tinkoff.src} alt='' />
            <img width={121} height={121} src={Vkusvill.src} alt='' />
            <img width={121} height={121} src={Yandex.src} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}
