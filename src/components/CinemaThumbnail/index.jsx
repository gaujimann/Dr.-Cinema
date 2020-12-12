import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaThumbnail = ({
  id, name, website, navigation,
}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => navigation.navigate('CinemaDetails', { id, name })}
  >
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.website}>{website}</Text>
    </View>
  </TouchableOpacity>
);

CinemaThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CinemaThumbnail;
