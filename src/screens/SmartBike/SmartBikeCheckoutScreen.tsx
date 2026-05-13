import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Home, Pencil } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import SmartBikeHeader from '../../components/SmartBikeHeader';

const ADDRESSES = [
  {
    id: 'home',
    label: 'Home',
    address: '470 Tran Dai Nghia, Da Nang',
    phone: '0987654321',
  },
  {
    id: 'office',
    label: 'Office',
    address: '470 Tran Dai Nghia, Da Nang',
    phone: '0987654321',
  },
];

const PAYMENTS = [
  { id: 'money', label: 'SMart Money', desc: '40000 coins' },
  { id: 'coins', label: 'SMart Coins', desc: '40000 coins' },
];

const SmartBikeCheckoutScreen = () => {
  const navigation = useNavigation();
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [selectedPayment, setSelectedPayment] = useState('money');

  return (
    <SafeAreaView style={styles.container}>
      <SmartBikeHeader
        title="Checkout"
        onBack={() => navigation.goBack()}
        rightIcon={<Home size={20} color={Colors.white} />}
        onRightPress={() => navigation.navigate('SmartBikeHome' as never)}
        variant="dark"
        iconColor={Colors.white}
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Delivery address</Text>
        {ADDRESSES.map((item) => {
          const selected = selectedAddress === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, selected && styles.cardActive]}
              activeOpacity={0.9}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View style={[styles.selector, selected && styles.selectorActive]} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.label}</Text>
                <Text style={styles.cardSub}>{item.address}</Text>
                <Text style={styles.cardSub}>{item.phone}</Text>
              </View>
              <Pencil size={18} color={Colors.bikeMuted} />
            </TouchableOpacity>
          );
        })}

        <Text style={styles.sectionTitle}>Billing information</Text>
        <View style={styles.billingCard}>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Subtotal:</Text>
            <Text style={styles.billingValue}>$6,119.99</Text>
          </View>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Delivery Fee:</Text>
            <Text style={styles.billingValue}>$0</Text>
          </View>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Discount:</Text>
            <Text style={styles.billingValue}>30%</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.billingRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalLabel}>$4,283.99</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Payment methods</Text>
        {PAYMENTS.map((item) => {
          const selected = selectedPayment === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, selected && styles.cardActive]}
              activeOpacity={0.9}
              onPress={() => setSelectedPayment(item.id)}
            >
              <View style={[styles.selector, selected && styles.selectorActive]} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.label}</Text>
                <Text style={styles.cardSub}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={styles.payButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SmartBikeCheckoutPin' as never)}
        >
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bikeDark,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 10,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  cardActive: {
    borderColor: Colors.white,
  },
  selector: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.bikeDark,
  },
  selectorActive: {
    backgroundColor: Colors.white,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  cardSub: {
    color: '#CACACA',
    fontSize: 12,
    marginTop: 2,
  },
  billingCard: {
    backgroundColor: 'rgba(242,242,242,0.42)',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  billingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  billingLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
    fontWeight: '600',
  },
  billingValue: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 10,
  },
  totalLabel: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  payButton: {
    marginTop: 20,
    backgroundColor: Colors.figmaPrimary,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default SmartBikeCheckoutScreen;
