import {
  Button,
  Heading,
  ErrorMovie,
  Movie,
  SkeletonMovie,
  Text,
} from '@/components';
import { useRandomMovie } from '@/hooks/useRandomMovie';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  const { handleRandomMovie, isLoading, movie, hasError } = useRandomMovie();
  return (
    <>
      <Head>
        <title>Rocketflix</title>
      </Head>
      <main className="gap-6 flex-col items-center flex py-20 min-h-screen min-w-full bg-background animate-background bg-300">
        <Image alt="Logo" src="/favicon.svg" width={87} height={62} />
        <Heading className="text-center" size="lg">
          Não sabe o que assistir?
        </Heading>
        {movie ? <Movie {...movie} /> : null}
        {!movie && isLoading ? <SkeletonMovie /> : null}
        {hasError ? <ErrorMovie /> : null}
        <Button
          className="w-52"
          isLoading={isLoading}
          onClick={handleRandomMovie}
        >
          <Image alt="Logo" src="/favicon.svg" width={29} height={20.66} />
          <Text>Encontrar filme</Text>
        </Button>
        <Text className="text-white font-normal text-center px-10 max-w-[30rem]">
          Clique em &quot;Encontrar filme&quot; que traremos informações de
          algum filme para você assistir hoje.
        </Text>
      </main>
    </>
  );
}
