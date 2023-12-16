import React from 'react'

export default function SectionHeader () {
  return (
    <div className='flex items-center gap-8 container mx-auto'>
      <div>
        <h2 className='text-orange font-bold text-xl'>Collections</h2>
        <span className='text-sm'>Discover your world of Jewellery.</span>
      </div>
      <div className='flex-grow h-0.5 bg-grey-3'></div>
      <button className='py-3 px-6 rounded-md bg-orange text-white'>{`Discover all >> `}</button>
    </div>
  )
}
