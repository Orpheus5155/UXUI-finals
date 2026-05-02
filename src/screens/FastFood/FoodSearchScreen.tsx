import React, { useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity,
  TextInput, ScrollView, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDown, ShoppingBag, Search, Star, PlusCircle } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const RECENT_SEARCHES = ['Burger', 'Chicken', 'Pizza'];

const SUGGESTED_RESTAURANTS = [
  { id: '1', name: 'Paris restaurant', rating: '4.9' },
  { id: '2', name: 'Paris restaurant', rating: '4.9' },
  { id: '3', name: 'Paris restaurant', rating: '4.9' },
];

const POPULAR_FOODS = [
  { id: '1', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2' },
  { id: '2', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2' },
  { id: '3', name: 'Buffalo Burgers', restaurant: 'Paris Restaurant', price: '$2' },
];

const FoodSearchScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.menuLines}>
            <View style={styles.menuLine} />
            <View style={[styles.menuLine, { width: 16 }]} />
            <View style={styles.menuLine} />
          </View>
          <View style={styles.addressInfo}>
            <Text style={styles.deliverTo}>DELIVER TO</Text>
            <View style={styles.locationRow}>
              <Text style={styles.locationText}>470 Tran Dai Nghia, Da Nang</Text>
              <ChevronDown size={12} color={Colors.black} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.badgeWrapper}>
            <View style={styles.badge}><Text style={styles.badgeText}>2</Text></View>
          </View>
          <View style={styles.cartBg}>
            <ShoppingBag size={18} color={Colors.black} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* Greeting */}
        <Text style={styles.greeting}>
          <Text style={styles.greetingName}>Hi, Romina, </Text>
          <Text style={styles.greetingMorning}>Good Morning {'<3'}</Text>
        </Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Search size={18} color="#AAAAAA" />
          <TextInput
            autoFocus
            style={styles.searchInput}
            placeholder="Search food you crave..."
            placeholderTextColor="#BDBEC5"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        {/* Recent Searches */}
        <Text style={styles.sectionTitle}>Recent searches</Text>
        <View style={styles.recentTagsRow}>
          {RECENT_SEARCHES.map(tag => (
            <TouchableOpacity key={tag} style={styles.recentTag} onPress={() => setQuery(tag)}>
              <Text style={styles.recentTagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* AI Suggested Restaurants */}
        <Text style={styles.sectionTitle}>AI Suggested Restaurant</Text>
        {SUGGESTED_RESTAURANTS.map(r => (
          <TouchableOpacity key={r.id} style={styles.restaurantRow} onPress={() => navigation.navigate('RestaurantDetail' as never)}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400' }}
              style={styles.restaurantThumb}
            />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{r.name}</Text>
              <View style={styles.ratingRow}>
                <Star size={14} color="#FF6B8A" />
                <Text style={styles.ratingText}>{r.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Popular Food */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Popular Food</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll} contentContainerStyle={{ paddingRight: 16 }}>
          {POPULAR_FOODS.map(food => (
            <TouchableOpacity key={food.id} style={styles.foodCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' }}
                style={styles.foodImage}
              />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName} numberOfLines={1}>{food.name}</Text>
                <Text style={styles.foodRestaurant} numberOfLines={1}>{food.restaurant}</Text>
                <View style={styles.foodFooter}>
                  <Text style={styles.foodPrice}>{food.price}</Text>
                  <TouchableOpacity>
                    <PlusCircle size={20} color="#4A8EED" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  menuLines: { marginRight: 12, justifyContent: 'space-between', height: 16 },
  menuLine: { width: 22, height: 2, backgroundColor: Colors.black, marginVertical: 2, borderRadius: 1 },
  addressInfo: {},
  deliverTo: { fontSize: 10, fontWeight: 'bold', color: '#4171E2' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  locationText: { fontSize: 10, color: '#AFB5C3', fontStyle: 'italic' },

  cartButton: { position: 'relative' },
  cartBg: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: '#F6B2B2',
    justifyContent: 'center', alignItems: 'center',
  },
  badgeWrapper: { position: 'absolute', top: -4, right: -4, zIndex: 1 },
  badge: {
    width: 16, height: 16, borderRadius: 8,
    backgroundColor: Colors.black,
    justifyContent: 'center', alignItems: 'center',
  },
  badgeText: { fontSize: 10, color: 'white', fontWeight: 'bold' },

  content: { paddingHorizontal: 16, paddingTop: 16 },

  greeting: { fontSize: 16, marginBottom: 16 },
  greetingName: { color: '#4B7CEE', fontStyle: 'italic' },
  greetingMorning: { color: '#2FA660', fontStyle: 'italic' },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, fontStyle: 'italic', color: Colors.black },

  sectionTitle: { fontSize: 16, fontWeight: '300', color: Colors.black, marginBottom: 12 },

  recentTagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 24 },
  recentTag: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  recentTagText: { fontSize: 14, color: Colors.black },

  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  restaurantThumb: {
    width: 100,
    height: 70,
    borderRadius: 8,
    marginRight: 16,
    resizeMode: 'cover',
  },
  restaurantInfo: { flex: 1 },
  restaurantName: { fontSize: 16, color: Colors.black, marginBottom: 6 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ratingText: { fontSize: 14, color: '#FF6B8A' },

  popularScroll: { marginBottom: 10 },
  foodCard: {
    width: 140,
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  foodInfo: { padding: 8 },
  foodName: { fontSize: 13, fontWeight: 'bold', color: Colors.black, marginBottom: 2 },
  foodRestaurant: { fontSize: 11, color: '#AAAAAA', marginBottom: 6 },
  foodFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  foodPrice: { fontSize: 13, fontWeight: 'bold', color: Colors.black },
});

export default FoodSearchScreen;
