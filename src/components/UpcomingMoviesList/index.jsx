import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieThumbnail from '../MovieThumbnail';

const UpcomingMoviesList = ({ upcoming, navigation }) => (
  <View>
    <FlatList
      numColumns={1}
      data={upcoming}
      renderItem={({
        item: {
          id, title, poster, plot, durationMinutes, year, genres,
        },
      }) => (
        <MovieThumbnail
          id={id}
          name={title}
          image={poster}
          plot={plot}
          duration={durationMinutes}
          yearRelease={year}
          genres={genres.map((genre) => genre.Name).join('\n')}
          navigation={navigation}
        />
      )}
      keyExtractor={(movie) => movie.id}
    />
  </View>
);

UpcomingMoviesList.propTypes = {
  upcoming: PropTypes.arrayOf(
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

const sortedMovies = (reduxStoreState) => {
  reduxStoreState.upcoming.sort((movie1, movie2) => (movie1.year < movie2.year ? 1 : -1));
  return {
    upcoming: reduxStoreState.upcoming,
  };
};

export default connect(sortedMovies)(UpcomingMoviesList);
