import React, { useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity,
  ScrollView, Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ChevronDown, ShoppingBag, Search, Star, Truck, Clock } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const CATEGORIES = [
  { id: '1', name: 'All', emoji: '🔥', active: true },
  { id: '2', name: 'Milk Tea', emoji: '🥤' },
  { id: '3', name: 'Hot dog', emoji: '🌭' },
  { id: '4', name: 'Chicken', emoji: '🍗' },
  { id: '5', name: 'Pizza', emoji: '🍕' },
  { id: '6', name: 'Burger', emoji: '🍔' },
];

const RESTAURANTS = [
  { id: '1', name: 'Paris Restaurant', tags: 'Burgers - Chicken - Beer - Wings', rating: '4.9', delivery: 'Free', time: '20 min' },
  { id: '2', name: 'Paris Restaurant', tags: 'Burgers - Chicken - Beer - Wings', rating: '4.9', delivery: 'Free', time: '20 min' },
  { id: '3', name: 'Paris Restaurant', tags: 'Burgers - Chicken - Beer - Wings', rating: '4.9', delivery: 'Free', time: '20 min' },
  { id: '4', name: 'Paris Restaurant', tags: 'Burgers - Chicken - Beer - Wings', rating: '4.9', delivery: 'Free', time: '25 min' },
];

const FastFoodScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('1');

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
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart' as never)}
        >
          <View style={styles.badgeWrapper}>
            <View style={styles.badge}><Text style={styles.badgeText}>2</Text></View>
          </View>
          <View style={styles.cartBg}>
            <ShoppingBag size={18} color={Colors.black} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>
          <Text style={styles.greetingName}>Hi, Romina, </Text>
          <Text style={styles.greetingMorning}>Good Morning {'<3'}</Text>
        </Text>

        {/* Search Bar - tappable to open search screen */}
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('FoodSearch' as never)}
          activeOpacity={0.8}
        >
          <Search size={18} color="#AAAAAA" />
          <Text style={[styles.searchInput, { color: '#BDBEC5', fontStyle: 'italic' }]}>Search food you crave...</Text>
        </TouchableOpacity>


        {/* Categories */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>All Categories</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll} contentContainerStyle={{ paddingHorizontal: 4 }}>
          {CATEGORIES.map(cat => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryPill, selectedCategory === cat.id && styles.categoryPillActive]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <View style={styles.categoryIconBg}>
                <Text style={{ fontSize: 16 }}>{cat.emoji}</Text>
              </View>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Restaurants */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Open Restaurants</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>

        {RESTAURANTS.map(r => (
          <TouchableOpacity
            key={r.id}
            style={styles.restaurantCard}
            onPress={() => navigation.navigate('RestaurantDetail' as never)}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' }}
              style={styles.restaurantImage}
            />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{r.name}</Text>
              <Text style={styles.restaurantTags}>{r.tags}</Text>
              <View style={styles.restaurantMeta}>
                <View style={styles.metaItem}>
                  <Star size={14} color="#F5A623" fill="#F5A623" />
                  <Text style={styles.metaText}>{r.rating}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Truck size={14} color={Colors.black} />
                  <Text style={styles.metaText}>{r.delivery}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Clock size={14} color={Colors.black} />
                  <Text style={styles.metaText}>{r.time}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

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

  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '300', color: Colors.black },
  seeAll: { fontSize: 16, color: '#57B3A8', fontWeight: '300' },

  categoryScroll: { marginBottom: 20 },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#88E5FF',
    borderRadius: 69,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    height: 43,
  },
  categoryPillActive: {
    backgroundColor: '#4A8EED',
  },
  categoryIconBg: {
    width: 31, height: 31, borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center', alignItems: 'center',
    marginRight: 8,
  },
  categoryName: { fontSize: 15, color: Colors.black },

  restaurantCard: {
    backgroundColor: '#FAFAFA',
    borderRadius: 33,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  restaurantImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  restaurantInfo: {
    padding: 14,
  },
  restaurantName: { fontSize: 16, fontWeight: '300', color: Colors.black, marginBottom: 4 },
  restaurantTags: { fontSize: 13, color: '#BFB5B5', marginBottom: 10 },
  restaurantMeta: { flexDirection: 'row', gap: 20 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { fontSize: 12, fontWeight: 'bold', color: Colors.black },
});

export default FastFoodScreen;
