import React, { useState } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import AppContainer from './src/routes';

export default function App() {
  const [store] = useState(createStore(reducers, applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
