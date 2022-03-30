import React from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { UseApi } from './types'

const api = axios.create({
  baseURL: 'http://localhost:9000',
})

export const useApi = (): UseApi => {
  /**
   * Perform a GET request
   * @param: uri endpoint
   * @param: config axios configuration object
   * @returns: Promise<D>
   */
  const get = React.useCallback(
    async <D>(uri: string, config?: AxiosRequestConfig) => {
      const response = await api.get<D>(uri, config)
      return response.data
    },
    []
  )

  /**
   * Perform a POST request
   * @param: uri endpoint
   * @param: body: request body
   * @param: config axios configuration object
   * @return: Promise<D>
   */
  const post = React.useCallback(
    async <D, B>(uri: string, body?: B, config?: AxiosRequestConfig) => {
      const response = await api.post<D>(uri, body, config)
      return response.data
    },
    []
  )

  return { get, post }
}
