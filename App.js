/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import LoginScreen from './Components/Authentication/Login'
import ForgotScreen from './Components/Authentication/Forgot'
import SignupScreen from './Components/Authentication/SignUp'
import TabbarScreen from './Components/Home/Tabbar'
import AuthLoadingScreen from './Components/Authentication/Authenticate'

const AppStack = createStackNavigator({
  Tabbar: {
    screen: TabbarScreen,
    navigationOptions: {
      header: null,
    }
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  }, Forgot: {
    screen: ForgotScreen,
    navigationOptions: {
      header: null,
    }
  }, SignUp: {
    screen: SignupScreen,
    navigationOptions: {
      header: null,
    }
  }, Tabbar: {
    screen: TabbarScreen,
    navigationOptions: {
      header: null,
    }
  },
});

type Props = {};
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
