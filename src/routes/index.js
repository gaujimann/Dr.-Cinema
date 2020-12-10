import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';
import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetails,
  MovieDetails,
  UpcomingMovies,
});

export default createAppContainer(StackNavigator);
