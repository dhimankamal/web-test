'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useState } from 'react'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'
import Slider from 'react-slick'
import clsx from 'clsx'

const list = [
  {
    name: 'Abishek'
  },
  {
    name: 'Abishek'
  },
  {
    name: 'Abishek'
  },
  {
    name: 'Abishek'
  }
]

export default function CustomerReviews () {
  const [active, setActiove] = useState(0)

  const afterChange = (id: number) => {
    setActiove(id)
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    afterChange: afterChange
  }
  return (
    <section className='py-10'>
      <SectionHeader heading='Customer Reviews' subheading='Know what others think.' buttonText='View all'/>
      <div className='w-full overflow-hidden'>
        <Slider {...settings}>
          {list.map(({ name }, idx) => {
            return (
              <div
                key={idx}
                className={clsx(' px-2 justify-center h-96 grid place-content-center')}
              >
                <div className='relative h-full flex items-center'>
                <div className={clsx( ' rounded-2xl h-fit shadow-2xl bg-white p-4', { 'py-8 px-10': idx === active }  )}>
                  <div className='flex items-center flex-col gap-2'>
                    <div className='bg-red-600 h-8 w-8 rounded-full grid place-content-center text-white font-bold'>
                      A
                    </div>
                    <h5 className=' opacity-70 text-sm'>Abishek</h5>
                    <span className='text-xs'>May 26 ,2022</span>
                    <p className='text-sm text-center'>
                      Talk about a range of elements, including customer
                      service. Be detailed, specific, and honest. Leave out
                      links and personal information.
                    </p>
                    <div className=' relative w-4 h-4'>
                      <Image
                        src='/google.png'
                        layout='fill'
                        className=' object-cover object-center'
                        alt='google'
                      />
                    </div>
                  </div>
                </div>
                </div>
              
              </div>
            )
          })}
        </Slider>

      </div>
      <div>
        <p className='text-center font-medium text-sm'>Google rating score: 4.9  of 5, based on 159 reviews </p>
      </div>
    </section>
  )
}
