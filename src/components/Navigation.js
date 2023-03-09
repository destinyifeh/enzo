import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Album from '../screens/Album';
import {FansScreen} from '../screens/Fans';
import {Home} from '../screens/Home';
import LandingScreen from '../screens/LandingScreen';
import Store from '../screens/Store';
export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{title: null}}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Album" component={Album} />
          <Stack.Screen name="Fans" component={FansScreen} />
          <Stack.Screen name="Store" component={Store} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
