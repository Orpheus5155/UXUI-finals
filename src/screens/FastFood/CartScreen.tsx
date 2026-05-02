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
import { ChevronLeft, Grid, Star, DollarSign, X } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const CART_ITEMS = [
  {
    id: '1',
    name: 'Buffalo Hamburger',
    category: 'FastFood',
    rating: '4.9',
    price: '2',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
  },
  {
    id: '2',
    name: 'Buffalo Hamburger',
    category: 'FastFood',
    rating: '4.9',
    price: '2',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
  },
  {
    id: '3',
    name: 'Buffalo Hamburger',
    category: 'FastFood',
    rating: '4.9',
    price: '2',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
  },
];

const CATEGORIES = ['All', 'Drink', 'FastFood', 'Tea'];

const CartScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [items, setItems] = React.useState(CART_ITEMS);

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <ChevronLeft size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My order cart</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Grid size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Category Tabs */}
        <View style={styles.categoryContainer}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={styles.categoryItem}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Active Line under Categories */}
        <View style={styles.categoryLineContainer}>
            <View style={styles.categoryLine} />
            <View style={[styles.categoryActiveLine, { left: CATEGORIES.indexOf(selectedCategory) * ((width - 32) / 4) }]} />
        </View>

        {/* Total Count */}
        <View style={styles.countSection}>
          <Text style={styles.totalCount}>Total {items.length.toString().padStart(2, '0')} items</Text>
        </View>

        {/* Cart Items */}
        <View style={styles.itemsList}>
          {items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              
              <View style={styles.itemInfo}>
                <View style={styles.itemHeader}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <TouchableOpacity onPress={() => removeItem(item.id)}>
                        <X size={16} color="#AAAAAA" />
                    </TouchableOpacity>
                </View>

                <View style={styles.tagBadge}>
                  <Text style={styles.tagText}>{item.category}</Text>
                </View>

                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Star size={14} color="#FFB800" fill="#FFB800" />
                    <Text style={styles.metaValue}>{item.rating}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <DollarSign size={14} color={Colors.black} />
                    <Text style={styles.metaValue}>{item.price}</Text>
                  </View>
                </View>

                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Pay Now Button */}
      <View style={styles.bottomAction}>
        <TouchableOpacity 
          style={styles.payButton} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Checkout' as never)}
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
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  categoryTextActive: {
    color: '#3019FB',
  },
  categoryLineContainer: {
    height: 2,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 16,
    position: 'relative',
    marginTop: 4,
  },
  categoryLine: {
      flex: 1,
  },
  categoryActiveLine: {
      position: 'absolute',
      height: 2,
      backgroundColor: '#3019FB',
      width: (width - 32) / 4,
  },
  countSection: {
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  totalCount: {
    fontSize: 12,
    fontWeight: '300',
    color: '#C5C4C4',
  },
  itemsList: {
    paddingHorizontal: 16,
    gap: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
    margin: 8,
  },
  itemInfo: {
    flex: 1,
    paddingRight: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  itemHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black,
  },
  tagBadge: {
    backgroundColor: '#FDD3D3',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#E04F4F',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.black,
  },
  cancelButton: {
    backgroundColor: '#4D4D4D',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  cancelText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
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

export default CartScreen;
