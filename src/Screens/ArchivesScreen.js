import React from 'react';
import {View,StyleSheet,FlatList,Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import TaskComponent from '../Components/TaskComponent';
import {useSelector, useDispatch} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppIcon from '../Components/AppIcon';
import { COLORS } from '../utils/COLORS';
import ArchiveComponent from '../Components/ArchiveComponent';


var DATA = [{id:1,title:'Hello192',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:2,title:'Hello2',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:3,title:'Hello3',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:4,title:'Hello4',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:5,title:'Hello5',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:6,title:'Hello6',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:7,title:'Hello7',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'},{id:8,title:'Hello8',sub:"ABC",DnD:'Thurs March 15 2024',time:'aba'}];
function ArchivesScreen({navigation}) {
    const storeData = useSelector(state => state.archives);
    const rightSwipeActions = () => {
        return (
            <View
            style={{
              backgroundColor: COLORS.red,
              justifyContent: 'center',
              alignItems: 'flex-end',
              width:wp(20)
            }}
          >
            <AppIcon IconName={"trash"} IconSize={30} IconStyle={styles.iconBtn} IconColor={COLORS.white}/>
          </View>
          
        );
      };

  return (
    <View style={styles.container}>
        <AppHeader icon2={"add"} onPress1={()=>{navigation.navigate("Logout")}} onPress2={()=>{navigation.navigate("Details",{addData:addData})}}/>
        <FlatList
        data={storeData}
        renderItem={({item}) => <ArchiveComponent id={item.id} title={item.title} sub={item.sub} DnD={item.DnD} time={item.time} navigation={navigation}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  iconBtn: {
    padding:wp(5),
  },
});

export default ArchivesScreen;