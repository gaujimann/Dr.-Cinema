import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import UpcomingMoviesList from '../../components/UpcomingMoviesList';
import { getUpcomingMovies } from '../../actions/getUpcomingMovies';

const UpcomingMovies = ({ getUpcomingMovies, navigation }) => {
  useEffect(() => {
    const getUpcomingMoviesAsync = async () => getUpcomingMovies();
    getUpcomingMoviesAsync();
  }, []);
  return (
    <View>
      <UpcomingMoviesList navigation={navigation} />
    </View>
  );
};

UpcomingMovies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(null, { getUpcomingMovies })(UpcomingMovies);
