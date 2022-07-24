import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
  author: {
    fontSize: 8,
    color: '#333',
  },
  body: {},
  description: {
    paddingHorizontal: 16,
    padding: 8,
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
})
