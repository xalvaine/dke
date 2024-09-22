import Plate from '../assets/plate.svg'
import Plate1 from '../assets/plate-1.svg'
import Plate2 from '../assets/plate-2.svg'
import PlateT from '../assets/plate-tablet.svg'
import Separator from '../assets/separator.svg'
import Star from '../assets/star.svg'
import OfferList from '../assets/offer-list.svg'
import PlateT2 from '../assets/plate-t.svg'
import PlatePC from '../assets/plate-pc.svg'
import OfferPC from '../assets/offer-pc.svg'
import { Number } from '@/widgets/offer/ui/number'

export const Offer = () => {
  return (
    <div
      className={
        'bg-gradient-to-b to-mercury-200 from-mercury-50 pb-14 rounded-b-3xl ' +
        'relative md:h-[1458px] ' +
        'lg:px-[calc((100%-904px)/2)] lg:h-[1701px]'
      }
    >
      <div className='relative mb-12 lg:mb-[77px] -top-[1px]'>
        <Plate className='text-tory-blue-950 md:hidden' />
        <PlateT className='text-tory-blue-950 hidden md:block lg:hidden' />
        <PlatePC className={'hidden lg:block -ml-[108px] text-tory-blue-950'} />
        <p
          className={
            'w-96 absolute top-20 pl-4 text-3xl leading-none font-bold ' +
            'md:text-[46px] md:px-5 md:w-[680px] md:top-16 ' +
            'lg:top-[72px] lg:w-[783px] lg:p-0'
          }
        >
          Индивидуально сопровождаем до&nbsp;оффера всех, кто&nbsp;набрал
          высокий балл за тест
        </p>
      </div>
      <div className={'hidden lg:block relative overflow-hidden h-[1508px] mx-[calc((904px-100vw)/2)]'}>
        <OfferPC
          className={'hidden lg:block absolute inset-x-[calc((100%-1255px)/2)] -top-[1px]'}
        />
      </div>
      <div className='flex flex-col items-center gap-5 md:hidden'>
        <div className='relative'>
          <Plate1 />
          <div className='absolute inset-0 m-auto h-fit flex flex-col items-center gap-5'>
            <Number value={1} />
            <p className='w-96 text-xl leading-6 font-light text-black text-center'>
              Заполните короткую форму
              <br />и зарегистрируйтесь на сайте
            </p>
          </div>
        </div>
        <Separator />
        <div className='relative'>
          <Plate1 />
          <div className='absolute inset-0 m-auto h-fit flex flex-col items-center gap-5'>
            <Number value={2} />
            <p className='w-96 text-xl leading-6 font-light text-black text-center'>
              Выберите профессию
              <br />и пройдите тест
            </p>
          </div>
        </div>
        <Separator />
        <div className='relative'>
          <Plate2 className='text-mercury-50' />
          <div className='absolute inset-0 m-auto h-fit flex flex-col items-center gap-5'>
            <Number green value={3} />
            <p className='w-96 text-xl leading-6 font-light text-black text-center'>
              Получите сертификат и советы <br />
              по&nbsp;развитию навыков <br />
              в&nbsp;зависимости от результатов
              <br />
              теста
            </p>
          </div>
        </div>
        <Separator />
        <div className='relative'>
          <Plate2 className='text-mercury-50' />
          <div className='absolute inset-0 m-auto h-fit flex flex-col items-center gap-5'>
            <Number green value={4} />
            <p className='w-96 text-xl leading-6 font-light text-black text-center'>
              Общайтесь в закрытом
              <br />
              чате, задавайте вопросы
              <br />и получайте карьерные
              <br />
              консультации
            </p>
          </div>
        </div>
        <Separator />
        <div className='relative'>
          <Plate2 className='text-malachite-400' />
          <div className='absolute inset-0 m-auto h-fit flex flex-col items-center gap-5'>
            <Number green value={5} alternative>
              <Star className='absolute m-auto -left-[6px] -top-[6px]' />
            </Number>
            <p className='w-96 text-xl leading-6 font-light text-black text-center'>
              Общайтесь в закрытом
              <br />
              чате, задавайте вопросы
              <br />и получайте карьерные
              <br />
              консультации
            </p>
          </div>
        </div>
      </div>
      <OfferList
        className={'mx-auto relative z-10 hidden md:block lg:hidden'}
      />
      <PlateT2
        className={
          'absolute -bottom-[161px] mx-auto hidden w-fit md:block md:left-0 md:right-0 lg:hidden'
        }
      />
    </div>
  )
}
