import React, { useState } from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';
import AppIcon from '../Components/AppIcon';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import { addUserDataToFirestore } from '../FIrebase/UserDb';

function RegisterScreen({navigation}) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  var user = {};

  const dispatch = useDispatch();

  const createUser=() => {
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    user.name = name;
    user.email = email;
    user.password = password;
    console.log("User created Name", {name: name, email: email, password: password});
    console.log('User account created & signed in!');
    addUserDataToFirestore({id:email,name:name,email:email,password:password});
    console.log("Added Firestore")

  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  };
  return (
    <View style={styles.container}>
        <AppIcon IconName={"checkmark-circle-outline"} IconColor={COLORS.white} IconSize={90} IconStyle={styles.iconStyle}/>
        <AppTextInput placeholderTxt={"Full Name"} TxtInputStyle={{marginBottom:hp(3)}} value={name} onChangeText={(txt)=>setName(txt)}/>
        <AppTextInput placeholderTxt={"Email"} TxtInputStyle={{marginBottom:hp(3)}} value={email} onChangeText={(txt)=>setEmail(txt)}/>
        <AppTextInput placeholderTxt={"Password"} value={password} onChangeText={(txt)=>setPassword(txt)}/>
        <AppButton buttonName={"Register"} color={COLORS.purple} onPress={()=>{
          createUser();
          
          navigation.navigate("Login");
          }}/>
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