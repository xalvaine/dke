import Top from '../assets/top.svg'
import Plate from '../assets/plate.svg'
import Plate2 from '../assets/plate-2.svg'
import Right from '../assets/right.svg'
import Specialist from '../assets/specialist.png'
import { Button, Slider } from '@/shared/ui'

export const Tests = () => {
  return (
    <div className='bg-gradient-to-b from-mercury-200 to-mercury-50 px-4 pb-14 rounded-b-3xl relative'>
      <Plate2 className='absolute -bottom-9 h-9 text-mercury-50 right-14' />
      <Top className='w-full text-tory-blue-950 -mx-4' />
      <h2 className='mt-14 text-tory-blue-900 text-3xl leading-none font-bold mb-12'>
        Тестов — два вида на выбор: для студентов и специалистов
      </h2>
      <div className='flex flex-col gap-6'>
        <div className='relative'>
          <Plate />
          <div className='px-6 absolute inset-0 m-auto h-fit'>
            <h3 className='font-bold text-[26px] leading-none mb-10'>
              Для студентов
              <br />
              1-2 курса
            </h3>
            <p className='font-bold text-[120px] leading-none text-malachite-300'>
              70
            </p>
            <p className='font-bold text-3xl leading-none mb-4'>вопросов</p>
            <p className='font-bold text-xl leading-6'>
              Поможет попасть на практику.
            </p>
          </div>
        </div>
        <div className='relative'>
          <Plate />
          <div className='px-6 absolute inset-0 m-auto h-fit'>
            <h3 className='font-bold text-[26px] leading-none mb-10'>
              Для старшекурсников и&nbsp;выпускников
            </h3>
            <p className='font-bold text-[120px] leading-none text-malachite-300'>
              100
            </p>
            <p className='font-bold text-3xl leading-none mb-4'>вопросов</p>
            <p className='font-bold text-xl leading-6'>
              Поможет устроиться на&nbsp;работу или стажировку.
            </p>
          </div>
        </div>
      </div>
      <p className='mt-14 text-center text-xl leading-6 text-black mb-24'>
        Если вы только погружаетесь в&nbsp;профессию, вам не придётся
        конкурировать с опытными специалистами. Для вас — один тест, для них —
        другой. Чем выше балл, тем больше шансов устроиться на работу,
        стажировку или&nbsp;практику.
      </p>
      <p className='pr-24 text-[26px] leading-none text-black relative -mr-4 font-bold mb-8'>
        ДКЭ можно сдать по&nbsp;
        <span className='text-malachite-400'>70 профессиям</span> в&nbsp;
        <span className='text-tory-blue-900'>7 направлениях</span>
        <Right className='absolute right-0 inset-y-0 my-auto' />
      </p>
      <ul className='flex flex-col gap-2 items-start mb-11'>
        {[
          'Цифровые технологии',
          'Инженерия и строительство',
          'Менеджмент',
          'Креативные индустрии',
          'Услуги для населения',
          'Экономика, финансы и аналитика',
          'Маркетинг и коммуникационные технологии',
        ].map((text) => (
          <li key={text} className='px-5 py-3 bg-tory-blue-900 rounded-3xl'>
            {text}
          </li>
        ))}
      </ul>
      <Button size='md' className='w-full mb-14'>
        Пройти тест
      </Button>
      <p className='font-bold text-[26px] leading-none text-black mb-12'>
        Вопросы разработаны совместно с рекрутерами топовых московских
        работодателей — о чём спрашивают в&nbsp;тесте, пригодится на&nbsp;работе
      </p>
      <Slider
        className='-mx-4'
        items={[Specialist.src, Specialist.src].map((_item, index) => (
          <img
            key={index}
            alt=''
            src={Specialist.src}
            className='block w-full aspect-video'
          />
        ))}
      />
      <p className='text-xl font-light leading-6 text-black mt-9'>
        В вопросах может быть один или несколько правильных вариантов ответа.
        Бывают вопросы, где нужно расставить варианты в&nbsp;правильном порядке
      </p>
    </div>
  )
}
