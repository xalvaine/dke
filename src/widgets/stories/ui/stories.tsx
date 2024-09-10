import { Examples } from './examples'
import Mask from '../assets/mask.svg'
import Plate from '../assets/plate.svg'
import { Button } from '@/shared/ui'

export const Stories = () => {
  return (
    <div
      className={
        'pt-24 pb-16 px-4 bg-gradient-to-b from-mercury-50 to-mercury-200 rounded-b-3xl relative ' +
        'md:pt-[240px]'
      }
    >
      <h2
        className={
          'mb-14 text-tory-blue-900 text-3xl leading-none font-bold ' +
          'md:text-[46px] mb-10'
        }
      >
        Истории успеха: из&nbsp;вуза — в топовые компании
      </h2>
      <Examples />
      <div
        className={
          'md:w-[610px] md:flex md:gap-[34px] md:ml-auto md:items-center md:mb-10'
        }
      >
        <div className='relative'>
          <Mask className='mx-auto text-tory-blue-900' />
          <p className='absolute inset-0 text-malachite-300 text-[150px] flex items-center justify-center font-bold'>
            ?
          </p>
        </div>
        <p className='text-black text-[22px] leading-[26px] text-center mt-9 mb-12 md:text-start md:m-0 md:w-[220px]'>
          Может быть, здесь место для вашей истории успеха?
        </p>
      </div>
      <Button className='w-full md:w-[330px] md:mx-auto md:block'>
        Пройти тест
      </Button>
      <Plate className='absolute inset-x-0 mx-auto -bottom-10 h-10 md:hidden' />
    </div>
  )
}
