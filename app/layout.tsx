import Footer from '@/components/Footer';
import { Navbar } from '@/components/navbar';
import DiscountBar from '@/components/navbar/DiscountBar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import React from 'react';
import { Providers } from './providers';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className='relative flex h-screen flex-col'>
            <DiscountBar />
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
