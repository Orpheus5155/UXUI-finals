import React, { useState } from 'react';
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

import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeft, Star, Truck, Clock, DollarSign, Plus, Minus } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const INGREDIENTS = [
  { id: '1', name: 'Salt', emoji: '🧂' },
  { id: '2', name: 'Buffalo', emoji: '🐃' },
  { id: '3', name: 'Onion', emoji: '🧅' },
  { id: '4', name: 'Salt', emoji: '🧂' },
];

const FoodDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = useState(0);

  // Get food data from route params or use defaults
  const foodName = (route.params as any)?.name || 'Buffalo Burger';
  const restaurant = (route.params as any)?.restaurant || 'Paris Restaurant';
  const rating = (route.params as any)?.rating || '4.9';
  const price = (route.params as any)?.price || '$2';
  const foodImage = (route.params as any)?.image || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800';

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <ChevronLeft size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurant View</Text>
        <TouchableOpacity style={styles.headerButton}>
          <View style={styles.gridIcon}>
            <View style={styles.gridDot} />
            <View style={styles.gridDot} />
            <View style={styles.gridDot} />
            <View style={styles.gridDot} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Food Card */}
        <View style={styles.heroCard}>
          <Image
            source={{ uri: foodImage }}
            style={styles.heroImage}
          />
          <View style={styles.heroInfo}>
            <Text style={styles.foodName}>{foodName}</Text>
            <Text style={styles.restaurantName}>{restaurant}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Star size={20} color="#FFB800" fill="#FFB800" />
                <Text style={styles.statText}>{rating}</Text>
              </View>
              <View style={styles.statItem}>
                <Truck size={20} color="#7D7575" />
                <Text style={styles.statText}>Free</Text>
              </View>
              <View style={styles.statItem}>
                <Clock size={20} color="#7D7575" />
                <Text style={styles.statText}>20 min</Text>
              </View>
              <View style={styles.statItem}>
                <DollarSign size={20} color="#7D7575" />
                <Text style={styles.statText}>2</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <View style={styles.divider} />
        </View>

        {/* Ingredients Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingridents</Text>
          <View style={styles.ingredientsRow}>
            {INGREDIENTS.map((item) => (
              <View key={item.id + item.name} style={styles.ingredientItem}>
                <View style={styles.ingredientCircle}>
                  <Text style={styles.ingredientEmoji}>{item.emoji}</Text>
                </View>
                <Text style={styles.ingredientName}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quantities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantities</Text>
          <View style={styles.quantityRow}>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                <Minus size={16} color={Colors.black} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                <Plus size={16} color={Colors.black} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          style={[
            styles.addToCartButton,
            quantity > 0 && styles.addToCartButtonActive,
          ]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Cart' as never)}
        >
          <Text
            style={[
              styles.addToCartText,
              quantity > 0 && styles.addToCartTextActive,
            ]}
          >
            Add to cart
          </Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
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
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  gridIcon: {
    width: 16,
    height: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  gridDot: {
    width: 6,
    height: 6,
    borderRadius: 1.5,
    backgroundColor: Colors.black,
    margin: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  /* Hero Card */
  heroCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#FAFAFA',
    borderRadius: 33,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heroImage: {
    width: '100%',
    height: 196,
    resizeMode: 'cover',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heroInfo: {
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 14,
    color: '#BFB5B5',
    fontWeight: '500',
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
  },

  /* Section */
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
    marginBottom: 10,
  },

  /* Description */
  descriptionText: {
    fontSize: 11,
    fontWeight: '300',
    color: '#7D7575',
    lineHeight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 16,
    marginHorizontal: 29,
  },

  /* Ingredients */
  ingredientsRow: {
    flexDirection: 'row',
    gap: 35,
    marginTop: 4,
  },
  ingredientItem: {
    alignItems: 'center',
  },
  ingredientCircle: {
    width: 65,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  ingredientEmoji: {
    fontSize: 18,
  },
  ingredientName: {
    fontSize: 10,
    fontWeight: '300',
    color: Colors.black,
  },

  /* Quantities */
  quantityRow: {
    marginTop: 8,
    alignItems: 'flex-start',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },

  /* Add to Cart */
  addToCartButton: {
    marginHorizontal: 16,
    marginTop: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 51,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButtonActive: {
    backgroundColor: '#4271E2',
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  addToCartTextActive: {
    color: Colors.white,
  },
});

export default FoodDetailScreen;
