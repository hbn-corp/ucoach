import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SignInScreen from '../screens/SignInScreen';
import AbonneeScreen from '../screens/abonneeScreen';
import programmeScreen from '../screens/programmeScreen';
import resultsScreen from '../screens/resultsScreen';
import MyHomeScreen from '../screens/HomeScreen'

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});


const MainNavigator = createDrawerNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    Home: {
      screen: MyHomeScreen,
    },
    Programme: {
      screen: programmeScreen,
    },
    Abonnee: {
      screen: AbonneeScreen,
    },
    Results: {
      screen: resultsScreen,
    },
  }
)

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainNavigator,

  }, {
    initialRouteName: 'Main',
  })
);