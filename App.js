import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';
import IncomEntry from './screens/Income/IncomEntry';

const Stack = createNativeStackNavigator();
const App = () => {
  let ScreenOptions = {
    headerShown: false,
    animationEnabled: false
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={Tabs} options={ScreenOptions}></Stack.Screen>
        <Stack.Screen name='IncomeEntryScreen' component={IncomEntry} options={ScreenOptions}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})
