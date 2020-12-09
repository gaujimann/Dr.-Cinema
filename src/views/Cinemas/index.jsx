import React from 'react';
import { View } from 'react-native';
import CinemaList from '../../components/CinemaList';

const Cinemas = ({ navigation, dispatch }) => (
  <View>
    <CinemaList />
  </View>
);

export default Cinemas;
