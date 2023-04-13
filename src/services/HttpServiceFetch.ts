import { HttpError } from '@/errors/HttpError';
import { IHttpService, Response } from '@/interfaces/IHttpService';

export class HttpServiceFetch implements IHttpService {
  async get<T = any>(url: string): Promise<Response<T>> {
    const res = await fetch(url);
    const data = await res.json();
    const statusCode = res.status;
    new HttpError(statusCode);
    return { data, statusCode };
  }
}
