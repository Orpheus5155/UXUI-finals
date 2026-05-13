import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme/colors';

const CHECK_ICON = 'https://www.figma.com/api/mcp/asset/6680a8d2-70b5-4b8f-a50b-1471fa7cf9bd';

const CarPaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.ringOuter}>
          <View style={styles.ringMiddle}>
            <View style={styles.ringInner}>
              <Image source={{ uri: CHECK_ICON }} style={styles.checkIcon} />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Congratulations !!!</Text>
        <Text style={styles.subtitle}>Payment Successfully !!!!</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('CarHome' as never)}
        >
          <Text style={styles.primaryText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85}>
          <Text style={styles.secondaryText}>Download Receipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carDark,
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  content: {
    alignItems: 'center',
    marginTop: 40,
  },
  ringOuter: {
    width: 261,
    height: 261,
    borderRadius: 130.5,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: Colors.carDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringMiddle: {
    width: 204,
    height: 204,
    borderRadius: 102,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringInner: {
    width: 103,
    height: 103,
    borderRadius: 51.5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 40,
    height: 40,
    tintColor: Colors.carOrange,
  },
  title: {
    marginTop: 28,
    fontSize: 32,
    color: Colors.white,
    fontFamily: 'Roboto-SemiBold',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 13,
    color: '#A69C9C',
    fontFamily: 'Roboto-SemiBold',
  },
  actions: {
    alignItems: 'center',
  },
  primaryButton: {
    width: 250,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#2D62DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryText: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
  secondaryButton: {
    width: 250,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryText: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});

export default CarPaymentSuccessScreen;
