import HeaderBG from '../assets/header-bg.svg'
import DKELogo from '../assets/dke-ogo.svg'
import DPIRGLogo from '../assets/dpirg-logo.svg'
import ANOLogo from '../assets/ano-logo.svg'
import Arrow from '../assets/arrow.svg'
import { Button, Slider } from '@/shared/ui'

import { Videos } from './videos'

export const Header = () => {
  return (
    <div className='bg-gradient-to-b from-tory-blue-900 to-tory-blue-950 pb-5'>
      <header className='w-[374px] h-[93px] ml-auto relative pt-5 px-4 pb-4'>
        <HeaderBG className='absolute inset-0' />
        <div className='flex relative'>
          <div className='flex gap-1'>
            <DKELogo className='w-24' />
            <DPIRGLogo className='w-16' />
            <ANOLogo className='w-14' />
          </div>
          <Button className={'ml-auto relative w-[88px]'} size='sm'>
            Пройти тест
          </Button>
        </div>
        <p className='mt-3 text-[8px] w-44 text-black leading-[8px] relative'>
          Добровольный квалификационный экзамен для студентов, выпускников и
          молодых специалистов
        </p>
        <div
          className={
            'absolute w-[120px] h-[120px] rounded-full border-8 border-malachite right-0 bottom-0 box-border'
          }
        />
      </header>
      <p className='mt-6 px-5 text-[34px] leading-[34px] font-bold relative w-96 mb-11'>
        Один тест вместо сотни откликов <br />
        «в холодную», чтобы найти{' '}
        <span className={'text-malachite-300'}>работу мечты</span>
        <Arrow className={'absolute -bottom-6 right-11'} />
      </p>
      <Videos />
    </div>
  )
}
