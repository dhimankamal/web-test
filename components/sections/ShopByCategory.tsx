import clsx from 'clsx';
import Image from 'next/image';
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

export default function ShopByCategory() {
  return (
    <section>
      <SectionHeader
        heading='Shop By Category'
        subheading='Discover your world of Jewellery.'
        buttonText='Discover all'
      />
      <div className='bg-gradient-to-t from-orange-1 to-transparent'>
        <div className='container mx-auto px-8 py-12'>
          <div className='grid lg:grid-cols-4 gap-6'>
            {collections.map(({ image }, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx(
                    'relative h-96 w-full overflow-hidden rounded-lg',
                    { 'lg:col-span-2': idx < 2 }
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
      </div>
    </section>
  );
}
