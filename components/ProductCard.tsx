import Image from 'next/image';
import { HeartIcon, ViewSimilarIcon } from './icons';

type Props = {};

export default function ProductCard({}: Props) {
  return (
    <div className='relative w-full overflow-hidden rounded-2xl shadow'>
      <div className='p-4'>
        <div className='relative h-72 w-full'>
          <Image
            src='/product/1.png'
            className='object-cover object-center'
            layout='fill'
            alt='product'
          />
        </div>
        <div className='flex justify-between'>
          <div>
            <div>
              <div className='flex font-bold'>
                <h3 className='text-xl'>₹22,323</h3>
                <span className='text-md line-through opacity-80'>₹22,323</span>
              </div>
              <p className='text-sm'>Yemeraly Wings Diamond...</p>
            </div>
            <p className='mt-2 text-sm font-medium text-green-1'>
              10 % on off Making Charges
            </p>
          </div>
          <div>
            <ul className=' flex h-full flex-col justify-between'>
              <li className='w-fit rounded-full border p-0.5'>
                <div className='h-3 w-3 rounded-full bg-orange'></div>
              </li>
              <li className='w-fit rounded-full border p-0.5'>
                <div className='h-3 w-3 rounded-full bg-orange'></div>
              </li>
              <li className='w-fit rounded-full border p-0.5'>
                <div className='h-3 w-3 rounded-full bg-orange'></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <button className='flex w-full items-center justify-center gap-2 text-sm'>
          <ViewSimilarIcon />
          <span>View Similar </span>
        </button>
        <button
          className={
            "w-full bg-[url('/buynow.png')] bg-cover bg-no-repeat py-3 text-sm text-white"
          }
        >
          Buy now
        </button>
      </div>

      <div className='absolute top-0 flex w-full items-center  justify-between p-6'>
        <button className='rounded-full bg-gradient-to-br from-[#dceff6] to-[#fce3e2] px-6 py-2 text-sm'>
          Trending
        </button>
        <button>
          <HeartIcon />
        </button>
      </div>
    </div>
  );
}
