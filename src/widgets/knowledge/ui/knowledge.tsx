import VectorPlate from '../assets/plate.svg'
import VectorArrow from '../assets/arrow.svg'
import VectorArc from '../assets/arc.svg'
import Card1M from '../assets/card-1-m.svg'
import Card2M from '../assets/card-2-m.svg'
import VectorGap from '../assets/gap.svg'
import { Button } from '@/shared/ui'

export const Knowledge = () => {
  return (
    <div className='relative bg-white pt-80 pb-20 overflow-hidden'>
      <VectorArc className='absolute top-16 w-[292px] h-[588px] -right-12' />
      <VectorArc className='absolute top-[533px] w-[380px] h-[670px] rotate-180 -left-[135px]' />
      <VectorPlate className='absolute top-0 text-tory-blue-950' />
      <div className='absolute px-4 pt-9 inset-0'>
        <p className='w-80 text-[26px] leading-none font-bold'>
          Проверили знания, поучаствовав в ДКЭ
        </p>
        <p className='w-80 pt-5 text-xl leading-5 font-light'>
          добровольном
          <br />
          квалификационном экзамене
        </p>
      </div>
      <VectorArrow className='absolute left-20 top-44' />
      <div className='relative px-4'>
        <p className='text-tory-blue-900 text-[26px] font-bold leading-5 pb-5'>
          Получили работу
        </p>
        <p className='text-tory-blue-900 font-bold text-xl leading-none pb-12'>
          <span className='block text-tory-blue-1000 font-light'>
            или стражировку и практику
          </span>
          в крупнейших
          <br />
          высокотехнологичных
          <br />
          компаниях Москвы
        </p>
        <div className='relative mb-6'>
          <Card1M />
          <div className='absolute inset-0 px-8 pt-12'>
            <p className='font-bold text-[52px] leading-none'>122 000</p>
            <p className='text-xl leading-none mt-3'>участников с 2017 года</p>
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
        <Button size='md' className='w-full mt-8'>Пройти тест</Button>
      </div>
    </div>
  )
}
