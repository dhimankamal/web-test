import React from 'react';
import SectionHeader from '../SectionHeader';
import clsx from 'clsx';
import Image from 'next/image';

const collections = [
  {
    image: '/collection.png',
    id: 1,
    href: '',
  },
  {
    image: '/collection.png',
    id: 1,
    href: '',
  },
  {
    image: '/collection.png',
    id: 1,
    href: '',
  },
  {
    image: '/collection.png',
    id: 1,
    href: '',
  },
];

export default function ShopByGender() {
  return (
    <section>
      <SectionHeader
        heading='Shop By Gender'
        subheading='Discover your world of Jewellery.'
      />
      <div className='container mx-auto px-8 py-12'>
        <div className='grid grid-cols-4 gap-6'>
          {collections.map(({ image }, idx) => {
            return (
              <div
                key={idx}
                className={clsx(
                  'relative h-96 w-full overflow-hidden rounded-lg'
                )}
              >
                <Image
                  className=' object-cover object-center'
                  src={image}
                  layout='fill'
                  alt='collection'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
