import React from 'react';
import {
  View, Text, Image, ScrollView, FlatList, Linking,
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
  const {
    state: {
      params: { cinemaId },
    },
  } = navigation;

  const index = SelectedMovie[0] ? 0 : 1;

  const vId = SelectedMovie[index].trailers[0].results[0].url.split('embed/')[1];
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginBottom: 32 }}>
        {cinemaId ? (
          <FlatList
            ListHeaderComponent={(
              <>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: SelectedMovie[index].poster }}
                    style={styles.poster}
                  />
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
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Sýningartímar</Text>
                </View>
              </>
            )}
            numColumns={1}
            data={SelectedMovie[0].showtimes.find((s) => s.cinema.id === cinemaId).schedule}
            renderItem={({ item: { time, purchase_url } }) => (
              <View>
                <View style={styles.showtimeContainer}>
                  <Text style={{ fontWeight: 'bold' }}>
                    {time.slice(0, 5)}
                    {' '}
                    {'Salur: '}
                    {time.slice(6)}
                  </Text>
                  <Text
                    style={{ color: 'blue', marginLeft: 24 }}
                    onPress={() => Linking.openURL(purchase_url)}
                  >
                    Kaupa miða
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(schedule) => schedule.time}
          />
        ) : (
          <></>
        )}
      </View>
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
