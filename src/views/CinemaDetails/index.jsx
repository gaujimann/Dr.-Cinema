import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import MovieList from '../../components/MoviesList';
import styles from './styles';

const CinemaDetails = ({ cinemas, navigation }) => {
  const {
    state: {
      params: { id },
    },
  } = navigation;
  const selectedCinema = cinemas.find((cinema) => cinema.id === id);
  return (
    <View style={{ flex: 1 }}>
      <Toolbar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.text}>
            {selectedCinema.description?.replace(/<br>/g, '').replace(/<b>/g, '')}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {selectedCinema['address\t']}
            {' '}
            {selectedCinema.city}
          </Text>
          <Text style={styles.infoText}>
            {'s. '}
            {selectedCinema.phone}
          </Text>
          <Text style={styles.infoText}>{selectedCinema.website}</Text>
        </View>
      </View>
      <View style={[styles.container, { flex: 1 }]}>
        <View style={styles.caption}>
          <Text style={styles.caption}>Sýningar</Text>
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

const mapStateToProps = (reduxStoreState) => ({ cinemas: reduxStoreState.cinemas });

export default connect(mapStateToProps)(CinemaDetails);
