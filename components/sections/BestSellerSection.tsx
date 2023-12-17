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
];

export default function BestSellerSection() {
  return (
    <section className='py-8'>
      <SectionHeader
        heading='Best Sellers'
        subheading='Discover your world of Jewellery.'
        buttonText='Discover all'
      />

      <div className='bg-gradient-to-t from-orange-1 to-transparent'>
        <div className='container mx-auto px-8 py-12'>
          <div className='grid grid-cols-5 gap-6'>
            {productList.map(({ name }, idx) => {
              return <ProductCard key={idx} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
