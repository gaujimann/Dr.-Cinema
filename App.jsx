import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  auth, getAllCinemas, getAllMovies, getAllUpcomingMovies,
} from './src/services/api';
import cinemaReducer from './src/reducers/index';
import AppContainer from './src/routes';

export default function App() {
  const [store, setStore] = useState(null);
  useEffect(() => {
    const getCinemas = async () => {
      const { token } = await auth();
      // const cinemas = await getAllCinemas(token);
      const movies = await getAllMovies(token);
      const upcoming = await getAllUpcomingMovies(token);

      setStore(
        createStore(
          cinemaReducer,
          {
            cinemas: [],
            movies,
            upcoming,
          },
          applyMiddleware(thunk),
        ),
      );
    };
    getCinemas();
  }, []);

  return store !== null ? (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) : (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Loading</Text>
    </View>
  );
}
