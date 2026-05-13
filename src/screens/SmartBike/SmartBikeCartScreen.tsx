import React, { useState } from 'react';
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

const INITIAL_ITEMS = [
  {
    id: '1',
    title: 'PEUGEOT - LR01',
    price: '$ 1,999.99',
    image: 'https://www.figma.com/api/mcp/asset/e68b5a92-4648-4a0d-80f7-3f5ed66003c1',
    quantity: 1,
  },
  {
    id: '2',
    title: 'PILOT - CHROMOLY 520',
    price: '$ 3,999.99',
    image: 'https://www.figma.com/api/mcp/asset/87b07078-2ba1-4569-aa2d-5657eed2036c',
    quantity: 1,
  },
  {
    id: '3',
    title: 'SMITH - Trade',
    price: '$ 120',
    image: 'https://www.figma.com/api/mcp/asset/9210ab14-ba09-4ff6-949b-59c7f98d122a',
    quantity: 1,
  },
];

const SmartBikeCartScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState(INITIAL_ITEMS);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

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
          {items.map((item) => (
            <SmartBikeCartItem
              key={item.id}
              item={item}
              onAdd={() => updateQuantity(item.id, 1)}
              onRemove={() => updateQuantity(item.id, -1)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.couponRow}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SmartBikeCartCoupon' as never)}
        >
          <TextInput
            placeholder="Coupon"
            placeholderTextColor="#111"
            style={styles.couponInput}
            editable={false}
          />
          <View style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.summary}>
          <View style={styles.summaryLeft}>
            <Text style={styles.summaryLabel}>Subtotal:</Text>
            <Text style={styles.summaryLabel}>Delivery Fee:</Text>
            <Text style={styles.summaryLabel}>Discount:</Text>
          </View>
          <View style={styles.summaryRight}>
            <Text style={styles.summaryValue}>$6,119.99</Text>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>$6,119.99</Text>
        </View>

        <TouchableOpacity
          style={styles.checkout}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SmartBikeCheckout' as never)}
        >
          <View style={styles.checkoutArrow}>
            <ChevronRight size={18} color={Colors.white} />
          </View>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
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
    paddingBottom: 40,
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
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  summaryLeft: {
    gap: 8,
  },
  summaryRight: {
    gap: 8,
  },
  summaryLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
    fontWeight: '600',
  },
  summaryValue: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
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
  checkout: {
    marginTop: 22,
    height: 44,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  checkoutArrow: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.figmaPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default SmartBikeCartScreen;
