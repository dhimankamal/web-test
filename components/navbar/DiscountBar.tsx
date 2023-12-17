import Link from 'next/link';
import React from 'react';
import { LoactionIcon } from '../icons';

export default function DiscountBar() {
  return (
    <div className='relative bg-orange py-1.5'>
      <p className='text-center text-xs text-grey-1'>
        Refer and earn extra discount{' '}
        <Link href='/' className='text-purple-1'>
          Click here...
        </Link>
      </p>
      <div className='absolute right-2 top-1 flex w-full items-center justify-end gap-2'>
        <div className='text-sm font-medium text-white'>Pincode</div>
        <LoactionIcon />
        <button className='h-5 w-5 rounded-full bg-white'></button>
      </div>
    </div>
  );
}
