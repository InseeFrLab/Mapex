import React from 'react';

import {Text, View} from 'react-native';

export const navigationOptions = () => ({
  title: 'API',
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 13,
  },
});

const APIScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Test API </Text>
    </View>
  );
};

export default APIScreen;
