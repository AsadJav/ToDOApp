import React,{Component, useState} from 'react';
import {Animated,View,StyleSheet,FlatList,Text,LogBox} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import TaskComponent from '../Components/TaskComponent';
import {useSelector, useDispatch} from 'react-redux';
import { addTask } from '../Redux/TaskSlice';
import { COLORS } from '../utils/COLORS';
//import { addArchiveTask } from '../Redux/ArchiveSlice';
//import AppIcon from '../Components/AppIcon';
//import { deleteTask } from '../Redux/TaskSlice';
import { getUserDataFromFirestore } from '../FIrebase/UserDb';
import { addTasksToFirestore,getTasksFromFirestore } from '../FIrebase/TasksDb';
//import { addUser } from '../Redux/PersonSlice';

var DATA = [{id:1,title:'Hello1',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:2,title:'Hello2',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:3,title:'Hello3',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:4,title:'Hello4',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:5,title:'Hello5',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:6,title:'Hello6',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:7,title:'Hello7',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:8,title:'Hello8',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'}];
function HomeScreen({navigation,route}) {
  const storeData = useSelector(state => state.tasks);
  const userData = useSelector(state => state.user);
  console.log(userData.id);
  //console.log(storeData);
  const dispatch = useDispatch();
  // const data = route.params;
  function addData(data){

    console.log(data);
    addTasksToFirestore({id:data.id,uid:userData.id,title:data.title,subTitle:data.sub,date:data.DnD,time:data.time,dateNo:data.dateNo,priority:data.priority})
    dispatch(addTask(data))
  }
//dispatch(addUser({email:"Hello"})) 
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
  return (
    <View style={styles.container}>
        <AppHeader icon1={'funnel-outline'} icon2={"add"} onPress1={()=>{
          navigation.navigate("Filter")
          //getTasksFromFirestore({uid:userData.id})
        }} 
        onPress2={()=>{navigation.navigate("Details",{addData:addData})}}/>
        <FlatList
        data={storeData}
        renderItem={({item}) => <TaskComponent id={item.id} title={item.title} sub={item.sub} DnD={item.DnD} time={item.time} priority={item.priority} dateNo={item.dateNo} navigation={navigation}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftAction:{
    backgroundColor:COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAction:{
    backgroundColor:COLORS.lightgreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText:{
    color:COLORS.black,
    fontSize:18,
    fontWeight:'bold',

  },
  animatedBtn:{
    flexDirection:'row',
  },
  iconBtn: {
    padding:wp(5),
  },
});

export default HomeScreen;