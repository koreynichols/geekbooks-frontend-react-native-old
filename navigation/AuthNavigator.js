import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigator = createStackNavigator({
    Landing: {
        screen: LandingScreen,
        navigationOptions: {
            header: null,
        }},
        Register: RegisterScreen,
        Login: LoginScreen
});

export default createAppContainer(AuthNavigator);