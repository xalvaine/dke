import Plate from '../assets/plate.svg'
import Plate2 from '../assets/plate-2.svg'
import Arrow from '../assets/arrow.svg'
import { BarChart } from './bar-chart'

export const Courses = () => {
  return (
    <div className='-mt-28 pt-48 bg-gradient-to-b to-tory-blue-900 from-tory-blue-950 px-4 pb-12 rounded-b-3xl'>
      <h2 className='text-3xl leading-none font-bold mb-12'>
        Персонально подбираем курсы в зависимости от результатов теста
      </h2>
      <p className='text-2xl leading-[28px] font-light'>
        Курсы помогут подтянуть навыки и пересдать тест&nbsp;на более высокий
        балл.
      </p>
      <div className='w-[374px] pt-8 relative -ml-4 mb-9'>
        <Plate className='w-full' />
        <div className='absolute inset-0 pl-4 pr-2 pt-28'>
          <h3 className='text-[26px] leading-none text-malachite-950 font-bold mb-10'>
            Компетенции
          </h3>
          <div className='flex flex-col gap-7'>
            {[
              { label: 'Медиапланирование', percentage: 38 },
              { label: 'Анализ и обработка данных', percentage: 35 },
              { label: 'Работа с контентом', percentage: 63, green: true },
              {
                label: 'Информационное обеспечение работы в социальных медиа',
                percentage: 75,
                green: true,
              },
            ].map((props) => (
              <BarChart key={props.label} {...props} />
            ))}
          </div>
          <Arrow className='absolute -bottom-12 left-16' />
        </div>
      </div>
      <p className='-mr-4 pl-32 text-xl leading-6 font-light mb-12'>
        Медиапланирование 38%. Подобрали курсы специально для вас, чтобы
        улучшить эту компетенцию. Вот ссылка...
      </p>
      <p className='text-xl leading-6 font-light'>
        Результаты теста автоматически раскладываются на компетенции. Система
        подберёт список курсов, опираясь на баллы по каждой
      </p>
      <div className='relative top-2'>
        <Plate2 className='absolute -bottom-20 h-10 text-tory-blue-900 left-6' />
      </div>
    </div>
  )
}
