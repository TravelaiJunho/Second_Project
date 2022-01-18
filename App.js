// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import React, {Component, useEffect, useState} from 'react';
//import React in our code.
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import all the components we are going to use.

import User from './src/User';
import HomeScreen from './src/HomeScreen';

const windowWidth = Dimensions.get('window').width;
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
