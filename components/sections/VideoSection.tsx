import { PlayIcon } from '../icons';

export default function VideoSection() {
  return (
    <section
      className={`container mx-auto grid h-20 lg:h-[30rem] place-content-center bg-[url('/video.png')] bg-cover bg-no-repeat`}
    >
      <PlayIcon />
    </section>
  );
}
