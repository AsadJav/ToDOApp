import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';
import AppIcon from '../Components/AppIcon';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';

function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
        <AppIcon IconName={"checkmark-circle-outline"} IconColor={COLORS.white} IconSize={90} IconStyle={styles.iconStyle}/>
        <AppTextInput placeholderTxt={"Full Name"} TxtInputStyle={{marginBottom:hp(3)}}/>
        <AppTextInput placeholderTxt={"Email"} TxtInputStyle={{marginBottom:hp(3)}}/>
        <AppTextInput placeholderTxt={"Password"}/>
        <AppButton buttonName={"Register"} color={COLORS.purple} onPress={()=>{navigation.navigate("Login")}}/>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate("Login")}}>
        <Text style={styles.ls}>Already Registered?</Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.purple,
    alignItems:'center',
  },
  iconStyle:{
    marginTop: hp(5),
    marginBottom: hp(10)
  },
  ls:{marginTop: hp(20),color:COLORS.white},
});

export default RegisterScreen;