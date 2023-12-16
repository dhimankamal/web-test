import React from 'react'

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
  return (
    <section className='mx-auto container px-2 py-10'>
      <ul className='flex gap-4 w-full overflow-hidden'>
        {list.map(({ name }, idx) => {
          return (
            <li key={idx} className='flex gap-2 flex-col items-center'>
              <div className='border-8 border-orange rounded-full h-32 w-32'></div>
              <p>{name}</p>
              <div className='w-10 h-1 rounded-full bg-orange'></div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
