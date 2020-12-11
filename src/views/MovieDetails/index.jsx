import React from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';

const MovieDetails = ({ movies, upcoming, navigation }) => {
  const SelectedMovie = [
    movies.find((movie) => movie.id === navigation.state.params.id),
    upcoming.find((movie) => movie.id === navigation.state.params.id),
  ];
  const index = SelectedMovie[0] ? 0 : 1;

  const vId = SelectedMovie[index].trailers[0].results[0].url.split('embed/')[1];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: SelectedMovie[index].poster }} style={styles.poster} />
      </View>

      <View style={{ margin: 8 }}>
        <Text style={{ fontSize: 16 }}>{SelectedMovie[index].plot}</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text>
            {'Lengd: '}
            {SelectedMovie[index].durationMinutes}
            {' '}
            mín.
          </Text>
          <Text>
            {'Útgáfuár: '}
            {SelectedMovie[index].year}
          </Text>
        </View>
        <View>
          <Text style={{ fontStyle: 'italic' }}>
            {SelectedMovie[index].genres.map((genre) => genre.Name).join('\n')}
          </Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Trailer</Text>
      </View>
      {SelectedMovie[index].trailers.length > 0 ? (
        <View style={{ padding: 8 }}>
          <YoutubePlayer height={300} play={false} videoId={vId} />
        </View>
      ) : (
        <Text>No trailer available</Text>
      )}
    </ScrollView>
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
const mapStateToProps = (reduxStoreState) => ({
  movies: reduxStoreState[1],
  upcoming: reduxStoreState[2],
});
export default connect(mapStateToProps)(MovieDetails);
