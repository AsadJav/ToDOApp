import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import { COLORS } from '../utils/COLORS';

function FilterScreen({navigation}) {
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} onPress1={()=>{navigation.goBack()}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default FilterScreen;