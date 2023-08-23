import React from 'react';
import {StyleSheet} from 'react-native';



import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
//import HomeNavigator from './HomeNavigator';
import MyTabs from './TabNavigator';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
//gestureHandlerRootHOC(MyTabs)
const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    <Stack.Screen name="TabHome" component={gestureHandlerRootHOC(MyTabs)} />
    
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default AuthNavigator;