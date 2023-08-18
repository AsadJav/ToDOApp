import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';
import AppIcon from './AppIcon';

function AppHeader({icon1, icon2,onPress1,onPress2}) {

    console.log(icon1,icon2)
  return (
    <View style={styles.container}>
        <View style={styles.headerStyle}>
            <AppIcon IconName={icon1} IconSize={25} IconColor={COLORS.white} onPressIcon={onPress1}/>
            <AppIcon IconName={icon2} IconSize={25} IconColor={COLORS.white} onPressIcon={onPress2}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLORS.purple,
    height: hp(10),
    padding:wp(5),
    justifyContent:'center'
 
  },
  headerStyle: {
    flexDirection:'row',
    justifyContent:'space-between',
  }
});

export default AppHeader;