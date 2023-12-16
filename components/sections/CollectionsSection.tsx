'use client'

import React from 'react'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'

const collections = [
  {
    image: '/collection.png',
    id: 1,
    href: ''
  },
  {
    image: '/collection.png',
    id: 1,
    href: ''
  },
  {
    image: '/collection.png',
    id: 1,
    href: ''
  },
  {
    image: '/collection.png',
    id: 1,
    href: ''
  },
  {
    image: '/collection.png',
    id: 1,
    href: ''
  },
  {
    image: '/collection.png',
    id: 1,
    href: ''
  }
]

export default function CollectionsSection () {
  return (
    <section>
      <SectionHeader
        heading='Collections'
        subheading='Discover your world of Jewellery.'
        onClick={() => console.log('CollectionsSection')}
        buttonText='Discover all'
      />
      <div className='container mx-auto px-8 py-12'>
        <div className='grid grid-cols-3 gap-6'>
          {collections.map(({ image }, idx) => {
            return (
              <div
                key={idx}
                className='h-72 w-full relative rounded-lg overflow-hidden'
              >
                <Image
                  className=' object-cover object-center'
                  src={image}
                  layout='fill'
                  alt='collection'
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
