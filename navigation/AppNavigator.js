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
import AbonneeScreen from '../screens/abonneeScreen';
import programmeScreen from '../screens/programmeScreen';
import resultsScreen from '../screens/resultatCoatchScreen';


const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const abonneeStack = createStackNavigator({
  Abonnee: AbonneeScreen
});

const programmeStack = createStackNavigator({
  programme: programmeScreen
});

const resultsStack = createStackNavigator({
  results: resultsScreen
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainTabNavigator,
    Abonnee: abonneeStack,
    programme: programmeStack,
    results: resultsStack,
  }, {
    initialRouteName: 'Auth',
  })
);