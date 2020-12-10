import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import UpcomingMoviesList from '../../components/UpcomingMoviesList';

const UpcomingMovies = ({ navigation }) => (
  <View>
    <UpcomingMoviesList navigation={navigation} />
  </View>
);

UpcomingMovies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default UpcomingMovies;
