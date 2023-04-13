import Image from 'next/image';

import { Heading } from '../Heading';

export const ErrorMovie = () => {
  return (
    <article className="max-w-[40rem] w-full flex flex-col items-center p-8 sm:flex-row gap-2">
      <Image
        className="max-w-[10rem] h-[15rem] object-contain"
        width={170}
        height={243}
        alt="Poster com uma tela com códigos de programação"
        src="/error-image.png"
      />
      <Heading level="h2" size="lg" className="flex flex-1 text-center">
        Ops, hoje não é dia de assistir filme. Bora codar! 🚀
      </Heading>
    </article>
  );
};
