import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CinemaThumbnail = ({
  id, name, website, navigation,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigation.navigate('CinemaDetails', { id })}
  >
    <View>
      <Text>
        {id}
        -
        {name}
        -
        {website}
      </Text>
    </View>
  </TouchableOpacity>
);

export default CinemaThumbnail;
