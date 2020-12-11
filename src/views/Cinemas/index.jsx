import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CinemaList from '../../components/CinemaList';
import Toolbar from '../../components/Toolbar';
import { getCinemas } from '../../actions/index';

const Cinemas = ({ getCinemas, navigation }) => {
  useEffect(() => {
    const getCinemasAsync = async () => getCinemas();
    getCinemasAsync();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Toolbar navigation={navigation} />
      <CinemaList navigation={navigation} />
    </View>
  );
};

Cinemas.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { getCinemas })(Cinemas);
