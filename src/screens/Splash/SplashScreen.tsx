import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a brief wait before navigating to Home
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding' as never);
    }, 2500);


    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Simulation of the Gemini Generated Image in Figma */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/images/appicon.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      {/* Swipe handle from Figma */}
      <View style={styles.swipeHandle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' },
  logoContainer: {
    width: width * 0.8,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { width: '100%', height: '100%' },

  swipeHandle: {
    position: 'absolute',
    bottom: 20,
    width: 134,
    height: 5,
    backgroundColor: Colors.black,
    borderRadius: 10,
  },
});

export default SplashScreen;
