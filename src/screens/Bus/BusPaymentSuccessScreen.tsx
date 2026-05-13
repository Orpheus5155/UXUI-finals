import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Check, ChevronLeft } from 'lucide-react-native';

import { Colors } from '../../theme/colors';

const BusPaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('BusHome' as never)}
        >
          <ChevronLeft size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.successRings}>
          <View style={styles.ringLarge} />
          <View style={styles.ringMedium} />
          <View style={styles.ringSmall} />
          <View style={styles.checkCircle}>
            <Check size={28} color={Colors.busDark} />
          </View>
        </View>
        <Text style={styles.title}>Congratulations !!!</Text>
        <Text style={styles.subtitle}>Payment Successfully !!!!</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusHome' as never)}
        >
          <Text style={styles.primaryButtonText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
          <Text style={styles.secondaryButtonText}>Download Receipt</Text>
        </TouchableOpacity>
      </View>
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
  checkCircle: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    position: 'absolute',
    width: 52,
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
  footer: {
    paddingBottom: 32,
    paddingHorizontal: 24,
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
  primaryButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: Colors.busDark,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  ringLarge: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 130,
    height: 260,
    width: 260,
  },
  ringMedium: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 100,
    height: 200,
    position: 'absolute',
    width: 200,
  },
  ringSmall: {
    backgroundColor: 'rgba(255,255,255,0.26)',
    borderRadius: 65,
    height: 130,
    position: 'absolute',
    width: 130,
  },
  secondaryButton: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginTop: 12,
    paddingVertical: 14,
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#A69C9C',
    fontSize: 14,
    marginTop: 8,
  },
  successRings: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
});

export default BusPaymentSuccessScreen;
