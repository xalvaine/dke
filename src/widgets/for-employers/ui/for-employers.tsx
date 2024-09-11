import { Button } from '@/shared/ui'

export const ForEmployers = () => {
  return (
    <div
      className={
        'bg-tory-blue-950 pt-48 -mt-24 px-4 pb-10 ' + 'md:px-5 ' + 'lg:px-0'
      }
    >
      <div
        className={
          'bg-gradient-to-b from-malachite-400 to-malachite-950 rounded-3xl py-12 px-7 ' +
          'lg:w-[904px] lg:mx-auto'
        }
      >
        <h2 className='font-bold text-4xl leading-none mb-8 md:text-center'>
          Работодателям
        </h2>
        <p className='text-center text-xl leading-6 mb-12'>
          Нужны талантливые специалисты? Оставьте запрос на кадры, мы подберём
          кандидатов точно под ваши требования.
        </p>
        <Button blue className='w-full'>
          Запросить кадры
        </Button>
      </div>
    </div>
  )
}
