import React, { useState } from 'react';
import {View,StyleSheet, FlatList, Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import { COLORS } from '../utils/COLORS';
import {useSelector, useDispatch} from 'react-redux';
import TaskComponent from '../Components/TaskComponent';

function PriorityScreen({navigation}) {
    const [date,setDate] = useState(new Date())

    console.log('PriorityScreen',date)
    const storeData = useSelector(state => state.tasks);
    var tasks = storeData.filter(obj => {
        let dataObj = obj?.dateNo
      console.log(dataObj?.date)
      if(dataObj?.date <= date.getDate()+2 || obj?.priority === "high" ){
      //tasks.push(obj);
      return obj;
    }
    })
    console.log('Tasks',tasks)
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} onPress1={navigation.goBack()}/>
        <FlatList data={tasks}
        keyExtractor={item=>item.id}
        renderItem={({item}) => <TaskComponent id={item.id} title={item.title} sub={item.sub} DnD={item.DnD} time={item.time} priority={item.priority} dateNo={item.dateNo} navigation={navigation}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
  },
});

export default PriorityScreen;