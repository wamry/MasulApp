import React from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { TabNavigator } from './tab-navigator'

export const RootNavigator = React.forwardRef<
  NavigationContainerRef<typeof TabNavigator>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <TabNavigator />
    </NavigationContainer>
  )
})

RootNavigator.displayName = 'RootNavigator'
