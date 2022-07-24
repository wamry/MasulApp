import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SettingsScreen, NewsScreen } from '@screens'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='News'>
      <Tab.Screen name='News' component={NewsScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}
