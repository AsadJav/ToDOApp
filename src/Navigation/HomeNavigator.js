import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DisplayDetailsScreen from '../Screens/DisplayDetailsScreen';
import TaskDetailsScreen from '../Screens/TaskDetailsScreen';
import AuthNavigator from './AuthNavigator';



const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={HomeScreen}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Display" component={DisplayDetailsScreen}/>
    <Stack.Screen name="Details" component={TaskDetailsScreen}/>
    {/* <Stack.Screen name="Logout" component={AuthNavigator} /> */}

  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default HomeNavigator;