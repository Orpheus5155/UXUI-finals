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
    image: 'https://www.figma.com/api/mcp/asset/94febfa3-a015-4d7b-bf81-202e4cd9b599',
    quantity: 1,
  },
  {
    id: '2',
    title: 'PILOT - CHROMOLY 520',
    price: '$ 3,999.99',
    image: 'https://www.figma.com/api/mcp/asset/451527b4-3f3a-452a-8045-da2dded437e4',
    quantity: 1,
  },
  {
    id: '3',
    title: 'SMITH - Trade',
    price: '$ 120',
    image: 'https://www.figma.com/api/mcp/asset/a37d711c-74b5-40e5-b3a0-c766ceb189ae',
    quantity: 1,
  },
];

const SmartBikeCartCouponCheckoutSwipedScreen = () => {
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
          <TextInput
            placeholder="Coupon"
            placeholderTextColor="#111"
            style={styles.couponInput}
            editable={false}
          />
          <View style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </View>
        </View>

        <Text style={styles.note}>Your bag qualifies for free shipping</Text>

        <View style={styles.summary}>
          <View style={styles.summaryLeft}>
            <Text style={styles.summaryLabel}>Subtotal:</Text>
            <Text style={styles.summaryLabel}>Delivery Fee:</Text>
            <Text style={styles.summaryLabel}>Discount:</Text>
          </View>
          <View style={styles.summaryRight}>
            <Text style={styles.summaryValue}>$6,119.99</Text>
            <Text style={styles.summaryValue}>$0</Text>
            <Text style={styles.summaryValue}>30%</Text>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>$4,283.99</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutSwiped}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SmartBikeCheckout' as never)}
        >
          <View style={styles.checkoutArrow}>
            <ChevronRight size={18} color={Colors.white} />
          </View>
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
  note: {
    marginTop: 18,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    textAlign: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
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
  checkoutSwiped: {
    marginTop: 22,
    height: 44,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  checkoutArrow: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.figmaPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SmartBikeCartCouponCheckoutSwipedScreen;
