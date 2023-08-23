import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
//import TaskDetailsScreen from '../Screens/TaskDetailsScreen';
//import HomeScreen from '../Screens/HomeScreen';
import { COLORS } from '../utils/COLORS';
import AppIcon from '../Components/AppIcon';
import ArchivesScreen from '../Screens/ArchivesScreen';
import CompletedScreen from '../Screens/CompletedScreen';
import ProfileScreen from '../Screens/ProfileScreen';
//import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:COLORS.purple}}>
      <Tab.Screen name="Home" component={HomeNavigator} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AppIcon IconName={'home'} IconColor={color} IconSize={size}/>
          ),
        }}/>
      <Tab.Screen name='Achives' component={ArchivesScreen} options={{
          tabBarLabel: 'Archives',
          tabBarIcon: ({ color, size }) => (
            <AppIcon IconName={'archive'} IconColor={color} IconSize={size}/>
          ),
        }}/>
      <Tab.Screen name='Completed' component={CompletedScreen}  options={{
          tabBarLabel: 'Completed',
          tabBarIcon: ({ color, size }) => (
            <AppIcon IconName={"checkmark-circle-outline"} IconColor={color} IconSize={size}/>
          ),
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AppIcon IconName={"person"} IconColor={color} IconSize={size}/>
          ),
        }}/>
    </Tab.Navigator>
  );
}
export default MyTabs;