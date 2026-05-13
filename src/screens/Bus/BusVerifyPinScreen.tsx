import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';

import { Colors } from '../../theme/colors';

const BusVerifyPinScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Verify your PIN</Text>
        <Text style={styles.subtitle}>Enter your PIN to confirm payment</Text>
        <View style={styles.pinRow}>
          <View style={[styles.pinBox, styles.pinSpacing]} />
          <View style={[styles.pinBox, styles.pinSpacing]} />
          <View style={[styles.pinBox, styles.pinSpacing]} />
          <View style={styles.pinBox} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('BusPaymentSuccess' as never)}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  confirmButton: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginBottom: 32,
    marginHorizontal: 20,
    paddingVertical: 14,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    backgroundColor: Colors.busDark,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
  },
  pinBox: {
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    width: 50,
  },
  pinRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  pinSpacing: {
    marginRight: 12,
  },
  subtitle: {
    color: '#A69C9C',
    fontSize: 14,
    marginTop: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default BusVerifyPinScreen;
