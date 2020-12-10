import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MovieThumbnail from '../MovieThumbnail';

const MovieList = ({ movies, cinema, navigation }) => {
  console.log(cinema);
  const moviesInCinema = movies.filter((movie) => {
    console.log(
      movie.title,
      movie.showtimes.map((s) => s.cinema.name),
    );
    return movie.showtimes.map((s) => s.cinema.name).includes(cinema);
  });
  return (
    <View>
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
