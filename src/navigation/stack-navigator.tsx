import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { NewsScreen, NewsDetailsScreen } from '@screens'
import { NewsArticleType } from '@store'

export type NewsStackNavigatorParamList = {
  NewsDetails: NewsArticleType
  News: undefined
}

const Stack = createNativeStackNavigator<NewsStackNavigatorParamList>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='News'>
      <Stack.Screen name='News' component={NewsScreen} />
      <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} />
    </Stack.Navigator>
  )
}
