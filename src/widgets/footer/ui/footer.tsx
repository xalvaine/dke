import DKELogo from './dke-ogo.svg'

export const Footer = () => {
  return (
    <div className='-mt-8 p-7 rounded-t-3xl relative bg-gradient-to-b from-mercury-200 to-mercury-50 flex flex-col items-center gap-7'>
      <DKELogo className='w-40' />
      <div className='text-tory-blue-900 underline flex flex-col gap-4 items-center font-light'>
        <a>Положение о проведении ДКЭ</a>
        <a>Правила участия</a>
        <a>Договор оферты</a>
        <a>О проекте1</a>
      </div>
    </div>
  )
}
