import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function AppIcon({IconName, IconSize, IconColor, IconStyle, onPressIcon}) {
  return (
    <TouchableOpacity onPress={onPressIcon} activeOpacity={0.8}>
      <Icon
        name={IconName}
        size={IconSize}
        color={IconColor}
        style={IconStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppIcon;