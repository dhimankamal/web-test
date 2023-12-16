'use client'

import { Kbd } from '@nextui-org/kbd'
import { Input } from '@nextui-org/input'

import NextLink from 'next/link'

import {
  CartIcon,
  ContactIcon,
  DeliveryIcon,
  OffersIcon,
  ReportIcon,
  SearchIcon,
  WhislistIcon
} from '@/components/icons'

import { Logo } from '@/components/icons'
import Link from 'next/link'
import React from 'react'

const list = [
  {
    name: 'OFFERS',
    icon: OffersIcon,
    hrefs: '/'
  },
  {
    name: 'CONTACT US',
    icon: ContactIcon,
    hrefs: '/'
  },
  {
    name: 'WISHLIST',
    icon: OffersIcon,
    hrefs: '/'
  },
  {
    name: 'DELIVERY',
    icon: DeliveryIcon,
    hrefs: '/'
  },
  {
    name: 'CART',
    icon: CartIcon,
    hrefs: '/'
  },
  {
    name: 'VERIFY REPORT',
    icon: ReportIcon,
    hrefs: '/'
  }
]

const links = [
  {
    name: 'NEW ARRIVAL',
    hrefs: '/'
  },
  {
    name: 'RINGS',
    hrefs: '/'
  },
  {
    name: 'EARRINGS',
    hrefs: '/'
  },
  {
    name: 'PENDANTS',
    hrefs: '/'
  },
  {
    name: 'BRACELETS & BANGLES',
    hrefs: '/'
  },
  {
    name: 'SOLITIARES',
    hrefs: '/'
  },
  {
    name: 'GOLD COINS',
    hrefs: '/'
  },
  {
    name: 'ALL JEWELLERY',
    hrefs: '/'
  }
]

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm'
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
      }
      type='search'
    />
  )

  return (
    <nav>
      <div className='bg-orange-1'>
        <div className='container mx-auto flex items-center justify-between py-8 px-4'>
          <div className=''>
            <div className='gap-3 max-w-fit'>
              <NextLink
                className='flex justify-start items-center gap-1'
                href='/'
              >
                <Logo />
                <p className='font-bold text-inherit'>GARNET LANEE</p>
              </NextLink>
            </div>
          </div>

          <div>
            <div>{searchInput}</div>
          </div>
          <div>
            <ul className='flex items-center '>
              {list.map(({ name, hrefs, icon }, idx) => {
                return (
                  <li key={idx} className='border-r-2 px-4 last:border-none'>
                    <Link
                      href='/'
                      className='flex flex-col items-center gap-2 whitespace-nowrap'
                    >
                      {icon && React.createElement(icon)}
                      <p className='text-sm '>{name}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <div className='border-b-3 border-orange px-2 pb-2 flex items-start gap-2'>
              <div className='bg-white w-6 h-6 rounded-full border-gray-300 border-2'></div>
              <p>Hi, Ashish Sood</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-2'>
        <ul className='flex'>
          {links.map(({ name, hrefs }, idx) => {
            return (
              <li key={idx} className='w-full'>
                <Link
                  href={hrefs}
                  className='flex py-4 flex-col items-center gap-2 whitespace-nowrap'
                >
                  <p className='text-sm font-semibold hover:text-orange transition-all duration-300'>{name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
