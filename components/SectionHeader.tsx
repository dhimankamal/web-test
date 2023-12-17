import React from 'react';

type Props = {
  heading: string;
  subheading: string;
  onClick?: () => void;
  buttonText?: string;
};

export default function SectionHeader({
  heading,
  subheading,
  onClick,
  buttonText,
}: Props) {
  return (
    <div className='container mx-auto flex items-center gap-8 px-4'>
      <div>
        <h2 className='text-xl font-bold text-orange'>{heading}</h2>
        <span className='text-sm'>{subheading}</span>
      </div>
      <div className='h-0.5 flex-grow bg-grey-3'></div>
      {!!buttonText && (
        <button
          onClick={onClick}
          className='rounded-md bg-orange px-6 py-3 text-white'
        >{`${buttonText} >> `}</button>
      )}
    </div>
  );
}
