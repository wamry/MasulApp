import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    lineHeight: 0,
    paddingBottom: 2,
  },
  item: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 4,
    paddingHorizontal: 8,
    borderRightWidth: 1,
  },
  itemActive: {
    backgroundColor: '#0096FF',
  },
  itemLeftMost: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderLeftWidth: 1,
  },
  itemRightMost: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
})
