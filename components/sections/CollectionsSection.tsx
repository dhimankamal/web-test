'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Slider, { Settings } from 'react-slick';
import SectionHeader from '../SectionHeader';

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

export default function CollectionsSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const settings: Settings = {
    className: 'center',
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    dots: true,
  };

  return (
    <section className='py-8 overflow-hidden'>
      <SectionHeader
        heading='Collections'
        subheading='Discover your world of Jewellery.'
        onClick={() => console.log('CollectionsSection')}
        buttonText='Discover all'
      />
      <div className='bg-gradient-to-t from-orange-1 to-transparent'>
        {!isMobile && (
          <div className='container mx-auto px-8 py-12'>
            <div className='grid grid-cols-3 gap-6'>
              {collections.map(({ image }, idx) => {
                return (
                  <div
                    key={idx}
                    className='relative h-72 w-full overflow-hidden rounded-lg'
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
        )}

        {isMobile && (
          <div className='w-full overflow-hidden py-10'>
            <Slider {...settings}>
              {collections.map(({ image }, idx) => {
                return (
                  <div key={idx} className='px-8'>
                    <div className='relative h-60 w-full overflow-hidden rounded-lg'>
                      <Image
                        className=' object-cover object-center'
                        src={image}
                        layout='fill'
                        alt='collection'
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}
