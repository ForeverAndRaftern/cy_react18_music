import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface CYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface CYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CYInterceptors<T>;
}
