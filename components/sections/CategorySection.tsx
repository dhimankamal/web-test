'use client'

import Image from 'next/image'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const list = [
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings'
  }
]

export default function CategorySection () {
  const settings: Settings = {
    className: 'center',
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 8,
    speed: 500,
    autoplay: true,
    dots: true
  }
  return (
    <section className='mx-auto container px-2 py-10'>
      <div className='w-full overflow-hidden'>
        <Slider {...settings}>
          {list.map(({ name }, idx) => {
            return (
              <div key={idx}>
                <div className='flex gap-2 flex-col items-center justify-center'>
                  <div className='border-4 border-orange rounded-full h-32 w-32 relative'>
                    <Image
                      src='/category.png'
                      layout='fill'
                      className=' object-cover object-center'
                      alt='category-image'
                    />
                  </div>
                  <p>{name}</p>
                  <div className='w-10 h-1 rounded-full bg-orange'></div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
