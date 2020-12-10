import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

const MovieThumbnail = ({
  id, name, image, yearRelease, genres, navigation,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      navigation.navigate('MovieDetails', { id });
    }}
  >
    <View>
      <Text>
        {id}
        -
        {name}
        -
        <Image source={image} />
        -
        {yearRelease}
        -
        {genres}
      </Text>
    </View>
  </TouchableOpacity>
);

export default MovieThumbnail;
