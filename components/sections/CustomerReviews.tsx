'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SectionHeader from '../SectionHeader';

const list = [
  {
    name: 'Abishek',
  },
  {
    name: 'Abishek',
  },
  {
    name: 'Abishek',
  },
  {
    name: 'Abishek',
  },
];

export default function CustomerReviews() {
  const [active, setActiove] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const afterChange = (id: number) => {
    setActiove(id);
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: isMobile ? 1 : 3,
    speed: 500,
    afterChange: afterChange,
  };
  return (
    <section className='py-8'>
      <SectionHeader
        heading='Customer Reviews'
        subheading='Know what others think.'
        buttonText='View all'
      />
      <div className='pb-10 bg-gradient-to-t from-orange-1 to-transparent'>
        <div className='w-full overflow-hidden'>
          <Slider {...settings}>
            {list.map(({ name }, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx(
                    ' grid h-96 place-content-center justify-center px-2'
                  )}
                >
                  <div className='relative flex h-full items-center'>
                    <div
                      className={clsx(
                        ' h-fit rounded-2xl bg-white p-4 shadow-2xl',
                        { 'px-10 py-8': idx === active }
                      )}
                    >
                      <div className='flex flex-col items-center gap-2'>
                        <div className='grid h-8 w-8 place-content-center rounded-full bg-red-600 font-bold text-white'>
                          A
                        </div>
                        <h5 className=' text-sm opacity-70'>Abishek</h5>
                        <span className='text-xs'>May 26 ,2022</span>
                        <p className='text-center text-sm'>
                          Talk about a range of elements, including customer
                          service. Be detailed, specific, and honest. Leave out
                          links and personal information.
                        </p>
                        <div className=' relative h-4 w-4'>
                          <Image
                            src='/google.png'
                            layout='fill'
                            className=' object-cover object-center'
                            alt='google'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div>
          <p className='text-center text-sm font-medium'>
            Google rating score: 4.9 of 5, based on 159 reviews{' '}
          </p>
        </div>
      </div>
    </section>
  );
}
