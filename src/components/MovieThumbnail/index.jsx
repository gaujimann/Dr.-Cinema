import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

const MovieThumbnail = ({
  id, name, image, plot, duration, yearRelease, genres,
}) => (
  <TouchableOpacity activeOpacity={0.8}>
    <View>
      <Text>
        {id}
        -
        {name}
        -
        <Image src={image} />
        -
        {plot}
        -
        {duration}
        -
        {yearRelease}
        -
        {genres}
      </Text>
    </View>
  </TouchableOpacity>
);

export default MovieThumbnail;
