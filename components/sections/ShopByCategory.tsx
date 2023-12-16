import React from 'react'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'
import clsx from 'clsx'

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

export default function ShopByCategory () {
  return (
    <section>
      <SectionHeader heading='Shop By Category' subheading='Discover your world of Jewellery.' buttonText='Discover all' />
      <div className='container mx-auto px-8 py-12'>
        <div className='grid grid-cols-4 gap-6'>
          {collections.map(({ image }, idx) => {
            return (
              <div
                key={idx}
                className={clsx(
                  'h-96 w-full relative rounded-lg overflow-hidden',
                  { 'col-span-2': idx < 2 }
                )}
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
