import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Grid } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const VerifyPinScreen = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handlePinChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    // Auto-focus next input
    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
    
    // If last digit entered, dismiss keyboard
    if (text && index === 3) {
        Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isPinComplete = pin.every(digit => digit !== '');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <ChevronLeft size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Grid size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Verify your PIN</Text>
        <Text style={styles.subtitle}>For security purposes, please verify your PIN</Text>

        <View style={styles.pinContainer}>
          {pin.map((digit, index) => (
            <View key={index} style={styles.pinBox}>
              <TextInput
                ref={inputRefs[index]}
                style={styles.pinInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handlePinChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                secureTextEntry={false} // Match Figma showing digits
              />
            </View>
          ))}
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={[styles.confirmButton, !isPinComplete && styles.disabledButton]} 
          activeOpacity={0.8}
          disabled={!isPinComplete}
          onPress={() => {
              // On success, navigate to success screen
              navigation.navigate('PaymentSuccess' as never);
          }}
        >
          <Text style={styles.confirmButtonText}>Confirm Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#A69C9C',
    marginBottom: 40,
    textAlign: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
  },
  pinBox: {
    width: 48,
    height: 76,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinInput: {
    fontSize: 48, // Reduced from 64 for better fit
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  confirmButton: {
    backgroundColor: '#4271E2',
    height: 57,
    borderRadius: 51,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#A0B5EB',
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyPinScreen;
