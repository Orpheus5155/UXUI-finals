import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import SmartBikeHeader from '../../components/SmartBikeHeader';

const SmartBikeCheckoutPinScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SmartBikeHeader
        title="Checkout"
        onBack={() => navigation.goBack()}
        variant="dark"
        iconColor={Colors.white}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Verify your PIN</Text>
        <Text style={styles.subtitle}>For security purposes, please verify your PIN</Text>
        <View style={styles.pinRow}>
          {['0', '0', '0', '0'].map((digit, index) => (
            <View key={index} style={styles.pinBox}>
              <Text style={styles.pinText}>{digit}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('SmartBikePaymentSuccess' as never)}
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bikeDark,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: '#A69C9C',
    fontSize: 13,
    marginTop: 8,
  },
  pinRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  pinBox: {
    width: 48,
    height: 76,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinText: {
    color: Colors.black,
    fontSize: 40,
    fontWeight: '700',
  },
  confirmButton: {
    alignSelf: 'center',
    marginBottom: 40,
    width: 220,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.figmaPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default SmartBikeCheckoutPinScreen;
