import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './Icon';
import HomeScreen, {
  navigationOptions as homeNavigationOptions,
} from '../screens/home';
import APIScreen, {
  navigationOptions as APINavigationOptions,
} from '../screens/api';


const APIStack = createStackNavigator();
const HomeStack = createStackNavigator();

const API = () => (
  <APIStack.Navigator>
    <APIScreen.Screen
      component={APIScreen}
      name="APIScreen"
      options={APINavigationOptions}
    />
  </APIStack.Navigator>
);

const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      component={HomeScreen}
      name="HomeScreen"
      options={homeNavigationOptions}
    />
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: () => {
        return <Icon name={route.name} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen component={HomeScreen} name="Home" />
    <Tab.Screen component={APIScreen} name="Api" />
  </Tab.Navigator>
);
export default BottomTabNavigator;