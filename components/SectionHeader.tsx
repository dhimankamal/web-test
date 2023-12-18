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
        <h2 className='text-sm lg:text-xl font-bold text-orange'>{heading}</h2>
        <span className='text-xs lg:text-sm'>{subheading}</span>
      </div>
      <div className='h-0.5 flex-grow bg-grey-3'></div>
      {!!buttonText && (
        <button
          onClick={onClick}
          className='rounded-md whitespace-nowrap  bg-gradient-to-r from-orange to-orange-2 lg:px-6 lg:py-3 text-sm px-4 py-2 text-white'
        >{`${buttonText} >> `}</button>
      )}
    </div>
  );
}
