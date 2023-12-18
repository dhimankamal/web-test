'use client';

import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';

import NextLink from 'next/link';

import {
  CartIcon,
  CartMIcon,
  ContactIcon,
  DeliveryIcon,
  HeartMIcon,
  MenuIcon,
  NavShapeMobile,
  OffersIcon,
  ReportIcon,
  SearchIcon,
  SearchMIcon,
} from '@/components/icons';

import { Logo } from '@/components/icons';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const list = [
  {
    name: 'OFFERS',
    icon: OffersIcon,
    hrefs: '/',
  },
  {
    name: 'CONTACT US',
    icon: ContactIcon,
    hrefs: '/',
  },
  {
    name: 'WISHLIST',
    icon: OffersIcon,
    hrefs: '/',
  },
  {
    name: 'DELIVERY',
    icon: DeliveryIcon,
    hrefs: '/',
  },
  {
    name: 'CART',
    icon: CartIcon,
    hrefs: '/',
  },
  {
    name: 'VERIFY REPORT',
    icon: ReportIcon,
    hrefs: '/',
  },
];

const links = [
  {
    name: 'NEW ARRIVAL',
    hrefs: '/',
  },
  {
    name: 'RINGS',
    hrefs: '/',
  },
  {
    name: 'EARRINGS',
    hrefs: '/',
  },
  {
    name: 'PENDANTS',
    hrefs: '/',
  },
  {
    name: 'BRACELETS & BANGLES',
    hrefs: '/',
  },
  {
    name: 'SOLITIARES',
    hrefs: '/',
  },
  {
    name: 'GOLD COINS',
    hrefs: '/',
  },
  {
    name: 'ALL JEWELLERY',
    hrefs: '/',
  },
];

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='pointer-events-none flex-shrink-0 text-base text-default-400' />
      }
      type='search'
    />
  );

  return (
    <>
      {/* desktop nav */}
      {!isMobile && (
        <nav className='hidden lg:block'>
          <div className='bg-orange-1'>
            <div className='container mx-auto flex items-center justify-between px-4 py-8'>
              <div className=''>
                <div className='max-w-fit gap-3'>
                  <NextLink
                    className='flex items-center justify-start gap-1'
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
                      <li
                        key={idx}
                        className='border-r-2 px-4 last:border-none'
                      >
                        <Link
                          href='/'
                          className='flex flex-col items-center gap-2 whitespace-nowrap'
                        >
                          {icon && React.createElement(icon)}
                          <p className='text-sm '>{name}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className='flex items-start gap-2 border-b-3 border-orange px-2 pb-2'>
                  <div className='h-6 w-6 rounded-full border-2 border-gray-300 bg-white'></div>
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
                      className='flex flex-col items-center gap-2 whitespace-nowrap py-4'
                    >
                      <p className='text-sm font-semibold transition-all duration-300 hover:text-orange'>
                        {name}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
      {/* mobile nav */}

      {isMobile && (
        <nav className=' w-full bg-gradient-to-r relative from-orange to-orange-2'>
          <NavShapeMobile className='w-full' />
          <div className='flex justify-between items-center border px-4 border-red-600 absolute top-0 left-0 right-0 bottom-0'>
            <MenuIcon />
            <NextLink
              className='flex items-center justify-start gap-1'
              href='/'
            >
              <Logo />
              <p className='font-bold text-inherit'>GARNET LANEE</p>
            </NextLink>
            <div className='flex gap-2 items-center'>
              <SearchMIcon />
              <HeartMIcon />
              <CartMIcon />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
