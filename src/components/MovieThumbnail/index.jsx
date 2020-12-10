import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import styles from './styles';

const MovieThumbnail = ({
  id, name, image, yearRelease, genres, navigation,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      navigation.navigate('MovieDetails', { id });
    }}
  >
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.poster} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <Text>{yearRelease}</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.genres}>{genres}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default MovieThumbnail;
