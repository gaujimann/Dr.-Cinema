import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  poster: {
    height: 350,
    width: 175,
  },
  container: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(155, 155, 155)',
    padding: 8,
    marginRight: 8,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  showtimeContainer: {
    padding: 8,
  },
});
