import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { ErrorMovie, Movie, SkeletonMovie } from '@/components/Movie';
import { Text } from '@/components/Text';
import { useService } from '@/contexts/ServiceContext';
import { GetMovie, ResponseMovie } from '@/services/GetMovie';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<ResponseMovie | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const { httpService } = useService();
  const getMovie = new GetMovie(httpService);
  const handleSelectMovie = async () => {
    try {
      setMovie(null);
      setIsLoading(true);
      setHasError(false);
      const randomMovie = Math.floor(Math.random() * 1000);
      const res = await getMovie.getOneMovie(randomMovie);
      setMovie(res.data);
    } catch (error) {
      setMovie(null);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Rocketflix</title>
      </Head>
      <main className="flex py-20 min-h-screen min-w-full bg-background animate-background bg-300">
        <div className="gap-6 flex flex-1 flex-col items-center">
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
            onClick={handleSelectMovie}
          >
            <Image alt="Logo" src="/favicon.svg" width={29} height={20.66} />
            <Text>Encontrar filme</Text>
          </Button>
          <Text className="text-white font-normal text-center px-10 max-w-[30rem]">
            Clique em &quot;Encontrar filme&quot; que traremos informações de
            algum filme para você assistir hoje.
          </Text>
        </div>
      </main>
    </>
  );
}
