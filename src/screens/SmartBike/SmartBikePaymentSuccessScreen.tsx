import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Check } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const SmartBikePaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Checkout</Text>

      <View style={styles.centerContent}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <Check size={36} color={Colors.white} />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Congratulations !!!</Text>
        <Text style={styles.subtitle}>Payment Successfully !!!!</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SmartBikeHome' as never)}
        >
          <Text style={styles.primaryText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.9}>
          <Text style={styles.secondaryText}>Download Receipt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bikeDark,
    paddingHorizontal: 20,
  },
  headerTitle: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 16,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 26,
    borderColor: '#3B5AA6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 24,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.figmaPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 30,
  },
  subtitle: {
    color: '#A69C9C',
    fontSize: 13,
    marginTop: 10,
  },
  buttonGroup: {
    marginBottom: 32,
    gap: 14,
  },
  primaryButton: {
    backgroundColor: Colors.figmaPrimary,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#2B437A',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default SmartBikePaymentSuccessScreen;
