import React, { useEffect, useMemo, useState } from 'react'
import { View, FlatList, RefreshControl, TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStores, NewsArticleType } from '@store'
import styles from './styles'
import { NewsItem } from '@components'

type Props = {}

export const NewsScreen = observer(({}: Props) => {
  const { t } = useTranslation()
  const {
    newsFeedStore: { getNewsFeed, newsFeed, getNewsFeedLoading },
  } = useStores()
  const [searchText, setSearchText_] = useState('')

  const setSearchText = (val: string) => setSearchText_(val ? val.toLowerCase() : '')

  const listData = useMemo(() => {
    return searchText !== ''
      ? newsFeed.filter((el) => el.title.toLowerCase().includes(searchText))
      : newsFeed
  }, [searchText, newsFeed])

  useEffect(() => {
    getNewsFeed()
  }, [])

  useEffect(() => {}, [newsFeed])

  const renderItem = ({ item }: { item: NewsArticleType }) => {
    return <NewsItem data={item} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(val) => setSearchText(val)}
          placeholder={t('news:searchPlaceholder')}
          autoCapitalize='none'
        />
      </View>
      <FlatList
        refreshControl={<RefreshControl refreshing={getNewsFeedLoading} onRefresh={getNewsFeed} />}
        contentContainerStyle={styles.listContentContainer}
        data={listData}
        renderItem={renderItem}
      />
    </View>
  )
})
