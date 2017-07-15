/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import LogIn from './Containers/Login.js';
import FoodBrowser from './Containers/FoodBrowser.js';
import FoodDetail from './Containers/FoodDetail.js';


const AwesomeProject = StackNavigator({
    Home: { screen: LogIn },
    Browse: {screen: FoodBrowser},
    Food: {screen: FoodDetail},
   
},{ 
    headerMode: 'none' 
  });


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
