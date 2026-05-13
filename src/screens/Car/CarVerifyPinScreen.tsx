import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme/colors';

const CarVerifyPinScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.card}>
        <Text style={styles.heading}>Verify your PIN</Text>
        <Text style={styles.subtitle}>Please enter your PIN to confirm booking.</Text>
        <View style={styles.pinRow}>
          {['0', '0', '0', '0'].map((item, index) => (
            <View key={`${item}-${index}`} style={styles.pinBox}>
              <Text style={styles.pinText}>{item}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('CarPaymentSuccess' as never)}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carDark,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'Satoshi-Regular',
    textAlign: 'center',
    marginBottom: 24,
  },
  pinRow: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  pinBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  pinText: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  confirmButton: {
    backgroundColor: Colors.carOrange,
    borderRadius: 50,
    paddingHorizontal: 48,
    paddingVertical: 14,
  },
  confirmText: {
    fontSize: 18,
    color: Colors.carLight,
    fontFamily: 'Satoshi-Bold',
  },
});

export default CarVerifyPinScreen;
