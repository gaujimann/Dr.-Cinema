import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

CinemaList.propTypes = {
  cinemas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const sortedCinemas = (reduxStoreState) => {
  reduxStoreState.cinemas.sort((cinema1, cinema2) => (latinize(cinema1.name.toUpperCase()) < latinize(cinema2.name.toUpperCase()) ? -1 : 1));
  return {
    cinemas: reduxStoreState.cinemas,
  };
};

export default connect(sortedCinemas)(CinemaList);
