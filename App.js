import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartVy from './StartVy';
import DetaljVy from './DetaljVy';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartVy" component={StartVy} />
        <Stack.Screen name="DetaljVy" component={DetaljVy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
