import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Toolbar = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('UpcomingMovies');
      }}
    >
      <Text style={styles.text}>Væntanlegar Myndir!</Text>
    </TouchableOpacity>
  </View>
);

export default Toolbar;
