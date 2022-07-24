import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SettingsScreen } from '@screens'
import { StackNavigator } from './stack-navigator'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator initialRouteName='NewsTab'>
      <Tab.Screen
        name='NewsStack'
        component={StackNavigator}
        options={{ title: t('news'), headerShown: false }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ title: t('settings'), headerShown: false }}
      />
    </Tab.Navigator>
  )
}
