import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigator = createStackNavigator({
    Landing: LandingScreen,
    Register: RegisterScreen
});

export default createAppContainer(AuthNavigator);