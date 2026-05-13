import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../theme/colors';

interface CarPaymentOptionProps {
  label: string;
  detail: string;
  icon: string;
  trailingIcon: string;
  active?: boolean;
  onPress?: () => void;
}

const CarPaymentOption = ({
  label,
  detail,
  icon,
  trailingIcon,
  active,
  onPress,
}: CarPaymentOptionProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.container, active && styles.containerActive]}
    >
      <View style={styles.leftGroup}
      >
        <Image source={{ uri: icon }} style={styles.icon} resizeMode="contain" />
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.detail}>{detail}</Text>
        </View>
      </View>
      <Image source={{ uri: trailingIcon }} style={styles.trailing} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,250,251,0.1)',
    height: 64,
    borderRadius: 9,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerActive: {
    backgroundColor: 'rgba(235,94,40,0.8)',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 34,
    height: 24,
    marginRight: 16,
  },
  label: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  detail: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'Satoshi-Regular',
  },
  trailing: {
    width: 48,
    height: 46,
  },
});

export default CarPaymentOption;
