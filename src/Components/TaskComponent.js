import React from 'react';
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';

  
function TaskComponent({title,sub,DnD,time,sNo,navigation}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>{navigation.navigate({name:'Display',params:{title:title,sub:sub,DnD:DnD,time:time}})}}>
        <Text style={styles.taskHeader}>{title}</Text>
        <Text style={styles.taskDate}>{DnD}</Text>
        {sNo && <Text>Hwllo</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderWidth:1,
    borderColor: COLORS.purple,
    height: hp(15),
    padding:wp(5),
    marginTop:hp(0.5),
  },
  vs: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  taskHeader: {
    fontSize:18,
    fontWeight:'bold',
    color: COLORS.purple,
    marginBottom: hp(1),
  },
  taskDate:{
    fontSize:16,
    fontWeight:'bold',
    color: COLORS.purple,
  },

});

export default TaskComponent;