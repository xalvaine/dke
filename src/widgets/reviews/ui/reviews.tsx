import Mask from '../assets/mask.svg'
import { Slider } from '@/shared/ui'
import Company from '../assets/company.png'

export const Reviews = () => {
  return (
    <>
      <svg className='sr-only'>
        <defs>
          <clipPath id='#reviews-path'>
            <path
              d='M0 28C0 12.536 12.536 0 28 0H236C251.464 0 264 12.536 264 28V214.493C264 222.898 260.224 230.859 253.714 236.177L222.492 261.683C217.492 265.768 211.234 267.999 204.777 267.999H28C12.5361 267.999 0 255.463 0 239.999V28Z'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
      <div className='bg-gradient-to-b from-tory-blue-950 to to-tory-blue-900 px-4 pb-28'>
        <h2 className='text-3xl leading-none mb-12'>
          Отзывы об участниках экзамена
        </h2>
        <div className='-mx-4'>
          <Slider
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            slidesPerView={1}
            items={Array(5)
              .fill({
                imageSrc: Company.src,
                description:
                  'Положительная характеристика сотрудника. Сотрудник выполняет большой объём работы, всегда укладывается в сроки, при этом успевает присутствовать на всех совещаниях, готовить своевременно требуемые отчеты \n' +
                  'и знакомиться с отчетами, поступающими к нему. Выполняемый им объем работ свидетельствует о высоком профессионализме и преданности компании.',
                name: 'Алла Меркулова',
                job: 'руководитель HR-отдела,\n' + '«Тинькофф»',
                offer:
                  'взяла на работу  Сергея Константинова,\n' +
                  'призёра по профессии «бухгалтер»',
              })
              .map(({ imageSrc, description, name, job, offer }, index) => (
                <div key={index} className='px-4'>
                  <img
                    alt=''
                    src={imageSrc}
                    className='mb-16'
                    style={{ clipPath: 'url(##reviews-path)' }}
                  />
                  <p className='text-xl leading-6 font-light mb-14'>
                    {description}
                  </p>
                  <p className='font-bold text-3xl leading-none mb-9'>{name}</p>
                  <p className='text-xl leading-6 font-light mb-11'>{job}</p>
                  <p className='text-xl leading-6 font-light mb-9'>{offer}</p>
                </div>
              ))}
          />
        </div>
      </div>
    </>
  )
}
