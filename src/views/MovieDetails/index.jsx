import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';

const MovieDetails = ({ movies, upcoming, navigation }) => {
  const SelectedMovie = [
    movies.find((movie) => movie.id === navigation.state.params.id),
    upcoming.find((movie) => movie.id === navigation.state.params.id),
  ];
  const index = SelectedMovie[0] ? 0 : 1;

  const vId = SelectedMovie[index].trailers[0].results[0].url.split('embed/')[1];
  return (
    <View>
      <Text>{SelectedMovie[index].title}</Text>
      <Text>{SelectedMovie[index].title}</Text>
      <Text>{SelectedMovie[index].plot}</Text>
      <Text>{SelectedMovie[index].durationMinutes}</Text>
      <Text>{SelectedMovie[index].year}</Text>
      <Text>{SelectedMovie[index].genres.map((genre) => genre.Name).join('\n')}</Text>
      {SelectedMovie[index].trailers.length > 0 ? (
        <YoutubePlayer height={300} play={false} videoId={vId} />
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
      title: PropTypes.string.isRequired,
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
const mapStateToProps = (reduxStoreState) => ({
  movies: reduxStoreState.movies,
  upcoming: reduxStoreState.upcoming,
});
export default connect(mapStateToProps)(MovieDetails);
