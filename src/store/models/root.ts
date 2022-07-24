import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { createNewsFeedDefaultModel } from './news-feed'

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model('RootStore').props({
  newsFeedStore: createNewsFeedDefaultModel(),
})
.actions(self => ({
  resetLoadingError() {
    Object.values(self).forEach(store => {
      store.resetLoadingError && store.resetLoadingError()
    });
  },
  reset(){
    Object.values(self).forEach(store => {
      store.reset && store.reset()
    });
  },
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
