'use client';
import { useMediaQuery } from 'react-responsive';
import Slider, { Settings } from 'react-slick';
import ProductCard from '../ProductCard';
import SectionHeader from '../SectionHeader';

let productList = [
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
  {
    name: 'Yemeraly Wings Diamond...',
  },
];

export default function BestSellerSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const settings: Settings = {
    className: 'center',
    infinite: true,
    centerPadding: '40px',
    slidesToShow: isMobile ? 1 : 5,
    speed: 500,
    autoplay: true,
    dots: true,
  };
  return (
    <section className='py-8'>
      <SectionHeader
        heading='Best Sellers'
        subheading='Discover your world of Jewellery.'
        buttonText='Discover all'
      />

      <div className='bg-gradient-to-t from-orange-1 to-transparent'>
        <div className='w-full overflow-hidden py-10'>
          <Slider {...settings}>
            {productList.map(({ name }, idx) => {
              return (
                <div key={idx} className='px-6'>
                  <ProductCard />{' '}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
