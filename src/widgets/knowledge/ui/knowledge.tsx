import VectorPlate from '../assets/plate.svg'
import VectorArrow from '../assets/arrow.svg'
import VectorArc from '../assets/arc.svg'
import Card1M from '../assets/card-1-m.svg'
import Card2M from '../assets/card-2-m.svg'
import PlateTablet from '../assets/plate-tablet.svg'
import PlatesTablet from '../assets/plates-tablet.svg'
import PlatesPC from '../assets/plates-pc.svg'
import PlatePC from '../assets/plate-pc.svg'
import { Button, useMedia } from '@/shared/ui'

export const Knowledge = () => {
  const { isMobile, isTablet, isDesktop } = useMedia()
  return (
    <div
      className={
        'relative bg-white pt-80 pb-20 overflow-hidden bg-gradient-to-b from-mercury-50 to-mercury-200 ' +
        'md:pt-[611px] ' +
        'lg:pt-[556px]'
      }
    >
      <VectorArc
        className={
          'absolute top-16 w-[292px] h-[588px] -right-12 ' +
          'md:top-[368px] md:right-16 md:h-[635px] md:w-auto'
        }
      />
      <VectorArc
        className={
          'absolute top-[533px] w-[380px] h-[670px] rotate-180 -left-[135px] ' +
          'md:top-[879px] md:left-[135px] md:h-[635px] md:w-auto'
        }
      />
      {isMobile && (
        <VectorPlate className='absolute top-0 text-tory-blue-950' />
      )}
      {isTablet && (
        <PlateTablet className='absolute top-0 text-tory-blue-950' />
      )}
      {isDesktop && (
        <PlatePC className='absolute top-0 text-tory-blue-950 lg:pl-[calc((100%-1024px)/2)] w-auto' />
      )}
      <div
        className={
          'absolute px-4 pt-9 inset-0 ' +
          'md:ml-36 md:pt-64 ' +
          'lg:ml-[113px] lg:pt-[270px] lg:px-0'
        }
      >
        <p
          className={
            'w-80 text-[26px] leading-none font-bold ' +
            'md:text-[38px] md:w-[400px] ' +
            'lg:ml-[calc((100%-1024px)/2)] lg:pl-16 lg:w-[460px]'
          }
        >
          Проверили знания, поучаствовав в ДКЭ
        </p>
        <p
          className={
            'w-80 pt-5 text-xl leading-5 font-light ' +
            'md:text-[22px] md:leading-[26px] md:w-[400px] md:pt-9 ' +
            'lg:ml-[calc((100%-1024px)/2)] lg:pl-16 lg:w-[460px]'
          }
        >
          добровольном квалификационном экзамене
        </p>
      </div>
      <VectorArrow
        className={
          'absolute left-20 top-44 ' +
          'md:top-[460px] md:left-48 ' +
          'lg:left-[calc((100%-1024px)/2+570px)] lg:top-[250px] lg:-rotate-90'
        }
      />
      <div className='relative px-4 md:w-[540px] md:m-auto'>
        <div className='lg:absolute lg:left-[440px] lg:bottom-[20px]'>
          <p
            className={
              'text-tory-blue-900 text-[26px] font-bold leading-5 pb-5 md:w-72 ' +
              'md:text-[38px] md:leading-none md:pb-9'
            }
          >
            Получили работу
          </p>
          <p
            className={
              'text-tory-blue-900 font-bold text-xl leading-none pb-12 ' +
              'md:w-[433px] md:text-[22px] md:pb-16 ' +
              'lg:w-80'
            }
          >
            <span className='block text-tory-blue-1000 font-light'>
              или стражировку и&nbsp;практику
            </span>
            в&nbsp;крупнейших высокотехнологичных компаниях&nbsp;Москвы
          </p>
        </div>
        {isMobile && (
          <>
            <div className='relative mb-6'>
              <Card1M />
              <div className='absolute inset-0 px-8 pt-12'>
                <p className='font-bold text-[52px] leading-none'>122 000</p>
                <p className='text-xl leading-none mt-3'>
                  участников с 2017 года
                </p>
              </div>
            </div>
            <div className='relative'>
              <Card2M />
              <div className='absolute inset-0 px-8 pt-12 mb-6'>
                <p className='font-bold text-[52px] leading-none'>140</p>
                <p className='text-xl leading-none mt-3'>
                  работодателей-партнёров ищут специалистов среди участников ДКЭ
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={'px-4 md:px-5'}>
        {isTablet && <PlatesTablet className={'md:m-auto relative'} />}
        {isDesktop && <PlatesPC className={'md:m-auto relative'} />}
        <Button
          size='md'
          className={
            'w-full mt-8 relative mb-4 ' +
            'md:mb-32 ' +
            'lg:w-[904px] lg:mx-auto lg:block lg:mb-12'
          }
        >
          Пройти тест
        </Button>
      </div>
    </div>
  )
}
