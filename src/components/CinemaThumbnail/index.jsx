import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CinemaThumbnail = ({ id, name, website }) => (
  <TouchableOpacity activeOpacity={0.8}>
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
