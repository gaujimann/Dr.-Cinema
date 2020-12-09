import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CinemaThumbnail = ({ id, name, website }) => (
  <TouchableOpacity activeOpacity={0.5}>
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.website}>{website}</Text>
    </View>
  </TouchableOpacity>
);

export default CinemaThumbnail;
