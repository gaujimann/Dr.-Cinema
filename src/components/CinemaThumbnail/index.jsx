import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

export default CinemaThumbnail;
