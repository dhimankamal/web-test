import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'

export default function SignUpSection () {
  return (
    <section className='py-10 container mx-auto flex justify-between items-center'>
      <div className='w-full'>
        <h2 className='text-orange text-xl'>
          SIGN UP TO BE A GARNET LANEE INSIDER{' '}
        </h2>
        <p className='text-sm mt-4'>
          Get Promotions, inspirations and the latest news about brands <br />{' '}
          and jewellery items directly in your inbox
        </p>
      </div>
      <form className='flex items-center gap-2 w-full'>
        
          <Input size='sm' placeholder='Enter your email address' />
       

        <Button className='' size='lg'> Submit </Button>
      </form>
    </section>
  )
}
