///export { getNewsFeed } from './news-feed'
import { axiosInstance } from './axios-instance'

export async function getNewsFeed() {
  return axiosInstance.get('/v2/top-headlines?country=us')
}

export const api = {
  getNewsFeed,
}
