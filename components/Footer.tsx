import Link from 'next/link';
import React from 'react';
import { FooterIcon } from './icons';

const footerLinks = [
  {
    heading: 'OUR SERVICES',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
    ],
  },
  {
    heading: 'OUR POLICIES',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
    ],
  },
  {
    heading: 'JEWELLERY KNOWLEDGE',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
    ],
  },
  {
    heading: 'ABOUT US',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-orange-1'>
      <div className='container mx-auto grid grid-cols-5 gap-2 px-2 py-10'>
        {footerLinks.map(({ heading, links }, idx) => {
          return (
            <div key={idx} className='border-r border-orange-2 p-4'>
              <h3 className='mb-4 font-bold text-orange'>{heading}</h3>
              <ul className='space-y-2'>
                {links.map(({ icon, name, href }, idx) => {
                  return (
                    <li key={idx} className='flex gap-2 items-center'>
                      {icon && React.createElement(icon)}
                      <Link
                        href={href}
                        className='text-xs hover:text-orange duration-300 transition-all'
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div className=' p-4'>
          <h3 className='mb-4 font-bold text-orange'>Get In Touch</h3>
          <div className='text-sm'>
            <p className='text-sm'>Toll Free :1800-202-0270</p>
            <p>Monday to Saturday (10 AM to 7 PM)</p>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center bg-gradient-to-r from-orange to-orange-2 py-3'>
        <Link
          className='flex items-center gap-1 text-current'
          href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
          title='nextui.org homepage'
        >
          <span className='text-default-600 text-sm'>
            COPYRIGHT GARNET LANEE© 2022
          </span>
        </Link>
      </div>
    </footer>
  );
}
