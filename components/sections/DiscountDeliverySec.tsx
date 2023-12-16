import React from 'react'
import { DiscountTagIcon, DottedArrowRIcon, TruckIcon } from '../icons'

export default function DiscountDeliverySec () {
  return (
    <section>
      <div className='container mx-auto p-12 flex gap-10'>
        <div className='border relative w-full border-orange p-12 rounded-md'>
          <div className=' absolute opacity-20 border-2 grid place-content-center top-0 bottom-10 left-0 right-0 '>
            <TruckIcon />
          </div>
          <div className='absolute bottom-6'>
            <DottedArrowRIcon />
          </div>
          <div className='flex justify-between w-full'>
            <div className='w-full grid place-content-center'>
              <TruckIcon />
            </div>
            <div className='text-2xl font-bold border-r-8 p-10 border-orange flex flex-col  items-end'>
              <p className='text-grey-2'>EXPRESS</p>
              <p className='text-orange'>DELIVERY</p>
            </div>
          </div>
        </div>
        <div className='border w-full relative border-orange p-12 rounded-md'>
          <div className='absolute opacity-20 border-2 grid place-content-center top-0 bottom-10 left-0 right-0 '>
            <DiscountTagIcon />
          </div>
          <div className='absolute bottom-6 right-6 rotate-180'>
            <DottedArrowRIcon />
          </div>
          <div className='flex justify-between w-full'>
            <div className='text-2xl font-bold border-l-8 p-10 border-orange flex flex-col  items-start'>
              <p className='text-grey-2'>SPECIAL</p>
              <p className='text-orange'>DISCOUNT</p>
            </div>
            <div className='w-full grid place-content-center'>
              <DiscountTagIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
