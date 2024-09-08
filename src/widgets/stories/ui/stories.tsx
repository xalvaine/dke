import { Examples } from './examples'
import Mask from '../assets/mask.svg'
import Plate from '../assets/plate.svg'
import { Button } from '@/shared/ui'

export const Stories = () => {
  return (
    <div className='pt-24 pb-16 px-4 bg-gradient-to-b from-mercury-50 to-mercury-200 rounded-b-3xl relative'>
      <h2 className='mb-14 text-tory-blue-900 text-3xl leading-none font-bold'>
        Истории успеха: из&nbsp;вуза — в топовые компании
      </h2>
      <Examples />
      <div className='relative'>
        <Mask className='mx-auto text-tory-blue-900' />
        <p className='absolute inset-0 text-malachite-300 text-[150px] flex items-center justify-center font-bold'>
          ?
        </p>
      </div>
      <p className='text-black text-[22px] leading-[26px] text-center mt-9 mb-12'>
        Может быть, здесь место для вашей истории успеха?
      </p>
      <Button className='w-full'>Пройти тест</Button>
      <Plate className='absolute inset-x-0 mx-auto -bottom-10 h-10' />
    </div>
  )
}
