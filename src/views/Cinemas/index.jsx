import React from 'react';
import { View } from 'react-native';
import CinemaList from '../../components/CinemaList';

const Cinemas = ({ navigation, dispatch }) => (
  <View style={{ flex: 1 }}>
    <CinemaList navigation={navigation} />
  </View>
);

export default Cinemas;
