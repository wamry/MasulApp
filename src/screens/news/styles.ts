import { Theme } from '@theme/theme-provider'
import { StyleSheet } from 'react-native'

export default (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
    },
    listContentContainer: {
      marginTop: 16,
      marginHorizontal: 16,
    },
    searchInputContainer: {
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
    searchInput: {
      paddingHorizontal: 8,
      height: 36,
      width: '100%',
      backgroundColor: '#ccc',
      borderRadius: 4,
    },
  })
