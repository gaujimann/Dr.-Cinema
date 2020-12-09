import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';

const StackNavigator = createStackNavigator({
  Cinemas,
});

export default createAppContainer(StackNavigator);
