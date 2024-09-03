import Plate from '../assets/plate.svg'
import LeftPlate from '../assets/left-plate.svg'
import Sber from '../assets/sber.png'
import Tinkoff from '../assets/tinkoff.png'
import Vkusvill from '../assets/vkusvill.png'
import Yandex from '../assets/yandex.png'
import Plate3 from '../assets/plate-3.svg'

export const Participants = () => {
  return (
    <>
      <div className='-mt-12 relative bg-gradient-to-b from-tory-blue-900 to-tory-blue-950 pt-16 pb-5 rounded-t-3xl px-4'>
        <p className='text-3xl leading-none font-bold mb-12'>
          Участники нашего проекта получают офферы от&nbsp;топовых московских
          компаний и&nbsp;стартапов
        </p>
        <div className='relative'>
          <Plate />
          <div className='absolute inset-0 m-auto h-fit px-7 text-center'>
            <h5 className='text-malachite-950 text-[26px] leading-none font-bold'>
              IT-компании
            </h5>
            <p className='text-black mt-4 text-xl leading-none font-light'>
              С прозрачной грейдовой системой и понятным карьерным лифтом.
            </p>
          </div>
        </div>
        <div className='mt-8 -mx-1 mb-16 flex gap-4 justify-center flex-wrap'>
          <img width={78} height={78} src={Sber.src} alt='' />
          <img width={78} height={78} src={Tinkoff.src} alt='' />
          <img width={78} height={78} src={Vkusvill.src} alt='' />
          <img width={78} height={78} src={Yandex.src} alt='' />
          <img width={78} height={78} src={Vkusvill.src} alt='' />
          <img width={78} height={78} src={Yandex.src} alt='' />
        </div>
        <div className='relative'>
          <Plate />
          <div className='absolute inset-0 m-auto h-fit px-7 text-center'>
            <h5 className='text-malachite-950 text-[26px] leading-none font-bold'>
              Крутые стартапы
            </h5>
            <p className='text-black mt-4 text-xl leading-none font-light'>
              Где каждый может создать технологии будущего и&nbsp;продвинуть
              вперёд целые отрасли.
            </p>
          </div>
        </div>
        <div className='mt-8 grid gap-4 grid-cols-2'>
          <div className='flex flex-col items-center text-center'>
            <img width={78} height={78} src={Sber.src} alt='' />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img width={78} height={78} src={Tinkoff.src} alt='' />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img width={78} height={78} src={Vkusvill.src} alt='' />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img width={78} height={78} src={Yandex.src} alt='' />
            <p className='pt-3 font-thin text-base leading-[18px]'>
              Создаёт беспилотники
            </p>
          </div>
        </div>
        <div className='relative -left-4 -mt-4'>
          <LeftPlate />
          <h5 className='font-bold text-3xl leading-none absolute inset-0 m-auto h-fit text-tory-blue-800 pl-4 pt-2'>
            Гиганты и лидеры
            <br />
            отрасли
          </h5>
        </div>
        <div className='-mt-1 flex flex-wrap gap-6 justify-center'>
          <img width={121} height={121} src={Sber.src} alt='' />
          <img width={121} height={121} src={Tinkoff.src} alt='' />
          <img width={121} height={121} src={Vkusvill.src} alt='' />
          <img width={121} height={121} src={Yandex.src} alt='' />
        </div>
      </div>
    </>
  )
}
