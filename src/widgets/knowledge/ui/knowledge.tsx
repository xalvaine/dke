import VectorPlate from '../assets/plate.svg'
import VectorArrow from '../assets/arrow.svg'
import VectorArc from '../assets/arc.svg'
import Card1M from '../assets/card-1-m.svg'
import Card2M from '../assets/card-2-m.svg'
import PlateTablet from '../assets/plate-tablet.svg'
import PlatesTablet from '../assets/plates-tablet.svg'
import { Button, useMedia } from '@/shared/ui'

export const Knowledge = () => {
  const { isMobile, isTablet } = useMedia()
  return (
    <div className='relative bg-white pt-80 pb-20 overflow-hidden md:pt-[611px] bg-gradient-to-b from-mercury-50 to-mercury-200'>
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
      <div className='absolute px-4 pt-9 inset-0 md:ml-36 md:pt-64'>
        <p
          className={
            'w-80 text-[26px] leading-none font-bold ' +
            'md:text-[38px] md:w-[400px]'
          }
        >
          Проверили знания, поучаствовав в ДКЭ
        </p>
        <p
          className={
            'w-80 pt-5 text-xl leading-5 font-light ' +
            'md:text-[22px] md:leading-[26px] md:w-[400px] md:pt-9'
          }
        >
          добровольном квалификационном экзамене
        </p>
      </div>
      <VectorArrow className='absolute left-20 top-44 md:top-[460px] md:left-48' />
      <div className='relative px-4 md:w-[540px] md:m-auto'>
        <p
          className={
            'text-tory-blue-900 text-[26px] font-bold leading-5 pb-5 md:w-72 ' +
            'md:text-[38px] md:leading-none md:pb-9'
          }
        >
          Получили работу
        </p>
        <p className='text-tory-blue-900 font-bold text-xl leading-none pb-12 md:w-[433px] md:text-[22px] md:pb-16'>
          <span className='block text-tory-blue-1000 font-light'>
            или стражировку и&nbsp;практику
          </span>
          в&nbsp;крупнейших высокотехнологичных компаниях&nbsp;Москвы
        </p>
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
      <div className={'md:px-5'}>
        {isTablet && <PlatesTablet className={'md:m-auto relative'} />}
        <Button size='md' className='w-full mt-8 relative md:mb-32'>
          Пройти тест
        </Button>
      </div>
    </div>
  )
}
