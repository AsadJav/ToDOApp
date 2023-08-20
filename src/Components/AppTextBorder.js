import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { COLORS
 } from '../utils/COLORS';
function AppTextBorder(props) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    width: wp('90%'),
  },
});

export default AppTextBorder;