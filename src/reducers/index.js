import { combineReducers } from 'redux';
import cinemaReducer from './cinemaReducer';
import movieReducer from './movieReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';

export default combineReducers({
  cinemas: cinemaReducer,
  movies: movieReducer,
  upcoming: upcomingMoviesReducer,
});
