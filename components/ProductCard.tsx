import Image from 'next/image'
import React from 'react'
import { HeartIcon, ViewSimilarIcon } from './icons'

type Props = {}

export default function ProductCard ({}: Props) {
  return (
    <div className='shadow w-full relative rounded-2xl overflow-hidden'>
      <div className='p-4'>
        <div className='relative w-full h-72'>
          <Image
            src='/product/1.png'
            className='object-cover object-center'
            layout='fill'
            alt='product'
          />
        </div>
        <div className='flex justify-between'>
          <div>
            <div>
              <div className='flex font-bold'>
                <h3 className='text-xl'>₹22,323</h3>
                <span className='text-md line-through opacity-80'>₹22,323</span>
              </div>
              <p className='text-sm'>Yemeraly Wings Diamond...</p>
            </div>
            <p className='text-green-1 font-medium text-sm mt-2'>
              10 % on off Making Charges
            </p>
          </div>
          <div>
            <ul className=' h-full flex justify-between flex-col'>
              <li className='p-0.5 border w-fit rounded-full'>
                <div className='w-3 h-3 rounded-full bg-orange'></div>
              </li>
              <li className='p-0.5 border w-fit rounded-full'>
                <div className='w-3 h-3 rounded-full bg-orange'></div>
              </li>
              <li className='p-0.5 border w-fit rounded-full'>
                <div className='w-3 h-3 rounded-full bg-orange'></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <button className='w-full text-sm flex items-center gap-2 justify-center'>
          <ViewSimilarIcon />
          <span>View Similar </span>
        </button>
        <button
          className={
            "bg-[url('/buynow.png')] bg-no-repeat bg-cover text-white text-sm w-full py-3"
          }
        >
          Buy now
        </button>
      </div>

      <div className='absolute top-0 p-6 w-full flex  items-center justify-between'>
        <button className='bg-orange px-6 py-2 rounded-full text-sm'>
          Trending
        </button>
        <button>
          <HeartIcon />
        </button>
      </div>
    </div>
  )
}
