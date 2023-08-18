import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import AppIcon from '../Components/AppIcon';
  import { COLORS } from '../utils/COLORS';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';

function ForgetPasswordScreen({navigation}) {
  return (
    <View style={styles.container}>
        <AppIcon IconName={"checkmark-circle-outline"} IconColor={COLORS.white} IconSize={90} IconStyle={styles.iconStyle}/>
        <AppTextInput placeholderTxt={"Enter OTP"}/>
        <AppButton buttonName={"Verify"} color={COLORS.purple} onPress={()=>{navigation.navigate("Home")}}/>
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
    marginTop: hp(15),
    marginBottom: hp(10)
  },
});

export default ForgetPasswordScreen;