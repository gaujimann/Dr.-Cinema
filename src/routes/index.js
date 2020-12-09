import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetails,
});

export default createAppContainer(StackNavigator);
