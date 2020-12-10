import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CinemaList from '../../components/CinemaList';

const Cinemas = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <CinemaList navigation={navigation} />
  </View>
);

Cinemas.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Cinemas;
