import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    borderBottomColor: 'rgb(155, 155, 155)',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  poster: {
    height: 75,
    width: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  genres: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
