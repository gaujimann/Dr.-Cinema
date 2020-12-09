import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { auth, getAllCinemas, getAllMovies } from './src/services/api';
import cinemaReducer from './src/components/reducers/cinemaReducer';
import AppContainer from './src/routes';

export default function App() {
  const [store, setStore] = useState(null);
  useEffect(() => {
    const getCinemas = async () => {
      const { token } = await auth();
      const cinemas = await getAllCinemas(token);
      const movies = await getAllMovies(token);
      setStore(createStore(cinemaReducer, [cinemas, movies]));
    };
    getCinemas();
  }, []);
  return store !== null ? (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) : (
    <Text>Loading</Text>
  );
}
