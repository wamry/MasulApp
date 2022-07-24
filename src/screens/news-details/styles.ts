import { Theme } from '@theme/theme-provider'
import { StyleSheet } from 'react-native'

export default ({ colors, typography }: Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.backgroundColor,
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColor,
      padding: 8,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 10,
      color: typography.title,
    },
    author: {
      fontSize: 8,
      color: typography.subtitle,
    },
    body: {},
    description: {
      paddingHorizontal: 16,
      padding: 8,
      fontSize: 12,
      color: typography.body,
      lineHeight: 18,
    },
    image: {
      height: 300,
      width: '100%',
      resizeMode: 'cover',
    },
  })
