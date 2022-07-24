import { Theme } from '@theme/theme-provider'
import { StyleSheet } from 'react-native'

export default ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.backgroundColor,
    },
  })
