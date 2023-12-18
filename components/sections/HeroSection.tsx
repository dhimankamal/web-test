'use client';

import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const list = [
  {
    image: '/herobg.png',
  },
  {
    image: '/herobg.png',
  },
  {
    image: '/herobg.png',
  },
];

export default function HeroSection() {
  const settings: Settings = {
    className: 'center',
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    dots: true,
  };
  return (
    <section className='w-full overflow-hidden'>
      <Slider {...settings}>
        {list.map(({ image }, idx) => {
          return (
            <div key={idx} className='relative h-72 lg:h-[40rem] w-full'>
              <Image
                src={image}
                className='object-cover object-center'
                layout='fill'
                alt='herobg'
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
