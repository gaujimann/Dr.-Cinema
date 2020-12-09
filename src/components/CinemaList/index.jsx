import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import latinize from 'latinize';
import CinemaThumbnail from '../CinemaThumbnail';

const CinemaList = ({ cinemas, navigation }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={cinemas}
      renderItem={({ item: { id, name, website } }) => (
        <CinemaThumbnail id={id} name={name} website={website} navigation={navigation} />
      )}
      keyExtractor={(cinema) => cinema.id}
    />
  </View>
);

const sortedCinemas = (reduxStoreState) => {
  console.log('REdux store State!!!!!!!!!!!!!!!!!!!', reduxStoreState[0]);
  reduxStoreState[0].sort((cinema1, cinema2) => (latinize(cinema1.name.toUpperCase()) < latinize(cinema2.name.toUpperCase()) ? -1 : 1));
  return {
    cinemas: reduxStoreState[0],
  };
};

export default connect(sortedCinemas)(CinemaList);
