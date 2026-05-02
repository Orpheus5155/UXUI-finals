import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Grid, Edit2, Home, Briefcase, CreditCard, Coins } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = React.useState('SmartMoney');

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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Delivery Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery address</Text>
          
          <TouchableOpacity style={styles.addressCard}>
            <View style={[styles.iconWrapper, { backgroundColor: '#E03636' }]}>
              <Home size={16} color="white" />
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.addressLabel}>Home</Text>
              <Text style={styles.addressDetail}>470 Tran Dai Nghia, Da Nang</Text>
              <Text style={styles.addressDetail}>0987654321</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Edit2 size={16} color="#CACACA" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.addressCard, styles.inactiveCard]}>
            <View style={[styles.iconWrapper, { backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }]}>
              <Briefcase size={16} color="black" />
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.addressLabel}>Office</Text>
              <Text style={styles.addressDetail}>470 Tran Dai Nghia, Da Nang</Text>
              <Text style={styles.addressDetail}>0987654321</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Edit2 size={16} color="#CACACA" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Billing Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Billing information</Text>
          <View style={styles.billingCard}>
            <View style={styles.billingRow}>
              <Text style={styles.billingLabel}>Delivery Fee :</Text>
              <Text style={styles.billingValue}>$0.001</Text>
            </View>
            <View style={styles.billingRow}>
              <Text style={styles.billingLabel}>Subtotal :</Text>
              <Text style={styles.billingValue}>$4.000</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.billingRow}>
              <Text style={styles.totalLabel}>Total Pay :</Text>
              <Text style={styles.totalValue}>$4.001</Text>
            </View>
          </View>
        </View>

        {/* Payment Methods Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment methods</Text>
          
          <TouchableOpacity 
            style={[styles.paymentCard, selectedPayment === 'SmartMoney' && styles.activePayment]}
            onPress={() => setSelectedPayment('SmartMoney')}
          >
            <View style={[styles.iconWrapper, { backgroundColor: '#E03636' }]}>
              <CreditCard size={18} color="white" />
            </View>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentLabel}>SMart Money</Text>
              <Text style={styles.paymentSub}>40000 coins</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.paymentCard, selectedPayment === 'SmartCoins' && styles.activePayment]}
            onPress={() => setSelectedPayment('SmartCoins')}
          >
            <View style={[styles.iconWrapper, { backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }]}>
              <Coins size={18} color="black" />
            </View>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentLabel}>SMart Coins</Text>
              <Text style={styles.paymentSub}>40000 coins</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Pay Now Button */}
      <View style={styles.bottomAction}>
        <TouchableOpacity 
          style={styles.payButton} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('VerifyPin' as never)}
        >
          <Text style={styles.payButtonText}>Pay now</Text>
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
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 16,
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 63,
    padding: 12,
    paddingHorizontal: 24,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inactiveCard: {
      shadowOpacity: 0.05,
      elevation: 1,
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
  },
  addressDetail: {
    fontSize: 12,
    color: '#CACACA',
    marginTop: 2,
  },
  editButton: {
    padding: 8,
  },
  billingCard: {
    backgroundColor: 'rgba(242, 242, 242, 0.42)',
    borderRadius: 30,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  billingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  billingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  billingValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 63,
    padding: 16,
    paddingHorizontal: 24,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activePayment: {
      borderColor: '#4271E2',
      borderWidth: 2,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  paymentSub: {
    fontSize: 14,
    color: '#B8B8B8',
    marginTop: 2,
  },
  bottomAction: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  payButton: {
    backgroundColor: '#4271E2',
    height: 57,
    borderRadius: 51,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  payButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
