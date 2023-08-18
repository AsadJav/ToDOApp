import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../utils/COLORS';

function AppButton({buttonName, onPress, style, color}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.7}>
      <Text style={[{color},styles.txt]}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: wp('90%'),
    height: hp(5),
    marginTop: hp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12.5,
  },
  txt: {
    //color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default AppButton;