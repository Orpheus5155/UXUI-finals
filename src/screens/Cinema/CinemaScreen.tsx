import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Search, MapPin, Star, ChevronLeft, Grid } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const CinemaScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <ChevronLeft size={24} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.brandRow}>
           <View style={styles.brandLogo} />
           <Text style={styles.headerTitle}>SMart Cinema</Text>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          <Grid size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Greeting */}
        <Text style={styles.greetingText}>
          <Text style={styles.greetingHi}>Hi, Romina, </Text>
          <Text style={styles.greetingMorning}>Good Morning {'<3'}</Text>
        </Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Search size={20} color="#BDC0C8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your favorite movie"
            placeholderTextColor="#BDC0C8"
          />
        </View>

        {/* Coming Soon Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Coming Soon</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.movieScroll}
        >
          <MovieCard
            title="Resident Evil - Racoon City"
            date="November 2021"
            image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800"
          />
          <MovieCard
            title="Resident Evil - Racoon City"
            date="November 2021"
            image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800"
          />
        </ScrollView>

        {/* Cinema Near You Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cinema Near You</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cinemaList}>
          <CinemaCard
            name="Lotte Cinema"
            distance="12,2 Kilometers"
            status="Closed 11:30 PM"
            rating="4.8"
            image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400"
          />
          <CinemaCard
            name="CGV Cinema"
            distance="12,2 Kilometers"
            status="Closed 11:30 PM"
            rating="4.8"
            image="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400"
          />
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.exploreButton} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ExploreMovie' as never)}
        >
          <Text style={styles.exploreButtonText}>Go to explore movie</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MovieCard = ({ title, date, image }: any) => (
  <TouchableOpacity style={styles.movieCard}>
    <Image source={{ uri: image }} style={styles.movieImage} />
    <View style={styles.movieInfo}>
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.movieDate}>{date}</Text>
    </View>
  </TouchableOpacity>
);

const CinemaCard = ({ name, distance, status, rating, image }: any) => (
  <TouchableOpacity style={styles.cinemaCard}>
    <Image source={{ uri: image }} style={styles.cinemaImage} />
    <View style={styles.cinemaInfo}>
      <View style={styles.distanceRow}>
        <MapPin size={12} color={Colors.black} />
        <Text style={styles.distanceText}>{distance}</Text>
      </View>
      <Text style={styles.cinemaName}>{name}</Text>
      <Text style={styles.cinemaStatus}>{status}</Text>
      <View style={styles.ratingBadge}>
        <Star size={12} color="#F5A623" fill="#F5A623" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

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
  brandRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
  },
  brandLogo: {
      width: 38,
      height: 38,
      borderRadius: 12,
      backgroundColor: '#4171E2', // Mocking Group 90
  },
  headerTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4171E2',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  greetingText: {
    fontSize: 16,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  greetingHi: {
    color: '#4B7CEE',
  },
  greetingMorning: {
    color: '#2FA660',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: Colors.black,
    fontStyle: 'italic',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  movieScroll: {
    paddingBottom: 24,
    gap: 20,
  },
  movieCard: {
    width: 313,
    height: 229,
    backgroundColor: '#FAFAFA',
    borderRadius: 33,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  movieImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  movieInfo: {
    padding: 12,
    paddingHorizontal: 16,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  movieDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#BFB5B5',
    marginTop: 2,
  },
  cinemaList: {
    gap: 16,
    marginBottom: 30,
  },
  cinemaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  cinemaImage: {
    width: 88,
    height: 88,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },
  cinemaInfo: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: '300',
    color: Colors.black,
  },
  cinemaName: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.black,
  },
  cinemaStatus: {
    fontSize: 10,
    fontWeight: '300',
    color: Colors.black,
    marginTop: 4,
  },
  ratingBadge: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: '300',
    color: Colors.black,
  },
  exploreButton: {
    backgroundColor: '#4171E2',
    height: 50,
    borderRadius: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#4171E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  exploreButtonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default CinemaScreen;
