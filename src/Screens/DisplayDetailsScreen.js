import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import { COLORS } from '../utils/COLORS';
import {useSelector, useDispatch} from 'react-redux';

function DisplayDetailsScreen({navigation,route}) {
    const data = route.params
    const storeData = useSelector(state => state.tasks);
    const updateFunc = id => {
  console.log(id);
  let i = storeData.findIndex(item => item.id === id);
  let obj = storeData[i];
  console.log(obj);
  navigation.navigate({name:"Details",params:{id:data?.id,title:data.title,sub:data.sub,DnD:data.DnD,time:data.time,updt:true,indexNo:i}})
};
  return (
    <View style={styles.container}>
        {data?.noUpdt == false && <AppHeader icon1={"arrow-back"} icon2={"add-circle-outline"} onPress1={()=>{navigation.navigate("HomeScreen")}} onPress2={()=>{updateFunc(data.id)}}/>}
        {data?.noUpdt == true && <AppHeader icon1={"arrow-back"} onPress1={()=>{navigation.goBack()}}/>}
        <View style={styles.viewStyle}>
        <View >
        <Text style={styles.txt}>Task Id: {data.id}</Text>
            <Text style={styles.txt}>Task: {data.title}</Text>
            <Text style={styles.subTxt}>Sub-Tasks: {data.sub}</Text>
            <Text style={styles.txt}>Due Date: {data.DnD}</Text>
            <Text style={styles.txt}>Due Time: {data.time}</Text>
        </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
    
  },
  viewStyle:{
    alignItems:'center',
    marginTop:hp(5),
  },
  txt:{
    fontSize:22,fontWeight:'bold',color:COLORS.purple,marginTop:hp(2),
  },
  subTxt:{
    fontSize:20,fontWeight:'bold',color:COLORS.purple,marginTop:hp(2),
  }
});

export default DisplayDetailsScreen;