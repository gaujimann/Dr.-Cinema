import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MovieDetails = ({ movies, navigation }) => {
  const SelectedMovie = movies.find((movie) => movie.id === navigation.state.params.id);

  console.log(SelectedMovie.trailers[0].results[0].url);
  return (
    <View>
      <Text>{SelectedMovie.title}</Text>
      <Text>{SelectedMovie.title}</Text>
      <Text>{SelectedMovie.plot}</Text>
      <Text>{SelectedMovie.durationMinutes}</Text>
      <Text>{SelectedMovie.year}</Text>
      <Text>{SelectedMovie.genres.map((genre) => genre.Name).join('\n')}</Text>
      {SelectedMovie.trailers.length > 0 ? (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/286202745?rel=0' }}
          javaScriptEnabled
        />
      ) : (
        <Text>No trailer available</Text>
      )}
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const mapStateToProps = (reduxStoreState) => ({ movies: reduxStoreState[1] });
export default connect(mapStateToProps)(MovieDetails);
