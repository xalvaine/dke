import Plate from '../assets/plate.svg'
import Cert from '../assets/cert.png'
import SkillsList from '../assets/skills-list.svg'

export const Skills = () => {
  return (
    <div
      className={
        'bg-gradient-to-b from-tory-blue-900 to-tory-blue-950 -mt-12 px-4 pb-9 ' +
        'md:pt-[252px]'
      }
    >
      <h2 className={'pt-28 font-bold text-3xl leading-none mb-9 '}>
        Прокачиваем ваши навыки и даём преимущества
        <br />
        при найме
      </h2>
      <div className='flex flex-col gap-6 md:hidden'>
        <div className='relative'>
          <Plate />
          <div className='absolute px-8 flex flex-col justify-center inset-0'>
            <h3 className='text-malachite-950 mb-6 text-[26px] leading-none font-bold'>
              Сертификат,
              <br />
              который видят сотни
              <br />
              работодателей
            </h3>
            <p className='text-black text-xl leading-6 font-light'>
              В сертификате — результаты теста от 0 до 100 баллов. Чем выше
              балл, тем больше шансов получить оффер.
            </p>
          </div>
        </div>
        <img alt='' src={Cert.src} className='rounded-3xl' />
        <div className='relative'>
          <Plate />
          <div className='absolute px-8 flex flex-col justify-center inset-0'>
            <h3 className='text-malachite-950 mb-6 text-[26px] leading-none font-bold'>
              Прямые контакты с&nbsp;рекрутерами крупнейших компаний
            </h3>
            <p className='text-black text-xl leading-6 font-light'>
              Мы сами свяжемся с&nbsp;рекрутерами и предложим вашу кандидатуру.
              Если вы им подойдёте, рекрутеры позовут на собеседование.
            </p>
          </div>
        </div>
        <div className='relative'>
          <Plate />
          <div className='absolute px-8 flex flex-col justify-center inset-0'>
            <h3 className='text-malachite-950 mb-6 text-[26px] leading-none font-bold'>
              Закрытый чат в&nbsp;Телеграме с&nbsp;создателями проекта
            </h3>
            <p className='text-black text-xl leading-6 font-light'>
              В чате можно задать любой вопрос по ДКЭ и&nbsp;узнать
              о&nbsp;мероприятиях по&nbsp;проекту. Например, о&nbsp;бесплатных
              карьерных консультациях.
            </p>
          </div>
        </div>
      </div>
      <div className={'relative hidden md:block mb-[120px]'}>
        <SkillsList />
        <img
          alt=''
          src={Cert.src}
          className='absolute top-[338px] w-[520px] h-[325px] rounded-3xl'
        />
      </div>
      <p className='mt-14 mb-11 text-3xl leading-none font-bold md:text-[46px] md:mb-20'>
        Проводим бесплатные
        <br />
        карьерные консультации
        <br />
        онлайн
      </p>
      <div className='flex flex-col gap-9 md:w-[410px] md:ml-[156px]'>
        <div>
          <p className='text-2xl leading-none font-bold text-malachite-950 mb-4'>
            Помогаем составить резюме для конкретной вакансии или работодателя
          </p>
          <p className='text-xl leading-[24px] font-light'>
            Мы знаем требования работодателей к кандидатам и&nbsp;то, как
            правильно подсвечивать сильные стороны. Резюме участников ДКЭ
            выгодно отличается от резюме конкурентов на вакансию.
          </p>
        </div>
        <div>
          <p className='text-2xl leading-none font-bold text-malachite-950 mb-4'>
            Устраиваем тренировочные собеседования и разбираем ответы участников
          </p>
          <p className='text-xl leading-[24px] font-light'>
            Карьерный психолог слушает и анализирует ответы участников ДКЭ,
            помогает исправить ошибки и почувствовать уверенность перед
            настоящим собеседованием.
          </p>
        </div>
        <div>
          <p className='text-2xl leading-none font-bold text-malachite-950 mb-4'>
            Вместе с кандидатом записываем видеорезюме для работодателей
          </p>
          <p className='text-xl leading-[24px] font-light'>
            Видеорезюме поможет выделиться среди других кандидатов
            и&nbsp;увеличит шансы получить оффер.
          </p>
        </div>
      </div>
    </div>
  )
}
