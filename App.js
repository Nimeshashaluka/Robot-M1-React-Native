import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './Pages/StartPage';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="StartPage" component={StartPage} options={{headerShown:false}}/>
      <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


