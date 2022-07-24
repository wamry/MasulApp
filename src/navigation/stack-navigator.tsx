import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { NewsScreen, NewsDetailsScreen } from '@screens'
import { NewsArticleType } from '@store'
import { useTranslation } from 'react-i18next'

export type NewsStackNavigatorParamList = {
  NewsDetails: NewsArticleType
  News: { articleUrl?: string }
}

const Stack = createNativeStackNavigator<NewsStackNavigatorParamList>()

export const StackNavigator = () => {
  const { t } = useTranslation()
  return (
    <Stack.Navigator initialRouteName='News'>
      <Stack.Screen name='News' options={{ headerTitle: t('news') }} component={NewsScreen} />
      <Stack.Screen
        name='NewsDetails'
        options={{ headerTitle: t('articleInfo') }}
        component={NewsDetailsScreen}
      />
    </Stack.Navigator>
  )
}
