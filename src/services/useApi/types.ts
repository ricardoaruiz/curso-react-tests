import { AxiosRequestConfig } from 'axios'

export type UseApi = {
  /**
   * Perform a GET request
   * @param: uri endpoint
   * @param: config axios configuration object
   * @returns: Promise<D>
   */
  get: <D>(uri: string, config?: AxiosRequestConfig) => Promise<D>

  /**
   * Perform a POST request
   * @param: uri endpoint
   * @param: body: request body
   * @param: config axios configuration object
   * @return: Promise<D>
   */
  post: <D, B>(uri: string, body?: B, config?: AxiosRequestConfig) => Promise<D>
}
