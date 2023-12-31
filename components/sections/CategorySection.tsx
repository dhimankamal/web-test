'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const list = [
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
  {
    image: '/',
    name: 'Rings',
    id: 'rings',
  },
];

export default function CategorySection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const settings: Settings = {
    className: 'center',
    infinite: true,
    centerPadding: '0px',
    slidesToShow: isMobile ? 2 : 8,
    speed: 500,
    autoplay: true,
    dots: true,
  };
  return (
    <section className='container mx-auto px-2 py-10'>
      <div className='w-full overflow-hidden'>
        <Slider {...settings}>
          {list.map(({ name }, idx) => {
            return (
              <div key={idx}>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <div className='bg-gradient-to-r from-orange to-orange-2 p-1 rounded-full'>
                    <div className='relative h-32 w-32 rounded-full bg-white'>
                      <Image
                        src='/category.png'
                        layout='fill'
                        className=' object-cover object-center'
                        alt='category-image'
                      />
                    </div>
                  </div>

                  <p>{name}</p>
                  <div className='h-1 w-10 rounded-full bg-gradient-to-r from-orange to-orange-2'></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
