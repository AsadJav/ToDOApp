import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';
import AppIcon from './AppIcon';
import {useDispatch} from 'react-redux';
import { addTask, deleteTask } from '../Redux/TaskSlice';
import { addArchiveTask, deleteArchiveTask } from '../Redux/ArchiveSlice';
import { addCompletedTask, deleteCompletedTask } from '../Redux/CompletedSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';


  
function CompletedComponent({id,title,sub,DnD,time,sNo,navigation}) {
  //console.log("id",id)
  const dispatch = useDispatch();

  const deleteCompletedFunc = id => {
    console.log("Hello Completed Id: ",id);
  dispatch(deleteCompletedTask(id));
    console.log('Deleted');
    //dispatch(addTask(obj))
};
  const rightSwipeActions = () => {
    return (
      <View style={styles.animatedBtn}>
        <View
        style={{
          backgroundColor: COLORS.red,
          justifyContent: 'center',
          alignItems: 'flex-end',
          width:wp(20)
        }}
      >
        <AppIcon IconName={"trash"} IconSize={30} IconStyle={styles.iconBtn} IconColor={COLORS.white} onPressIcon={()=>{console.log("Hello",id);deleteCompletedFunc(id)}}/>
      </View>
      </View>
      
    );
  };
  

  return (
    <Swipeable renderRightActions={rightSwipeActions}>
          <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>{navigation.navigate({name:'Display',params:{id:id,title:title,sub:sub,DnD:DnD,time:time,noUpdt:true}})}}>
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

export default CompletedComponent;