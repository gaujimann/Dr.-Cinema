import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MovieDetails = ({ movies, movieId }) => {
  const SelectedMovie = movies.find((movie) => movie.id === movieId);
  return (
    <View>
      <Text>Movie Details Screen</Text>
    </View>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      durationMinutes: PropTypes.number.isRequired,
      year: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          ID: PropTypes.number.isRequired,
          Name: PropTypes.string.isRequired,
          NameEN: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  movieId: PropTypes.number.isRequired,
};
const mapStateToProps = (reduxStoreState) => ({ movies: reduxStoreState[1] });
export default connect(mapStateToProps)(MovieDetails);
