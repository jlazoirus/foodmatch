/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogIn from './login';
import FoodBrowser from './foodBrowser';


const AwesomeProject = StackNavigator({
    Home: { screen: LogIn },
    Browse: {screen: FoodBrowser},
},{ 
    headerMode: 'none' 
  });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
