import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
<section>
        <div className='relative w-full h-[40rem]'>
          <Image
            src='/herobg.png'
            className='object-cover object-center'
            layout='fill'
            alt='herobg'
          />
        </div>
      </section>
  )
}
