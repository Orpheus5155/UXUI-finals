import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../theme/colors';

interface CarSpecChipProps {
  icon: string;
  label: string;
}

const CarSpecChip = ({ icon, label }: CarSpecChipProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: icon }} style={styles.icon} resizeMode="contain" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 40,
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'GeneralSans-Medium',
    letterSpacing: 0.48,
  },
});

export default CarSpecChip;
