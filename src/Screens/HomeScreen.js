import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import TaskComponent from '../Components/TaskComponent';
import {useSelector, useDispatch} from 'react-redux';
import { addTask } from '../Redux/TaskSlice';


// const userData = useSelector(state => state.user.undefined);
var DATA = [{id:1,title:'Hello1',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:2,title:'Hello2',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:3,title:'Hello3',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:4,title:'Hello4',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:5,title:'Hello5',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:6,title:'Hello6',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:7,title:'Hello7',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:8,title:'Hello8',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'}];
function HomeScreen({navigation,route}) {
  const storeData = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const data = route.params;
  function addData(data){
    //DATA.append(data);
    dispatch(addTask(data))
    DATA.unshift(data)
    //DATA.splice(DATA.length,0,data)
    //console.log(data.date);
  }

  return (
    <View style={styles.container}>
        <AppHeader icon1={"add"} icon2={"log-out-outline"} onPress1={()=>{navigation.navigate("Details",{addData:addData})}} onPress2={()=>{navigation.navigate("Logout")}}/>
        <FlatList
        data={storeData}
        renderItem={({item}) => <TaskComponent title={item.title} sub={item.sub} DnD={item.DnD} time={item.time} navigation={navigation}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;