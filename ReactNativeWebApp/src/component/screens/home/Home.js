import React from 'react';
import {ScrollView} from 'react-native';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';

import {Text, View} from 'react-native';

import Notif from '../../notif/Notif';

export const navigationOptions = () => ({
  title: 'HOME',
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 13,
  },
});

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home !</Text>
    </View>
  );
};

export default HomeScreen;
