import { Instance, SnapshotIn, types, applySnapshot, detach } from 'mobx-state-tree'
import { api } from '@api'

/**
 * NewsArticle model.
 */
export const NewsArticleModel = types.model('NewsArticle').props({
  source: types.model('source').props({ id: types.maybeNull(types.string), name: types.string }),
  author: types.maybeNull(types.string),
  title: types.string,
  description: types.maybeNull(types.string),
  url: types.string,
  urlToImage: types.maybeNull(types.string),
  publishedAt: types.string,
  content: types.maybeNull(types.string),
})
export type NewsArticleType = Instance<typeof NewsArticleModel>

const newsFeedInitialLoadingError = {
  getNewsFeedLoading: false,
  getNewsFeedError: null,
}

const newsFeedInitial: NewsFeedSnapshotInType = {
  ...newsFeedInitialLoadingError,
  newsFeed: undefined,
}

/**
 * NewsFeed store model.
 */
export const NewsFeedStoreModel = types
  .model('NewsFeed')
  .props({
    newsFeed: types.array(NewsArticleModel),
    getNewsFeedLoading: false,
    getNewsFeedError: types.maybeNull(types.frozen({})),
  })
  .actions((self) => ({
    getNewsFeedStatus: (loading: boolean, error?: any, data?: { articles: NewsArticleType[] }) => {
      self.getNewsFeedLoading = loading
      self.getNewsFeedError = error
      if (data?.articles?.length) {
        detach(self.newsFeed)
        self.newsFeed.clear()
        data?.articles.forEach((el) => {
          try {
            self.newsFeed.push(NewsArticleModel.create(el))
          } catch (_) {}
        })
      }
    },
  }))
  .actions((self) => ({
    getNewsFeed: async () => {
      self.getNewsFeedStatus(true)
      try {
        const { data }: { data: { articles: NewsArticleType[] } } = await api.getNewsFeed()
        self.getNewsFeedStatus(false, null, data)
      } catch (e) {
        self.getNewsFeedStatus(false, e)
      }
    },
  }))
  .actions((self) => ({
    resetLoadingError() {
      applySnapshot(self, { ...self, ...newsFeedInitialLoadingError })
    },
    reset() {
      applySnapshot(self, newsFeedInitial)
    },
  }))

export type NewsFeedType = Instance<typeof NewsFeedStoreModel>
type NewsFeedSnapshotInType = SnapshotIn<typeof NewsFeedStoreModel>
export const createNewsFeedDefaultModel = () => types.optional(NewsFeedStoreModel, {})
