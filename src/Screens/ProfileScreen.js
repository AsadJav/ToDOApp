import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppIcon from '../Components/AppIcon';
import { COLORS } from '../utils/COLORS';
import AppButton from '../Components/AppButton';

function ProfileScreen({navigation}) {
  return (
    <>
            <View style={styles.topViewStyle}>
            <AppIcon IconName={'settings'} IconColor={COLORS.purple} IconSize={35}/>
        </View>
    <View style={styles.container}>
        <AppIcon IconName={'person-circle-outline'} IconColor={COLORS.purple} IconSize={150} IconStyle={styles.pIcon}/>
        <Text style={styles.txtHeader}>John Doe</Text>
        <Text style={styles.txtSubHeader}>johndoe1991@gmail.com</Text>
        <AppButton buttonName={'Log Out'} color={COLORS.white} style={styles.btnStyle} onPress={()=>{navigation.navigate('Logout')}}/>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white,
    alignItems: 'center',
  },
  topViewStyle:{
    alignItems:'flex-end',
    padding: hp(3),
    backgroundColor:COLORS.white,
  },
  pIcon:{
    marginTop:hp(10),
  },
  txtHeader:{fontSize:24,fontWeight:'bold',color:COLORS.black},
  txtSubHeader:{fontSize:20,fontWeight:'bold',color:COLORS.black},
  btnStyle:{backgroundColor:COLORS.purple},
});

export default ProfileScreen;