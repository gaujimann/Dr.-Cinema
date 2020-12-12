import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import MovieList from '../../components/MoviesList';
import { getMovies } from '../../actions/getMovies';
import styles from './styles';

const CinemaDetails = ({ getMovies, cinemas, navigation }) => {
  useEffect(() => {
    const getMoviesAsync = async () => getMovies();
    getMoviesAsync();
  }, []);
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
    state: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
  getMovies: PropTypes.func.isRequired,
  cinemas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (reduxStoreState) => ({ cinemas: reduxStoreState.cinemas });

export default connect(mapStateToProps, { getMovies })(CinemaDetails);
