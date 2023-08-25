import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';
import AppIcon from './AppIcon';
import {useSelector,useDispatch} from 'react-redux';
import { deleteTask } from '../Redux/TaskSlice';
import { addArchiveTask, deleteArchiveTask } from '../Redux/ArchiveSlice';
import { addCompletedTask } from '../Redux/CompletedSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { removeTasksFromFirestore } from '../FIrebase/TasksDb';


  
function TaskComponent({id,title,sub,DnD,time,sNo,priority,dateNo,navigation}) {
  //console.log(priority);
  //console.log("id",id)
  console.log("sub",sub)
  const userData = useSelector(state => state.user);
  console.log(userData.id);
  //var uid = userData.id;
  const dispatch = useDispatch();

  const deleteFunc = id => {
    console.log("Hello Id",id);
    dispatch(deleteTask(id));
    console.log('Deleted');
    removeTasksFromFirestore({uid:userData.id,id:id});
};
const addArchiveFunc = obj => {
  //console.log("Hello Id",id);
  dispatch(addArchiveTask(obj))
  console.log('Added archive');
  dispatch(deleteTask(obj.id));
  console.log('Deleted OK');
};
const addCompletedFunc = obj => {
  //console.log("Hello Id",id);
  dispatch(addCompletedTask(obj));
  console.log('Added archive');
  dispatch(deleteTask(obj.id));
  console.log('Deleted OK');
};
  const rightSwipeActions = () => {
    return (
      <View style={styles.animatedBtn}>
        <View
        style={{
          backgroundColor: COLORS.red,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <AppIcon IconName={"trash"} IconSize={30} IconStyle={styles.iconBtn} IconColor={COLORS.white} onPressIcon={()=>{console.log("Hello",id);deleteFunc(id)}}/>
      </View>
      <View
        style={{
          backgroundColor: COLORS.navy,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <AppIcon IconName={"archive"} IconSize={30} IconStyle={styles.iconBtn} IconColor={COLORS.white} onPressIcon={()=>{addArchiveFunc({id:id,title:title,sub:sub,DnD:DnD,time:time})}}/>
      </View>
      <View
        style={{
          backgroundColor: COLORS.lightgreen,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
       <AppIcon IconName={"checkbox-outline"} IconSize={30} IconStyle={styles.iconBtn} IconColor={COLORS.white} onPressIcon={()=>{addCompletedFunc({id:id,title:title,sub:sub,DnD:DnD,time:time})}}/>
      </View>
      </View>
      
    );
  };
  

  return (
    <Swipeable renderRightActions={rightSwipeActions}>
              
          <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>{navigation.navigate({name:'Display',params:{id:id,title:title,sub:sub,DnD:DnD,time:time,priority:priority,dateNo:dateNo,noUpdt:false}})}}>
        <Text style={styles.taskHeader}>{title}</Text>
        <Text style={styles.taskDate}>{DnD}</Text>
        {sNo && <Text>Hwllo</Text>}
    </TouchableOpacity>
    </Swipeable>


  );
}

const styles = StyleSheet.create({
  tc:{
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor:COLORS.white,
    flexDirection:'row',

  },
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth:1,
    borderColor: COLORS.purple,
    height: hp(15),
    //width:wp(90),
    padding:wp(5),
    marginTop:hp(0.5),
  },
  vs: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  taskHeader: {
    fontSize:20,
    fontWeight:'bold',
    color: COLORS.purple,
    marginBottom: hp(1),
  },
  taskDate:{
    fontSize:18,
    fontWeight:'bold',
    color: COLORS.purple,
  },
  iconStyle:{
    marginRight:wp(4),
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

export default TaskComponent;