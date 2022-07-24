import type { NewsArticleType } from '@store'
import { ThemeContext } from '@theme/theme-provider'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TouchableOpacity } from 'react-native'
import { ImageLoadable } from '../image-loadable'
import createStyles from './styles'

type Props = {
  data: NewsArticleType
  onPress: () => void
}

export const NewsItem = ({ data, onPress }: Props) => {
  const theme = useContext(ThemeContext)
  const styles = createStyles(theme)
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={onPress}>
        {data.title ? <Text style={styles.title}>{data.title}</Text> : null}
        {data.author ? <Text style={styles.author}>{`${t('author')}: ${data.author}`}</Text> : null}
      </TouchableOpacity>
      <View style={styles.body}>
        {data.urlToImage === null ? null : (
          <ImageLoadable style={styles.image} source={{ uri: data.urlToImage ?? undefined }} />
        )}
        <Text style={styles.description}>
          {data.description ?? data.content ?? `${t('descriptionMissing')}...`}
        </Text>
      </View>
    </View>
  )
}
