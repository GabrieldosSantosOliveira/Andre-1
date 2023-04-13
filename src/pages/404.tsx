import { Heading } from '@/components/Heading';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Rocketflix</title>
      </Head>
      <main className="gap-5 flex-col items-center justify-center flex py-20 min-h-screen min-w-full bg-background animate-background bg-300">
        <h1 className="font-bold fon-sans text-white text-9xl">404</h1>
        <Heading level="h2">
          Não foi possível encontrar o que voce queria
        </Heading>
      </main>
    </>
  );
}
