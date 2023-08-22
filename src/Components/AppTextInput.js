import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';

function AppTextInput({placeholderTxt,TxtInputStyle,value,onChangeText,password}) {
  return (
    <View style={styles.container}>
        <TextInput placeholder={placeholderTxt} style={[TxtInputStyle,styles.tin]} placeholderTextColor={COLORS.white} value={value} onChangeText={onChangeText} secureTextEntry={password}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  tin: {
    width: wp(90),
    color:COLORS.white,
    borderBottomColor: COLORS.white,
    borderBottomWidth:1,
  },
});

export default AppTextInput;





// import React from 'react';
// import {View,StyleSheet} from 'react-native';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//   } from 'react-native-responsive-screen';

// function LoginScreen() {
//   return (
//     <View style={styles.container}>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//   },
// });

// export default LoginScreen;