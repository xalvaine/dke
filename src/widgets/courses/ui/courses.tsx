import Plate from '../assets/plate.svg'
import Plate2 from '../assets/plate-2.svg'
import Arrow from '../assets/arrow.svg'
import CompetsT from '../assets/compets.svg'
import Circle from '../assets/circle.svg'
import { BarChart } from './bar-chart'

export const Courses = () => {
  return (
    <>
      <div
        className={
          '-mt-28 pt-48 bg-gradient-to-b to-tory-blue-900 from-tory-blue-950 px-4 pb-12 rounded-b-3xl overflow-hidden ' +
          'md:px-5 md:pb-[120px] ' +
          'lg:px-[calc((100%-904px)/2)]'
        }
      >
        <div className={'relative'}>
          <Circle
            className={
              'absolute -right-[559px] top-[200px] ' +
              'lg:top-[150px] lg:-right-[250px]'
            }
          />
        </div>
        <h2 className='text-3xl leading-none font-bold mb-12 md:w-[607px] md:text-[46px]'>
          Персонально подбираем курсы в&nbsp;зависимости от&nbsp;результатов
          теста
        </h2>
        <p className='text-2xl leading-[28px] font-light md:text-[32px] md:leading-[38px]'>
          Курсы помогут подтянуть навыки и пересдать тест на&nbsp; более высокий
          балл.
        </p>
        <CompetsT className={'hidden md:block mt-[68px] ml-0'} />
        <div className='w-[374px] pt-8 relative -ml-4 mb-9 md:hidden'>
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
        <p className='-mr-4 pl-32 text-xl leading-6 font-light mb-12 md:hidden'>
          Медиапланирование 38%. Подобрали курсы специально для вас, чтобы
          улучшить эту компетенцию. Вот ссылка...
        </p>
        <p className='text-xl leading-6 font-light md:hidden'>
          Результаты теста автоматически раскладываются на компетенции. Система
          подберёт список курсов, опираясь на баллы по каждой
        </p>
      </div>
      <Plate2
        className={
          'absolute h-10 text-tory-blue-900 left-6 z-10 -mt-[1px] ' +
          'md:w-[440px] md:h-[104px] md:z-10 ' +
          ''
        }
      />
    </>
  )
}
