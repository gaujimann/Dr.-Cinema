import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Toolbar = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('UpcomingMovies');
      }}
    >
      <Text style={styles.text}>Coming Soon!</Text>
    </TouchableOpacity>
  </View>
);

Toolbar.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Toolbar;
