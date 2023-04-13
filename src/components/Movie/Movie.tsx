import { ResponseMovie } from '@/services/GetMovie';
import { NextPage } from 'next';

import { Heading } from '../Heading';
import { Text } from '../Text';

export const Movie: NextPage<ResponseMovie> = ({ overview, title }) => {
  return (
    <article className="max-w-[40rem] gap-4 px-5 flex items-center sm:items-start flex-col">
      <Heading>{title}</Heading>
      <Text className="text-white font-normal">{overview}</Text>
    </article>
  );
};
