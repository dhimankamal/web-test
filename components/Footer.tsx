import Link from 'next/link'
import React from 'react'
import { FooterIcon } from './icons'

const footerLinks = [
  {
    heading: 'OUR SERVICES',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      }
    ]
  },
  {
    heading: 'OUR SERVICES',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      }
    ]
  },
  {
    heading: 'OUR SERVICES',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      }
    ]
  },
  {
    heading: 'OUR SERVICES',
    links: [
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      },
      {
        name: 'GOLD RATES',
        icon: FooterIcon,
        href: '/'
      }
    ]
  }
]

export default function Footer () {
  return (
    <footer className=''>
      <div className='grid grid-cols-5 container px-2 mx-auto gap-2 py-10'>
        {footerLinks.map(({ heading, links }, idx) => {
          return (
            <div key={idx} className='border-r p-4'>
              <h3 className=' text-orange font-bold'>{heading}</h3>
              <ul>
                {links.map(({ icon, name, href }, idx) => {
                  return (
                    <li key={idx}>
                      <Link href={href}>{name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className='w-full flex items-center justify-center py-3 bg-orange'>
        <Link
          className='flex items-center gap-1 text-current'
          href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
          title='nextui.org homepage'
        >
          <span className='text-default-600'>Powered by</span>
          <p className='text-primary'>NextUI</p>
        </Link>
      </div>
    </footer>
  )
}
