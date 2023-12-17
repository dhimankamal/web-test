import { DiscountTagIcon, DottedArrowRIcon, TruckIcon } from '../icons';

export default function DiscountDeliverySec() {
  return (
    <section>
      <div className='container mx-auto flex gap-10 p-12'>
        <div className='relative w-full rounded-md border border-orange p-12'>
          <div className=' absolute bottom-10 left-0 right-0 top-0 grid place-content-center border-2 opacity-20 '>
            <TruckIcon />
          </div>
          <div className='absolute bottom-6'>
            <DottedArrowRIcon />
          </div>
          <div className='flex w-full justify-between'>
            <div className='grid w-full place-content-center'>
              <TruckIcon />
            </div>
            <div className='flex flex-col items-end border-r-8 border-orange p-10 text-2xl  font-bold'>
              <p className='text-grey-2'>EXPRESS</p>
              <p className='text-orange'>DELIVERY</p>
            </div>
          </div>
        </div>
        <div className='relative w-full rounded-md border border-orange p-12'>
          <div className='absolute bottom-10 left-0 right-0 top-0 grid place-content-center border-2 opacity-20 '>
            <DiscountTagIcon />
          </div>
          <div className='absolute bottom-6 right-6 rotate-180'>
            <DottedArrowRIcon />
          </div>
          <div className='flex w-full justify-between'>
            <div className='flex flex-col items-start border-l-8 border-orange p-10 text-2xl  font-bold'>
              <p className='text-grey-2'>SPECIAL</p>
              <p className='text-orange'>DISCOUNT</p>
            </div>
            <div className='grid w-full place-content-center'>
              <DiscountTagIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
