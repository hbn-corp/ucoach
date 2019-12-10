import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const abonneeStack = createStackNavigator({
  Abonnee: AbonneeScreen
});


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    auth: AuthStack,
    Main: MainTabNavigator,
  })
);