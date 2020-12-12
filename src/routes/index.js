import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';
import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  Cinemas: {
    screen: Cinemas,
    navigationOptions: () => ({
      title: 'Kvikmyndahús',
    }),
  },
  CinemaDetails: {
    screen: CinemaDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  UpcomingMovies: {
    screen: UpcomingMovies,
    navigationOptions: () => ({
      title: 'Væntanlegar í bíó',
    }),
  },
});

export default createAppContainer(StackNavigator);
