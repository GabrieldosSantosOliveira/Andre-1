import { GetMovie, ResponseMovie } from '@/services/GetMovie';
import { useState } from 'react';

import { useHttpService } from './useHttpService';

export const useRandomMovie = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<ResponseMovie | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const { httpService } = useHttpService();
  const getMovie = new GetMovie(httpService);
  const handleRandomMovie = async () => {
    try {
      setMovie(null);
      setIsLoading(true);
      setHasError(false);
      const randomMovie = Math.floor(Math.random() * 1000);
      const { data } = await getMovie.getOneMovie(randomMovie);
      setMovie(data);
    } catch (error) {
      setMovie(null);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleRandomMovie, hasError, movie };
};
