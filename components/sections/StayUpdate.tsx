import React from 'react'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'

const list = [
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.'
  },
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.'
  },
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.'
  },
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.'
  }
]

export default function StayUpdate () {
  return (
    <section className='py-10'>
      <SectionHeader
        heading='Stay Update With Us'
        subheading='Discover your world of Jewellery.'
        buttonText='Discover all'
      />
      <div className='flex gap-4 container mx-auto py-10'>
        {list.map(({ name }, idx) => {
          return (
            <div
              key={idx}
              className='w-full relative bg-grey-4 h-[30rem] rounded-2xl overflow-hidden '
            >
              <div className='flex items-center justify-center flex-col gap-10 p-10 h-full text-center'>
                <img
                  className='h-auto w-auto block object-cover object-center'
                  src='/update.png'
                  alt='update'
                />
                <p>
                  Ratan Tata-backed BlueStonevaluation tops $410Min latest
                  round.
                </p>
              </div>
              <div className='absolute bottom-4 left-4 right-4 flex items-center justify-center'>
                <button className='bg-white py-4 px-8 w-full text-orange rounded-full'>
                  Read More
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
