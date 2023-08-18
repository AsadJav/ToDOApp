import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import { COLORS } from '../utils/COLORS';

function DisplayDetailsScreen({navigation,route}) {
    const data = route.params
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} icon2={"add-circle-outline"} onPress1={()=>{navigation.navigate("HomeScreen")}} onPress2={()=>{navigation.navigate({name:"Details",params:{title:data.title,sub:data.sub,DnD:data.DnD}})}}/>
        <Text>{data.title+data.DnD }</Text>
        <View style={styles.viewStyle}>
            <Text style={styles.txt}>Task Title: {data.title}</Text>
            <Text style={styles.txt}>Task Title: {data.sub}</Text>
            <Text style={styles.txt}>Due Date: {data.DnD}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  viewStyle:{
    alignItems: 'center',
  },
  txt:{
    fontSize:18,fontWeight:'bold',color:COLORS.black
  }
});

export default DisplayDetailsScreen;