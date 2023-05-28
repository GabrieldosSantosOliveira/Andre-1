import { IHttpService } from '@/interfaces/IHttpService';
import { HttpServiceFetch } from '@/services/HttpServiceFetch';
import { NextPage } from 'next';
import { ReactNode, createContext } from 'react';
export interface IHttpServiceContext {
  httpService: IHttpService;
}
export const HttpServiceContext = createContext<IHttpServiceContext>(
  {} as IHttpServiceContext,
);
export interface IHttpServiceProvider {
  children: ReactNode;
}
export const HttpServiceProvider: NextPage<IHttpServiceProvider> = ({
  children,
}) => {
  const httpServiceFetch = new HttpServiceFetch();
  return (
    <HttpServiceContext.Provider value={{ httpService: httpServiceFetch }}>
      {children}
    </HttpServiceContext.Provider>
  );
};
