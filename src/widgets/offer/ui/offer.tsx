import Plate from '../assets/plate.svg'
import Plate1 from '../assets/plate-1.svg'
import Plate2 from '../assets/plate-2.svg'
import Separator from '../assets/separator.svg'
import Star from '../assets/star.svg'
import { Number } from '@/widgets/offer/ui/number'

export const Offer = () => {
  return (
    <div className='bg-gradient-to-b from-mercury-200 to-mercury-50 pb-14 rounded-b-3xl relative'>
      <div className='relative mb-12'>
        <Plate className='text-tory-blue-950' />
        <p className='w-96 absolute top-20 pl-4 text-3xl leading-none font-bold'>
          Индивидуально сопровождаем до&nbsp;оффера всех, кто&nbsp;набрал
          высокий балл за тест
        </p>
      </div>
      <div className='flex flex-col items-center gap-5'>
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
              <Star className='absolute inset-0 m-auto w-fit h-fit -left-[6px] -top-[6px]' />
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
    </div>
  )
}
