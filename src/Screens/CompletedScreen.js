import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import AppHeader from '../Components/AppHeader';
  import TaskComponent from '../Components/TaskComponent';
  import {useSelector, useDispatch} from 'react-redux';
import CompletedComponent from '../Components/CompletedComponent';

var DATA = [{id:1,title:'Hello111',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:2,title:'Hello2',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:3,title:'Hello3',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:4,title:'Hello4',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:5,title:'Hello5',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:6,title:'Hello6',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:7,title:'Hello7',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:8,title:'Hello8',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'}];
function CompletedScreen({navigation}) {
    const storeData = useSelector(state => state.completed);
  return (
    <View style={styles.container}>
        <AppHeader icon2={"add"} onPress1={()=>{navigation.navigate("Logout")}} onPress2={()=>{navigation.navigate("Details",{addData:addData})}}/>
        <FlatList
        data={storeData}
        renderItem={({item}) => <CompletedComponent id={item.id} title={item.title} sub={item.sub} DnD={item.DnD} time={item.time} navigation={navigation}/>}
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

export default CompletedScreen;