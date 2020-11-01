import React, { Component } from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';

const RootStack = createStackNavigator({
  home:{
    screen: HomeScreen
  },
  second:{
    screen: SecondScreen
  }
})

const App = createAppContainer(RootStack);


export default App;
