import Link from 'next/link'
import React from 'react'
import { LoactionIcon } from '../icons'

export default function DiscountBar () {
  return (
    <div className='bg-orange py-1.5 relative'>
      <p className='text-center text-grey-1 text-xs'>
        Refer and earn extra discount{' '}
        <Link href='/' className='text-purple-1'>
          Click here...
        </Link>
      </p>
      <div className='flex gap-2 items-center w-full justify-end absolute top-1 right-2'>
        <div className='text-sm font-medium text-white'>Pincode</div>
        <LoactionIcon />
        <button className='bg-white rounded-full w-5 h-5'></button>
      </div>
    </div>
  )
}
