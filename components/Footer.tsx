import Link from 'next/link';
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
];

export default function Footer() {
  return (
    <footer className=''>
      <div className='container mx-auto grid grid-cols-5 gap-2 px-2 py-10'>
        {footerLinks.map(({ heading, links }, idx) => {
          return (
            <div key={idx} className='border-r p-4'>
              <h3 className=' font-bold text-orange'>{heading}</h3>
              <ul>
                {links.map(({ icon, name, href }, idx) => {
                  return (
                    <li key={idx}>
                      <Link href={href}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className='flex w-full items-center justify-center bg-orange py-3'>
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
  );
}
