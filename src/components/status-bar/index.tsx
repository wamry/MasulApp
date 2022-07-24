import React, { FunctionComponent } from 'react'
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native'

export const StatusBar: FunctionComponent<StatusBarProps> = (props) => {
  return <RNStatusBar backgroundColor={'#000'} barStyle={'dark-content'} {...props} />
}
