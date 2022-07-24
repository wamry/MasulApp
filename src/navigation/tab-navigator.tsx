import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SettingsScreen } from '@screens'
import { StackNavigator } from './stack-navigator'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='NewsTab'>
      <Tab.Screen name='NewsStack' component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name='Settings' component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}
