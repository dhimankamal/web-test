import SectionHeader from '../SectionHeader';

const list = [
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.',
  },
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.',
  },
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.',
  },
  {
    name: 'Ratan Tata-backed BlueStonevaluation tops $410Min latest round.',
  },
];

export default function StayUpdate() {
  return (
    <section className='py-10'>
      <SectionHeader
        heading='Stay Update With Us'
        subheading='Discover your world of Jewellery.'
        buttonText='Discover all'
      />
      <div className='container mx-auto flex gap-4 py-10'>
        {list.map(({ name }, idx) => {
          return (
            <div
              key={idx}
              className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-grey-4 '
            >
              <div className='flex h-full flex-col items-center justify-center gap-10 p-10 text-center'>
                <img
                  className='block h-auto w-auto object-cover object-center'
                  src='/update.png'
                  alt='update'
                />
                <p>
                  Ratan Tata-backed BlueStonevaluation tops $410Min latest
                  round.
                </p>
              </div>
              <div className='absolute bottom-4 left-4 right-4 flex items-center justify-center'>
                <button className='w-full rounded-full bg-white px-8 py-4 text-orange'>
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
