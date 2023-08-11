import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppMavigator from './src/Routes/AppNavigator';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#000"} barStyle={"light-content"} />
      <AppMavigator />
    </NavigationContainer>
  );
}

