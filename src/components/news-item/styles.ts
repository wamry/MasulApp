import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bbb',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
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
    padding: 8,
    fontSize: 8,
    color: '#333',
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
})
