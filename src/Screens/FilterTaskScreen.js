import React from 'react';
import {View,StyleSheet, FlatList} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import TaskComponent from '../Components/TaskComponent';

function FilterTaskScreen({navigation,route}) {
    const data = route.params
    console.log(data.filteredTasks);
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} onPress1={()=>{navigation.goBack()}}/>
        <FlatList
        data={data.filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskComponent id={item.id} title={item.title} sub={item.sub} DnD={item.DnD} time={item.time} priority={item.priority} dateNo={item.dateNo} navigation={navigation}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default FilterTaskScreen;