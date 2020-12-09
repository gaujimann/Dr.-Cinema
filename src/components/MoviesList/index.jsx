import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MovieThumbnail from '../MovieThumbnail';

const MovieList = ({ movies, cinemaId, navigation }) => {
  // console.log(movies);
  const moviesInCinema = movies.filter((movie) => movie.showtimes.map((s) => s.cinema.id === cinemaId));
  return (
    <View>
      <FlatList
        numColumns={3}
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
            genres={genres.map((genre) => genre.Name)}
            navigation={navigation}
          />
        )}
        keyExtractor={(cinema) => cinema.id}
      />
    </View>
  );
};

const sortedMovies = (reduxStoreState) => {
  reduxStoreState[1].sort((movie1, movie2) => (movie1.title.toUpperCase() < movie2.title.toUpperCase() ? -1 : 1));
  return {
    movies: reduxStoreState[1],
  };
};

export default connect(sortedMovies)(MovieList);
