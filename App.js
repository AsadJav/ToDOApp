/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import ForgetPasswordScreen from './src/Screens/ForgetPasswordScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigation/AuthNavigator';
import AppHeader from './src/Components/AppHeader';
import HomeScreen from './src/Screens/HomeScreen';
import TaskComponent from './src/Components/TaskComponent';
import TaskDetailsScreen from './src/Screens/TaskDetailsScreen';
import DisplayDetailsScreen from './src/Screens/DisplayDetailsScreen';
import HomeNavigator from './src/Navigation/HomeNavigator';
//import {store, persistor} from './src/Redux/Store';
import { store,persistor } from "./src/Redux/Store";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MyTabs from './src/Navigation/TabNavigator';
//import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App()
{
  return(
    // <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
        </PersistGate>
      </Provider>
    // </GestureHandlerRootView>
   //<HomeScreen/>
  //<TaskComponent/>
  // <TaskDetailsScreen/>
  //<DisplayDetailsScreen/>
  );
}