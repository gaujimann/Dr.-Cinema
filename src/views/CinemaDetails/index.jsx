import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from '../../components/MoviesList';

const CinemaDetails = ({ cinemas, navigation }) => {
  const selectedCinema = cinemas.find((cinema) => cinema.id === navigation.state.params.id);
  return (
    <View>
      <Text>
        {selectedCinema.description}
        -
        {selectedCinema.address}
        -
        {selectedCinema.city}
        -
        {selectedCinema.phone}
        -
        {selectedCinema.website}
      </Text>
      <MovieList cinemaId={navigation.state.params.id} navigation={navigation} />
    </View>
  );
};

CinemaDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  cinemaId: PropTypes.number.isRequired,
  // vantar cinemas propTypes!!!
};

const mapStateToProps = (reduxStoreState) => ({ cinemas: reduxStoreState[0] });

export default connect(mapStateToProps)(CinemaDetails);
