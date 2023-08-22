import React,{useState} from 'react';
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';
import AppIcon from '../Components/AppIcon';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import auth from '@react-native-firebase/auth';

function LoginScreen({navigation}) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const verifyUser=()=>{
    auth().signInWithEmailAndPassword(email,password).then(() => {
      console.log('signed in!');
    }).catch(err => {console.log(err);});
  }
  return (
    <View style={styles.container}>
        <AppIcon IconName={"checkmark-circle-outline"} IconColor={COLORS.white} IconSize={90} IconStyle={styles.iconStyle}/>
        <AppTextInput placeholderTxt={"Email"} TxtInputStyle={{marginBottom:hp(3)}} value={email} onChangeText={(txt)=>setEmail(txt)}/>
        <AppTextInput placeholderTxt={"Password"} value={password} onChangeText={(txt)=>setPassword(txt)}/>
        <AppButton buttonName={"Login"} color={COLORS.purple} onPress={()=>{//verifyUser();
        navigation.navigate("TabHome")}}/>
        <View style={styles.c2}>
            <Text style={styles.txt}>
                Have Not Registered Yet? 
            </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate("Register")}}>
                <Text style={styles.singup}>  Sign up</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate("ForgetPassword")}}>
        <Text style={styles.fp}>Forgot Password?</Text>

        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
    alignItems:'center',
    //padding: wp(10),
  },
  iconStyle: {
    marginTop: hp(10),
    marginBottom: hp(10)
  },
  c2:{
    flexDirection: 'row',
    marginTop: hp(5),
  },
  txt:{color:COLORS.white},
  singup: {color:COLORS.white},
  fp: {marginTop: hp(20),color:COLORS.white},
});

export default LoginScreen;