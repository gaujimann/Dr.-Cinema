import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieThumbnail from '../MovieThumbnail';

const MovieList = ({ movies, cinema, navigation }) => {
  const moviesInCinema = movies.filter((movie) => movie.showtimes.map((s) => s.cinema.name).includes(cinema.name));
  return (
    <View>
      {moviesInCinema.length > 0 ? (
        <FlatList
          numColumns={1}
          data={moviesInCinema}
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
              cinemaId={cinema.id}
            />
          )}
          keyExtractor={(movie) => movie.id}
        />
      ) : (
        <View>
          <Text>Engar sýningar</Text>
        </View>
      )}
    </View>
  );
};

MovieList.propTypes = {
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
  cinema: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const sortedMovies = (reduxStoreState) => {
  reduxStoreState.movies.sort((movie1, movie2) => (movie1.title.toUpperCase() < movie2.title.toUpperCase() ? -1 : 1));
  return {
    movies: reduxStoreState.movies,
  };
};

export default connect(sortedMovies)(MovieList);
