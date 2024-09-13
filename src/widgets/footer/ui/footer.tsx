import DKELogo from './dke-ogo.svg'

export const Footer = () => {
  return (
    <div
      className={
        '-mt-8 p-7 rounded-t-3xl relative bg-gradient-to-b from-mercury-200 to-mercury-50 flex flex-col items-center gap-7 ' +
        'md:flex-row md:justify-between ' +
        'lg:w-[1024px] lg:mx-auto lg:-mt-[90px] lg:h-[90px]'
      }
    >
      <DKELogo className='w-40' />
      <div
        className={
          'text-tory-blue-900 underline flex flex-col gap-4 items-center font-light ' +
          'md:grid md:gap-x-[54px] md:mb-[18px] md:grid-cols-2 ' +
          'lg:flex lg:flex-row lg:whitespace-nowrap lg:m-0'
        }
      >
        <a>Положение о проведении ДКЭ</a>
        <a>Правила участия</a>
        <a>Договор оферты</a>
        <a>О проекте</a>
      </div>
    </div>
  )
}
