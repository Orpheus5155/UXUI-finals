import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Grid, Check } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs' as never)} style={styles.headerButton}>
          <ChevronLeft size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Grid size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Success Animation / Graphic */}
        <View style={styles.graphicContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.middleCircle}>
              <View style={styles.innerCircle}>
                <Check size={48} color="white" strokeWidth={3} />
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.title}>Congratulations !!!</Text>
        <Text style={styles.subtitle}>Payment Successfully !!!!</Text>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.homeButton} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('MainTabs' as never)}
          >
            <Text style={styles.homeButtonText}>Back to Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.receiptButton} 
            activeOpacity={0.8}
          >
            <Text style={styles.receiptButtonText}>Download Receipt</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  graphicContainer: {
    width: 260,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  outerCircle: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(66, 113, 226, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(66, 113, 226, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4271E2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4271E2',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A69C9C',
    textAlign: 'center',
    marginBottom: 60,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
    marginTop: 'auto',
    marginBottom: 40,
  },
  homeButton: {
    backgroundColor: '#4271E2',
    height: 57,
    borderRadius: 51,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  homeButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  receiptButton: {
    backgroundColor: '#8FA3D5',
    height: 57,
    borderRadius: 51,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  receiptButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentSuccessScreen;
