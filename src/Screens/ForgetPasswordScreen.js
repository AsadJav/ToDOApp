import React, { useState } from 'react';
import {View,StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import AppIcon from '../Components/AppIcon';
  import { COLORS } from '../utils/COLORS';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import auth from '@react-native-firebase/auth';

function ForgetPasswordScreen({navigation}) {
  const [email,setEmail] = useState();
  console.log(email);
  const verifyUser=()=>{
console.log('Verified');
auth().sendPasswordResetEmail(email).then(()=>{
  console.log("Link sent to your email");
  navigation.navigate("Login")
}).catch(err=>{console.log(err);});
  }
  return (
    <View style={styles.container}>
        <AppIcon IconName={"checkmark-circle-outline"} IconColor={COLORS.white} IconSize={90} IconStyle={styles.iconStyle}/>
        <AppTextInput placeholderTxt={"Enter your Email"} value={email} onChangeText={txt=>setEmail(txt)}/>
        <AppButton buttonName={"Verify"} color={COLORS.purple} onPress={()=>{
          verifyUser();
          }}/>
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