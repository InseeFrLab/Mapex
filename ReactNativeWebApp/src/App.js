/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './component/bottomTabNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{title: 'Application Minimale'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
