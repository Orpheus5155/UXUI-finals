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

import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, LayoutGrid, Star, Truck, Clock, Plus } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const CATEGORIES = ['Burger', 'Chicken', 'Pizza', 'Milk tea', 'Beer'];

const POPULAR_FOODS = [
  { id: '1', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: '2', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: '3', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: '4', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
];

const RestaurantDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Burger');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurant View</Text>
        <TouchableOpacity>
          <LayoutGrid size={24} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Restaurant Hero Card */}
        <View style={styles.heroCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroInfo}>
            <Text style={styles.restaurantName}>Paris Restaurant</Text>
            <Text style={styles.restaurantTags}>Burgers - Chicken - Beer - Wings</Text>
            
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Star size={18} color="#FF6B8A" fill="#FF6B8A" />
                <Text style={styles.statText}>4.9</Text>
              </View>
              <View style={styles.statItem}>
                <Truck size={18} color="#F6B2B2" />
                <Text style={styles.statText}>Free</Text>
              </View>
              <View style={styles.statItem}>
                <Clock size={18} color="#F6B2B2" />
                <Text style={styles.statText}>20 min</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}
        >
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryTab,
                selectedCategory === category && styles.categoryTabActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Food Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Food</Text>
        </View>

        <View style={styles.foodGrid}>
          {POPULAR_FOODS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.foodCard}
              onPress={() => navigation.navigate('FoodDetail' as never, {
                name: item.name,
                restaurant: item.restaurant,
                price: item.price,
                image: item.image,
                rating: '4.9',
              } as never)}
              activeOpacity={0.85}
            >
              <Image source={{ uri: item.image }} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodRestaurant}>{item.restaurant}</Text>
                <View style={styles.foodFooter}>
                  <Text style={styles.foodPrice}>{item.price}</Text>
                  <View style={styles.addButton}>
                    <Plus size={12} color={Colors.black} strokeWidth={3} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#FAFAFA',
    borderRadius: 33,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  heroImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21,
  },
  heroInfo: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.black,
    marginBottom: 4,
  },
  restaurantTags: {
    fontSize: 14,
    color: '#BFB5B5',
    fontWeight: '500',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
  categoryScroll: {
    marginTop: 24,
    maxHeight: 55,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryTab: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 39,
    borderWidth: 1,
    borderColor: '#F0ECEC',
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTabActive: {
    backgroundColor: '#EF1919',
    borderColor: '#EF1919',
  },
  categoryText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '300',
  },
  categoryTextActive: {
    color: Colors.white,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.black,
  },
  foodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  foodCard: {
    width: (width - 44) / 2,
    backgroundColor: '#FEFBFB',
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 6,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  foodInfo: {
    padding: 8,
  },
  foodName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 2,
  },
  foodRestaurant: {
    fontSize: 8,
    color: '#DEDCDC',
    marginBottom: 12,
  },
  foodFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.black,
  },
  addButton: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RestaurantDetailScreen;

