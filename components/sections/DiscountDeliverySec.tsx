import React from 'react'

export default function DiscountDeliverySec () {
  return (
    <section>
      <div className='container mx-auto p-12 flex gap-10'>
        <div className='border w-full border-orange p-12 rounded-md'>
          <div className='text-2xl font-bold border-r-8 p-10 border-orange flex flex-col  items-end'>
            <p className='text-grey-2'>EXPRESS</p>
            <p className='text-orange'>DELIVERY</p>
          </div>
        </div>
        <div className='border w-full border-orange p-12 rounded-md'>
          <div className='text-2xl font-bold border-l-8 p-10 border-orange flex flex-col  items-start'>
            <p className='text-grey-2'>SPECIAL</p>
            <p className='text-orange'>DISCOUNT</p>
          </div>
        </div>
      </div>
    </section>
  )
}
