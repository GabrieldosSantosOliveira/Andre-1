export interface Response<T> {
  data: T;
  statusCode: number;
}
export interface IHttpService {
  get<T = any>(url: string): Promise<Response<T>>;
}
