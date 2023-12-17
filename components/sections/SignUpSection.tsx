import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

export default function SignUpSection() {
  return (
    <section className='container mx-auto flex items-center justify-between py-10'>
      <div className='w-full'>
        <h2 className='text-xl text-orange'>
          SIGN UP TO BE A GARNET LANEE INSIDER{' '}
        </h2>
        <p className='mt-4 text-sm'>
          Get Promotions, inspirations and the latest news about brands <br />{' '}
          and jewellery items directly in your inbox
        </p>
      </div>
      <form className='flex w-full items-center gap-2'>
        <Input size='sm' placeholder='Enter your email address' />

        <Button className='' size='lg'>
          {' '}
          Submit{' '}
        </Button>
      </form>
    </section>
  );
}
