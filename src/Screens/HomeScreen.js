import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import TaskComponent from '../Components/TaskComponent';

var DATA = [{id:1,title:'Hello1',sub:"ABC",DnD:'Thurs March 15 2024'},{id:2,title:'Hello2',sub:"ABC",DnD:'Thurs March 15 2024'},{id:3,title:'Hello3',sub:"ABC",DnD:'Thurs March 15 2024'},{id:4,title:'Hello4',sub:"ABC",DnD:'Thurs March 15 2024'},{id:5,title:'Hello5',sub:"ABC",DnD:'Thurs March 15 2024'},{id:6,title:'Hello6',sub:"ABC",DnD:'Thurs March 15 2024'},{id:7,title:'Hello7',sub:"ABC",DnD:'Thurs March 15 2024'},{id:8,title:'Hello8',sub:"ABC",DnD:'Thurs March 15 2024'}];
function HomeScreen({navigation,route}) {
  //const data = route.params;
  function addData(data){
    //DATA.append(data);
    DATA.splice(DATA.length,0,data)
    console.log(data.date);
  }
  return (
    <View style={styles.container}>
        <AppHeader icon1={"add"} icon2={"log-out-outline"} onPress1={()=>{navigation.navigate("Details",{addData:addData})}} onPress2={()=>{navigation.navigate("Logout")}}/>
        <FlatList
        data={DATA}
        renderItem={({item}) => <TaskComponent title={item.title} sub={item.sub} DnD={item.DnD} navigation={navigation}/>}
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