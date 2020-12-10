import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CinemaList from '../../components/CinemaList';
import Toolbar from '../../components/Toolbar';

const Cinemas = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Toolbar navigation={navigation} />
    <CinemaList navigation={navigation} />
  </View>
);

Cinemas.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Cinemas;
