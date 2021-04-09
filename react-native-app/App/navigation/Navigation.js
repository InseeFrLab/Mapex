import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Notif from '../components/Notif'

const Navigation = () => {
    const Stack = createStackNavigator();

    function HomeScreen() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Notif />
          </View>
        );
      }



    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" 
                options={{ title: 'Application Minimale',
                      headerStyle: {
                        backgroundColor: '#1E90FF',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                       }} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;