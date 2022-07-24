import React, { useContext } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { View, Text, ScrollView } from 'react-native'
import { NewsStackNavigatorParamList } from '@navigation'
import { ImageLoadable } from '@components'
import createStyles from './styles'
import { ThemeContext } from '@theme/theme-provider'

interface Props extends StackScreenProps<NewsStackNavigatorParamList, 'NewsDetails'> {}

export const NewsDetailsScreen = (props: Props) => {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  const styles = createStyles(theme)
  const data = props.route.params ?? {}

  return (
    <ScrollView style={styles.container}>
      {data.urlToImage === null ? null : (
        <ImageLoadable style={styles.image} source={{ uri: data.urlToImage ?? undefined }} />
      )}
      <View style={styles.header}>
        <Text style={styles.title}>{data.title}</Text>
        {data.author && <Text style={styles.author}>{`${t('news:author')}: ${data.author}`}</Text>}
      </View>
      <Text style={styles.description}>{data.content ? data.content : ''}</Text>
    </ScrollView>
  )
}
