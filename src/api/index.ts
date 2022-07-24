///export { getNewsFeed } from './news-feed'
import { axiosInstance } from './axios-instance'

export async function getNewsFeed() {
  return axiosInstance.get('/v2/top-headlines?country=us&category=business')
}

export const api = {
  getNewsFeed,
}
