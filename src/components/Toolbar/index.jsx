import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Toolbar = ({ navigation }) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('UpcomingMovies');
      }}
    >
      <Text>Coming Soon!</Text>
    </TouchableOpacity>
  </View>
);

export default Toolbar;
