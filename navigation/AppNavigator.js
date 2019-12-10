import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {
  createStackNavigator
} from 'react-navigation-stack';

import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

// const abonneeStack = createStackNavigator({
//   Abonnee: AbonneeScreen
// });


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainTabNavigator,
  }, {
    initialRouteName: 'Auth',
  })
);