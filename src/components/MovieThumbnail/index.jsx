import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MovieThumbnail = ({
  id, name, image, yearRelease, genres, navigation, cinemaId,
}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => {
      navigation.navigate('MovieDetails', {
        id,
        cinemaId,
        name,
      });
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
MovieThumbnail.defaultProps = {
  cinemaId: undefined,
};
MovieThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  yearRelease: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  cinemaId: PropTypes.number,
};

export default MovieThumbnail;
