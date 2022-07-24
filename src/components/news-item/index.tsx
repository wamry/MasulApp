import type { NewsArticleType } from '@store'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TouchableOpacity } from 'react-native'
import { ImageLoadable } from '../image-loadable'
import styles from './styles'

type Props = {
  data: NewsArticleType
}

export const NewsItem = ({ data }: Props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => {}}>
        <Text style={styles.title}>{data.title}</Text>
        {data.author && <Text style={styles.author}>{`${t('news:author')}: ${data.author}`}</Text>}
      </TouchableOpacity>
      <View style={styles.body}>
        {data.urlToImage === null ? null : (
          <ImageLoadable style={styles.image} source={{ uri: data.urlToImage ?? undefined }} />
        )}
        <Text style={styles.description}>
          {data.description ?? `${t('news:descriptionMissing')}...`}
        </Text>
      </View>
    </View>
  )
}
