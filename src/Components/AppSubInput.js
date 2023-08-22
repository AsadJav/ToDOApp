import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';

function AppSubInput({placeholderTxt,TxtInputStyle,value,onChangeText,password,onSubmitEditing}) {
  return (
    <View style={styles.container}>
        <TextInput placeholder={placeholderTxt} style={[TxtInputStyle,styles.tin]} placeholderTextColor={COLORS.white} value={value} onChangeText={onChangeText} secureTextEntry={password} onSubmitEditing={onSubmitEditing}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  tin: {
    color:COLORS.white,
    borderBottomColor: COLORS.white,
    borderBottomWidth:1,
  },
});

export default AppSubInput;
