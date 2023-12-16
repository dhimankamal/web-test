import React from 'react'
import SectionHeader from '../SectionHeader'
import ProductCard from '../ProductCard'

let productList = [
  {
    name: 'Yemeraly Wings Diamond...'
  },
  {
    name: 'Yemeraly Wings Diamond...'
  },
  {
    name: 'Yemeraly Wings Diamond...'
  },
  {
    name: 'Yemeraly Wings Diamond...'
  },
  {
    name: 'Yemeraly Wings Diamond...'
  }
]

export default function BestSellerSection () {
  return (
    <section>
      <SectionHeader heading='Best Sellers' subheading='Discover your world of Jewellery.' buttonText='Discover all' />
      <div className='container mx-auto px-8 py-12'>
        <div className='grid grid-cols-5 gap-6'>
          {productList.map(({ name }, idx) => {
            return <ProductCard key={idx} />
          })}
        </div>
      </div>
    </section>
  )
}
