import axios, { AxiosRequestConfig } from 'axios'
import { API_KEY } from '@env'

export const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://newsapi.org',
  params: { apiKey: API_KEY },
}

export const axiosInstance = axios.create(DEFAULT_API_CONFIG)
