import React from 'react';
import { View } from 'react-native';
import MovieList from '../../components/MoviesList';

const CinemaDetails = ({ cinemaId, navigation }) => (
  <View>
    <MovieList cinemaId={cinemaId} navigation={navigation} />
  </View>
);

export default CinemaDetails;
