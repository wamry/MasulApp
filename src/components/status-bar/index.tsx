import React, { FunctionComponent } from 'react'
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native'
import { colors } from '@theme'

export const StatusBar: FunctionComponent<StatusBarProps> = (props) => {
  return <RNStatusBar backgroundColor={colors.background} barStyle={'dark-content'} {...props} />
}
