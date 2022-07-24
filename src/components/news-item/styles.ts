import { Theme } from '@theme/theme-provider'
import { StyleSheet } from 'react-native'

export default ({ colors, typography }: Theme) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.borderColor,
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColor,
      padding: 8,
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
      padding: 8,
      fontSize: 8,
      color: typography.body,
    },
    image: {
      height: 300,
      width: '100%',
      resizeMode: 'cover',
    },
  })
