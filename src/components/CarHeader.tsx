import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Colors } from '../theme/colors';

interface CarHeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  containerStyle?: ViewStyle;
}

const CarHeader = ({ title, leftIcon, rightIcon, onLeftPress, containerStyle }: CarHeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onLeftPress}
        style={styles.leftSlot}
      >
        {leftIcon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSlot}>{rightIcon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSlot: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSlot: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
    letterSpacing: 0.24,
  },
});

export default CarHeader;
