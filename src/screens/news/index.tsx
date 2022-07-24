import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { View, FlatList, RefreshControl, TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStores, NewsArticleType } from '@store'
import createStyles from './styles'
import { NewsItem } from '@components'
import { StackNavigationProp } from '@react-navigation/stack'
import { NewsStackNavigatorParamList } from '@navigation'
import { ThemeContext } from '@theme/theme-provider'
import { RouteProp } from '@react-navigation/native'

interface Props {
  navigation: StackNavigationProp<NewsStackNavigatorParamList, 'News'>
  route: RouteProp<NewsStackNavigatorParamList, 'News'>
}

export const NewsScreen = observer(({ navigation, route }: Props) => {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  const styles = createStyles(theme)
  const flatListRef = useRef<FlatList>(null)
  const {
    newsFeedStore: { getNewsFeed, newsFeed, getNewsFeedLoading },
  } = useStores()
  const [searchText, setSearchText_] = useState('')

  const setSearchText = (val: string) => setSearchText_(val ? val.toLowerCase() : '')

  useEffect(() => {
    getNewsFeed()
  }, [])

  //DeepLinking handle
  useEffect(() => {
    const articleUrl = route.params?.articleUrl
    if (articleUrl && newsFeed.length) {
      const articleIndex = newsFeed.findIndex((el) => el.url.includes(articleUrl))

      if (articleIndex && articleIndex !== -1) {
        flatListRef.current?.scrollToIndex({ index: articleIndex, animated: true })
      }
    }
  }, [route.params?.articleUrl, newsFeed])

  const listData = useMemo(() => {
    return searchText !== ''
      ? newsFeed.filter((el) => el.title.toLowerCase().includes(searchText))
      : newsFeed
  }, [searchText, newsFeed])

  const handlePressItem = (data: NewsArticleType) => {
    navigation.navigate('NewsDetails', data)
  }

  const renderItem = ({ item }: { item: NewsArticleType }) => (
    <NewsItem data={item} onPress={() => handlePressItem(item)} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(val) => setSearchText(val)}
          placeholder={t('searchPlaceholder')}
          autoCapitalize='none'
        />
      </View>
      <FlatList
        ref={flatListRef}
        refreshControl={
          <RefreshControl
            refreshing={getNewsFeedLoading}
            onRefresh={getNewsFeed}
            tintColor={theme.colors.refreshIndicator}
          />
        }
        contentContainerStyle={styles.listContentContainer}
        data={listData}
        renderItem={renderItem}
      />
    </View>
  )
})
