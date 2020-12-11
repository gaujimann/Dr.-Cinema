import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import MovieList from '../../components/MoviesList';
import styles from './styles';

const CinemaDetails = ({ cinemas, navigation }) => {
  const selectedCinema = cinemas.find((cinema) => cinema.id === navigation.state.params.id);
  return (
    <View style={{ flex: 1 }}>
      <Toolbar navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>
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
      </View>
      <View style={[styles.container, { flex: 1 }]}>
        <View style={styles.caption}>
          <Text style={styles.caption}>Myndir</Text>
        </View>
        <MovieList cinema={selectedCinema} navigation={navigation} />
      </View>
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
