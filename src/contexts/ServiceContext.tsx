import { WithoutProviderError } from '@/errors/WithoutProviderError';
import { IHttpService } from '@/interfaces/IHttpService';
import { HttpServiceFetch } from '@/services/HttpServiceFetch';
import { NextPage } from 'next';
import { ReactNode, createContext, useContext } from 'react';
export interface IServiceContext {
  httpService: IHttpService;
}
export const ServiceContext = createContext<IServiceContext>(
  {} as IServiceContext,
);
export interface IServiceProvider {
  children: ReactNode;
}
export const ServiceProvider: NextPage<IServiceProvider> = ({ children }) => {
  const httpServiceFetch = new HttpServiceFetch();
  return (
    <ServiceContext.Provider value={{ httpService: httpServiceFetch }}>
      {children}
    </ServiceContext.Provider>
  );
};
export const useService = () => {
  const value = useContext(ServiceContext);
  if (!value) {
    throw new WithoutProviderError(
      'useService must be used within an ServiceProvider',
    );
  }
  return value;
};
