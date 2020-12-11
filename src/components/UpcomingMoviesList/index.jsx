import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
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

const sortedMovies = (reduxStoreState) => {
  reduxStoreState[2].sort((movie1, movie2) => (movie1.year < movie2.year ? -1 : 1));
  return {
    upcoming: reduxStoreState[2],
  };
};

export default connect(sortedMovies)(UpcomingMoviesList);
