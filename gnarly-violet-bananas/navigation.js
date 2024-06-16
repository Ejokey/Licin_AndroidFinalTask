import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'EcoTrack' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Карта' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
