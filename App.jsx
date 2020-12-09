import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { auth } from './src/services/api';
import cinemas from './src/resources/src_resources_cinemas.json';
import movies from './src/resources/src_resources_movies.json';
import cinemaReducer from './src/components/reducers/cinemaReducer';
import AppContainer from './src/routes';

export default function App() {
  const [store, setStore] = useState(null);
  useEffect(() => {
    setStore(createStore(cinemaReducer, [cinemas, movies]));
  }, []);
  return store !== null ? (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) : (
    <Text>Loading</Text>
  );
}
