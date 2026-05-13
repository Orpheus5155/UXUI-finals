import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Home, ChevronRight } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import SmartBikeHeader from '../../components/SmartBikeHeader';
import SmartBikeCartItem from '../../components/SmartBikeCartItem';

const ITEMS = [
  {
    id: '1',
    title: 'PEUGEOT - LR01',
    price: '$ 1,999.99',
    image: 'https://www.figma.com/api/mcp/asset/f5b7812b-aa2d-4e58-b191-fa2c38ed4327',
    quantity: 1,
  },
  {
    id: '2',
    title: 'PILOT - CHROMOLY 520',
    price: '$ 3,999.99',
    image: 'https://www.figma.com/api/mcp/asset/e8bbdc13-223d-4c81-b2dd-3122768ec471',
    quantity: 1,
  },
  {
    id: '3',
    title: 'SMITH - Trade',
    price: '$ 120',
    image: 'https://www.figma.com/api/mcp/asset/6dabe37c-284a-462a-99a3-05325df483f6',
    quantity: 1,
  },
];

const SmartBikeCartCouponScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SmartBikeHeader
        title="My Shopping Cart"
        onBack={() => navigation.goBack()}
        rightIcon={<Home size={20} color={Colors.white} />}
        onRightPress={() => navigation.navigate('SmartBikeHome' as never)}
        variant="dark"
        iconColor={Colors.white}
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.itemsWrap}>
          {ITEMS.map((item) => (
            <SmartBikeCartItem key={item.id} item={item} />
          ))}
        </View>

        <View style={styles.couponRow}>
          <TextInput value="Bike" style={styles.couponInput} editable={false} />
          <TouchableOpacity
            style={styles.applyButton}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('SmartBikeCartCouponApplied' as never)}
          >
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>$6,119.99</Text>
        </View>

        <View style={styles.checkoutDisabled}>
          <View style={styles.checkoutArrow}>
            <ChevronRight size={18} color={Colors.white} />
          </View>
          <Text style={styles.checkoutDisabledText}>Checkout</Text>
        </View>
      </ScrollView>

      <View style={styles.keyboardPlaceholder}>
        <Text style={styles.keyboardText}>Keyboard</Text>
      </View>
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
  itemsWrap: {
    marginTop: 8,
  },
  couponRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
  },
  couponInput: {
    flex: 1,
    paddingHorizontal: 12,
    color: Colors.black,
    height: 44,
  },
  applyButton: {
    backgroundColor: Colors.figmaPrimary,
    height: 44,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  applyText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },
  totalLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
    fontWeight: '600',
  },
  totalValue: {
    color: Colors.bikeAccent,
    fontSize: 17,
    fontWeight: '700',
  },
  checkoutDisabled: {
    marginTop: 22,
    height: 44,
    backgroundColor: Colors.bikeDark,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  checkoutArrow: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.bikeAccent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutDisabledText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    fontWeight: '600',
  },
  keyboardPlaceholder: {
    height: 260,
    backgroundColor: '#1B202D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    letterSpacing: 1,
  },
});

export default SmartBikeCartCouponScreen;
