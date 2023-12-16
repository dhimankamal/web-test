import React from 'react'

type Props = {
  heading: string
  subheading: string
  onClick?: () => void
  buttonText?: string
}

export default function SectionHeader ({
  heading,
  subheading,
  onClick,
  buttonText
}: Props) {
  return (
    <div className='flex items-center gap-8 container mx-auto px-4'>
      <div>
        <h2 className='text-orange font-bold text-xl'>{heading}</h2>
        <span className='text-sm'>{subheading}</span>
      </div>
      <div className='flex-grow h-0.5 bg-grey-3'></div>
      {!!buttonText && (
        <button
          onClick={onClick}
          className='py-3 px-6 rounded-md bg-orange text-white'
        >{`${buttonText} >> `}</button>
      )}
    </div>
  )
}
