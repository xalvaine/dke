import { ReactElement, ReactNode } from 'react'
import Mask from '../assets/mask.svg'
import Img1 from '../assets/img-1.png'
import Img2 from '../assets/img-2.png'
import Img3 from '../assets/img-3.png'
import Img4 from '../assets/img-4.png'
import Img5 from '../assets/img-5.png'
import Img6 from '../assets/img-6.png'
import Img7 from '../assets/img-7.png'
import Company1 from '../assets/company-1.png'
import Company2 from '../assets/company-2.png'
import Company4 from '../assets/company-4.png'
import Company5 from '../assets/company-5.png'
import Company6 from '../assets/company-6.png'
import Company7 from '../assets/company-7.png'
import Company8 from '../assets/company-8.png'
import Company9 from '../assets/company-9.png'
import Company10 from '../assets/company-10.png'
import Company11 from '../assets/company-11.png'
import Arrow from '../assets/arrow.svg'
import { cn } from '@/shared/ui'

const examples: {
  name: string
  story: string | ReactNode
  result: ReactNode
  imageSrc: string
  beginIconSrc: string
  endIconSrc: string
}[] = [
  {
    imageSrc: Img1.src,
    name: 'Полина Пудло',
    story: 'прошла тест на 2 курсе ВШЭ',
    result: (
      <>
        Заняла 2 место по профессии «маркетолог» и третье по профессии «менеджер
        проектов».
        <br />
        <br />
        Сейчас работает в «Тинькофф».
      </>
    ),
    beginIconSrc: Company1.src,
    endIconSrc: Company2.src,
  },
  {
    imageSrc: Img2.src,
    name: 'Даниил Осипов',
    story: 'прошёл тест на 1 курсе МАИ',
    result: (
      <>
        Занял 2 место по профессии «специалист информационной безопасности».
        <br />
        <br />
        Проходит оплачиваемую стажировку в «Инновационной безопасности».
      </>
    ),
    beginIconSrc: Company5.src,
    endIconSrc: Company4.src,
  },
  {
    imageSrc: Img3.src,
    name: 'Алина Павленко',
    story: <>прошла тест послевыпуска из&nbsp;ПМГМУ</>,
    result: <>Трудоустроилась в 36.6 по&nbsp;профессии «Фармацевт»</>,
    beginIconSrc: Company6.src,
    endIconSrc: Company7.src,
  },
  {
    imageSrc: Img4.src,
    name: 'Всеволод Горбунов',
    story: 'прошёл тест на 2 курсе магистратуры МИРЭА',
    result: (
      <>
        Прошёл стажировку во&nbsp;«Вкусвилле» по&nbsp;професии «мобильный разработчик».
        <br />
        <br />
        После стажировки устроился во&nbsp;«Вкусвилл» по&nbsp;специальности.
      </>
    ),
    beginIconSrc: Company8.src,
    endIconSrc: Company9.src,
  },
  {
    imageSrc: Img5.src,
    name: 'Ксения Прокудина',
    story: 'прошла тест на 2 курсе ВШЭ',
    result: (
      <>
        Стала призёром по профессии «1С&#x2011;программист».
        <br />
        <br />
        Устроилась на стажировку в&nbsp;«Сбер» в Центр ИИ.
      </>
    ),
    beginIconSrc: Company1.src,
    endIconSrc: Company2.src,
  },
  {
    imageSrc: Img6.src,
    name: 'Полина Аблакотова',
    story: 'прошла тест на 4 курсе ВШЭ',
    result: <>Устроилась на работу режиссёром в&nbsp;«Ньюмен технологии».</>,
    beginIconSrc: Company1.src,
    endIconSrc: Company10.src,
  },
  {
    imageSrc: Img7.src,
    name: 'Артём Прокофьев',
    story: <>прошёл тест на 2 курсе РГУ им.&nbsp;Косыгина</>,
    result: (
      <>
        Занял 2 место по профессии «режиссёр».
        <br />
        <br />
        Устроился по специальности в&nbsp;«Ньюмен технологии».
      </>
    ),
    beginIconSrc: Company11.src,
    endIconSrc: Company10.src,
  },
]

export const Examples = () => {
  return (
    <>
      <svg
        className='sr-only'
        width='220'
        height='261'
        viewBox='0 0 220 261'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <clipPath id='examples-mask'>
            <path
              d='M0 28C0 12.536 12.536 0 28 0H192C207.464 0 220 12.536 220 28V209.117C220 216.78 216.86 224.108 211.311 229.392L187.078 252.474C181.871 257.433 174.956 260.199 167.766 260.199H28C12.5361 260.199 0 247.663 0 232.199V28Z'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
      <div className={'flex flex-col gap-14 mb-14 md:gap-20 ' +
        'lg:px-[45px]'}>
        {examples.map((example, index) => (
          <div
            key={example.name}
            className={cn(
              'md:grid md:grid-cols-2 md:gap-[34px] md:w-[610px]',
              index % 2 === 1 && 'ml-auto',
            )}
            style={{ gridTemplateColumns: 'auto 1fr' }}
          >
            <img
              alt=''
              className='w-[220px] h-[261px] shadow-tory-blue-900'
              style={{ clipPath: 'url(#examples-mask)' }}
              src={example.imageSrc}
            />
            <div className='md:order-1 md:col-span-2'>
              <h6 className='text-malachite-950 font-bold text-3xl leading-none mt-9 md:m-0'>
                {example.name}
              </h6>
              <p className='text-black mt-4 text-xl leading-6 font-thin'>
                {example.story}
              </p>
            </div>
            <div className={'md:flex md:flex-col md:justify-between'}>
              <p className='mt-11 mb-9 text-black text-xl leading-6 font-thin md:m-0'>
                {example.result}
              </p>
              <div className='flex gap-4 items-center'>
                <img
                  alt=''
                  className='rounded-full w-14 h-14'
                  src={example.beginIconSrc}
                />
                <Arrow />
                <img
                  alt=''
                  className='rounded-full w-14 h-14 shadow'
                  src={example.endIconSrc}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
